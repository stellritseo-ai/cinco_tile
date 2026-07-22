export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string;
  description: string;
  contactTime: string;
  status: "new" | "contacted" | "consultation_scheduled" | "proposal_sent" | "won" | "lost";
  estimatedValue: number;
  notes?: string;
  createdAt: string;
  photos?: string[];
}

export interface Review {
  id: string;
  title: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  featured: boolean;
  replyText?: string;
  createdAt: string;
  photos?: string[];
}

export interface WebEmail {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
  createdAt: string;
}


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
    text: "\u201cCinco Services did our master bathroom remodel – from framing and plumbing to new bathtub and custom shower tile. Flawless work. Showed up on time, cleaned up every day. Highly recommend.\u201d",
    author: "Lisa M.",
    location: "Houston",
    rating: 5,
    featured: true,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "review-2",
    title: "Full Home Remodeling Project",
    text: "\u201cThey handled our entire home remodeling project \u2013 including wall removal, interior painting, and beautiful flooring. Professional, fair price, and the quality is stunning.\u201d",
    author: "James R.",
    location: "Katy",
    rating: 5,
    featured: true,
    createdAt: "2026-05-18T14:30:00Z"
  },
  {
    id: "review-3",
    title: "Roof & Exterior Painting — Fast and Honest",
    text: "\u201cThe team replaced our roof and did exterior painting. Fast, honest, and detail-oriented. Will use them again for our kitchen remodel.\u201d",
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
    text: "\u201cI hired Cinco Services for a custom tile shower installation and I couldn\u2019t be happier. The craftsmanship is impeccable\u2014every grout line is perfect. They finished ahead of schedule and left the site spotless. Highly professional team.\u201d",
    author: "Maria G.",
    location: "Houston",
    rating: 5,
    featured: true,
    createdAt: "2026-06-01T11:00:00Z"
  },
  {
    id: "review-5",
    title: "Hardwood Flooring Installation",
    text: "\u201cWe had Cinco Services install hardwood floors throughout our home. The team was incredibly professional and the results are beautiful. They were careful with our furniture and cleaned up perfectly every day. Very competitive pricing too.\u201d",
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
    text: "\u201cCinco Services installed a stunning mosaic backsplash in our kitchen. The attention to detail was remarkable. They matched the pattern perfectly and the result is a showpiece. Friendly, punctual crew. Will definitely use again.\u201d",
    author: "Angela W.",
    location: "Pearland",
    rating: 5,
    featured: true,
    createdAt: "2026-06-10T13:00:00Z"
  },
  {
    id: "review-7",
    title: "Complete Bathroom Renovation",
    text: "\u201cFrom the initial design consultation to the final tile being set, Cinco Services was exceptional. They completely transformed our outdated bathroom into a spa-like retreat. The tile work is gorgeous and everything is perfectly level.\u201d",
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
    text: "\u201cHad Cinco Services tile our outdoor patio and pool deck area. The porcelain tile they recommended is slip-resistant, beautiful, and looks amazing. The team was knowledgeable and efficient. Great value for the quality delivered.\u201d",
    author: "Michael T.",
    location: "League City",
    rating: 5,
    featured: false,
    createdAt: "2026-06-20T08:00:00Z"
  },
  {
    id: "review-9",
    title: "New Construction Tile Work",
    text: "\u201cWe used Cinco Services for all the tile work in our new construction home\u2014floors, three bathrooms, laundry room, and kitchen. Exceptional quality and they worked seamlessly with our builder. Our home looks like a luxury build because of their work.\u201d",
    author: "Jennifer & Carlos M.",
    location: "Cypress",
    rating: 5,
    featured: true,
    createdAt: "2026-06-25T15:00:00Z"
  },
  {
    id: "review-10",
    title: "Commercial Flooring Project",
    text: "\u201cWe hired Cinco Services to install commercial-grade tile in our office lobby and break rooms. The project was completed over a weekend so we weren\u2019t disrupted. Professional, efficient, and the quality speaks for itself. Our clients compliment the space constantly.\u201d",
    author: "Pinnacle Business Group",
    location: "Houston",
    rating: 5,
    featured: false,
    replyText: "Thank you for trusting us with your commercial space! We're thrilled the weekend timeline worked perfectly for your business.",
    createdAt: "2026-06-30T11:00:00Z"
  }
];

