import { z } from "zod";

export const projectLinksSchema = z.object({
  repository: z.string().url(),
  live: z.string().url().optional(),
  evidence: z.string().optional(),
});

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  status: z.string().min(1),
  summary: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),
  links: projectLinksSchema,
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;