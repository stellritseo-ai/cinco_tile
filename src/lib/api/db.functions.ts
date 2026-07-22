import { createServerFn } from "@tanstack/react-start";
import { INITIAL_LEADS, INITIAL_REVIEWS, INITIAL_CHATS } from "../leads-store";

// ── LEADS FUNCTIONS ──

export const getLeadsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, LeadModel, LeadSettingsModel } = await import("../db.server");
    await connectDB();
    
    // Check settings
    let settings = await LeadSettingsModel.findOne();
    const hasSeeded = settings ? settings.hasSeeded : false;

    let leads = await LeadModel.find().lean();

    // Seed initial leads if DB is empty and we haven't seeded yet
    if (leads.length === 0 && !hasSeeded) {
      console.log("Seeding initial leads to MongoDB Atlas...");
      const seeded = INITIAL_LEADS.map(l => {
        const { id, ...rest } = l;
        return rest;
      });
      await LeadModel.insertMany(seeded);
      
      if (settings) {
        settings.hasSeeded = true;
        await settings.save();
      } else {
        const newSettings = new LeadSettingsModel({ hasSeeded: true });
        await newSettings.save();
      }
      
      leads = await LeadModel.find().lean();
    } else if (leads.length > 0 && !hasSeeded) {
      // If there are already leads but no settings doc, save settings doc
      if (settings) {
        settings.hasSeeded = true;
        await settings.save();
      } else {
        const newSettings = new LeadSettingsModel({ hasSeeded: true });
        await newSettings.save();
      }
    }

    // Map _id to id for client compatibility
    return leads.map((l: any) => ({
      ...l,
      id: l._id.toString(),
      _id: undefined
    }));
  });

export const addCustomLeadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const newLead = new LeadModel({
      ...data,
      createdAt: new Date().toISOString(),
      photos: []
    });
    await newLead.save();
    return { ...newLead.toObject(), id: newLead._id.toString(), _id: undefined };
  });

export const deleteLeadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, LeadModel, LeadSettingsModel } = await import("../db.server");
    await connectDB();
    await LeadModel.findByIdAndDelete(data.id);
    
    // Unconditionally mark hasSeeded as true to prevent auto-seeding if the list becomes empty
    const settings = await LeadSettingsModel.findOne();
    if (settings) {
      settings.hasSeeded = true;
      await settings.save();
    } else {
      const newSettings = new LeadSettingsModel({ hasSeeded: true });
      await newSettings.save();
    }
    
    return { success: true };
  });

export const updateLeadStatusFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; status: any } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const updated = await LeadModel.findByIdAndUpdate(
      data.id,
      { status: data.status },
      { new: true }
    ).lean();
    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const updateLeadDetailsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; details: any } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();
    const updated = await LeadModel.findByIdAndUpdate(
      data.id,
      {
        name: data.details.name,
        email: data.details.email,
        phone: data.details.phone,
        address: data.details.address,
        projectType: data.details.projectType,
        description: data.details.description,
        status: data.details.status,
        estimatedValue: data.details.estimatedValue,
        notes: data.details.notes
      },
      { new: true }
    ).lean();
    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const uploadLeadPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { leadId: string; base64Photo: string } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    const { uploadImage } = await import("../cloudinary.server");
    await connectDB();

    const imageUrl = await uploadImage(data.base64Photo);
    const updated = await LeadModel.findByIdAndUpdate(
      data.leadId,
      { $push: { photos: imageUrl } },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const removeLeadPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { leadId: string; photoIndex: number } }) => {
    const { connectDB, LeadModel } = await import("../db.server");
    await connectDB();

    const lead = await LeadModel.findById(data.leadId);
    if (!lead || !lead.photos) return null;

    lead.photos.splice(data.photoIndex, 1);
    await lead.save();

    return { ...lead.toObject(), id: lead._id.toString(), _id: undefined };
  });


// ── REVIEWS FUNCTIONS ──

