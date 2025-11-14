import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Use memory storage to process file before saving
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Resize and save function
const resizeAndSave = async (
  file: Express.Multer.File,
  folder: string,
  width = 300,
  height = 300
) => {
  const outputFolder = path.join('uploads', folder);
  if (!fs.existsSync(outputFolder))
    fs.mkdirSync(outputFolder, { recursive: true });

  const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${file.originalname}`;
  const outputPath = path.join(outputFolder, uniqueFilename);

  await sharp(file.buffer)
    .resize(width, height, { fit: 'cover' }) // resize image
    .toFile(outputPath);

  return `/uploads/${folder}/${uniqueFilename}`;
};

export { upload, resizeAndSave };
