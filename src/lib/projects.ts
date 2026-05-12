import { readFile, readdir } from "fs/promises";
import path from "path";

import { compileMDX } from "next-mdx-remote/rsc";

import { projectFrontmatterSchema, type ProjectFrontmatter } from "./project-schema";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export type ProjectEntry = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: React.ReactElement;
};

export async function getProjectSlugs() {
  const fileNames = await readdir(projectsDirectory);

  return fileNames.filter((fileName) => fileName.endsWith(".mdx")).map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export async function getProjectBySlug(slug: string): Promise<ProjectEntry> {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  const source = await readFile(filePath, "utf8");
  const compiled = await compileMDX<ProjectFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  const validation = projectFrontmatterSchema.safeParse(compiled.frontmatter);

  if (!validation.success) {
    throw new Error(`Invalid project frontmatter in ${slug}: ${validation.error.message}`);
  }

  return {
    slug,
    frontmatter: validation.data,
    content: compiled.content,
  };
}

export async function getProjects() {
  const slugs = await getProjectSlugs();

  return Promise.all(slugs.map((slug) => getProjectBySlug(slug)));
}