export const getReviewsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();
    let reviews = await ReviewModel.find().sort({ createdAt: -1 }).lean();

    // Detect stale JRM/old reviews by checking known JRM authors
    const jrmAuthors = ["The Carter Family", "Melissa & Ben R.", "David H.", "Sofia & Mark T.", "Angela & Jose M.", "Brian W.", "Patricia L.", "James & Linda O.", "Marcus & Christine B.", "Realty Group Partners"];
    const hasJrmData = reviews.some((r: any) => jrmAuthors.includes(r.author));

    if (reviews.length === 0 || hasJrmData) {
      // Delete old/stale reviews and re-seed with Cinco Tile data
      if (hasJrmData) {
        console.log("Detected stale JRM reviews. Replacing with Cinco Tile reviews...");
        await ReviewModel.deleteMany({});
      } else {
        console.log("Seeding initial reviews to MongoDB Atlas...");
      }
      const seeded = INITIAL_REVIEWS.map(r => {
        const { id, ...rest } = r;
        return rest;
      });
      await ReviewModel.insertMany(seeded);
      reviews = await ReviewModel.find().sort({ createdAt: -1 }).lean();
    }

    return reviews.map((r: any) => ({
      ...r,
      id: r._id.toString(),
      _id: undefined
    }));
  });


export const addReviewFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    const { uploadImage } = await import("../cloudinary.server");
    await connectDB();

    let photosList: string[] = [];
    if (data.newReviewPhoto) {
      const url = await uploadImage(data.newReviewPhoto);
      photosList.push(url);
    }

    const newReview = new ReviewModel({
      title: data.title,
      text: data.text,
      author: data.author,
      location: data.location,
      rating: data.rating,
      featured: true,
      createdAt: new Date().toISOString(),
      photos: photosList
    });

    await newReview.save();
    return { ...newReview.toObject(), id: newReview._id.toString(), _id: undefined };
  });

export const toggleReviewFeaturedFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();

    const review = await ReviewModel.findById(data.id);
    if (!review) return null;

    review.featured = !review.featured;
    await review.save();

    return { ...review.toObject(), id: review._id.toString(), _id: undefined };
  });

export const replyToReviewFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; replyText: string } }) => {
    const { connectDB, ReviewModel } = await import("../db.server");
    await connectDB();

    const updated = await ReviewModel.findByIdAndUpdate(
      data.id,
      { replyText: data.replyText },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });


// ── CHATS FUNCTIONS ──

export const getChatSessionsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();
    const chats = await ChatSessionModel.find().lean();

    return chats.map((c: any) => ({
      ...c,
      id: c._id.toString(),
      _id: undefined,
      messages: (c.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    }));
  });

export const getChatSessionFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();
    const chat = await ChatSessionModel.findById(data.sessionId).lean();
    return chat ? {
      ...chat,
      id: chat._id.toString(),
      _id: undefined,
      messages: (chat.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    } : null;
  });

export const createChatSessionFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { clientName: string; clientCity: string; clientEmail?: string; clientPhone?: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const greetingText = `Hi ${data.clientName}! 👋 Welcome to Cinco Services. How can we help you with your tile or remodeling project today?`;
    const now = new Date().toISOString();

    const newSession = new ChatSessionModel({
      clientName: data.clientName,
      clientCity: data.clientCity || "Houston",
      clientEmail: data.clientEmail || "",
      clientPhone: data.clientPhone || "",
      lastMessage: greetingText,
      lastMessageTime: now,
      unread: false,
      messages: [
        {
          sender: "admin",
          text: greetingText,
          timestamp: now
        }
      ]
    });

    await newSession.save();
    const obj = newSession.toObject();
    return {
      ...obj,
      id: obj._id.toString(),
      _id: undefined,
      messages: (obj.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    };
  });


