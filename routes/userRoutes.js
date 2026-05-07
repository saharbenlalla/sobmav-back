import express from "express";
import { getUsers, updateUserRole } from "../controllers/userController.js";

const router = express.Router();

// récupérer tous les utilisateurs
router.get("/", getUsers);

// modifier le rôle d'un utilisateur
router.put("/:id/role", updateUserRole);

export default router;