// Helper to initialize and retrieve data
import {

  getLeadsFn,
  addCustomLeadFn,
  deleteLeadFn,
  updateLeadStatusFn,
  updateLeadDetailsFn,
  uploadLeadPhotoFn,
  removeLeadPhotoFn,
  getReviewsFn,
  addReviewFn,
  toggleReviewFeaturedFn,
  replyToReviewFn,
  getChatSessionsFn,
  getChatSessionFn,
  createChatSessionFn,
  sendChatMessageFn,
  markChatAsReadFn,
  deleteChatSessionFn,
  getGalleryPhotosFn,
  uploadGalleryPhotoFn,
  removeGalleryPhotoFn,
  updateGalleryPhotoDetailsFn,
  getWebEmailsFn,
  addWebEmailFn,
  deleteWebEmailFn,
  loginAdminFn,
  verifyAdminTokenFn,
  updateUserCredentialsFn,
  adminResetUserPasswordFn,
  getPortalUsersFn,
  createPortalUserFn,
  deletePortalUserFn,
  getPortalSettingsFn,
  updatePortalSettingsFn
} from "./api/db.functions";

export const getLeads = async (): Promise<Lead[]> => {
  return getLeadsFn();
};

export const addLead = async (leadData: Omit<Lead, "id" | "status" | "estimatedValue" | "createdAt">): Promise<Lead> => {
  let estimatedValue = 10000;
  switch (leadData.projectType) {
    case "remodeling":
      estimatedValue = 65000;
      break;
    case "new-construction":
      estimatedValue = 250000;
      break;
    case "outdoor-kitchen":
      estimatedValue = 35000;
      break;
    case "fireplace":
      estimatedValue = 12000;
      break;
    case "patio":
      estimatedValue = 18000;
      break;
    case "hardscapes":
      estimatedValue = 15000;
      break;
    case "softscapes":
      estimatedValue = 8500;
      break;
    case "fencing":
      estimatedValue = 7500;
      break;
    case "turf":
      estimatedValue = 12000;
      break;
    case "commercial":
      estimatedValue = 95000;
      break;
  }
  return addCustomLeadFn({
    data: {
      ...leadData,
      status: "new",
      estimatedValue
    }
  });
};

export const addCustomLead = async (lead: Omit<Lead, "id" | "createdAt">): Promise<Lead> => {
  return addCustomLeadFn({ data: lead });
};

export const updateLeadStatus = async (id: string, status: Lead["status"]): Promise<Lead[] | null> => {
  await updateLeadStatusFn({ data: { id, status } });
  return getLeadsFn();
};

export const updateLeadDetails = async (id: string, updates: Partial<Omit<Lead, "id" | "createdAt">>): Promise<Lead[] | null> => {
  await updateLeadDetailsFn({ data: { id, details: updates } });
  return getLeadsFn();
};

export const deleteLead = async (id: string): Promise<Lead[]> => {
  await deleteLeadFn({ data: { id } });
  return getLeadsFn();
};

export const getReviews = async (): Promise<Review[]> => {
  return getReviewsFn();
};

export const addReview = async (reviewData: Omit<Review, "id" | "featured" | "createdAt"> & { newReviewPhoto?: string }): Promise<Review> => {
  return addReviewFn({ data: reviewData });
};

export const toggleReviewFeatured = async (id: string): Promise<Review[]> => {
  await toggleReviewFeaturedFn({ data: { id } });
  return getReviewsFn();
};

export const replyToReview = async (id: string, replyText: string): Promise<Review[]> => {
  await replyToReviewFn({ data: { id, replyText } });
  return getReviewsFn();
};

export const getChatSessions = async (): Promise<ChatSession[]> => {
  return getChatSessionsFn();
};

export const getChatSessionById = async (sessionId: string): Promise<ChatSession | null> => {
  return getChatSessionFn({ data: { sessionId } });
};

export const createChatSession = async (
  clientName: string, 
  clientCity: string = "San Antonio",
  clientEmail?: string,
  clientPhone?: string
): Promise<ChatSession> => {
  return createChatSessionFn({ data: { clientName, clientCity, clientEmail, clientPhone } });
};

export const sendChatMessage = async (sessionId: string, sender: "client" | "admin", text: string): Promise<ChatSession | null> => {
  return sendChatMessageFn({ data: { sessionId, sender, text } });
};

export const markChatAsRead = async (sessionId: string): Promise<ChatSession[]> => {
  await markChatAsReadFn({ data: { sessionId } });
  return getChatSessionsFn();
};