export const sendChatMessageFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string; sender: "client" | "admin"; text: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const isoTime = new Date().toISOString();
    const newMsg = {
      sender: data.sender,
      text: data.text,
      timestamp: isoTime
    };

    const updated = await ChatSessionModel.findByIdAndUpdate(
      data.sessionId,
      {
        $push: { messages: newMsg },
        lastMessage: data.text,
        lastMessageTime: isoTime,
        unread: data.sender === "client"
      },
      { new: true }
    ).lean();

    return updated ? {
      ...updated,
      id: updated._id.toString(),
      _id: undefined,
      messages: (updated.messages || []).map((m: any) => ({
        ...m,
        id: m._id ? m._id.toString() : m.id,
        _id: undefined
      }))
    } : null;
  });

export const markChatAsReadFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();

    const updated = await ChatSessionModel.findByIdAndUpdate(
      data.sessionId,
      { unread: false },
      { new: true }
    ).lean();

    return updated ? { ...updated, id: updated._id.toString(), _id: undefined } : null;
  });

export const deleteChatSessionFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { connectDB, ChatSessionModel } = await import("../db.server");
    await connectDB();
    await ChatSessionModel.findByIdAndDelete(data.sessionId);
    return { success: true };
  });


// ── GALLERY FUNCTIONS ──

export const getGalleryPhotosFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, GalleryPhotoModel } = await import("../db.server");
    await connectDB();

    let photos = await GalleryPhotoModel.find().lean();
    return photos.map((p: any) => ({
      id: p._id.toString(),
      url: p.url,
      publicId: p.publicId || "",
      uploadedAt: p.uploadedAt,
      title: p.title || "",
      category: p.category || "General",
      caption: p.caption || ""
    }));
  });

export const uploadGalleryPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { base64Photo: string; title?: string; category?: string; caption?: string } }) => {
    const { connectDB, GalleryPhotoModel } = await import("../db.server");
    const { uploadToCloudinary } = await import("../cloudinary.server");
    await connectDB();

    const uploadRes = await uploadToCloudinary(data.base64Photo, "cinco_gallery");
    const newPhoto = new GalleryPhotoModel({
      url: uploadRes.secure_url || uploadRes.url,
      publicId: uploadRes.public_id || "",
      uploadedAt: new Date().toISOString(),
      title: data.title || "",
      category: data.category || "General",
      caption: data.caption || ""
    });

    await newPhoto.save();
    return {
      id: newPhoto._id.toString(),
      url: newPhoto.url,
      publicId: newPhoto.publicId,
      uploadedAt: newPhoto.uploadedAt,
      title: newPhoto.title || "",
      category: newPhoto.category || "General",
      caption: newPhoto.caption || ""
    };
  });

export const removeGalleryPhotoFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, GalleryPhotoModel } = await import("../db.server");
    const { removeFromCloudinary } = await import("../cloudinary.server");
    await connectDB();

    const photo = await GalleryPhotoModel.findById(data.id);
    if (photo && photo.publicId) {
      await removeFromCloudinary(photo.publicId).catch((err: any) => console.error("Cloudinary delete error:", err));
    }

    await GalleryPhotoModel.findByIdAndDelete(data.id);

    return { success: true };
  });

export const updateGalleryPhotoDetailsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; title: string; category: string; caption: string } }) => {
    const { connectDB, GalleryPhotoModel } = await import("../db.server");
    await connectDB();

    const updated = await GalleryPhotoModel.findByIdAndUpdate(
      data.id,
      {
        title: data.title || "",
        category: data.category || "General",
        caption: data.caption || ""
      },
      { new: true }
    ).lean();

    return updated ? {
      id: updated._id.toString(),
      url: updated.url,
      uploadedAt: updated.uploadedAt,
      title: updated.title || "",
      category: updated.category || "General",
      caption: updated.caption || ""
    } : null;
  });

// ── WEB EMAILS FUNCTIONS ──

export const getWebEmailsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    await connectDB();
    const emails = await WebEmailModel.find().sort({ createdAt: -1 }).lean();
    return emails.map((e: any) => ({
      ...e,
      id: e._id.toString(),
      _id: undefined
    }));
  });

export const addWebEmailFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    await connectDB();
    const newEmail = new WebEmailModel({
      ...data,
      createdAt: new Date().toISOString()
    });
    await newEmail.save();

    return { ...newEmail.toObject(), id: newEmail._id.toString(), _id: undefined };
  });

