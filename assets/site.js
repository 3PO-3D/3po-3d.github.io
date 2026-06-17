/* ============================================================
   3PO — Shared site behaviour (Jekyll)
   Theme toggle · logo carousel · side-arrow page stepping ·
   keyboard nav · mobile body-swipe · sub-nav scroll-spy
   ============================================================ */
(function () {
  'use strict';

  // Ordered collection — drives the carousel highlight + side arrows.
  var PAGES = [
    { key: 'home',      href: '/',           label: '3PO Home'  },
    { key: 'chronos',   href: '/chronos/',   label: 'CHRONOS'   },
    { key: 'forge',     href: '/forge/',     label: 'FORGE'     },
    { key: 'portfolio', href: '/portfolio/', label: 'Portfolio' },
    { key: 'creator',   href: '/creator/',   label: 'Creator'   }
  ];

  var DARK = 'dark', LIGHT = 'light';

  function currentTheme() { return localStorage.getItem('theme') === DARK ? DARK : LIGHT; }

  function swapThemeImages(theme) {
    var dark = theme === DARK;
    document.querySelectorAll('img[data-light][data-dark]').forEach(function (el) {
      var next = dark ? el.getAttribute('data-dark') : el.getAttribute('data-light');
      if (next && el.getAttribute('src') !== next) el.setAttribute('src', next);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    swapThemeImages(theme);
    if (typeof window.__onTheme === 'function') window.__onTheme(theme === DARK);
  }
  window.__applyTheme = applyTheme;
  window.__currentTheme = currentTheme;

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(currentTheme());

    // ── Theme toggle ─────────────────────────────────────
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', function () {
      applyTheme(currentTheme() === DARK ? LIGHT : DARK);
    });

    // ── Logo carousel: active → top, inactive → navigate ──
    var carousel = document.getElementById('logo-carousel');
    if (carousel) {
      Array.prototype.slice.call(carousel.querySelectorAll('.logo-carousel__item')).forEach(function (el) {
        el.addEventListener('click', function (e) {
          if (el.classList.contains('is-active')) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      });
    }

    // ── Side-arrow page stepping (+ keyboard + body-swipe) ─
    var pageKey = document.body.getAttribute('data-page');
    var idx = PAGES.findIndex(function (p) { return p.key === pageKey; });
    if (idx >= 0) {
      var prev = PAGES[(idx - 1 + PAGES.length) % PAGES.length];
      var next = PAGES[(idx + 1) % PAGES.length];

      var leftEl  = document.querySelector('.page-arrow.left');
      var rightEl = document.querySelector('.page-arrow.right');
      if (leftEl) {
        leftEl.setAttribute('href', prev.href);
        leftEl.setAttribute('aria-label', 'Previous: ' + prev.label);
        var ll = leftEl.querySelector('.arw-label'); if (ll) ll.textContent = prev.label;
      }
      if (rightEl) {
        rightEl.setAttribute('href', next.href);
        rightEl.setAttribute('aria-label', 'Next: ' + next.label);
        var rl = rightEl.querySelector('.arw-label'); if (rl) rl.textContent = next.label;
      }

      // keyboard arrows (ignore when typing)
      document.addEventListener('keydown', function (e) {
        var tag = (e.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
        if (e.key === 'ArrowLeft')  window.location.href = prev.href;
        if (e.key === 'ArrowRight') window.location.href = next.href;
      });

      // mobile body-swipe — horizontal intent only, ignores interactive / scrollable zones
      var IGNORE = 'a,button,input,textarea,select,label,#logo-carousel,.sub-nav,pre,table,.media,.reel-hero,[data-noswipe]';
      var bx = 0, by = 0, bskip = false;
      document.addEventListener('touchstart', function (e) {
        var t = e.touches[0]; bx = t.clientX; by = t.clientY;
        bskip = !!(e.target.closest && e.target.closest(IGNORE));
      }, { passive: true });
      document.addEventListener('touchend', function (e) {
        if (bskip) return;
        var t = e.changedTouches[0], dx = t.clientX - bx, dy = t.clientY - by;
        if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.6) return;
        window.location.href = dx < 0 ? next.href : prev.href;
      }, { passive: true });

      // brief keyboard hint on first load
      var hint = document.querySelector('.kbd-hint');
      if (hint && !sessionStorage.getItem('arrowHintSeen')) {
        setTimeout(function () { hint.style.opacity = '1'; }, 900);
        setTimeout(function () { hint.style.opacity = '0'; }, 4200);
        sessionStorage.setItem('arrowHintSeen', '1');
      }
    }

    // ── Mobile sub-nav toggle (FORGE / Portfolio / CHRONOS) ─
    var menuBtn = document.getElementById('menu-toggle');
    var subnav = document.getElementById('sub-nav');
    if (menuBtn && subnav) menuBtn.addEventListener('click', function () {
      var open = subnav.classList.toggle('open');
      menuBtn.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // ── Dock the sub-nav exactly under the sticky header ──
    // Header height varies; pin the sub-nav's sticky `top` to it so it
    // never slides under the header (loses its top padding) on scroll.
    var header = document.querySelector('.site-header');
    if (header && subnav) {
      var dockSubnav = function () { subnav.style.top = header.offsetHeight + 'px'; };
      dockSubnav();
      window.addEventListener('resize', dockSubnav, { passive: true });
      window.addEventListener('load', dockSubnav);
    }

    // ── Sub-nav scroll-spy (in-page anchors) ─────────────
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.sub-nav a[href^="#"]'));
    if (navLinks.length) {
      var ids = navLinks.map(function (a) { return a.getAttribute('href'); });
      window.addEventListener('scroll', function () {
        var y = window.scrollY + 150, cur = ids[0];
        ids.forEach(function (id) {
          var el = id && id.length > 1 ? document.querySelector(id) : null;
          if (el && el.offsetTop <= y) cur = id;
        });
        navLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === cur); });
      }, { passive: true });
    }
  });
})();
