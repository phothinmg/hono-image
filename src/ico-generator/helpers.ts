import type { IMagickImage } from "../deps/mod.ts";
import { ImageMagick, MagickFormat, extname } from "../deps/mod.ts";

/**
 * Checks if the file extension of the given file path is supported for image operations.
 *
 * @param {string} fpath - The path of the file to be checked.
 * @return {boolean} Returns `true` if the file extension is supported, `false` otherwise.
 */
function imgType(fpath: string): boolean {
  // Supported image file extensions
  const SUPPORTED_IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"];

  // Get the file extension from the given file path
  const ext = extname(fpath);

  // Check if the file extension is in the list of supported image extensions
  return SUPPORTED_IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Loads image data from a file.
 *
 * @param {string} fpath - The path of the image file.
 * @return {Promise<Uint8Array>} A promise that resolves to the image data as a `Uint8Array`.
 * @throws {Error} If the file extension is not supported.
 */
export async function loadImgData(fpath: string): Promise<Uint8Array> {
  // Check if the file extension is supported
  if (!imgType(fpath)) {
    throw new Error(`Unsupported image type: ${extname(fpath)}`);
  }

  // Read the image file data
  return await Deno.readFile(fpath);
}
export interface GeneratorType {
  data: Uint8Array;
  fpath: string;
  width: number;
  height: number;
  outFormat: string;
}
/**
 * Generates an image file based on the provided data and saves it to the specified file path.
 *
 * @param {GeneratorType} options - An object containing the data, file path, width, height, and output format.
 * @param {Uint8Array} options.data - The image data as a `Uint8Array`.
 * @param {string} options.fpath - The path of the output file.
 * @param {number} options.width - The desired width of the image.
 * @param {number} options.height - The desired height of the image.
 * @param {string} options.outFormat - The output format of the image.
 * @throws {Error} If the output format is not supported.
 * @return {Promise<void>} A promise that resolves when the image file is successfully generated and saved.
 */
export async function generator({
  data,
  fpath,
  width,
  height,
  outFormat,
}: GeneratorType): Promise<void> {
  // Determine the output file format based on the specified output format
  let outFileFormat: MagickFormat;
  if (outFormat === "Ico") {
    outFileFormat = MagickFormat.Ico;
  } else if (outFormat === "Png") {
    outFileFormat = MagickFormat.Png;
  } else {
    throw new Error(`Unsupported output format: ${outFormat}`);
  }

  // Read the image data using ImageMagick and perform transformations
  await ImageMagick.read(data, async (image: IMagickImage) => {
    // Resize the image to the specified width and height
    image.resize(width, height);

    // Write the transformed image to the output file
    await image.write(outFileFormat, async (data: Uint8Array) => {
      await Deno.writeFile(fpath, data);
    });
  });
}
export interface IcoType {
  format: string;
  fpath: string;
  width: number;
  height: number;
}
export type IconTypeArray = Array<IcoType>;
export interface IconOutType {
  icoArray: IconTypeArray;
  outDir: string;
}
/**
 * Generates an array of objects representing the different sizes and formats required for browser icons.
 * @returns {Promise<IcoArrayType>} An array of objects representing the different sizes and formats required for browser icons.
 */
export async function browserIco(): Promise<IconOutType> {
  // Create a temporary directory for storing the output files
  const outDir = await Deno.makeTempDir({
    dir: "./",
    prefix: "honoimage_ico_",
  });

  // Return an array of objects representing the different sizes and formats required for browser icons
  const icoArray = [
    // Favicon
    {
      format: "Ico",
      fpath: `./${outDir}/favicon.ico`,
      width: 16,
      height: 16,
    },
    {
      format: "Png",
      fpath: `./${outDir}/favicon-16x16.png`,
      width: 16,
      height: 16,
    },

    // Android Chrome
    {
      format: "Png",
      fpath: `./${outDir}/android-chrome-192x192.png`,
      width: 192,
      height: 192,
    },

    // Apple Touch Icon
    {
      format: "Png",
      fpath: `./${outDir}/apple-touch-icon.png`,
      width: 180,
      height: 180,
    },

    // Android Chrome (512x512)
    {
      format: "Png",
      fpath: `./${outDir}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
  ];
  return { icoArray, outDir };
}

export const manifest: string = `
{
  "name": "",
  "short_name": "",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}

`;

export const fileText: string = `
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="shortcut icon" type="image/x-icon" sizes="16x16" href=/favicon.ico>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512"  href="/android-chrome-512x512.png">
<link rel="manifest" href="/site.webmanifest">

`;
