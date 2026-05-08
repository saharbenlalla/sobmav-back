import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "collections",
    allowed_formats: ["jpg", "png", "jpeg", "jfif", "webp"],
  }),
});

export const upload = multer({ storage });