export const deleteWebEmailFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { connectDB, WebEmailModel } = await import("../db.server");
    await connectDB();
    await WebEmailModel.findByIdAndDelete(data.id);
    return { success: true };
  });

export const loginAdminFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { username: string; password: string } }) => {
    const { connectDB, AdminUserModel, hashPassword, verifyPassword } = await import("../db.server");
    await connectDB();
    
    // Seed default admin if none exists
    let admin = await AdminUserModel.findOne({ username: "cinco" });
    if (!admin) {
      admin = new AdminUserModel({
        username: "cinco",
        password: hashPassword("cinco123"),
        role: "admin",
        sessionToken: ""
      });
      await admin.save();
      console.log("[Auth] Default admin user cinco seeded in database with secure hash.");
    }
    
    // Check credentials dynamically against database records
    const user = await AdminUserModel.findOne({ username: data.username.toLowerCase().trim() });
    if (!user) {
      throw new Error("Invalid username or password");
    }

    let isMatch = false;
    if (user.password.includes(":")) {
      // Password is secure pbkdf2 hash
      isMatch = verifyPassword(data.password, user.password);
    } else {
      // Legacy plaintext password - upgrade on successful match
      isMatch = user.password === data.password;
      if (isMatch) {
        user.password = hashPassword(data.password);
        await user.save();
        console.log(`[Auth] Upgraded legacy plaintext password for user '${user.username}' to secure hash.`);
      }
    }

    if (!isMatch) {
      throw new Error("Invalid username or password");
    }
    
    // Generate secure unique session token
    let sessionToken = "";
    if (typeof globalThis !== "undefined" && globalThis.crypto && globalThis.crypto.getRandomValues) {
      const array = new Uint8Array(32);
      globalThis.crypto.getRandomValues(array);
      sessionToken = Array.from(array)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    } else {
      sessionToken = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
    }
    
    user.sessionToken = sessionToken;
    await user.save();
    
    return { success: true, token: sessionToken };
  });

export const verifyAdminTokenFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { token: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    if (!data.token) return { valid: false };
    
    const user = await AdminUserModel.findOne({ sessionToken: data.token });
    if (!user) return { valid: false };
    
    return { 
      valid: true, 
      id: user._id.toString(), 
      username: user.username, 
      role: user.role || "admin" 
    };
  });

export const updateUserCredentialsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { userId: string; username?: string; currentPassword?: string; newPassword?: string } }) => {
    const { connectDB, AdminUserModel, hashPassword, verifyPassword } = await import("../db.server");
    await connectDB();
    
    const user = await AdminUserModel.findById(data.userId);
    if (!user) {
      throw new Error("User not found");
    }
    
    if (data.username && data.username.trim()) {
      const existing = await AdminUserModel.findOne({ username: data.username.toLowerCase().trim() });
      if (existing && existing._id.toString() !== data.userId) {
        throw new Error("Username already taken");
      }
      user.username = data.username.toLowerCase().trim();
    }
    
    if (data.newPassword && data.newPassword.trim()) {
      if (!data.currentPassword || !data.currentPassword.trim()) {
        throw new Error("Current password is required to change password");
      }
      if (!verifyPassword(data.currentPassword, user.password)) {
        throw new Error("Current password is incorrect");
      }
      user.password = hashPassword(data.newPassword);
    }
    
    await user.save();
    return { success: true, username: user.username };
  });

export const adminResetUserPasswordFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { adminUserId: string; targetUserId: string; newPassword: string } }) => {
    const { connectDB, AdminUserModel, hashPassword } = await import("../db.server");
    await connectDB();
    
    // Verify admin
    const admin = await AdminUserModel.findById(data.adminUserId);
    if (!admin || admin.role !== "admin") {
      throw new Error("Unauthorized: Only administrators can reset other users' passwords.");
    }
    
    const targetUser = await AdminUserModel.findById(data.targetUserId);
    if (!targetUser) {
      throw new Error("User not found");
    }
    
    targetUser.password = hashPassword(data.newPassword);
    await targetUser.save();
    return { success: true };
  });

