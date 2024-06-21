// Copyright 2024 the @phothinmg. All rights reserved. Apache License, Version 2.0.

import { extname, encodeBase64 } from "../deps/mod.ts";
import { html } from "../deps/mod.ts";
import type { HtmlEscapedString } from "../deps/mod.ts";

export type ExtType = Array<{ name: string; type: string }>;

/**
 * #### Type definition for `ImageToUri` component.
 * 
 *  1. src : Link to image
 * 
 *  2. height : Height of image , optional , default 100
 * 
 *  3. width : Width of image , optional , default 100
 */
export interface ImageToUriType {
  src: string;
  height?: number;
  width?: number;
}

const extType: ExtType = [
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
export function imageToUri(imageFilePath: string): string {
  // Read the contents of the image file
  const content = Deno.readFileSync(imageFilePath);

  // Get the file extension of the image file
  const ext = extname(imageFilePath);

  // Find the corresponding MIME type for the file extension
  const ct = extType.find((i) => i.name === ext);

  // Encode the image content to base64 and construct the data:uri
  return `data:${ct?.type};base64,${encodeBase64(content)}`;
}

/**
 * A component that renders an image using a data URI.
 * ---
 * 
 * **Available image types can see {@linkcode imageToUri} doc.**
 * 
 * ***
 * 
 * **About**
 * 
 * To solve image routing for such as blog app.
 * 
 * *** 
 * 
 * **Example**
 * 
 * ```tsx
 * const app = new Hono();
 * 
 * app.get("/", (c) => {
  return c.html(<ImageToUri src={"./images/a.png"} height={50} width={150} />);
  });

  export default app;
 * 
 * ```
 * 
 * 
 * ***
 *
 * @param {ImageToUriType} options - An object containing the image source, height, width.
 * @param {string} options.src - The source of the image. Can be a local file path or a remote URL.
 * @param {number} [options.height=100] - The height of the image. Default is 100.
 * @param {number} [options.width=200] - The width of the image. Default is 200.
 * @returns {HtmlEscapedString | Promise<HtmlEscapedString>} - The HTML of the image.
 */
export function ImageToUri({
  src,
  height = 100,
  width = 200,
}: ImageToUriType): HtmlEscapedString | Promise<HtmlEscapedString> {
  // Determine the link to the image source
  let link: string;
  if (src.startsWith("http") || src.startsWith("data")) {
    link = src;
  } else {
    // Convert the local file path to a data URI
    link = imageToUri(src);
  }

  // Return the HTML of the image
  return html`
    <!-- Render the image using the link -->
    <img src=${link} alt="hono-image" height=${height} width=${width} />
  `;
}
