
import webp from "npm:webp-converter@2.3.3";

webp.grant_permission();

export default async function ImageToWebp(image: Uint8Array, type: 'jpg' | 'png'): Promise<Uint8Array> {
  return await webp.buffer2webpbuffer(image, type, "-q 80", "./image.webp") as Uint8Array;
}

// const result = webp.cwebp("nodejs_logo.jpg","nodejs_logo.webp","-q 80",logging="-v");
// result.then((response: any) => {
//   console.log(response);
// });

const file = await Deno.readFile('./images/a.png');
const bf = await ImageToWebp(file, "png");

Deno.writeFile('./i.webp', bf)