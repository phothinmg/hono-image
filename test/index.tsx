import { ImageToUri } from "../src/mod.ts";
import { Hono } from "../deps/mod.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<ImageToUri src={""} />);
});

export default app;
