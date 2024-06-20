/**
 * Reads a file synchronously and returns its contents as a string.
 *
 * @param {string} file - The path of the file to read.
 * @return {string} The content of the file as a string.
 */
export function readFile(file: string): string {
  const decoder = new TextDecoder("utf-8");
  const fdata = Deno.readFileSync(file);
  const data = decoder.decode(fdata);
  return data;
}
