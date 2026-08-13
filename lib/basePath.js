export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBase(path = '') {
  if (!path) return path;
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#') ||
    path.startsWith('//')
  ) {
    return path;
  }

  if (basePath && (path === basePath || path.startsWith(`${basePath}/`))) {
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
