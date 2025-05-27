// Replace these with your actual Cloudinary credentials
export const cloudinaryConfig = {
  cloudName: 'YOUR_CLOUD_NAME', // Found in your Cloudinary dashboard
  apiKey: 'YOUR_API_KEY',      // Found in your Cloudinary dashboard
  apiSecret: 'YOUR_API_SECRET' // Found in your Cloudinary dashboard
};

// Base URL for Cloudinary videos
export const getCloudinaryUrl = (publicId: string) => {
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/video/upload/${publicId}`;
};
