import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

export const generateImageSizes = async ({ req, data }) => {
  const file = req.file
  if (!file) return data

  const originalPath = file.path
  const ext = path.extname(file.originalname)
  const fileName = path.basename(file.filename, ext)
  const outputDir = path.dirname(originalPath)

  const sizes = [
    { name: 'thumb', width: 150 },
    { name: 'medium', width: 500 },
    { name: 'large', width: 1200 },
  ]

  data.sizes = {}

  for (const size of sizes) {
    const outputFileName = `${fileName}-${size.name}.webp`
    const outputPath = path.join(outputDir, outputFileName)

    await sharp(originalPath).resize({ width: size.width }).webp({ quality: 80 }).toFile(outputPath)

    data.sizes[size.name] = `/media/${outputFileName}`
  }

  return data
}
