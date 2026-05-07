import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // .jpg .png
    const fileName = Date.now() + ext; // 👈 SIMPLE & SAFE

    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;