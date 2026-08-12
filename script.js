/* ═══════════════════════════════════════
   AuditorA — GLOBAL SCRIPTS
   ═══════════════════════════════════════ */

// ─── Mobile menu ───
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  var burger = document.getElementById('hamburger');
  if (menu) menu.classList.toggle('open');
  if (burger) burger.classList.toggle('open');
}

// ─── Nav shadow on scroll ───
window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ─── Glass glow ripple on button click ───
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.btn');
  if (!btn) return;

  var rect = btn.getBoundingClientRect();
  var size = Math.max(rect.width, rect.height);
  var ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(function () { ripple.remove(); }, 700);
});

// ─── Scroll reveal ───
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.reveal');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el) { obs.observe(el); });

  // Stagger grid children
  document.querySelectorAll('[data-stagger]').forEach(function (grid) {
    Array.prototype.forEach.call(grid.querySelectorAll('.reveal'), function (el, i) {
      el.style.transitionDelay = (i * 0.075) + 's';
    });
  });
});
