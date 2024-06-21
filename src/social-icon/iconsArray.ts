import { html } from "../deps/mod.ts";
import type { HtmlEscapedString } from "../deps/mod.ts";
export interface IconsType {
  name: string;
  svgs: (HtmlEscapedString | Promise<HtmlEscapedString>)[];
}
export const icons: Array<IconsType> = [
  {
    name: "github",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path
        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
      />`,
    ],
  },
  {
    name: "twitter",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path d="M4 4l11.733 16h4.267l-11.733 -16z" />`,
      html`<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />`,
    ],
  },
  {
    name: "discord",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />`,
      html`<path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />`,
      html`<path
        d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
      />`,
      html`<path d="M7 16.5c3.5 1 6.5 1 10 0" />`,
    ],
  },
  {
    name: "facebook",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path
        d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
      />`,
    ],
  },
  {
    name: "linkedin",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path
        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
      />`,
      html`<path d="M8 11l0 5" />`,
      html`<path d="M8 8l0 .01" />`,
      html`<path d="M12 16l0 -5" />`,
      html`<path d="M16 16v-3a2 2 0 0 0 -4 0" />`,
    ],
  },
  {
    name: "bitbucket",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html` <path
        d="M3.648 4a.64 .64 0 0 0 -.64 .744l3.14 14.528c.07 .417 .43 .724 .852 .728h10a.644 .644 0 0 0 .642 -.539l3.35 -14.71a.641 .641 0 0 0 -.64 -.744l-16.704 -.007z"
      />`,
      html`<path d="M14 15h-4l-1 -6h6z" />`,
    ],
  },
  {
    name: "gitlab",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />`,
    ],
  },
  {
    name: "wechat",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path
        d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z"
      />`,
      html`<path
        d="M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233"
      />`,
      html`<path d="M10 8h.01" />`,
      html`<path d="M7 8h.01" />`,
      html`<path d="M15 14h.01" />`,
      html`<path d="M18 14h.01" />`,
    ],
  },
  {
    name: "whatsapp",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />`,
      html`<path
        d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
      />`,
    ],
  },
  {
    name: "wordpress",
    svgs: [
      html`<path stroke="none" d="M0 0h24v24H0z" fill="none" />`,
      html`<path d="M9.5 9h3" />`,
      html` <path d="M4 9h2.5" />`,
      html`<path d="M11 9l3 11l4 -9" />`,
      html`<path d="M5.5 9l3.5 11l3 -7" />`,
      html`<path
        d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z"
      />`,
      html`<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />`,
    ],
  },
];
