import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const existingAdmin = await User.findOne({ email: "techsolutionssahar@gmail.com" });

  if (existingAdmin) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("saharpwd", 10);

  const admin = await User.create({
    name: "Sahar",
    email: "techsolutionssahar@gmail.com",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin created:", admin.email);
  process.exit();
};

createAdmin();