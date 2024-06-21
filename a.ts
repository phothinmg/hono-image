// import type { IMagickImage } from "npm:@imagemagick/magick-wasm";
// import { ImageMagick, MagickFormat } from "npm:@imagemagick/magick-wasm";
// import { initialize } from "./src/deps/image-magick/init.ts";

// await initialize();

// const data: Uint8Array = await Deno.readFile("./images/a.png");

// await ImageMagick.read(data, async (img: IMagickImage) => {
//   img.resize(200, 100);

//   await img.write(MagickFormat.Wbmp, (data: Uint8Array) =>
//     Deno.writeFile("image.webp", data)
//   );
// });


