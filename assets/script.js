
/* Minimal progressive enhancement */
(function () {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  // Demo: fake send form
  const form = document.querySelector('form[data-demo-contact]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const pre = document.querySelector('#demo-response');
      pre.textContent = JSON.stringify({ ok: true, received: data }, null, 2);
      form.reset();
    });
  }

  // Mark active nav link
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[href]').forEach(a => {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });
})();
