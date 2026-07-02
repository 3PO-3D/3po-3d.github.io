---
title: "FORGE — Termékek"
description: "Azonnal rendelhető, nyomtatott darabok, köztük a testre szabott ortopéd és kényelmi talpbetétek, a lábszkenned alapján nyomtatva."
permalink: /hu/forge/products/
lang: hu
has_translation: true
---

{% include forge-subnav.html %}

<link rel="stylesheet" href="{{ '/assets/work-order.css' | relative_url }}">

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">02 — Termékek</p>
      <h2>Nyomtatásra érdemes dolgok, azonnal rendelhetők.</h2>
      <p class="lead">Egyre bővülő katalógus funkcionális és egyedi darabokból, mindegyik rendelésre készül a műhely gépein.</p>
    </div>

    <div class="cart-note">
      <strong>Fix ár — de most nem fizetsz.</strong> Rendelj alább, és emailben küldök egy privát Dropbox linket, ahová
      feltöltheted a lábszkenned. Miután kiszámoltam a szállítást a címedre, küldök egy számlát — fizesd ki, és a párod
      nyomtatásba megy. Semmi sem kerül terhelésre, amíg jóvá nem hagyod a számlát.
    </div>

    <!-- Flagship: custom insoles — store-style layout -->
    <div class="product insole-flagship">

      <div class="ins-gallery" id="ins-gallery">
        <div class="ins-stage">
          <div class="ins-slide is-active" data-slide="0">
            <iframe src="https://framerate.tv/embed/633e8764-2a5f-4581-a7d5-e24a4369dd6d?background=1" loading="lazy" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" title="Egyedi ortopéd talpbetét animáció"></iframe>
          </div>
          {% assign ibase = '/assets/img/products/insoles/' %}
          {% assign istills = 'Blue_2_2.1.2.png,Red_2.2.1_2.2.3.png,Black_2.2.2_2.2.6.png' | split: ',' %}
          {% for s in istills %}<div class="ins-slide" data-slide="{{ forloop.index }}"><img src="{{ ibase | append: s | relative_url }}" loading="lazy" alt="Egyedi talpbetét — {{ s | split: '_' | first }}"></div>{% endfor %}
          <button class="ins-arrow ins-prev" type="button" aria-label="Előző">&lsaquo;</button>
          <button class="ins-arrow ins-next" type="button" aria-label="Következő">&rsaquo;</button>
        </div>
        <div class="ins-dots">
          <button class="ins-dot is-active" type="button" data-go="0" aria-label="Animáció"></button>
          <button class="ins-dot" type="button" data-go="1" aria-label="Kék"></button>
          <button class="ins-dot" type="button" data-go="2" aria-label="Piros"></button>
          <button class="ins-dot" type="button" data-go="3" aria-label="Fekete"></button>
        </div>
      </div>

      <div class="ins-desc">
        <span class="product-cat">Egyedi méret — Kiemelt · a lábszkenned alapján</span>
        <h3>Egyedi talpbetétek</h3>
        <p>A lábadra nyomtatva, egy szkennből, amit a rendelés után töltesz fel. Válaszd ki a támogatás szintjét és a színt alább, írj egy megjegyzést, ha szeretnél — kinyomtatom az összeillő párt, és kiszállítom, amint a számlád ki van fizetve.</p>
        <details class="ins-more">
          <summary>Olvasd el a részletes leírást</summary>
          <div class="ins-more-body">
            <h4>Mik ezek</h4>
            <p>Teljesen egyedi, szkenn-alapú talpbetétek — a geometria a <em>te</em> lábadra formálva, nem egy általános sablon. A kitöltés sűrűsége a <strong>terheléshez igazodik</strong>, így minden talpbetét ott kemény, ahol a súlyt viseli, és ott puhább, ahol nem, <strong>beépített légcsatornákkal</strong> a szellőzésért. Csak neked készül.</p>

            <h4>Típus és szín</h4>
            <p><strong>🔵 Kék — ortopéd.</strong> Kemény, rugalmas TPU szerkezeti korrekcióhoz: lúdtalp, tengelyeltérés, műtét utáni és szalag-rehabilitáció. Magasabb boltozattámasz és pontos, szkenn-alapú tehereloszlás; a visszapattanás segít újraépíteni a láb és a lábujjak erejét.</p>
            <p><strong>🔴 Piros — kényelmi.</strong> Ugyanaz a kemény, rugalmas TPU, mindennapi enyhítésre hangolva — sarokfájdalom, lábujjnyomás, általános kényelmetlenség. Puha és rugalmas talpérzet, gyors visszapattanással, ami segíti az elrugaszkodást; kiváló sporthoz és sok lépéshez.</p>
            <p><strong>⚫ Fekete — habosított TPU.</strong> <strong>Akár</strong> ortopéd, <strong>akár</strong> kényelmi kivitelben elérhető. A nyomtatás úgy van hangolva, hogy magát a filamentet habosítsa, így fokozatosan, szivacsosan nyomódik össze, ahelyett, hogy gumiként visszapattanna — ugyanaz a teherbírás, puhább, párnázottabb érzettel.</p>
            <p class="ins-pick">Tehát: rendelj <strong>Ortopéd &rarr; Kék vagy Fekete</strong>, vagy <strong>Kényelmi &rarr; Piros vagy Fekete</strong> változatot. A típust és a színt a lenti rendelési űrlapon választod ki.</p>

            <h4>Anyag és élettartam</h4>
            <p>Kétféle érzet: egy <strong>kemény, rugalmas TPU</strong> (Kék / Piros) és egy <strong>puha, habosított TPU</strong> (Fekete). Mindkettő <strong>mosható és tisztítható</strong>, és nagyjából <strong>1,5&ndash;2 évig</strong> bírja a napi használatot.</p>

            <h4>Hogyan működik a rendelés</h4>
            <p>A típust és a színt a lenti űrlapon választod ki, és <strong>írhatsz megjegyzést</strong> — fizetés még nincs. Emailben küldök egy <strong>privát Dropbox linket</strong> a lábszkenned feltöltéséhez, kiszámolom a szállítást, és küldök egy számlát; amint ki van fizetve, kinyomtatom a párod. <strong>Csak válaszolj bármelyik emailre bármivel, amit finomítani szeretnél</strong> — több támasz a boltozat, a sarok vagy a lábujjak alatt; puhább vagy keményebb zónák aszerint, ahogy a súlyod eloszlik. Szinte bármi lehetséges: pontosan ez a lényege annak, hogy egyszerre egy párat készítek, egyetlen embernek.</p>
            <p><a href="#" class="kiri-guide-open" style="color:var(--accent);font-family:var(--font-mono);font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;">Hogyan szkenneld be a lábad &rarr;</a></p>

            <h4>Méret &mdash; mire van szükségem</h4>
            <p>Az <strong>EU-s cipőméreted</strong>, plusz két gyors mérés (állj rá egy papírlapra, és jelöld be):</p>
            <ul class="ins-measure-list">
              <li><strong>Hossz</strong> — a saroktól a nagylábujj hegyéig.</li>
              <li><strong>Szélesség</strong> — a legszélesebb ponton: a nagylábujj első ízületétől a kislábujj első ízületéig (a külső él).</li>
            </ul>
            <svg class="foot-guide" viewBox="0 0 220 350" role="img" aria-label="Mérési útmutató: hossz a saroktól a nagylábujjig, szélesség a lábujjízületeknél">
              <path class="foot" d="M110,330 C140,330 150,306 150,280 C152,246 150,218 154,190 C158,158 160,140 160,128 C160,100 138,86 110,86 C82,86 60,100 60,128 C60,158 66,184 68,213 C70,240 68,266 70,286 C72,308 80,330 110,330 Z"/>
              <path class="dim" d="M34,86 L34,330 M28,94 L34,86 L40,94 M28,322 L34,330 L40,322"/>
              <text class="dlbl" transform="rotate(-90 16 208)" x="16" y="208" text-anchor="middle">Hossz</text>
              <path class="dim" d="M58,120 L162,120 M66,114 L58,120 L66,126 M154,114 L162,120 L154,126"/>
              <text class="dlbl" x="110" y="72" text-anchor="middle">Szélesség</text>
            </svg>

            <h4>Ha nem passzol</h4>
            <p>Nem visszatérítés, hanem javítás: ha a talpbetét nem passzol, vagy valami nem stimmel, <strong>egyszer újranyomtatom az eredeti ár 50%-áért</strong> (ortopéd vagy kényelmi) — egyszeri ajánlat ugyanarra a rendelésre. Csak válaszolj a rendelési emailedre, és megoldjuk.</p>
          </div>
        </details>

        <form id="insole-order" class="of" novalidate style="margin-top:1.5rem;text-align:left;">
          <div class="of-grid2">
            <div class="of-field">
              <span class="of-legend">Típus</span>
              <div class="of-choices">
                <label class="of-choice"><input type="radio" name="ins_type" value="Orthopedic" checked><span>Ortopéd</span></label>
                <label class="of-choice"><input type="radio" name="ins_type" value="Comfort"><span>Kényelmi</span></label>
              </div>
            </div>
            <div class="of-field">
              <span class="of-legend">Szín</span>
              <div class="of-choices" id="ins-colours"></div>
            </div>
          </div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-qty">Mennyiség (pár)</label><input type="number" id="ins-qty" name="ins_qty" min="1" value="1"></div>
            <div class="of-field"><label for="ins-shoe">EU-s cipőméret</label><input type="text" id="ins-shoe" name="shoe_size" placeholder="pl. 42"></div>
          </div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-len">Lábhossz (cm)</label><input type="number" id="ins-len" name="foot_length" step="0.1" placeholder="saroktól a leghosszabb lábujjig"></div>
            <div class="of-field"><label for="ins-wid">Láb szélessége (cm)</label><input type="number" id="ins-wid" name="foot_width" step="0.1" placeholder="legszélesebb pont"></div>
          </div>
          <p class="of-note" style="margin:-0.4rem 0 1rem;">Állj rá egy papírlapra a méréshez. Nem tudod, hogyan? <a href="#scan-guide" class="kiri-guide-open" style="color:var(--accent);text-decoration:none;">Nézd meg a szkennelési és méret-útmutatót →</a></p>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-name">Név</label><input type="text" id="ins-name" name="name" autocomplete="name"></div>
            <div class="of-field"><label for="ins-email">Email</label><input type="email" id="ins-email" name="email" autocomplete="email" required></div>
          </div>
          <div class="of-field"><label for="ins-phone">Telefon <span style="text-transform:none;letter-spacing:0;opacity:.7;">(opcionális)</span></label><input type="tel" id="ins-phone" name="phone" autocomplete="tel"></div>
          <div class="of-field" style="margin-bottom:0.4rem;"><span class="of-legend">Szállítási cím</span></div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-country">Ország</label><input type="text" id="ins-country" name="ship_country" autocomplete="country-name"></div>
            <div class="of-field"><label for="ins-postcode">Irányítószám</label><input type="text" id="ins-postcode" name="ship_postcode" autocomplete="postal-code"></div>
          </div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-city">Város</label><input type="text" id="ins-city" name="ship_city" autocomplete="address-level2"></div>
            <div class="of-field"><label for="ins-street">Utca</label><input type="text" id="ins-street" name="ship_street" autocomplete="address-line1"></div>
          </div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-number">Házszám / ajtó</label><input type="text" id="ins-number" name="ship_number"></div>
            <div class="of-field"><label for="ins-unit">Lakás, emelet <span style="text-transform:none;letter-spacing:0;opacity:.7;">(opcionális)</span></label><input type="text" id="ins-unit" name="ship_unit" autocomplete="address-line2"></div>
          </div>
          <div class="of-field"><label for="ins-notes">Megjegyzés <span style="text-transform:none;letter-spacing:0;opacity:.7;">(opcionális)</span></label><textarea id="ins-notes" name="notes" placeholder="Bármi, amit tudnom kell — illeszkedési preferenciák, lábproblémák, sürgősség, kérdések…"></textarea></div>
          <div class="insole-total"><span>Összesen</span> <strong id="ins-price">35 000 Ft</strong> <span class="iv-ship">+ szállítás (árajánlat szerint)</span></div>
          <div class="of-submit"><button class="btn btn-accent" type="button" id="ins-submit">Rendelés leadása</button><span class="of-note">Fizetés még nincs — megerősítem a pontos szállítást, majd elküldöm a számlát az email-szálban. Közben feltöltheted a szkenned.</span></div>
          <div class="of-done" id="ins-done" hidden><div class="of-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4 10-10"/></svg></div><h3>Rendelés megérkezett — nézd meg az emailed.</h3><p>Megerősítem a pontos szállítást, és elküldöm a számlát ugyanabban az email-szálban. Közben feltöltheted a lábszkenned (a link + a <a href="#scan-guide" class="kiri-guide-open" style="color:var(--accent);">szkennelési útmutató</a> az emailben van). A munka a számla kifizetése után indul.</p><div style="margin-top:1.25rem;"><button class="btn btn-outline" type="button" id="ins-again">Új rendelés leadása</button></div></div>
          <p class="of-note" id="ins-err" hidden style="color:#b3261e;margin-top:0.8rem;"></p>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  /* ── Insole flagship — store-style stacked layout ── */
  .insole-flagship { display: block; max-width: 860px; margin: 0 auto; padding: 0; background: transparent; border: none; }
  .ins-gallery { max-width: 760px; margin: 0 auto; }
  .ins-stage { position: relative; aspect-ratio: 16/9; border: var(--bw) solid var(--text); border-radius: var(--radius); overflow: hidden; background: var(--surface-2); }
  .ins-slide { position: absolute; inset: 0; opacity: 0; visibility: hidden; transition: opacity .4s ease; }
  .ins-slide.is-active { opacity: 1; visibility: visible; }
  .ins-slide iframe, .ins-slide img { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
  .ins-slide img { object-fit: contain; background: var(--surface-2); }
  .ins-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; width: 44px; height: 44px; border-radius: 50%; border: var(--bw) solid var(--text); background: rgba(var(--bg-rgb), 0.7); backdrop-filter: blur(4px); color: var(--text); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; line-height: 1; transition: background .15s, color .15s, border-color .15s; }
  .ins-arrow:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
  .ins-prev { left: 0.75rem; } .ins-next { right: 0.75rem; }
  .ins-dots { display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem; }
  .ins-dot { width: 9px; height: 9px; border-radius: 50%; border: var(--bw) solid var(--text); background: transparent; cursor: pointer; padding: 0; transition: background .15s; }
  .ins-dot.is-active { background: var(--accent); border-color: var(--accent); }

  .ins-desc { max-width: 640px; margin: 2.25rem auto 0; text-align: center; }
  .ins-desc .product-cat { font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); }
  .ins-desc h3 { font-size: 1.6rem; margin: 0.5rem 0 0.7rem; }
  .ins-desc > p { color: var(--muted); }
  .ins-more { margin: 1rem 0 0; text-align: left; border-top: var(--bw) solid var(--hairline); }
  .ins-more summary { cursor: pointer; list-style: none; font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); padding: 0.9rem 0; display: flex; align-items: center; gap: 0.5rem; }
  .ins-more summary::-webkit-details-marker { display: none; }
  .ins-more summary::after { content: '+'; margin-left: auto; font-size: 1.1rem; }
  .ins-more[open] summary::after { content: '\2212'; }
  .ins-more-body p { color: var(--muted); margin: 0 0 0.9rem; line-height: 1.7; }
  .ins-more-body strong { color: var(--text); }
  .ins-more-body h4 { font-family: var(--font-head); font-weight: 600; font-size: 1rem; color: var(--text); margin: 1.4rem 0 0.5rem; }
  .ins-more-body h4:first-child { margin-top: 0; }
  .ins-pick { background: var(--accent-soft); border-left: 3px solid var(--accent); border-radius: 0 var(--radius) var(--radius) 0; padding: 0.7rem 0.9rem; }
  .ins-measure-list { color: var(--muted); line-height: 1.7; margin: 0 0 0.9rem 1.1rem; }
  .ins-measure-list strong { color: var(--text); }
  .foot-guide { display: block; width: 100%; max-width: 240px; margin: 1rem auto 0.4rem; color: var(--text); }
  .foot-guide .foot { fill: var(--surface-2); stroke: currentColor; stroke-width: 2; }
  .foot-guide .dim { stroke: var(--accent); stroke-width: 1.6; fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .foot-guide .dlbl { fill: var(--muted); font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; }

  .insole-buy-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1.5rem; text-align: left; }
  .insole-variant { border: var(--bw) solid var(--hairline); border-radius: var(--radius); padding: 0.9rem 1rem; display: flex; flex-direction: column; gap: 0.6rem; }
  .insole-variant .iv-name { display: block; font-family: var(--font-head); font-weight: 600; font-size: 1.05rem; color: var(--text); }
  .insole-variant .iv-desc { display: block; font-size: 0.8rem; color: var(--muted); line-height: 1.45; margin-top: 0.15rem; }
  .insole-variant .iv-foot { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: auto; }
  .insole-variant .iv-foot .price { font-family: var(--font-head); font-weight: 700; font-size: 1.15rem; color: var(--text); }
  .insole-variant .iv-ship { font-family: var(--font-mono); font-weight: 400; font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
  .insole-variant .product-buy { padding: 0.55rem 1.15rem; }

  .upload-note { margin-top: 1.25rem; text-align: left; padding: 0.9rem 1.1rem; background: var(--accent-soft); border-left: 3px solid var(--accent); border-radius: 0 var(--radius) var(--radius) 0; font-size: 0.88rem; color: var(--muted); line-height: 1.6; }
  .upload-note strong { color: var(--text); }
  .upload-note a { color: var(--accent); text-decoration: none; font-family: var(--font-mono); font-size: 0.78rem; }
  @media (max-width: 600px) { .insole-buy-row { grid-template-columns: 1fr; } }
</style>

<!-- ─── Kiri Engine scan guide modal ─── -->
<div id="kiri-guide-overlay" class="kgm-overlay" hidden>
  <div class="kgm-box" role="dialog" aria-modal="true" aria-label="Hogyan szkenneld be a lábad">
    <button class="kgm-close" aria-label="Bezárás">&times;</button>
    <div class="kgm-content">
      <p class="mono-label" style="margin-bottom:0.5rem;">Talpbetét szkennelési útmutató</p>
      <h2 style="font-size:1.6rem;margin:0 0 0.5rem;">Hogyan szkenneld be a lábad</h2>
      <p style="color:var(--muted);line-height:1.65;margin-bottom:2rem;">A talpbetéteid a lábad 3D-szkennje alapján készülnek. Szkenneld be a <strong>Kiri Engine</strong> appal — ingyenes a telefonodon. Kb. 10 percet vesz igénybe.</p>

      <div class="kgm-apps">
        <a href="https://apps.apple.com/us/app/kiri-engine-3d-scanner-lidar/id1577127142" target="_blank" rel="noopener">App Store &rarr;</a>
        <a href="https://play.google.com/store/search?q=kiri+engine&c=apps" target="_blank" rel="noopener">Google Play &rarr;</a>
        <a href="https://www.kiriengine.app/webapp" target="_blank" rel="noopener">Web App &rarr;</a>
      </div>

      <!-- Step 1 -->
      <div class="kgm-step">
        <div class="kgm-n">1</div>
        <div class="kgm-body">
          <h3>Előkészítés</h3>
          <p>Tegyél egy <strong>A4-es papírlapot laposan a padlóra</strong>, és állj rá mezítláb. Tartsd a lábad mozdulatlanul és lazán.</p>
          <ul><li>Mezítláb, laposan és természetesen</li><li>Sima padló, rendes fény — közvetlen napfény nélkül</li></ul>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="kgm-step">
        <div class="kgm-n">2</div>
        <div class="kgm-body">
          <h3>Nyisd meg a Kiri Engine-t, és indíts egy szkennt</h3>
          <ol><li>Koppints a <strong>+</strong> gombra a főképernyő alján</li><li>Válaszd a <strong>Photo Scan</strong> opciót</li><li>Koppints a <strong>Take Photos / Video</strong> gombra</li></ol>
          <div class="kgm-img1">
            <img src="{{ '/assets/img/guides/kiri_instructions/1..jpg' | relative_url }}" loading="lazy" alt="Kiri Engine főképernyő: Photo Scan, Take Photos / Video, Upload from Local">
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="kgm-step">
        <div class="kgm-n">3</div>
        <div class="kgm-body">
          <h3>Szkenneld be a lábad</h3>
          <p>A legfontosabb adat a <strong>boltozat és a sarok formája</strong> — vidd a kamerát a lehető legalacsonyabbra. Legjobb technika: <strong>tedd a telefonod a padlóra</strong>, és lassan körözz a lábad körül. Így látszik a legtisztábban a boltozat.</p>
          <ul>
            <li>Célozz meg <strong>60–80 fotót</strong>, vagy használd a <strong>videó módot</strong> (gyakran pontosabb — mindkettő ingyenes)</li>
            <li>Mozogj lassan és egyenletesen — az elmosódott képkockák tönkreteszik a hálót</li>
            <li>Tartsd a lábad <strong>teljesen mozdulatlanul</strong> a szkennelés alatt</li>
            <li>Kerüld a mély árnyékokat; egy lámpa a túloldalon segít</li>
          </ul>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="kgm-step">
        <div class="kgm-n">4</div>
        <div class="kgm-body">
          <h3>Beállítás és feltöltés</h3>
          <p>Amikor befejezted a felvételt, az app megnyitja az <strong>Edit</strong> képernyőt. Állítsd be ezeket a feltöltés előtt:</p>
          <ul>
            <li><strong>Name</strong> — adj meg bármilyen nevet, hogy később megtaláld a szkennt</li>
            <li><strong>Polygon Count</strong> — válaszd a <strong>High</strong> opciót</li>
            <li><strong>Texture Resolution</strong> — válaszd a <strong>4K</strong> opciót</li>
            <li><strong>File Format</strong> — válaszd az <strong>STL</strong> formátumot</li>
          </ul>
          <p>Ezután koppints az <strong>Upload</strong> gombra. Várd meg, míg a folyamatjelző befejeződik, és megjelenik az <em>Upload Successful</em> megerősítés.</p>
          <div class="kgm-img2">
            <img src="{{ '/assets/img/guides/kiri_instructions/3.jpg' | relative_url }}" loading="lazy" alt="Edit képernyő: Name mező és Upload gomb">
            <img src="{{ '/assets/img/guides/kiri_instructions/2.jpg' | relative_url }}" loading="lazy" alt="Edit képernyő: High polygon, 4K textúra, STL formátum kiválasztva">
          </div>
          <div class="kgm-img2" style="margin-top:0.5rem;">
            <img src="{{ '/assets/img/guides/kiri_instructions/4.jpg' | relative_url }}" loading="lazy" alt="Feltöltés 100% folyamatjelző képernyő">
            <img src="{{ '/assets/img/guides/kiri_instructions/5.jpg' | relative_url }}" loading="lazy" alt="Upload Successful megerősítés">
          </div>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="kgm-step">
        <div class="kgm-n">5</div>
        <div class="kgm-body">
          <h3>Szerezd meg a letöltési linket, és küldd el</h3>
          <p>A feltöltés után egy <strong>Processing</strong> értesítést látsz — ez néhány percet vesz igénybe. Amint a 3D modell kész, nyisd meg, és koppints az <strong>Export</strong> gombra. Az Export lapon koppints alul a <strong>&bdquo;Can&rsquo;t receive emails?&rdquo;</strong> lehetőségre.</p>
          <div class="kgm-img2">
            <img src="{{ '/assets/img/guides/kiri_instructions/6.jpg' | relative_url }}" loading="lazy" alt="Processing értesítés a lábszkenn előnézeteivel">
            <img src="{{ '/assets/img/guides/kiri_instructions/7.jpg' | relative_url }}" loading="lazy" alt="Kész 3D lábmodell az Export gombbal">
          </div>
          <div class="kgm-img1" style="max-width:100%;margin-top:0.5rem;">
            <img src="{{ '/assets/img/guides/kiri_instructions/9.jpg' | relative_url }}" loading="lazy" alt="A lehetőség: másold ki a kiriengine.app megosztási letöltési linket — B lehetőség: letöltés a webappon keresztül">
          </div>
          <p style="margin-top:1rem;">Két lehetőséget látsz. Válaszd, amelyik egyszerűbb:</p>
          <ul>
            <li><strong>A lehetőség — küldd a linket:</strong> másold ki a <code>kiriengine.app/share/d&hellip;</code> letöltési linket, és <strong>illeszd be a rendelési emailedre adott válaszba</strong>. Onnan letöltöm a modellt.</li>
            <li><strong>B lehetőség — küldd a fájlt:</strong> jelentkezz be a <a href="https://www.kiriengine.app/webapp" target="_blank" rel="noopener" style="color:var(--accent);">kiriengine.app/webapp</a> oldalra számítógépen, töltsd le az STL fájlt, majd <strong>töltsd fel a privát Dropbox mappába</strong> a rendelési emailedből.</li>
          </ul>
          <div class="kgm-note"><strong>Csak válasz vagy Dropbox</strong> — bármely más módszer nem kapcsolódik a rendelésedhez. Add meg az <strong>EU-s cipőméreted</strong> is, ha még nem tetted.</div>
        </div>
      </div>

      <hr style="border:none;border-top:var(--bw) solid var(--hairline);margin:2rem 0;">
      <p style="color:var(--muted);font-size:0.88rem;line-height:1.7;"><strong style="color:var(--text);">Ennyi.</strong> 1 munkanapon belül visszaigazolom a beérkezést, és jelzem, amikor a talpbetéteid a nyomtatási sorba kerülnek.</p>
    </div>
  </div>
</div>

<style>
  .kgm-overlay { position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.65);display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:2rem 1rem 4rem; }
  .kgm-box { position:relative;background:var(--bg);border:var(--bw) solid var(--text);border-radius:var(--radius);max-width:640px;width:100%;padding:2.5rem 2rem 2rem; }
  .kgm-close { position:absolute;top:1rem;right:1rem;width:2rem;height:2rem;border:var(--bw) solid var(--text);border-radius:50%;background:transparent;color:var(--text);font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center; }
  .kgm-close:hover { background:var(--accent);color:#fff;border-color:var(--accent); }
  .kgm-apps { display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.75rem; }
  .kgm-apps a { font-family:var(--font-mono);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);border:var(--bw) solid var(--accent);border-radius:var(--radius);padding:.35rem .7rem;text-decoration:none;transition:background .15s,color .15s; }
  .kgm-apps a:hover { background:var(--accent);color:#fff; }
  .kgm-step { display:grid;grid-template-columns:2.25rem 1fr;gap:0 1rem;margin-bottom:2rem;align-items:start; }
  .kgm-n { width:2.25rem;height:2.25rem;border-radius:50%;background:var(--accent);color:#fff;font-family:var(--font-head);font-weight:700;font-size:.9rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:.1rem; }
  .kgm-body h3 { font-size:1rem;margin:0 0 .45rem;line-height:1.3; }
  .kgm-body p,.kgm-body li { color:var(--muted);line-height:1.65;font-size:.92rem; }
  .kgm-body ul,.kgm-body ol { margin:.3rem 0 .6rem 1.1rem; }
  .kgm-body strong { color:var(--text); }
  .kgm-img1 { grid-column:1;margin-top:.75rem;border-radius:var(--radius);overflow:hidden;border:var(--bw) solid var(--hairline);max-width:240px; }
  .kgm-img1 img { display:block;width:100%;height:auto; }
  .kgm-img2 { display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-top:.75rem; }
  .kgm-img2 img { display:block;width:100%;height:auto;border-radius:var(--radius);border:var(--bw) solid var(--hairline); }
  .kgm-note { background:var(--accent-soft);border-left:3px solid var(--accent);border-radius:0 var(--radius) var(--radius) 0;padding:.7rem .9rem;color:var(--muted);font-size:.86rem;line-height:1.6;margin-top:.75rem; }
  .kgm-note strong { color:var(--text); }
  @media (max-width:500px) { .kgm-img2 { grid-template-columns:1fr; } .kgm-box { padding:2rem 1rem 1.5rem; } }
  /* insole order form total */
  #insole-order { max-width:560px; margin-left:auto; margin-right:auto; }
  .insole-total { display:flex; align-items:baseline; gap:0.5rem; margin:1.25rem 0 0.25rem; font-family:var(--font-mono); }
  .insole-total span:first-child { font-size:0.7rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); }
  .insole-total strong { font-family:var(--font-head); font-weight:700; font-size:1.4rem; color:var(--text); }
</style>

<script>
  // Commerce hooks — Stripe links
  (function () {
    document.querySelectorAll('[data-stripe-link]').forEach(function (a) {
      var l = a.getAttribute('data-stripe-link');
      if (l) { a.setAttribute('href', l); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
  })();

  // Kiri Engine scan guide modal — deep-linkable via /hu/forge/products/#scan-guide
  (function () {
    var overlay = document.getElementById('kiri-guide-overlay');
    if (!overlay) return;
    function openModal() { overlay.removeAttribute('hidden'); document.body.style.overflow = 'hidden'; if (location.hash !== '#scan-guide') history.replaceState(null, '', '#scan-guide'); }
    function closeModal() { overlay.setAttribute('hidden', ''); document.body.style.overflow = ''; if (location.hash === '#scan-guide') history.replaceState(null, '', location.pathname + location.search); }
    document.querySelectorAll('.kiri-guide-open').forEach(function (el) {
      el.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
    });
    overlay.querySelector('.kgm-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    if (location.hash === '#scan-guide') openModal();   // open straight from an email link
  })();

  // Insole gallery — step between the looping video and the 3 clean stills.
  (function () {
    var g = document.getElementById('ins-gallery'); if (!g) return;
    var slides = g.querySelectorAll('.ins-slide');
    var dots = g.querySelectorAll('.ins-dot');
    var i = 0, n = slides.length;
    function go(k) {
      i = (k + n) % n;
      slides.forEach(function (s, x) { s.classList.toggle('is-active', x === i); });
      dots.forEach(function (d, x) { d.classList.toggle('is-active', x === i); });
    }
    g.querySelector('.ins-prev').addEventListener('click', function () { go(i - 1); });
    g.querySelector('.ins-next').addEventListener('click', function () { go(i + 1); });
    dots.forEach(function (d) { d.addEventListener('click', function () { go(parseInt(d.getAttribute('data-go'), 10)); }); });
  })();

  // Insole order form → posts to the unified Intake webhook (routes by form_type).
  (function () {
    var WEBHOOK = 'https://hook.eu1.make.com/u91iw4wqrdqdnjydmg2ttsi56y15c1a9';
    var form = document.getElementById('insole-order'); if (!form) return;
    var PRICES = { Orthopedic: 35000, Comfort: 30000 };
    var COLOURS = { Orthopedic: ['Blue', 'Black'], Comfort: ['Red', 'Black'] };
    // Display labels (HU) — the VALUE stays English so Make/Notion mapping is unchanged.
    var COLOUR_LABELS = { Blue: 'Kék', Black: 'Fekete', Red: 'Piros' };
    // Customer-facing colour → real inventory SKU. id = Notion Inventory page id
    // (lets Make set the relation directly, no name lookup). name kept as fallback.
    var MATERIAL = {
      'Orthopedic|Blue':  { name: 'Fiberlogy FiberFlex 30D Blue', id: '38b0f4e2-8881-8139-9777-f6c4357e21a7' },
      'Orthopedic|Black': { name: 'Recreus Filaflex Foamy Black', id: '3880f4e2-8881-81e3-b184-efe14da230f3' },
      'Comfort|Red':      { name: 'Recreus Filaflex Red',         id: '3880f4e2-8881-81c6-974f-eba99a1b6efd' },
      'Comfort|Black':    { name: 'Recreus Filaflex Foamy Black', id: '3880f4e2-8881-81e3-b184-efe14da230f3' }
    };
    var colWrap = document.getElementById('ins-colours');
    var priceEl = document.getElementById('ins-price');
    var errEl = document.getElementById('ins-err');
    function fmt(n) { return n.toLocaleString('hu-HU') + ' Ft'; }
    function curType() { var c = form.querySelector('input[name=ins_type]:checked'); return c ? c.value : 'Orthopedic'; }
    function renderColours() {
      var t = curType(); colWrap.innerHTML = '';
      COLOURS[t].forEach(function (col, i) {
        colWrap.insertAdjacentHTML('beforeend', '<label class="of-choice"><input type="radio" name="ins_colour" value="' + col + '"' + (i === 0 ? ' checked' : '') + '><span>' + (COLOUR_LABELS[col] || col) + '</span></label>');
      });
      priceEl.textContent = fmt(PRICES[t]);
    }
    form.querySelectorAll('input[name=ins_type]').forEach(function (r) { r.addEventListener('change', renderColours); });
    renderColours();

    document.getElementById('ins-submit').addEventListener('click', function () {
      var btn = this; errEl.hidden = true;
      var email = form.querySelector('[name=email]');
      if (!email.value) { errEl.textContent = 'Kérlek, add meg az email-címed, hogy elküldhessem a számlát.'; errEl.hidden = false; email.focus(); return; }
      var type = curType();
      var colour = (form.querySelector('input[name=ins_colour]:checked') || {}).value || '';
      var data = new URLSearchParams();
      var pfval = function(n) { var el = form.querySelector('[name=' + n + ']'); return el ? el.value : ''; };
      data.append('form_type', 'product');
      data.append('_secret', 'forge3po');
      data.append('lang', 'hu');
      data.append('deadline', '');
      ['name', 'email', 'phone', 'ship_country', 'ship_postcode', 'ship_city', 'ship_street', 'ship_number', 'ship_unit'].forEach(function (n) { data.append(n, pfval(n)); });
      // Insole-only fields (no equivalent on the service form) — needed for the fit.
      ['shoe_size', 'foot_length', 'foot_width'].forEach(function (n) { data.append(n, pfval(n)); });
      var qty = parseInt((form.querySelector('[name=ins_qty]') || {}).value, 10) || 1;
      var mat = MATERIAL[type + '|' + colour] || { name: '', id: '' };
      data.append('workflows', 'Scan-upload');
      data.append('material_name', mat.name);
      data.append('material_id', mat.id);
      data.append('notes', pfval('notes'));
      data.append('ins_type', type);
      data.append('ins_colour', colour);
      data.append('quantity', String(qty));
      data.append('cart', 'Insole · ' + type + ' · ' + colour);
      btn.disabled = true; btn.textContent = 'Küldés…';
      fetch(WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() })
        .then(function (r) { if (!r.ok) throw new Error('the server returned ' + r.status); return r; })
        .then(function () {
          document.getElementById('ins-done').hidden = false;
          Array.prototype.forEach.call(form.querySelectorAll('.of-grid2, .of-field, .of-submit, .insole-total'), function (e) { e.style.display = 'none'; });
        })
        .catch(function (e) {
          errEl.textContent = "Nem sikerült elküldeni — " + e.message + ". Próbáld újra, vagy írj a 3po@3po3d.com címre.";
          errEl.hidden = false; btn.disabled = false; btn.textContent = 'Rendelés leadása';
        });
    });
    var again = document.getElementById('ins-again');
    if (again) again.addEventListener('click', function () { location.reload(); });
  })();
</script>