export const deleteChatSession = async (sessionId: string): Promise<ChatSession[]> => {
  await deleteChatSessionFn({ data: { sessionId } });
  return getChatSessionsFn();
};

export const uploadLeadPhoto = async (leadId: string, base64Photo: string): Promise<Lead[]> => {
  await uploadLeadPhotoFn({ data: { leadId, base64Photo } });
  return getLeadsFn();
};

export const removeLeadPhoto = async (leadId: string, photoIndex: number): Promise<Lead[]> => {
  await removeLeadPhotoFn({ data: { leadId, photoIndex } });
  return getLeadsFn();
};

export const uploadReviewPhoto = async (reviewId: string, base64Photo: string): Promise<Review[]> => {
  // Upload review photo via cloudinary then refresh reviews
  try {
    const { uploadReviewPhotoFn } = await import("./api/db.functions");
    await uploadReviewPhotoFn({ data: { reviewId, base64Photo } });
  } catch {
    // If server fn doesn't exist yet, just refresh
  }
  return getReviewsFn();
};

// ── GALLERY PHOTOS FUNCTIONS ──
export interface GalleryPhoto {
  id: string;
  url: string;
  uploadedAt: string;
  title?: string;
  category?: string;
  caption?: string;
}

export const getGalleryPhotos = async (): Promise<GalleryPhoto[]> => {
  return getGalleryPhotosFn();
};

export const uploadGalleryPhoto = async (base64Photo: string, category?: string): Promise<GalleryPhoto[]> => {
  await uploadGalleryPhotoFn({ data: { base64Photo, category } });
  return getGalleryPhotosFn();
};

export const removeGalleryPhoto = async (id: string): Promise<GalleryPhoto[]> => {
  await removeGalleryPhotoFn({ data: { id } });
  return getGalleryPhotosFn();
};

export const updateGalleryPhotoDetails = async (id: string, details: { title: string; category: string; caption: string }): Promise<GalleryPhoto[]> => {
  await updateGalleryPhotoDetailsFn({ data: { id, ...details } });
  return getGalleryPhotosFn();
};

// Analytics calculator helper
export const getAnalyticsData = () => {
  const leads = getLeads(); // Note: This remains synchronous in local usage, if this needs to be async, adjust usage site
  const reviews = getReviews();

  const totalValue = leads.reduce((acc, curr) => curr.status !== "lost" ? acc + curr.estimatedValue : acc, 0);
  const activeCount = leads.filter(l => ["contacted", "consultation_scheduled", "proposal_sent"].includes(l.status)).length;
  
  const wonLeads = leads.filter(l => l.status === "won");
  const lostLeads = leads.filter(l => l.status === "lost");
  const wonValue = wonLeads.reduce((acc, curr) => acc + curr.estimatedValue, 0);
  const totalClosed = wonLeads.length + lostLeads.length;
  const winRate = totalClosed > 0 ? Math.round((wonLeads.length / totalClosed) * 100) : 0;
  
  const averageValue = leads.length > 0 ? Math.round(leads.reduce((acc, curr) => acc + curr.estimatedValue, 0) / leads.length) : 0;

  // 1. Project type distribution
  const typeCounts: Record<string, { count: number; value: number }> = {};
  leads.forEach(l => {
    if (!typeCounts[l.projectType]) {
      typeCounts[l.projectType] = { count: 0, value: 0 };
    }
    typeCounts[l.projectType].count += 1;
    typeCounts[l.projectType].value += l.estimatedValue;
  });

  const projectTypesChart = Object.entries(typeCounts).map(([name, data]) => ({
    name: name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    value: data.count,
    amount: data.value
  }));

  // 2. Status distribution
  const statusLabels: Record<Lead["status"], string> = {
    new: "New Lead",
    contacted: "Contacted",
    consultation_scheduled: "Consultation Scheduled",
    proposal_sent: "Proposal Sent",
    won: "Contract Won",
    lost: "Lost / Closed"
  };

  const statusCounts: Record<string, number> = {
    "New Lead": 0,
    "Contacted": 0,
    "Consultation Scheduled": 0,
    "Proposal Sent": 0,
    "Contract Won": 0,
    "Lost / Closed": 0
  };

  leads.forEach(l => {
    const label = statusLabels[l.status];
    statusCounts[label] = (statusCounts[label] || 0) + 1;
  });

  const statusChart = Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value
  }));

  // 3. Regional distribution (cities)
  const cityCounts: Record<string, number> = {};
  leads.forEach(l => {
    // extract city from address: "..., <City>, TX ..."
    const parts = l.address.split(",");
    let city = "San Antonio";
    if (parts.length >= 2) {
      const cityPart = parts[parts.length - 2].trim();
      city = cityPart;
    }
    cityCounts[city] = (cityCounts[city] || 0) + 1;
  });

  const regionChart = Object.entries(cityCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  // 4. Growth monthly timeline (mocking historical progression based on createdAt)
  // Let's bucket leads by month
  const monthlyData: Record<string, { count: number; value: number }> = {
    "Jan": { count: 4, value: 54000 },
    "Feb": { count: 6, value: 89000 },
    "Mar": { count: 8, value: 145000 },
    "Apr": { count: 9, value: 110000 },
    "May": { count: 12, value: 240000 },
    "Jun": { count: 0, value: 0 } // June leads will be populated dynamically from leads
  };

  leads.forEach(l => {
    const date = new Date(l.createdAt);
    const month = date.toLocaleString("en-US", { month: "short" });
    if (monthlyData[month]) {
      monthlyData[month].count += 1;
      monthlyData[month].value += l.estimatedValue;
    } else {
      // In case date is outside above, initialize
      monthlyData[month] = { count: 1, value: l.estimatedValue };
    }
  });

  const timelineChart = Object.entries(monthlyData).map(([month, data]) => ({
    name: month,
    leads: data.count,
    revenue: data.value
  }));

  return {
    totalValue,
    activeCount,
    winRate,
    wonValue,
    averageValue,
    totalLeads: leads.length,
    projectTypesChart,
    statusChart,
    regionChart,
    timelineChart
  };
};

