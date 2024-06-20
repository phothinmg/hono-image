import { SocialIcon } from "../src/mod.ts";
import { Hono, html } from "../src/deps/mod.ts";
import type { FC } from "../src/deps/mod.ts";
import { JSX } from "jsr:@hono/hono@^4.4.7/jsx/jsx-runtime";

const app = new Hono();

const App: FC = () => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* pico css */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.6/css/pico.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.colors.min.css"
        />
      </head>
      <body>
        <main class="container">
          <SocialIcon
            name={"twitter"}
            href={"https://github.com"}
            color={"red"}
            size={52}
          />
          <br /> <br />
          <a
          href="#"
          data-theme-switcher="auto"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="System"
        >
          System
        </a>
        <a
          href="#"
          data-theme-switcher="light"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="Light"
        >
          light
        </a>
        <a
          href="#"
          data-theme-switcher="dark"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="Dark"
        >
          dark
        </a>
        </main>
        {html`
          <script src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/theme.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/modal.min.js"></script>
        `}
      </body>
    </html>
  );
};

// deno-lint-ignore no-explicit-any
app.get("/", (c: { html: (arg0: JSX.Element) => any }) => {
  return c.html(<App />);
});

export default app;
