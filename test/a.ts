import { transformImage } from "../src/image-transform/mod.ts";

transformImage({
  imagePath: "./images/a.png",
  inputExtension: ".png",
  outputExtension: ".jpeg",
});
