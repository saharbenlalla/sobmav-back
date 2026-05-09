import express from "express";

import {
  addCollection,
  getAllCollections,
  getCollectionById,
  deleteCollection,
} from "../controllers/collectionController.js";

import { upload } from "../middlewares/upload.js";

import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ➤ Ajouter collection
router.post("/", protect, adminOnly, upload.single("image"), addCollection);

// ➤ Get all collections
router.get("/", getAllCollections);

// ➤ Get by ID
router.get("/:id", getCollectionById);

// ➤ Delete
router.delete("/:id",protect, adminOnly, deleteCollection);

export default router;
