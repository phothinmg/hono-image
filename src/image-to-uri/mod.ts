import { extname, encodeBase64 } from "../deps/mod.ts";
import { readFile } from "../util/mod.ts";


const extType: { name: string; type: string }[] = [
  {
    name: ".png",
    type: "image/png",
  },
  {
    name: ".gif",
    type: "image/gif",
  },
  {
    name: ".jpg",
    type: "image/jpeg",
  },
  {
    name: ".jpeg",
    type: "image/jpeg",
  },
  {
    name: ".bm",
    type: "image/bmp",
  },
  {
    name: ".bmp",
    type: "image/bmp",
  },
  {
    name: ".webp",
    type: "image/webp",
  },
  {
    name: ".ico",
    type: "image/x-icon",
  },
  {
    name: ".svg",
    type: "image/svg+xml",
  },
];

/**
 * Convert image file to data URI
 * ---
 * 
 * ***
 * 
 * **Available image types to convert to data:uri**
 *
 * ```json
 * [
    * {
        name: ".png",
        type: "image/png",
      },
      {
        name: ".gif",
        type: "image/gif",
      },
      {
        name: ".jpg",
        type: "image/jpeg",
      },
      {
        name: ".jpeg",
        type: "image/jpeg",
      },
      {
        name: ".bm",
        type: "image/bmp",
      },
      {
        name: ".bmp",
        type: "image/bmp",
      },
      {
        name: ".webp",
        type: "image/webp",
      },
      {
        name: ".ico",
        type: "image/x-icon",
      },
      {
        name: ".svg",
        type: "image/svg+xml",
      }
 * ]
 * 
 * ```
 * 
 * ***
 * 
 * **Example**
 * 
 * 
 * ```ts
 * const dataUri = imageToUri("path_to_image");
 * ```
 */
export default function imageToUri(imageFilePath: string): string {
  // Read the contents of the image file
  const content = readFile(imageFilePath);

  // Get the file extension of the image file
  const ext = extname(imageFilePath);

  // Find the corresponding MIME type for the file extension
  const ct = extType.find((i) => i.name === ext);

  // Encode the image content to base64 and construct the data:uri
  return `data:${ct?.type};base64,${encodeBase64(content)}`;
}