// ── NEW CHAT DATA TYPES ──
export interface ChatMessage {
  id: string;
  sender: "client" | "admin";
  text: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  clientName: string;
  clientCity: string;
  clientEmail?: string;
  clientPhone?: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: boolean;
  messages: ChatMessage[];
}

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

// Synchronous helpers removed, replaced by async exports above.

export const getWebEmails = async (): Promise<WebEmail[]> => {
  return getWebEmailsFn();
};

export const addWebEmail = async (emailData: Omit<WebEmail, "id" | "createdAt">): Promise<WebEmail> => {
  return addWebEmailFn({ data: emailData });
};

export const deleteWebEmail = async (id: string): Promise<WebEmail[]> => {
  await deleteWebEmailFn({ data: { id } });
  return getWebEmailsFn();
};

export const loginAdmin = async (username: string, password: string): Promise<{ success: boolean; token: string }> => {
  return loginAdminFn({ data: { username, password } });
};

export const verifyAdminToken = async (token: string): Promise<{ valid: boolean; id?: string; username?: string; role?: string }> => {
  return verifyAdminTokenFn({ data: { token } });
};

export interface PortalUser {
  id: string;
  username: string;
  role: string;
}

export const updateUserCredentials = async (userId: string, username?: string, currentPassword?: string, newPassword?: string): Promise<{ success: boolean; username: string }> => {
  return updateUserCredentialsFn({ data: { userId, username, currentPassword, newPassword } });
};

export const adminResetUserPassword = async (adminUserId: string, targetUserId: string, newPassword: string): Promise<{ success: boolean }> => {
  return adminResetUserPasswordFn({ data: { adminUserId, targetUserId, newPassword } });
};

export const getPortalUsers = async (): Promise<PortalUser[]> => {
  return getPortalUsersFn();
};

export const createPortalUser = async (username: string, password: string, role: string): Promise<{ success: boolean; id: string; username: string; role: string }> => {
  return createPortalUserFn({ data: { username, password, role } });
};

export const deletePortalUser = async (userId: string): Promise<{ success: boolean }> => {
  return deletePortalUserFn({ data: { userId } });
};

export interface PortalSettings {
  id?: string;
  adminEmail: string;
  officePhone: string;
  autoSmsTemplate: string;
  sendAutoEmail: boolean;
  sendAutoSms: boolean;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
  maintenanceMode: boolean;
  totalVisits?: number;
}

export const getPortalSettings = async (): Promise<PortalSettings> => {
  return getPortalSettingsFn();
};

export const updatePortalSettings = async (settings: Partial<PortalSettings>): Promise<PortalSettings> => {
  return updatePortalSettingsFn({ data: settings });
};

export const incrementVisits = async (): Promise<{ success: boolean; totalVisits: number }> => {
  return incrementVisitsFn();
};

