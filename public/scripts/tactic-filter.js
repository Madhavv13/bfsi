// Progressive enhancement for group pages: filter table rows by tactic and source.
// The table is fully server-rendered and usable without JavaScript.
(function () {
  'use strict';
  var root = document.querySelector('[data-tactic-filter-root]');
  if (!root) return;
  var tactic = root.querySelector('[data-tactic-filter]');
  var prov = root.querySelector('[data-prov-filter]');
  var count = root.querySelector('[data-row-count]');
  var rows = Array.prototype.slice.call(document.querySelectorAll('table.techniques tbody tr'));

  function apply() {
    var t = tactic ? tactic.value : '';
    var p = prov ? prov.value : '';
    var shown = 0;
    rows.forEach(function (tr) {
      var tactics = (tr.getAttribute('data-tactics') || '').split(' ');
      var ok = (!t || tactics.indexOf(t) !== -1) && (!p || tr.getAttribute('data-prov') === p);
      tr.hidden = !ok;
      if (ok) shown += 1;
    });
    if (count) count.textContent = shown + ' of ' + rows.length + ' rows';
    var params = new URLSearchParams(window.location.search);
    if (t) params.set('tactic', t); else params.delete('tactic');
    var qs = params.toString();
    history.replaceState(null, '', window.location.pathname + (qs ? '?' + qs : ''));
  }

  var initial = new URLSearchParams(window.location.search).get('tactic');
  if (initial && tactic && tactic.querySelector('option[value="' + initial.replace(/[^A-Z0-9]/g, '') + '"]')) {
    tactic.value = initial;
  }
  if (tactic) tactic.addEventListener('change', apply);
  if (prov) prov.addEventListener('change', apply);
  apply();
})();
