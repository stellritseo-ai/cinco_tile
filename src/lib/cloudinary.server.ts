import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary from environment variables ONLY — never hardcode credentials
// Set CLOUDINARY_URL in Vercel environment variables dashboard:
// Format: cloudinary://<api_key>:<api_secret>@<cloud_name>
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || (() => { throw new Error("CLOUDINARY_CLOUD_NAME env var is not set"); })(),
  api_key:    process.env.CLOUDINARY_API_KEY    || (() => { throw new Error("CLOUDINARY_API_KEY env var is not set"); })(),
  api_secret: process.env.CLOUDINARY_API_SECRET || (() => { throw new Error("CLOUDINARY_API_SECRET env var is not set"); })(),
  secure: true,
});

/**
 * Uploads a base64 image string to Cloudinary
 * @param base64Image The base64 string of the image (e.g. data:image/jpeg;base64,...)
 * @param folder Optional folder name in Cloudinary
 * @returns The upload result containing url and public_id
 */
export async function uploadToCloudinary(base64Image: string, folder: string = "cinco_gallery") {
  try {
    const isVideo = base64Image.startsWith("data:video/") || base64Image.includes(";video/");
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: folder,
      resource_type: isVideo ? "video" : "auto",
      chunk_size: 6000000
    });
    return result;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload file to Cloudinary");
  }
}

/**
 * Removes an image or video from Cloudinary using its public_id
 * @param publicId The Cloudinary public ID of the asset
 */
export async function removeFromCloudinary(publicId: string) {
  try {
    let result = await cloudinary.uploader.destroy(publicId, { resource_type: "image", invalidate: true });
    if (result && result.result === "not_found") {
      result = await cloudinary.uploader.destroy(publicId, { resource_type: "video", invalidate: true });
    }
    return result;
  } catch (error) {
    console.error("Cloudinary Destroy Error:", error);
    throw new Error("Failed to remove asset from Cloudinary");
  }
}

export default cloudinary;

// Alias for backward compatibility with existing function imports
export const uploadImage = uploadToCloudinary;
