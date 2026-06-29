/* ============================================================
   3PO — Portfolio rows + FORGE order form behaviours
   Vanilla JS. Works independent of the React Tweaks panel
   (Tweaks only swaps a layout class on the container).
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── PORTFOLIO: accordion rows ───────────────────────── */
    document.querySelectorAll('.pf-proj__row').forEach(function (row) {
      row.addEventListener('click', function (e) {
        // clicking the picture (or a link) must NOT toggle the row
        if (e.target.closest('.pf-proj__thumb') || e.target.closest('a')) return;
        var proj = row.closest('.pf-proj');
        proj.classList.toggle('is-open');
        var open = proj.classList.contains('is-open');
        row.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    // Banner stills crossfade carousel (~5s) — runs behind each project banner.
    document.querySelectorAll('[data-carousel]').forEach(function (bg) {
      var imgs = bg.querySelectorAll('.pf-banner__img');
      if (imgs.length < 2) return;
      var i = 0;
      var iv = parseInt(bg.getAttribute('data-interval') || '5000', 10);
      setInterval(function () {
        imgs[i].classList.remove('is-active');
        i = (i + 1) % imgs.length;
        imgs[i].classList.add('is-active');
      }, iv);
    });

    // Lazy-load the project film only when its panel opens; unload it on close so
    // it stops playing (gives a clean play/stop, no autoplay until you ask for it).
    function syncProjVideo(proj) {
      var frame = proj.querySelector('iframe[data-vsrc]');
      if (!frame) return;
      if (proj.classList.contains('is-open')) {
        if (!frame.getAttribute('src')) frame.setAttribute('src', frame.getAttribute('data-vsrc'));
      } else {
        frame.removeAttribute('src');
      }
    }
    document.querySelectorAll('.pf-banner .pf-proj__row').forEach(function (row) {
      row.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        var proj = row.closest('.pf-proj');
        // run after the toggle handler above has flipped .is-open
        setTimeout(function () { syncProjVideo(proj); }, 0);
      });
    });

    // Open a project from the URL hash (e.g. /portfolio/#casio_vl_tone — for Behance back-links)
    if (location.hash.length > 1) {
      var hp = document.getElementById(location.hash.slice(1));
      if (hp && hp.classList.contains('pf-proj')) {
        hp.classList.add('is-open');
        var hr = hp.querySelector('.pf-proj__row'); if (hr) hr.setAttribute('aria-expanded', 'true');
        syncProjVideo(hp);
        setTimeout(function () { hp.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 250);
      }
    }

    /* ── LIGHTBOX ────────────────────────────────────────── */
    var lbx = document.getElementById('lbx');
    if (lbx) {
      var stage = lbx.querySelector('.lbx__stage');
      var capEl = lbx.querySelector('.lbx__cap');
      var countEl = lbx.querySelector('.lbx__count');
      var gallery = [];
      var idx = 0;

      function renderLbx() {
        var item = gallery[idx];
        if (!item) return;
        // placeholder vs real image
        if (item.src) {
          stage.querySelector('.lbx__media').innerHTML =
            '<img class="lbx__img" src="' + item.src + '" alt="">';
        } else {
          stage.querySelector('.lbx__media').innerHTML =
            '<div class="lbx__ph"><div class="media-grid-tex"></div><span class="lbx__phlabel">' +
            (item.label || 'Image placeholder') + '</span></div>';
        }
        capEl.textContent = item.cap || '';
        countEl.textContent = (idx + 1) + ' / ' + gallery.length;
      }
      function openLbx(items, start) {
        gallery = items; idx = start || 0;
        renderLbx();
        lbx.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
      function closeLbx() { lbx.classList.remove('open'); document.body.style.overflow = ''; }
      function step(d) { idx = (idx + d + gallery.length) % gallery.length; renderLbx(); }

      // open from any element carrying data-lbx (JSON list) OR a project thumb
      document.querySelectorAll('[data-lbx-group]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var proj = el.closest('[data-images]');
          var start = parseInt(el.getAttribute('data-lbx-index') || '0', 10);
          var items = [];
          try { items = JSON.parse(proj.getAttribute('data-images')); } catch (err) { items = []; }
          if (items.length) openLbx(items, start);
        });
      });

      lbx.querySelector('.lbx__close').addEventListener('click', closeLbx);
      lbx.querySelector('.lbx__prev').addEventListener('click', function () { step(-1); });
      lbx.querySelector('.lbx__next').addEventListener('click', function () { step(1); });
      lbx.addEventListener('click', function (e) { if (e.target === lbx) closeLbx(); });
      document.addEventListener('keydown', function (e) {
        if (!lbx.classList.contains('open')) return;
        if (e.key === 'Escape') closeLbx();
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
      });
    }

    /* ── FORGE ORDER FORM ────────────────────────────────── */
    var ofWrap = document.getElementById('order-form');
    if (ofWrap) {
      function syncProgress(wrap) {
        if (!wrap) return;
        var prog = wrap.querySelector('.of-progress'); if (!prog) return;
        var steps = Array.prototype.slice.call(wrap.querySelectorAll('.of-step'));
        var openIdx = steps.findIndex(function (s) { return s.classList.contains('is-open'); });
        if (openIdx < 0) openIdx = 0;
        var label = prog.querySelector('.plabel'); if (label) label.textContent = 'Step ' + (openIdx + 1) + ' of ' + steps.length;
        prog.querySelectorAll('.pdot').forEach(function (d, i) { d.classList.toggle('active', i <= openIdx); });
      }
      // accordion / fixed: header toggles. fixed = exclusive (one open).
      ofWrap.querySelectorAll('.of-step__head').forEach(function (head) {
        head.addEventListener('click', function () {
          var step = head.closest('.of-step');
          var wrap = head.closest('.of-wrap');
          var exclusive = wrap.classList.contains('of-fixed');
          var willOpen = !step.classList.contains('is-open');
          if (exclusive) {
            wrap.querySelectorAll('.of-step').forEach(function (s) { s.classList.remove('is-open'); });
          }
          step.classList.toggle('is-open', willOpen);
          syncProgress(wrap);
        });
      });

      // step "Next" buttons (accordion + fixed): mark done, open next
      ofWrap.querySelectorAll('[data-of-next]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var step = btn.closest('.of-step');
          var wrap = btn.closest('.of-wrap');
          step.classList.add('is-done');
          var next = step.nextElementSibling;
          if (wrap.classList.contains('of-fixed')) {
            wrap.querySelectorAll('.of-step').forEach(function (s) { s.classList.remove('is-open'); });
          }
          while (next && !next.classList.contains('of-step')) next = next.nextElementSibling;
          if (next) { next.classList.add('is-open'); }
          syncProgress(wrap);
        });
      });
      ofWrap.querySelectorAll('[data-of-back]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var step = btn.closest('.of-step');
          var wrap = btn.closest('.of-wrap');
          var prev = step.previousElementSibling;
          while (prev && !prev.classList.contains('of-step')) prev = prev.previousElementSibling;
          if (wrap.classList.contains('of-fixed')) {
            wrap.querySelectorAll('.of-step').forEach(function (s) { s.classList.remove('is-open'); });
          } else { step.classList.remove('is-open'); }
          if (prev) prev.classList.add('is-open');
          syncProgress(wrap);
        });
      });

      // panel: single disclosure trigger
      var trigger = ofWrap.querySelector('.of-trigger');
      if (trigger) {
        trigger.addEventListener('click', function () {
          var p = trigger.closest('.of-panel');
          var open = p.classList.toggle('is-open');
          trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
          var lbl = trigger.querySelector('.of-trigger-label');
          if (lbl) lbl.textContent = open ? 'Close order form' : 'Start an order';
        });
      }

      // tabs + vstep: pane switching
      function activatePane(wrap, n) {
        wrap.querySelectorAll('.of-pane').forEach(function (p) { p.hidden = p.getAttribute('data-pane') !== String(n); });
        wrap.querySelectorAll('.of-tab').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-tab') === String(n)); });
        wrap.querySelectorAll('.of-rail__item').forEach(function (r) {
          var rn = parseInt(r.getAttribute('data-rail'), 10);
          r.classList.toggle('active', rn === n);
          r.classList.toggle('done', rn < n);
        });
      }
      ofWrap.querySelectorAll('.of-tab').forEach(function (t) {
        t.addEventListener('click', function () { activatePane(t.closest('.of-wrap'), parseInt(t.getAttribute('data-tab'), 10)); });
      });
      ofWrap.querySelectorAll('.of-rail__item').forEach(function (r) {
        r.addEventListener('click', function () { activatePane(r.closest('.of-wrap'), parseInt(r.getAttribute('data-rail'), 10)); });
      });
      ofWrap.querySelectorAll('[data-pane-next]').forEach(function (b) {
        b.addEventListener('click', function () {
          var wrap = b.closest('.of-wrap');
          activatePane(wrap, parseInt(b.getAttribute('data-pane-next'), 10));
        });
      });
      ofWrap.querySelectorAll('[data-pane-back]').forEach(function (b) {
        b.addEventListener('click', function () {
          var wrap = b.closest('.of-wrap');
          activatePane(wrap, parseInt(b.getAttribute('data-pane-back'), 10));
        });
      });

      // reveal: progressively show blocks
      var revealWrap = ofWrap.querySelector('.of-reveal');
      if (revealWrap) {
        var blocks = revealWrap.querySelectorAll('.of-reveal-block');
        revealWrap.querySelectorAll('input[name="of-service-reveal"]').forEach(function (inp) {
          inp.addEventListener('change', function () { if (blocks[0]) blocks[0].classList.add('show'); });
        });
        var detailField = revealWrap.querySelector('[data-reveal-trigger]');
        if (detailField) {
          detailField.addEventListener('input', function () {
            if (detailField.value.trim().length > 3 && blocks[1]) blocks[1].classList.add('show');
          });
        }
      }

      // submit → fetch POST to the Make webhook, AWAIT the 200, then show success.
      // On failure: show an error and keep the form usable. mailto fallback when no webhook.
      ofWrap.querySelectorAll('[data-of-submit]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          var wrap = btn.closest('.of-wrap');
          var hp = ofWrap.querySelector('[name="of_hp_field"]');
          if (hp && hp.value) return; // honeypot → bot
          // Compile the stacked (multi-select) services into one comma-separated field for Make.
          var svcs = Array.prototype.slice.call(ofWrap.querySelectorAll('[name="service"]:checked')).map(function (c) { return c.value; });
          var svcSummary = ofWrap.querySelector('[name="services"]');
          if (svcSummary) svcSummary.value = svcs.join(', ');
          var emailEl = ofWrap.querySelector('[name="email"]');
          if (emailEl && !emailEl.value) { emailEl.focus(); return; }

          var whUrl = ofWrap.getAttribute('data-webhook');
          var done = wrap.querySelector('.of-done');
          var errBox = wrap.querySelector('.of-error');
          var formbody = wrap.querySelector('.of-formbody');

          function showError(msg) {
            if (!errBox) return;
            var m = errBox.querySelector('.of-error-msg');
            if (m) m.textContent = msg;
            errBox.hidden = false;
          }
          function showDone() {
            if (errBox) errBox.hidden = true;
            if (formbody) formbody.style.display = 'none';
            if (done) done.hidden = false;
          }

          if (whUrl) {
            // CORS-safe (no preflight) urlencoded body — includes _secret + services, skips the honeypot.
            var data = new URLSearchParams();
            ofWrap.querySelectorAll('input, select, textarea').forEach(function (el) {
              if (!el.name || el.name === 'of_hp_field') return;
              if ((el.type === 'radio' || el.type === 'checkbox') && !el.checked) return;
              if ((el.value === '' || el.value == null) && el.name === 'deadline') return; // omit ONLY an empty deadline (date field errors on blank); send all other empties so the mapped variables always exist
              data.append(el.name, el.value);
            });
            if (errBox) errBox.hidden = true;
            var orig = btn.textContent;
            btn.disabled = true; btn.textContent = 'Sending…';
            fetch(whUrl, { method: 'POST', body: data })
              .then(function (r) {
                if (!r.ok) throw new Error('the server returned ' + r.status);
                btn.disabled = false; btn.textContent = orig;
                showDone();
              })
              .catch(function (err) {
                btn.disabled = false; btn.textContent = orig;
                showError('We couldn’t send your request — ' + err.message + '. Please try again, or email 3po@3po3d.com.');
              });
          } else {
            // mailto fallback when no webhook is configured
            var lines = [];
            ofWrap.querySelectorAll('input, select, textarea').forEach(function (el) {
              if (!el.name || el.name === 'of_hp_field' || el.name.charAt(0) === '_') return;
              if ((el.type === 'radio' || el.type === 'checkbox') && !el.checked) return;
              if (el.value) lines.push(el.name + ': ' + el.value);
            });
            window.location.href = 'mailto:3po@3po3d.com?subject=' + encodeURIComponent('FORGE order — ' + (svcs.join(', ') || 'enquiry')) + '&body=' + encodeURIComponent(lines.join('\n'));
            showDone();
          }
        });
      });

      // "Submit another request" — reset + re-show the form, no page reload.
      ofWrap.querySelectorAll('[data-of-again]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var wrap = btn.closest('.of-wrap');
          var done = wrap.querySelector('.of-done');
          var errBox = wrap.querySelector('.of-error');
          var formbody = wrap.querySelector('.of-formbody');
          ofWrap.reset();
          // reset dynamic UI: hide per-service blocks + reset the material picker
          ofWrap.querySelectorAll('input[name="service"]').forEach(function (c) { c.dispatchEvent(new Event('change')); });
          var rec = ofWrap.querySelector('.mat-type[data-mtype="Recommend for me"]'); if (rec) rec.click();
          if (done) done.hidden = true;
          if (errBox) errBox.hidden = true;
          if (formbody) formbody.style.display = '';
          var sb = ofWrap.querySelector('[data-of-submit]'); if (sb) sb.disabled = false;
          var order = document.getElementById('order'); if (order) order.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }
  });
})();
