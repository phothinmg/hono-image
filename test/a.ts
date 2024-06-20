import {
	ImageMagick,
	type IMagickImage,
	initialize,
	MagickFormat,
  } from "https://deno.land/x/imagemagick_deno@0.0.26/mod.ts";

await initialize(); // make sure to initialize first!

const data: Uint8Array = await Deno.readFile("./images/a.png");

await ImageMagick.read(data, async (img: IMagickImage) => {
  img.resize(200, 100);

  await img.write(
    MagickFormat.Ico,
    (data: Uint8Array) => Deno.writeFile("a.ico", data),
  );
});
