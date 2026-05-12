import { readFile } from "fs/promises";
import path from "path";

import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export async function readProjectMarkdown(slug: string) {
  const filePath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = await readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}

export async function listProjectMarkdownFiles() {
  const { readdir } = await import("fs/promises");
  const fileNames = await readdir(projectsDirectory);

  return fileNames.filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"));
}