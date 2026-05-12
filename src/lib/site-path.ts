export const siteBasePath = "/IS219-Portfolio";

export function withSiteBasePath(path: string) {
  if (path.startsWith(siteBasePath)) {
    return path;
  }

  return `${siteBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}