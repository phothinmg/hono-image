import type { HtmlEscapedString } from "./deps/mod.ts";

/* Image to URI */

export type ExtType = Array<{ name: string; type: string }>;
export interface ImageToUriType {
  src: string;
  height?: number;
  width?: number;
}
declare const extType: ExtType;
export function imageToUri(imageFilePath: string): string;
export function ImageToUri({
  src,
  height,
  width,
}: ImageToUriType): HtmlEscapedString | Promise<HtmlEscapedString>;

/* Ico Generator */

export interface GeneratorType {
  data: Uint8Array;
  fpath: string;
  width: number;
  height: number;
  outFormat: string;
}

export interface IcoType {
  format: string;
  fpath: string;
  width: number;
  height: number;
}
export type IconTypeArray = Array<IcoType>;
export interface IconOutType {
  icoArray: IconTypeArray;
  outDir: string;
}

declare function imgType(fpath: string): boolean;
export function loadImgData(fpath: string): Promise<Uint8Array>;
export function generator({
  data,
  fpath,
  width,
  height,
  outFormat,
}: GeneratorType): Promise<void>;
export function browserIco(): Promise<IconOutType>;
export const manifest: string;
export const fileText: string;
export function icoGenerator(filePath: string): Promise<void>;

/* Social Icons */

export interface IconsType {
  name: string;
  svgs: (HtmlEscapedString | Promise<HtmlEscapedString>)[];
}

export const icons: Array<IconsType>;

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

export function SocialIcon({
  name,
  href,
  size,
  stroke,
  color,
}: SocialIconType): HtmlEscapedString | Promise<HtmlEscapedString>;

/* Helpers */

export function initialize(): Promise<void>;
