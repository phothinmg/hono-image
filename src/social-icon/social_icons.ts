import { icons } from "./iconsArray.ts";
import { html } from "../deps/mod.ts";
import type { HtmlEscapedString } from "../deps/mod.ts";

/**
 *  #### Type definition for `SocialIcon` component.
 * 
 * ***
 * 
 * 
 * - name : Name of social
 * 
 *   10 available icons 
 * 
 *   ```
 *    | "github"
      | "twitter"
      | "discord"
      | "facebook"
      | "linkedin"
      | "bitbucket"
      | "gitlab"
      | "wechat"
      | "whatsapp"
      | "wordpress"
 *   ```
 * 
 * - href : Link to social profile
 * 
 * - size : Size of icon / default to 24
 * 
 * - stroke : Stroke Width of icon / default to 2 
 * 
 * - color : Color of icon / default set to "currentColor"
 * 
 * ***
 * 
 */
export interface SocialIconType {
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
  href: string;
  size?: number;
  stroke?: number;
  color?: string;
}
/**
 * 
 * 
 * ***
 * 
 * SocialIcon component
 * ---
 *  **Parameters**
 * 
 * - name : Name of social
 * 
 * - href : Link to social profile
 * 
 * - size : Size of icon / default to 24
 * 
 * - stroke : Stroke Width of icon / default to 2 
 * 
 * - color : Color of icon / default set to "currentColor"
 * 
 * 
 * ***
 * 
 * **Example**
 * 
 * ```tsx
 * const app = new Hono();
 * 
 * app.get("/", (c) => {
    return c.html(
    <SocialIcon
    name={"github"}
    href={"https://github.com"}
    color="#585858"
    size={36}
    />
    );
   });
 * 
 * ```
 * 
 * ***
 */
export function SocialIcon({
  name,
  href,
  size = 24,
  stroke = 2,
  color = "currentColor",
}: SocialIconType): HtmlEscapedString | Promise<HtmlEscapedString> {
  const f = icons.find((i) => i.name === name);
  const ia = f?.svgs ?? [];
  return html`
    <a href=${href} target="_blank" id="iconLink">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width=${size}
        height=${size}
        viewBox="0 0 24 24"
        fill="none"
        stroke=${color}
        strokeWidth=${stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        ${ia.map((i) => i)}
      </svg>
    </a>
    <script>
      const style = document.createElement("link");
      style.setAttribute("rel", "stylesheet");
      style.setAttribute(
        "href",
        "https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/hono-icons/social-icons.css"
      );
      style.setAttribute("type", "text/css");
      document.head.appendChild(style);
    </script>
  `;
}
