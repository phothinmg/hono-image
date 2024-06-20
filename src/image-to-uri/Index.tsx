import type { FC } from "../../deps/mod.ts";
import { memo } from "../../deps/mod.ts";
import imageToUri from "./mod.ts";

/**
 * 
 * ***
 * 
 * 
 * Image component for Hono JSX
 * ---
 * 
 * 
 * 
 * ***
 * 
 * Render image as data:uri form local files and from links start with "http" and "data"
 * ---
 * 
 * ***
 * 
 *  **Parameters**
 * 
 * - src : link to image
 * 
 * - height : Height of image / default  100
 * 
 * - width : Width of image / default  200
 * 
 * 
 * ***
 * 
 * **Available image types to convert to data:uri**
 * 
 * **.png  : image/png**
 *      
 * **.jpg  : image/jpeg**
 *     
 * **.jpeg : image/jpeg** 
 *   
 * **.bm   : image/bmp**
 *      
 * **.bmp  : image/bmp**
 *     
 * **.webp : image/webp**  
 *   
 * **.ico  : image/x-ico** 
 *   
 * **.svg  : image/svg+xml** 
 *  
 * ***
 * 
 * **Example**
 * 
 * ```tsx
 * 
    const app = new Hono();

    app.get("/", (c) => {
      return c.html(<HonoImage src={""} />);
    });

    export default app;
 * 
 * ```
 */
const ImageToUri: FC<{
  src: string;
  height?: string;
  width?: string;
}> = memo(({ src, height = "100", width = "200" }) => {
  let link: string;
  if (src.startsWith("http") || src.startsWith("data")) {
    link = src;
  } else {
    link = `data:image/png;base64,${imageToUri(src)}`;
  }
  return <img src={link} alt="hono-image" height={height} width={width} />;
});

export default ImageToUri;
