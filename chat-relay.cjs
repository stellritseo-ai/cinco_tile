// Cinco Tile - Socket.io Chat Relay Server
// Run with: node chat-relay.cjs

const { createServer } = require('http');
const { Server } = require('socket.io');

const PORT = process.env.CHAT_RELAY_PORT || 3001;

const httpServer = createServer((req, res) => {
  // Health check endpoint
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'cinco-chat-relay' }));
    return;
  }
  res.writeHead(404);
  res.end();
});

const io = new Server(httpServer, {
  cors: {
    origin: [
      'http://localhost:5173',
      'http://localhost:8080',
      'http://localhost:8081',
      'http://localhost:3000',
      /\.cincotile\.com$/,
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  },
  pingTimeout: 60000,
  pingInterval: 25000,
});

// Track connected clients
const connectedClients = new Map(); // socketId -> { type: 'admin' | 'visitor', sessionId?, name? }

io.on('connection', (socket) => {
  console.log(`[Relay] Client connected: ${socket.id}`);

  // Admin joins to monitor all rooms
  socket.on('admin-connect', () => {
    connectedClients.set(socket.id, { type: 'admin' });
    socket.join('admin-room');
    console.log(`[Relay] Admin connected: ${socket.id}`);
  });

  // Visitor starts a new chat session
  socket.on('visitor-connect', ({ sessionId, name }) => {
    connectedClients.set(socket.id, { type: 'visitor', sessionId, name });
    socket.join(sessionId);
    console.log(`[Relay] Visitor "${name}" joined session: ${sessionId}`);

    // Notify admin of new visitor
    io.to('admin-room').emit('visitor-joined', {
      sessionId,
      name,
      timestamp: new Date().toISOString(),
    });
  });

  // Admin joins a specific chat room
  socket.on('join-room', (sessionId) => {
    socket.join(sessionId);
    console.log(`[Relay] Admin joined room: ${sessionId}`);
  });

  // New message from visitor or admin
  socket.on('send-message', (msg) => {
    const { sessionId } = msg;
    console.log(`[Relay] Message in session ${sessionId} from ${msg.sender}: "${msg.text}"`);

    // Broadcast to everyone in the room (both visitor and admin)
    io.to(sessionId).emit('receive-message', msg);

    // Also notify admin room if it's from a visitor
    if (msg.sender === 'client') {
      io.to('admin-room').emit('new-visitor-message', {
        ...msg,
        sessionId,
      });
    }
  });

  // Legacy event name for dashboard compatibility
  socket.on('new-message', (msg) => {
    const { sessionId } = msg;
    io.to(sessionId).emit('receive-message', msg);
    if (msg.sender === 'client') {
      io.to('admin-room').emit('new-visitor-message', msg);
    }
  });

  socket.on('disconnect', () => {
    const client = connectedClients.get(socket.id);
    if (client?.type === 'visitor') {
      io.to('admin-room').emit('visitor-disconnected', {
        sessionId: client.sessionId,
        name: client.name,
      });
    }
    connectedClients.delete(socket.id);
    console.log(`[Relay] Client disconnected: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`\n🚀 Cinco Tile Chat Relay running on http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/health\n`);
});
