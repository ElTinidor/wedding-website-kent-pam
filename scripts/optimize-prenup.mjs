import { mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDirectory = path.resolve('src/assets/prenup/source')
const outputDirectory = path.resolve('src/assets/prenup')
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

await mkdir(sourceDirectory, { recursive: true })

const files = (await readdir(sourceDirectory)).filter((file) =>
  supportedExtensions.has(path.extname(file).toLowerCase()),
)

if (files.length === 0) {
  console.log('No source photos found in src/assets/prenup/source.')
  process.exit(0)
}

for (const file of files) {
  const sourcePath = path.join(sourceDirectory, file)
  const outputName = `${path.parse(file).name}.webp`
  const outputPath = path.join(outputDirectory, outputName)

  const result = await sharp(sourcePath)
    .rotate()
    .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath)

  console.log(`${file} -> ${outputName} (${Math.round(result.size / 1024)} KB)`)
}
