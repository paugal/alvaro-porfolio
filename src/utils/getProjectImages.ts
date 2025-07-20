import { readdirSync } from "fs";
import { join } from "path";

export function getImagesFromProjectFolder(folder: string): string[] {
  const basePath = join(process.cwd(), "public", "img", "proyectos", folder);
  const files = readdirSync(basePath)
    .filter((file) => /\.(webp|png|jpg|jpeg)$/i.test(file))
    .sort();

  return files.map((file) => `/img/proyectos/${folder}/${file}`);
}
