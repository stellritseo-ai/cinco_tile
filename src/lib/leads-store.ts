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

import { INITIAL_LEADS, INITIAL_REVIEWS, INITIAL_CHATS } from "./initial-data";

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
  updatePortalSettingsFn,
  incrementVisitsFn
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

