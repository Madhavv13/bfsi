// Mounts the Pagefind UI. The index (/pagefind/) only exists after `npm run build`,
// so `astro dev` shows the fallback message instead.
(() => {
  const el = document.getElementById('search');
  if (!el) return;
  if (typeof window.PagefindUI !== 'function') {
    el.textContent = 'The search index is built with the site (npm run build); it is not available in dev mode.';
    return;
  }
  new window.PagefindUI({
    element: '#search',
    bundlePath: el.dataset.bundle,
    showSubResults: true,
    showImages: false,
    // Group pages are long; a lower length penalty lets an alias match ("BlueNoroff")
    // rank the group above short technique pages that mention it once.
    ranking: { pageLength: 0.3 },
  });
})();