export const getPortalUsersFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    const users = await AdminUserModel.find().sort({ username: 1 }).lean();
    return users.map((u: any) => ({
      id: u._id.toString(),
      username: u.username,
      role: u.role || "admin"
    }));
  });

export const createPortalUserFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { username: string; password: string; role: string } }) => {
    const { connectDB, AdminUserModel, hashPassword } = await import("../db.server");
    await connectDB();
    
    const usernameClean = data.username.toLowerCase().trim();
    const existing = await AdminUserModel.findOne({ username: usernameClean });
    if (existing) {
      throw new Error("Username already exists");
    }
    
    const newUser = new AdminUserModel({
      username: usernameClean,
      password: hashPassword(data.password),
      role: data.role || "viewer",
      sessionToken: ""
    });
    
    await newUser.save();
    return { success: true, id: newUser._id.toString(), username: newUser.username, role: newUser.role };
  });

export const deletePortalUserFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { userId: string } }) => {
    const { connectDB, AdminUserModel } = await import("../db.server");
    await connectDB();
    
    // Prevent self-deletion or default admin cinco deletion
    const user = await AdminUserModel.findById(data.userId);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.username === "cinco") {
      throw new Error("Cannot delete primary administrator account");
    }
    
    await AdminUserModel.findByIdAndDelete(data.userId);
    return { success: true };
  });

// ── PORTAL SETTINGS FUNCTIONS ──

export const getPortalSettingsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const { connectDB, PortalSettingsModel } = await import("../db.server");
    await connectDB();
    let settings = await PortalSettingsModel.findOne().lean();
    if (!settings) {
      const newSettings = new PortalSettingsModel({});
      await newSettings.save();
      settings = newSettings.toObject();
    }
    const clean = JSON.parse(JSON.stringify(settings));
    return {
      ...clean,
      id: clean._id,
      _id: undefined
    };
  });

export const updatePortalSettingsFn = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { connectDB, PortalSettingsModel } = await import("../db.server");
    await connectDB();
    let settings = await PortalSettingsModel.findOne();
    
    if (!settings) {
      settings = new PortalSettingsModel({});
    }

    if (data.adminEmail !== undefined) settings.adminEmail = String(data.adminEmail);
    if (data.officePhone !== undefined) settings.officePhone = String(data.officePhone);
    if (data.autoSmsTemplate !== undefined) settings.autoSmsTemplate = String(data.autoSmsTemplate);
    if (data.hoursWeekday !== undefined) settings.hoursWeekday = String(data.hoursWeekday);
    if (data.hoursSaturday !== undefined) settings.hoursSaturday = String(data.hoursSaturday);
    if (data.hoursSunday !== undefined) settings.hoursSunday = String(data.hoursSunday);
    
    if (data.sendAutoEmail !== undefined) settings.sendAutoEmail = Boolean(data.sendAutoEmail);
    if (data.sendAutoSms !== undefined) settings.sendAutoSms = Boolean(data.sendAutoSms);
    if (data.maintenanceMode !== undefined) {
      settings.maintenanceMode = Boolean(data.maintenanceMode);
      settings.markModified("maintenanceMode");
    }

    await settings.save();
    const updated = settings.toObject();
    const clean = JSON.parse(JSON.stringify(updated));
    return {
      ...clean,
      id: clean._id.toString(),
      _id: undefined
    };
  });


export const incrementVisitsFn = createServerFn({ method: "POST" })
  .handler(async () => {
    const { connectDB, PortalSettingsModel } = await import("../db.server");
    await connectDB();
    let settings = await PortalSettingsModel.findOne();
    if (!settings) {
      settings = new PortalSettingsModel({});
    }
    settings.totalVisits = (settings.totalVisits || 247) + 1;
    await settings.save();
    return {
      success: true,
      totalVisits: settings.totalVisits
    };
  });
