/** Join a site-relative path onto Astro's BASE_URL (works with base "/" and "/repo"). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
