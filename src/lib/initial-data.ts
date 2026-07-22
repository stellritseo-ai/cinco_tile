import type { Lead, Review, ChatSession } from "./leads-store";

// Initial leads pre-seeded
export const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-1",
    name: "Robert Martinez",
    email: "rob.martinez@gmail.com",
    phone: "(210) 555-0192",
    address: "415 Vintage Way, Bulverde, TX 78163",
    projectType: "new-construction",
    description: "Looking to build a custom guest house on our ranch property. Needs to include a master suite, living area, kitchenette, and a covered porch matching the stone aesthetics of the main house.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 285000,
    createdAt: "2026-06-15T09:30:00Z"
  },
  {
    id: "lead-2",
    name: "Lisa Thompson",
    email: "lisa.thompson86@yahoo.com",
    phone: "(210) 555-8831",
    address: "812 Walnut Ave, Seguin, TX 78155",
    projectType: "remodeling",
    description: "Interested in a full kitchen and master bath remodel. Our house was built in 1995 and needs a modern layout, new quartz countertops, custom cabinetry, and walk-in shower expansion.",
    contactTime: "afternoon",
    status: "contacted",
    estimatedValue: 78000,
    createdAt: "2026-06-14T14:15:00Z"
  },
  {
    id: "lead-3",
    name: "David Miller",
    email: "dmiller_sa@outlook.com",
    phone: "(830) 555-4421",
    address: "102 Echo Ridge, New Braunfels, TX 78130",
    projectType: "outdoor-kitchen",
    description: "We want to install a high-end outdoor kitchen next to our pool. Need a built-in grill, under-counter fridge, granite bar seating for 6, and a stone accent column matching our pool coping.",
    contactTime: "evening",
    status: "proposal_sent",
    estimatedValue: 34500,
    createdAt: "2026-06-12T11:00:00Z"
  },
  {
    id: "lead-4",
    name: "Emily Rodriguez",
    email: "emily.rod@gmail.com",
    phone: "(210) 555-7729",
    address: "2209 Canyon Lake Dr, Canyon Lake, TX 78133",
    projectType: "fireplace",
    description: "Would love a custom floor-to-ceiling stone fireplace built in our double-height living room. Needs a rustic cedar mantel and built-in wood storage alcove.",
    contactTime: "afternoon",
    status: "consultation_scheduled",
    estimatedValue: 14500,
    createdAt: "2026-06-11T16:40:00Z"
  },
  {
    id: "lead-5",
    name: "Amanda Taylor",
    email: "amanda.taylor@comcast.net",
    phone: "(210) 555-1284",
    address: "7402 Crown Point, San Antonio, TX 78258",
    projectType: "turf",
    description: "Need artificial turf installed in our backyard (~1,200 sq ft). We have two large dogs and the grass keeps dying. Also want proper sub-base drainage so there's no odors.",
    contactTime: "morning",
    status: "won",
    notes: "Contract signed on June 10. Down payment received. Materials ordered, schedule set for June 22.",
    estimatedValue: 18500,
    createdAt: "2026-06-08T10:10:00Z"
  },
  {
    id: "lead-6",
    name: "James Wilson",
    email: "jwilson_eng@gmail.com",
    phone: "(830) 555-9012",
    address: "1405 Paris St, Castroville, TX 78009",
    projectType: "fencing",
    description: "Need cedar privacy fencing along our half-acre boundary line. About 350 linear feet total, including a 12-foot double gate for mower access.",
    contactTime: "evening",
    status: "lost",
    notes: "Client decided to go with a cheaper, standard chain-link fence instead of premium custom wood fencing.",
    estimatedValue: 9200,
    createdAt: "2026-06-05T15:20:00Z"
  },
  {
    id: "lead-7",
    name: "Michael Brown",
    email: "mbrown.farm@yahoo.com",
    phone: "(830) 555-3312",
    address: "202 Peach Orchard, Fredericksburg, TX 78624",
    projectType: "softscapes",
    description: "Looking for planting design and softscape installation for our front entrance. Want drought-tolerant native Texas plants, landscape beds, mulch, and low-voltage drip irrigation.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 12000,
    createdAt: "2026-06-16T08:45:00Z"
  },
  {
    id: "lead-8",
    name: "Jessica Davis",
    email: "jdavis.law@gmail.com",
    phone: "(210) 555-8810",
    address: "1802 Meadow Trail, Schertz, TX 78154",
    projectType: "patio",
    description: "Requesting a quote for a flagstone patio extension (~600 sq ft) with a cedar pergola overhead to provide shade. Want to connect it seamlessly with our existing back door steps.",
    contactTime: "afternoon",
    status: "proposal_sent",
    estimatedValue: 24000,
    createdAt: "2026-06-13T13:30:00Z"
  },
  {
    id: "lead-9",
    name: "Kevin Thomas",
    email: "kthomas@thomasproperties.com",
    phone: "(210) 555-4040",
    address: "8300 Medical Dr, San Antonio, TX 78229",
    projectType: "commercial",
    description: "Commercial landscaping and hardscaping upgrades for our medical office center. Needs high-durability plants, masonry retaining walls, and custom stone walkways.",
    contactTime: "afternoon",
    status: "consultation_scheduled",
    estimatedValue: 115000,
    createdAt: "2026-06-10T11:50:00Z"
  },
  {
    id: "lead-10",
    name: "Ashley White",
    email: "ashley.white@gmail.com",
    phone: "(830) 555-6677",
    address: "405 Hilltop Dr, Hondo, TX 78861",
    projectType: "hardscapes",
    description: "Need a custom limestone retaining wall (~80 feet long, varying from 2 to 4 feet high) to correct a slope issue in our backyard and create a level lawn area.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 16500,
    createdAt: "2026-06-17T15:10:00Z"
  }
];

