import type { IMagickImage } from "../deps/mod.ts";
import { ImageMagick, MagickFormat, extname } from "../deps/mod.ts";
import { initialize } from "../deps/image-magick/init.ts";

export const extArray: Array<{ name: string; ext: string }> = [
  {
    name: "Ico",
    ext: ".ico",
  },
  {
    name: "Jpeg",
    ext: ".jpeg",
  },
  {
    name: "Jpg",
    ext: ".jpg",
  },
  {
    name: "Png",
    ext: ".png",
  },
  {
    name: "WebP",
    ext: ".webp",
  },
];
export type TransformImageType = {
  imagePath: string;
  inputExtension: ".png" | ".jpg" | ".jpeg" | ".webp";
  outputExtension: ".png" | ".jpg" | ".jpeg" | ".webp" | ".ico";
  outputDirectory?: string;
  outputWidth?: number;
  outputHeight?: number;
  outputFileName?: string;
};
/**
 * Transforms an image file to a different format and size.
 *
 * @param imagePath - The path to the image file.
 * @param inputExtension - The extension of the input image file.
 * @param outputExtension - The extension of the output image file.
 * @param outputDirectory - The directory where the transformed image will be saved.
 * @param outputHeight - The height of the transformed image. Defaults to 100.
 * @param outputWidth - The width of the transformed image. Defaults to 200.
 * @returns A Promise that resolves when the transformation is complete.
 */
export async function transformImage({
  imagePath,
  inputExtension,
  outputExtension,
  outputDirectory,
  outputFileName,
  outputHeight = 100,
  outputWidth = 200,
}: TransformImageType) {
  // Initialize ImageMagick
  await initialize();

  // Find the supported extension based on the input extension
  const supportedExtension = extArray.find(
    (extension) => extension.ext === inputExtension
  )?.ext;

  // If the input extension is not supported, log a warning and return
  if (!supportedExtension) {
    console.warn(`${extname(imagePath)} is not supported`);
    return;
  }

  // Get the file name from the image path
  const imageFileName = outputFileName ?? imagePath.split("/").at(-1)!.split(".")[0];
  
  // Get the output format based on the output extension
  const outputFormat = getOutputFormat(outputExtension);

  // Get the output path by combining the output directory, file name, and output extension
  const outputPath = getOutputPath(
    outputDirectory,
    imageFileName,
    outputExtension
  );

  // Read the image file
  const imageData = await Deno.readFile(imagePath);

  // Transform the image
  await ImageMagick.read(imageData, async (image: IMagickImage) => {
    // Resize the image to the specified width and height
    image.resize(outputWidth, outputHeight);

    // Write the transformed image to the output file
    await image.write(outputFormat, (data: Uint8Array) =>
      Deno.writeFile(outputPath, data)
    );
  });
}

/**
 * Returns the MagickFormat enum value based on the output extension.
 * Throws an error if the output extension is not supported.
 *
 * @param {string} outputExtension - The output file extension.
 * @returns {MagickFormat} The MagickFormat enum value.
 * @throws {Error} If the output extension is not supported.
 */
function getOutputFormat(outputExtension: string): MagickFormat {
  switch (outputExtension) {
    case ".ico":
      return MagickFormat.Ico; // Ico format
    case ".jpg":
      return MagickFormat.Jpg; // Jpg format
    case ".jpeg":
      return MagickFormat.Jpeg; // Jpeg format
    case ".png":
      return MagickFormat.Png; // Png format
    case ".webp":
      return MagickFormat.WebP; // WebP format
    default:
      throw new Error(`Unsupported output format: ${outputExtension}`);
  }
}

/**
 * Returns the output path based on the output directory, image file name, and output extension.
 * If the output directory is not provided, the output path is relative to the current directory.
 *
 * @param {string | undefined} outputDirectory - The output directory.
 * @param {string} imageFileName - The name of the image file.
 * @param {string} outputExtension - The output file extension.
 * @returns {string} The output path.
 */
function getOutputPath(
  outputDirectory: string | undefined,
  imageFileName: string,
  outputExtension: string
): string {
  // If the output directory is provided, the output path is relative to the output directory.
  // Otherwise, the output path is relative to the current directory.
  const relativePath = outputDirectory
    ? `${outputDirectory}/${imageFileName}${outputExtension}`
    : `${imageFileName}${outputExtension}`;

  // Construct the absolute output path by prepending it with './'.
  return `./${relativePath}`;
}
