// Copyright 2024 the @phothinmg. All rights reserved. Apache License, Version 2.0.

import {
  loadImgData,
  generator,
  browserIco,
  manifest,
  fileText,
} from "./helpers.ts";
import type { IcoType, IconOutType } from "./helpers.ts";
import { initialize } from "../deps/image-magick/init.ts";

/**
 * Generate ico file with images of different sizes
 * @param {string} filePath - Path of the image file
 * @return {Promise<void>} - Promise that resolves when the generation is complete
 */
export async function icoGenerator(filePath: string): Promise<void> {
  await initialize();

  // Load image data
  const fileData: Uint8Array = await loadImgData(filePath);

  // Generate browser-ico object
  const fileArray: IconOutType = await browserIco();

  // Generate the ico files with different sizes
  fileArray.icoArray.forEach(async (file: IcoType) => {
    await generator({
      data: fileData,
      fpath: file.fpath,
      width: file.width,
      height: file.height,
      outFormat: file.format,
    });
  });

  // Generate site.webmanifest for the icons
  const mfPath: string = `./${fileArray.outDir}/site.webmanifest`;

  // Example text file
  const textPath: string = `./${fileArray.outDir}/example.txt`;

  // Write the manifest file
  await Deno.writeTextFile(mfPath, manifest);

  // Write the example text file
  await Deno.writeTextFile(textPath, fileText);
}