// Initial reviews pre-seeded from reviewsPage list
export const INITIAL_REVIEWS: Review[] = [
  {
    id: "review-1",
    title: "Master Bathroom Tile — Absolutely Stunning",
    text: "“Cinco Services did our master bathroom remodel – from framing and plumbing to new bathtub and custom shower tile. Flawless work. Showed up on time, cleaned up every day. Highly recommend.”",
    author: "Lisa M.",
    location: "Houston",
    rating: 5,
    featured: true,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "review-2",
    title: "Full Home Remodeling Project",
    text: "“They handled our entire home remodeling project – including wall removal, interior painting, and beautiful flooring. Professional, fair price, and the quality is stunning.”",
    author: "James R.",
    location: "Katy",
    rating: 5,
    featured: true,
    createdAt: "2026-05-18T14:30:00Z"
  },
  {
    id: "review-3",
    title: "Roof & Exterior Painting — Fast and Honest",
    text: "“The team replaced our roof and did exterior painting. Fast, honest, and detail-oriented. Will use them again for our kitchen remodel.”",
    author: "Carmen T.",
    location: "Sugar Land",
    rating: 5,
    featured: true,
    replyText: "Thank you Carmen! We're so glad everything came out beautifully. Can't wait to work on your kitchen!",
    createdAt: "2026-05-24T08:15:00Z"
  },
  {
    id: "review-4",
    title: "Custom Shower Tile — Exceeded Expectations",
    text: "“I hired Cinco Services for a custom tile shower installation and I couldn’t be happier. The craftsmanship is impeccable—every grout line is perfect. They finished ahead of schedule and left the site spotless. Highly professional team.”",
    author: "Maria G.",
    location: "Houston",
    rating: 5,
    featured: true,
    createdAt: "2026-06-01T11:00:00Z"
  },
  {
    id: "review-5",
    title: "Hardwood Flooring Installation",
    text: "“We had Cinco Services install hardwood floors throughout our home. The team was incredibly professional and the results are beautiful. They were careful with our furniture and cleaned up perfectly every day. Very competitive pricing too.”",
    author: "David & Sarah P.",
    location: "The Woodlands",
    rating: 5,
    featured: true,
    replyText: "David and Sarah, thank you so much! It was a pleasure transforming your home with those beautiful floors.",
    createdAt: "2026-06-05T09:00:00Z"
  },
  {
    id: "review-6",
    title: "Kitchen Backsplash — Perfect Finish",
    text: "“Cinco Services installed a stunning mosaic backsplash in our kitchen. The attention to detail was remarkable. They matched the pattern perfectly and the result is a showpiece. Friendly, punctual crew. Will definitely use again.”",
    author: "Angela W.",
    location: "Pearland",
    rating: 5,
    featured: true,
    createdAt: "2026-06-10T13:00:00Z"
  },
  {
    id: "review-7",
    title: "Complete Bathroom Renovation",
    text: "“From the initial design consultation to the final tile being set, Cinco Services was exceptional. They completely transformed our outdated bathroom into a spa-like retreat. The tile work is gorgeous and everything is perfectly level.”",
    author: "Robert & Linda K.",
    location: "Friendswood",
    rating: 5,
    featured: true,
    replyText: "Thank you Robert and Linda! Creating that spa-like retreat was our favorite part of this project. Enjoy it!",
    createdAt: "2026-06-15T10:30:00Z"
  },
  {
    id: "review-8",
    title: "Outdoor Patio Tile — Gorgeous Results",
    text: "“Had Cinco Services tile our outdoor patio and pool deck area. The porcelain tile they recommended is slip-resistant, beautiful, and looks amazing. The team was knowledgeable and efficient. Great value for the quality delivered.”",
    author: "Michael T.",
    location: "League City",
    rating: 5,
    featured: false,
    createdAt: "2026-06-20T08:00:00Z"
  },
  {
    id: "review-9",
    title: "New Construction Tile Work",
    text: "“We used Cinco Services for all the tile work in our new construction home—floors, three bathrooms, laundry room, and kitchen. Exceptional quality and they worked seamlessly with our builder. Our home looks like a luxury build because of their work.”",
    author: "Jennifer & Carlos M.",
    location: "Cypress",
    rating: 5,
    featured: true,
    createdAt: "2026-06-25T15:00:00Z"
  },
  {
    id: "review-10",
    title: "Commercial Flooring Project",
    text: "“We hired Cinco Services to install commercial-grade tile in our office lobby and break rooms. The project was completed over a weekend so we weren’t disrupted. Professional, efficient, and the quality speaks for itself. Our clients compliment the space constantly.”",
    author: "Pinnacle Business Group",
    location: "Houston",
    rating: 5,
    featured: false,
    replyText: "Thank you for trusting us with your commercial space! We're thrilled the weekend timeline worked perfectly for your business.",
    createdAt: "2026-06-30T11:00:00Z"
  }
];

