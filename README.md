# Hono Image

## About

Related components , functions and middlewares of image for [HONO](https://hono.dev/) , that supported
any JavaScript runtime but this package only focus on [DENO](https://deno.com/).

The package is under developing state now.

---

## Install

---

## Setup

##### Hono JSX runtime in `deno.json` .

```json
{
  "compilerOptions": {
    "jsx": "precompile",
    "jsxImportSource": "jsr:@hono/hono@^4.4.7/jsx"
  }
}
```

For more see in [HONO-Docs](https://hono.dev/docs/guides/jsx).

---

## Image To URI

#### Function

#### `imageToUri`

Convert image file to data URI , inspired by https://github.com/tiaanduplessis/image-to-uri.

**Available image types to convert to data:uri**

| ext   | content-type  |
| ----- | ------------- |
| .png  | image/png     |
| .jpg  | image/jpeg    |
| .jpeg | image/jpeg    |
| .bm   | image/bmp     |
| .bmp  | image/bmp     |
| .webp | image/webp    |
| .ico  | image/x-ico   |
| .svg  | image/svg+xml |

**Example**

```ts
const dataUri = imageToUri("path_to_image");

// data:image/png;base64,77+9UE5HDQoaCgAAAA1JSERSAAACWAAAAO+/vQgGAAAANO+/ve+/ve+/vQAAAAlwSFlzAAAO77+9AAAO77+9Ae+/vSsOGwAABO.....
```

#### Component

#### `<ImageToUri />`

Render image as data:uri form local files and from links start with "http" and "data".

**type**

```ts
src: string;
height?: number // default 100
width?: number // default 200
```

**Example**

```tsx
const app = new Hono();

app.get("/", (c) => {
  return c.html(<ImageToUri src={"path_to_image"} />);
});

export default app;
```

---

## Socila Icons

#### Component

#### `<SocialIcon />`

#### Types

```ts
FC<{
  // name of social site
  name:
    | "github"
    | "twitter"
    | "discord"
    | "facebook"
    | "linkedin"
    | "bitbucket"
    | "gitlab"
    | "wechat"
    | "whatsapp"
    | "wordpress";
  href: string; // link to socila profile
  size?: number; // default 24
  storke?: number; // default 2
  color?: string; // "currentColor"
}>;
```

#### Example

```tsx
const app = new Hono();

app.get("/", (c: { html: (arg0: JSX.Element) => any }) => {
  return c.html(
    <SocialIcon
      name={"github"}
      href={"https://github.com"}
      color="#585858"
      size={36}
    />
  );
});
```

---

### LICENSE



<pre>
   Copyright 2024 Pho Thin Maung
   
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
</pre>