export const INITIAL_CHATS: ChatSession[] = [
  {
    id: "session-1",
    clientName: "David Miller",
    clientCity: "New Braunfels",
    lastMessage: "Hi Robert, when can you come out to estimate the outdoor kitchen?",
    lastMessageTime: new Date(Date.now() - 3600000 * 2).toISOString(),
    unread: true,
    messages: [
      {
        id: "msg-1",
        sender: "client",
        text: "Hi, I'm interested in an outdoor kitchen for my pool area.",
        timestamp: new Date(Date.now() - 3600000 * 2.2).toISOString()
      },
      {
        id: "msg-2",
        sender: "admin",
        text: "Hi David! I'd love to help. We do complete custom flagstone and granite outdoor kitchens. Do you have a rough size in mind?",
        timestamp: new Date(Date.now() - 3600000 * 2.1).toISOString()
      },
      {
        id: "msg-3",
        sender: "client",
        text: "Yes, about 12 feet long. Hi Robert, when can you come out to estimate the outdoor kitchen?",
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
      }
    ]
  },
  {
    id: "session-2",
    clientName: "Anonymous Visitor",
    clientCity: "Boerne",
    lastMessage: "Sounds good, thanks!",
    lastMessageTime: new Date(Date.now() - 3600000 * 5).toISOString(),
    unread: false,
    messages: [
      {
        id: "msg-4",
        sender: "client",
        text: "Do you serve the Boerne area for turf installations?",
        timestamp: new Date(Date.now() - 3600000 * 5.2).toISOString()
      },
      {
        id: "msg-5",
        sender: "admin",
        text: "Yes we do! We serve Boerne, Comfort, and all surrounding areas. Our artificial turf includes a premium 15-year warranty.",
        timestamp: new Date(Date.now() - 3600000 * 5.1).toISOString()
      },
      {
        id: "msg-6",
        sender: "client",
        text: "Sounds good, thanks!",
        timestamp: new Date(Date.now() - 3600000 * 5).toISOString()
      }
    ]
  }
];
