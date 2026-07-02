---
title: "FORGE — Szolgáltatások"
description: "FDM nyomtatás, 3D szkennelés és modellezés — állítsd össze, amit a munkád igényel, nézd meg, hogyan működik a műhely, és kérj árajánlatot egyetlen oldalon."
permalink: /hu/forge/services/
lang: hu
has_translation: true
---

{% include forge-subnav.html %}

<link rel="stylesheet" href="{{ '/assets/work-order.css' | relative_url }}">

<style>
  /* ── Material & colour picker ── */
  .mat-types { display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.6rem; }
  .mat-type { font-family:var(--font-mono); font-size:0.7rem; letter-spacing:0.08em; text-transform:uppercase; padding:0.45rem 0.8rem; border:var(--bw) solid var(--hairline); border-radius:var(--radius); background:var(--bg); color:var(--muted); cursor:pointer; transition:background .15s,border-color .15s,color .15s; }
  .mat-type:hover { border-color:var(--accent); color:var(--text); }
  .mat-type.is-active { background:var(--accent); border-color:var(--accent); color:#fff; }
  .mat-picker { border:var(--bw) solid var(--hairline); border-radius:var(--radius); padding:0.7rem; margin-bottom:0.5rem; }
  .mat-search { width:100%; margin-bottom:0.7rem; font-family:var(--font-body); font-size:0.9rem; padding:0.5rem 0.7rem; border:var(--bw) solid var(--hairline); border-radius:var(--radius); background:var(--bg); color:var(--text); }
  .mat-search:focus { outline:none; border-color:var(--accent); }
  .mat-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(84px,1fr)); gap:0.5rem; max-height:320px; overflow-y:auto; }
  .mat-swatch { position:relative; display:flex; flex-direction:column; align-items:center; gap:0.25rem; padding:0.35rem; border:var(--bw) solid var(--hairline); border-radius:var(--radius); background:transparent; cursor:pointer; transition:border-color .15s,transform .1s; }
  .mat-swatch:hover { border-color:var(--accent); transform:translateY(-1px); }
  .mat-swatch.is-active { border-color:var(--accent); box-shadow:0 0 0 2px var(--accent); }
  /* in-stock = highlighted (white card + green dot); out-of-stock stays plain */
  .mat-swatch.in-stock { background:#fff; border-color:var(--text); }
  .mat-swatch.in-stock::after { content:''; position:absolute; top:5px; right:5px; width:7px; height:7px; border-radius:50%; background:#3aaa5e; box-shadow:0 0 0 2px #fff; }
  .mat-swatch img { width:100%; aspect-ratio:1; object-fit:cover; border-radius:calc(var(--radius) - 2px); background:var(--surface-2); }
  .mat-swatch__c { font-size:0.62rem; line-height:1.2; color:var(--muted); text-align:center; }
  .mat-selected { display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--text); }
  .mat-selected strong { color:var(--accent); }
  .mat-clear { font-family:var(--font-mono); font-size:0.65rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--accent); background:none; border:none; cursor:pointer; text-decoration:underline; padding:0; }
</style>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">01 — Szolgáltatások</p>
      <h2>Minden a modelltől a kész felületig.</h2>
      <p class="lead">Teljes FDM folyamat. Bekapcsolódhatsz bármelyik ponton — egy vázlat, egy STL, egy törött alkatrész vagy valami, amit beszkennelnél — és kész tárgyat viszel el. Olvasd el, mit csinálnak az egyes szolgáltatások, majd állítsd össze azokat, amelyekre a munkádnak szüksége van, egyetlen árajánlatkérésben.</p>
    </div>

    <div class="cart-note">
      <strong>Egy árajánlat, egymásra épülő szolgáltatások.</strong> Egyetlen munka több szolgáltatást is
      kombinálhat — beszkenneljük, modellezzük, kinyomtatjuk —, és <strong>egyetlen árajánlatot</strong>
      kapsz az egészre. A külön munkák továbbra is külön kérésként mennek. A szolgáltatásoknak nincs előre
      megadott áruk: előbb árajánlatot adok, te jóváhagyod, aztán megy nyomtatásba.
    </div>

    <!-- CTA card straight after the intro -->
    <div class="order-band" style="margin:1.5rem 0 2.5rem;">
      <div>
        <p class="ob-label">Amikor készen állsz</p>
        <h3>Tudod, mire van szükséged? Ugorj az árajánlathoz.</h3>
        <p>Válaszd ki a szolgáltatásokat, adj meg pár részletet, és küldd el. Válaszolok az anyagokkal, a határidővel és egy fix árral.</p>
      </div>
      <div class="hero-cta" style="margin:0;">
        <a href="#order" class="btn btn-accent" data-start-order>Árajánlatot kérek →</a>
      </div>
    </div>

    <div class="shop" id="services-shop">

      <div class="shop-row">
        <button class="shop-head" type="button" aria-expanded="false">
          <span class="shop-title">FDM / FFF nyomtatás</span>
          <span class="shop-tag">A fájlod nyomtatása · PLA · PETG · ABS / ASA · TPU</span>
          <span class="shop-toggle" aria-hidden="true"></span>
        </button>
        <div class="shop-body">
          <p>Küldj egy modellt, és tisztán, méretpontosan kinyomtatom — a szilárdságra, felületre vagy sebességre hangolt profillal, attól függően, mire való az alkatrész. <strong>A nagy formátum alapból adott</strong> — az 500&times;500&times;500&nbsp;mm-ig terjedő alkatrészek egy darabban készülnek el, ragasztott illesztések nélkül.</p>
          <p><strong>Én választom ki a munkához illő gépet</strong> — a nyitott Sovol SV08&nbsp;Max a nagy PLA/PETG/ABS munkákhoz, a zárt, TPU-ra hangolt Creality K1&nbsp;Max a rugalmas anyagokhoz és a kisebb, zárt nyomatokhoz. Nem a nyomtatót választod; az eredményt választod.</p>
          <ul>
            <li><strong>Anyagok:</strong> PLA, PETG, ABS / ASA, TPU (rugalmas).</li>
            <li><strong>Az utómunka a rendelés része.</strong> Minden nyomatot alapból elfogadható szintre tisztítok. Többet szeretnél — erős csiszolást, alapozást, festést, több részből álló összeszerelést? Pipáld be az <em>Utómunka hozzáadása</em> opciót rendeléskor, és írd le; egyedi árazással kerül rá.</li>
          </ul>
          <button class="btn btn-accent" type="button" data-start-order data-svc="fdm">Nyomtatást rendelek &rarr;</button>
        </div>
      </div>

      <div class="shop-row">
        <button class="shop-head" type="button" aria-expanded="false">
          <span class="shop-title">3D szkennelés</span>
          <span class="shop-tag">Valódi tárgy → tiszta, nyomtatható modell</span>
          <span class="shop-toggle" aria-hidden="true"></span>
        </button>
        <div class="shop-body">
          <p>Alakíts egy valódi tárgyat — vagy egy testrészt — tiszta, vízhatlan modellé, amit kinyomtathatsz vagy továbbépíthetsz. Ez a kiindulópont a testre szabott munkákhoz (mint a talpbetétek) és egy olyan alkatrész visszafejtéséhez, amelyhez nem jutsz hozzá fájlként.</p>
          <ul>
            <li>A háló tisztítása és javítása benne van — használható modellt kapsz, nem nyers szkennt.</li>
            <li>Természetesen párosul a nyomtatással vagy modellezéssel: szkennelés &rarr; finomítás &rarr; nyomtatás, mind egy helyen. <strong>Ha szkennelést kérsz, a modellezést automatikusan beleteszem</strong> — egy nyers szkenn mindig tisztítást igényel, mielőtt nyomtatható lenne.</li>
          </ul>
          <button class="btn btn-accent" type="button" data-start-order data-svc="scan">Szkennelést foglalok &rarr;</button>
        </div>
      </div>

      <div class="shop-row">
        <button class="shop-head" type="button" aria-expanded="false">
          <span class="shop-title">Modellezés és utómunka</span>
          <span class="shop-tag">Nincs fájl? Rossz a fájl? Nyomtathatóvá teszem</span>
          <span class="shop-toggle" aria-hidden="true"></span>
        </button>
        <div class="shop-body">
          <p>Nincs fájlod? Megmodellezem vázlatból, fotóból vagy leírásból. Rossz a fájl? Megjavítom — javítások, vízhatlan hálók, nyomtatás-előkészítés és kisebb tervezési módosítások, mielőtt egyáltalán a tálcára kerülne.</p>
          <ul>
            <li>CAD-modellezés, hálójavítás és nyomtatás-előkészítés.</li>
            <li>Kisebb tervezési módosítások — illesztés-finomítás, rögzítési pontok, tűrések.</li>
          </ul>
          <button class="btn btn-accent" type="button" data-start-order data-svc="model">Modellezést kérek &rarr;</button>
        </div>
      </div>

      <div class="shop-row">
        <button class="shop-head" type="button" aria-expanded="false">
          <span class="shop-title">Animáció és 3D grafika</span>
          <span class="shop-tag">Termékfilmek és mozgókép → Portfólió</span>
          <span class="shop-toggle" aria-hidden="true"></span>
        </button>
        <div class="shop-body">
          <p>Nem csak kinyomtatva, hanem mozgásban is szeretnéd a terméket? A teljes mozgókép és termékanimáció — modellezés, look-dev, világítás és renderelés — a Portfólió stúdiómon fut, nem a nyomtatási soron.</p>
          <ul>
            <li>Termékanimáció, mozgókép, look-dev.</li>
            <li>Gyakran párosul egy nyomtatott darabbal: animáljuk le, majd kinyomtatjuk a hős kelléket. Indíts egy animációs projektet, vagy nézd meg előbb a Portfóliót.</li>
          </ul>
          <a class="btn btn-outline" href="{{ '/portfolio/' | relative_url }}">Nézd meg a Portfóliót &rarr;</a>
          <button class="btn btn-accent" type="button" data-open-project>Indíts egy animációs projektet &rarr;</button>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ─── Process (merged from the old Process page) ─── -->
<section class="section" id="process" style="border-top: var(--bw) solid var(--hairline);">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">Hogyan működik</p>
      <h2>Hogyan halad egy munka a műhelyen át.</h2>
      <p class="lead">Öt szakasz, teljesen házon belül. Bármelyiknél bekapcsolódhatsz — és mindig fix árat látsz, mielőtt bármi nyomtatásba menne.</p>
    </div>

    <div style="display:grid; grid-template-columns: 1.15fr 0.85fr; gap:3.5rem; align-items:start;" class="process-cols">
      <div class="steps">
        <div class="step on"><div class="step-n">1</div><div><h3>Szkennelés vagy modellezés</h3><p>Indulj a saját fájlodból, vagy beszkennelek egy valódi tárgyat / megmodellezem a nulláról. Minden javításra és vízhatlanná tételre kerül a szeletelés előtt.</p></div></div>
        <div class="step"><div class="step-n">2</div><div><h3>Szeletelés és árajánlat</h3><p>Az anyag, a kitöltés, az orientáció és a támaszok beállításra kerülnek. Fix árat és határidőt kapsz, mielőtt bármi nyomtatásba menne.</p></div></div>
        <div class="step"><div class="step-n">3</div><div><h3>Nyomtatás</h3><p>A megfelelő gépen fut — nagy formátumú a nagy munkákhoz, a zárt, TPU-ra hangolt gép a rugalmas anyagokhoz. A nagy alkatrészek egy darabban készülnek el.</p></div></div>
        <div class="step"><div class="step-n">4</div><div><h3>Utómunka</h3><p>Minden nyomatot alapból megtisztítok; az opcionális extra utómunka magában foglalja az erős csiszolást, alapozást, festést és a több részből álló összeszerelést.</p></div></div>
        <div class="step"><div class="step-n">5</div><div><h3>Átadás</h3><p>Helyben átvehető, vagy csomagolva és kiszállítva. A forrásfájlokat kérésre visszaadom.</p></div></div>
      </div>

      <aside>
        <p class="mono-label" style="margin-bottom:1rem;">Műhely-specifikáció</p>
        <div class="spec-stack">
          <div class="spec-card"><span class="k">Nagy formátum</span><span class="v">Sovol SV08 Max — 500 × 500 × 500 mm, nyitott</span></div>
          <div class="spec-card"><span class="k">Rugalmas / zárt</span><span class="v">Creality K1 Max — 300 × 300 × 300 mm, TPU-ra hangolt</span></div>
          <div class="spec-card"><span class="k">Eljárás</span><span class="v">FDM / FFF (filament)</span></div>
          <div class="spec-card"><span class="k">Anyagok</span><span class="v">PLA, PETG, ABS, ASA, TPU</span></div>
          <div class="spec-card"><span class="k">Gépválasztás</span><span class="v">Automatikus — méret és anyag alapján</span></div>
        </div>
        <p class="mono-label" style="margin:1.75rem 0 1rem;">Jó tudni</p>
        <div class="spec-stack">
          <div class="spec-card"><span class="k">Átfutás</span><span class="v">Jellemzően 1–5 nap az árajánlat jóváhagyása után</span></div>
          <div class="spec-card"><span class="k">Szállítás</span><span class="v">Helyi átvétel, vagy csomagolva &amp; kiszállítva (külön díjazva)</span></div>
          <div class="spec-card"><span class="k">Egyedi munka</span><span class="v">Egyedi / szkenn-alapú tételek: korrekciós újranyomtatás, nem visszatérítés</span></div>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- ─── Order form (merged from the old Order page) ─── -->
<section class="section" id="order" style="border-top: var(--bw) solid var(--hairline);">
  <div class="container" style="max-width:760px;">
    <div class="section-head">
      <p class="mono-label">02 — Árajánlatkérés</p>
      <h2>Állítsd össze a munkád.</h2>
      <p class="lead">Pipálj be minden szolgáltatást, amire a munkának szüksége van — ezek egyetlen árajánlatba állnak össze. Add meg a részleteket, és visszajelzek az anyagokkal, a határidővel és egy fix árral. Miután elküldted, emailben küldök egy privát, biztonságos mappát, ahová beteheted a fájljaid. A fix áras termékeket (a talpbetéteket) a <a href="{{ '/hu/forge/products/' | relative_url }}" style="color:var(--accent);text-decoration:none;">Termékek</a> oldalon rendelheted meg.</p>
    </div>

    <form id="order-form" data-webhook="https://hook.eu1.make.com/u91iw4wqrdqdnjydmg2ttsi56y15c1a9" novalidate>
      <input type="hidden" name="_secret" value="forge3po">
      <input type="hidden" name="form_type" value="service">
      <input type="hidden" name="lang" value="hu">
      <input type="hidden" name="services" value="">
      <input type="hidden" name="shoe_size" value="">
      <input type="hidden" name="foot_length" value="">
      <input type="hidden" name="foot_width" value="">
      <div class="hp" aria-hidden="true"><label for="of_hp_field">Hagyd üresen ezt a mezőt</label><input type="text" id="of_hp_field" name="of_hp_field" tabindex="-1" autocomplete="off"></div>
      <div class="of-wrap of">
        <div class="of-formbody">

          <!-- 1 · Services (stackable) -->
          <div class="of-block">
            <div class="of-field">
              <span class="of-legend">Mire van szükséged? <span style="text-transform:none;letter-spacing:0;opacity:.7;">— jelöld be, ami rád vonatkozik</span></span>
              <div class="of-choices">
                <label class="of-choice"><input type="checkbox" name="service" value="fdm"><span>FDM nyomtatás</span></label>
                <label class="of-choice"><input type="checkbox" name="service" value="scan"><span>3D szkennelés</span></label>
                <label class="of-choice"><input type="checkbox" name="service" value="model"><span>Modellezés és utómunka</span></label>
              </div>
              <p class="of-note" id="gate-hint" hidden style="margin-top:0.6rem;">Hozzáadva a <strong>Modellezés és utómunka</strong> — egy nyers szkenn mindig tisztítást igényel a nyomtatás előtt. Vedd ki a pipát, ha csak a nyers szkennadatot szeretnéd.</p>
            </div>
          </div>

          <!-- 2 · Per-service details (revealed as you tick) -->
          <div class="of-svc" data-svc-block="fdm" hidden>
            <p class="of-block__t"><span class="of-step__n">N</span>Nyomtatási részletek</p>
            <div class="of-field">
              <label>Anyag és szín <span style="text-transform:none;letter-spacing:0;opacity:.7;">(opcionális — ha kihagyod, ajánlok egyet)</span></label>
              <input type="hidden" name="fdm_material" id="fdm_material" value="Recommend for me">
              <input type="hidden" name="material_name" id="material_name" value="">
              <input type="hidden" name="material_color" id="material_color" value="">
              <input type="hidden" name="material_id" id="material_id" value="">
              <div class="mat-types">
                <button type="button" class="mat-type is-active" data-mtype="Recommend for me">Ajánlj nekem</button>
                <button type="button" class="mat-type" data-mtype="PLA" data-group="PLA">PLA</button>
                <button type="button" class="mat-type" data-mtype="PETG" data-group="PETG">PETG</button>
                <button type="button" class="mat-type" data-mtype="ABS" data-group="ABS">ABS / ASA</button>
                <button type="button" class="mat-type" data-mtype="TPU" data-group="TPU">TPU</button>
              </div>
              <div class="mat-picker" id="mat-picker" hidden>
                <input type="text" class="mat-search" id="mat-search" placeholder="Színek szűrése…" autocomplete="off">
                <div class="mat-grid" id="mat-grid">
                  {% for m in site.data.forge_materials %}<button type="button" class="mat-swatch{% if m.in_stock %} in-stock{% endif %}" data-group="{{ m.group }}" data-type="{{ m.type }}" data-name="{{ m.name | escape }}" data-colour="{{ m.colour | escape }}" data-id="{{ m.id }}" data-instock="{% if m.in_stock %}1{% else %}0{% endif %}" title="{{ m.name | escape }}"><img src="{{ m.img | relative_url }}" loading="lazy" alt="{{ m.name | escape }}"><span class="mat-swatch__c">{{ m.colour | escape }}</span></button>{% endfor %}
                </div>
              </div>
              <div class="mat-selected" id="mat-selected" hidden><span>Kiválasztva: <strong id="mat-selected-name"></strong></span><button type="button" class="mat-clear" id="mat-clear">módosít</button></div>
              <p class="of-note" id="mat-leadnote" hidden style="margin-top:0.6rem;">Fontos: egy adott szín <strong>rendelésre készül</strong> — ha nincs a polcon, beszerzem, ami kb. <strong>1,5 hetet</strong> ad a szokásos átfutáshoz. Válaszd az <em>Ajánlj nekem</em> opciót a leggyorsabb eredményért.</p>
            </div>
            <div class="of-grid2">
              <div class="of-field"><label>Mennyiség</label><input type="number" name="fdm_quantity" min="1" value="1"></div>
              <div class="of-field"><label>Kb. méret (mm)</label><input type="text" name="fdm_size" placeholder="pl. 220 × 140 × 90 — max 500³"></div>
            </div>
            <label class="of-choice" style="margin-top:0.25rem;"><input type="checkbox" name="fdm_finishing" value="yes" id="fdm-finish"><span>Utómunka hozzáadása — erős csiszolás, alapozás, festés, összeszerelés (egyedi árazással)</span></label>
            <div class="of-field" id="fdm-finish-notes" hidden style="margin-top:0.9rem;"><label>Milyen utómunkára van szükséged?</label><textarea name="fdm_finishing_notes" placeholder="pl. simítás + alapozás + matt fekete festés; a két fél összeszerelése…"></textarea></div>
          </div>

          <div class="of-svc" data-svc-block="scan" hidden>
            <p class="of-block__t"><span class="of-step__n">S</span>Szkennelési részletek</p>
            <div class="of-field"><label>Mit kell beszkennelni?</label><textarea name="scan_what" placeholder="A tárgy vagy testrész, hozzávetőleges méretek, és hogy mit fogsz kezdeni a modellel…"></textarea></div>
          </div>

          <div class="of-svc" data-svc-block="model" hidden>
            <p class="of-block__t"><span class="of-step__n">M</span>Modellezési részletek</p>
            <div class="of-field"><label>Írd le a modellt vagy a javítást</label><textarea name="model_what" placeholder="Modellezés vázlatból/fotóból, rossz háló javítása, illesztés/tűrés finomítása…"></textarea></div>
          </div>

          <!-- 3 · Brief + contact -->
          <div class="of-block" style="border-top: var(--bw) solid var(--hairline); padding-top:1.4rem; margin-top:0.5rem;">
            <div class="of-field"><label>Bármi más? <span style="text-transform:none;letter-spacing:0;opacity:.7;">(a brief)</span></label><textarea name="notes" placeholder="Mi ez, mire való, határidők, referenciák…"></textarea></div>
            <p class="of-note" style="margin:-0.4rem 0 1.1rem;">Miután elküldted, emailben küldök egy privát, biztonságos mappát, ahová beteheted az STL / STEP / 3MF / szkenn fájlod — itt nem kell feltöltened.</p>
            <div class="of-grid2">
              <div class="of-field"><label for="of-name">Név</label><input type="text" id="of-name" name="name" placeholder="A neved" autocomplete="name"></div>
              <div class="of-field"><label for="of-email">Email</label><input type="email" id="of-email" name="email" placeholder="te@email.com" autocomplete="email" required></div>
            </div>
            <div class="of-grid2">
              <div class="of-field"><label for="of-phone">Telefon <span style="text-transform:none;letter-spacing:0;opacity:.7;">(opcionális)</span></label><input type="tel" id="of-phone" name="phone" placeholder="Telefonszám" autocomplete="tel"></div>
              <div class="of-field"><label for="deadline-picker">Határidő <span style="text-transform:none;letter-spacing:0;opacity:.7;">(opcionális — min. 7 nap)</span></label><input type="date" name="deadline" id="deadline-picker" autocomplete="off"></div>
            </div>
            <div class="of-field" style="margin-bottom:0.5rem;"><span class="of-legend">Szállítási cím <span style="text-transform:none;letter-spacing:0;opacity:.7;">(opcionális — postázott rendelésekhez)</span></span></div>
            <div class="of-grid2">
              <div class="of-field"><label for="ship-country">Ország</label><input type="text" id="ship-country" name="ship_country" autocomplete="country-name"></div>
              <div class="of-field"><label for="ship-postcode">Irányítószám</label><input type="text" id="ship-postcode" name="ship_postcode" autocomplete="postal-code"></div>
            </div>
            <div class="of-grid2">
              <div class="of-field"><label for="ship-city">Város</label><input type="text" id="ship-city" name="ship_city" autocomplete="address-level2"></div>
              <div class="of-field"><label for="ship-street">Utca</label><input type="text" id="ship-street" name="ship_street" autocomplete="address-line1"></div>
            </div>
            <div class="of-grid2">
              <div class="of-field"><label for="ship-number">Házszám / ajtó</label><input type="text" id="ship-number" name="ship_number"></div>
              <div class="of-field"><label for="ship-unit">Lakás, emelet, épület <span style="text-transform:none;letter-spacing:0;opacity:.7;">(opcionális)</span></label><input type="text" id="ship-unit" name="ship_unit" autocomplete="address-line2"></div>
            </div>
            <div class="of-submit"><button class="btn btn-accent" type="button" data-of-submit>Kérés elküldése</button><span class="of-note">Most nincs fizetés — a szolgáltatásokra előbb árajánlatot adok.</span></div>
            <div class="of-error" hidden style="margin-top:0.9rem;padding:0.85rem 1rem;background:#fdecea;border-left:3px solid #d64545;border-radius:0 var(--radius) var(--radius) 0;color:#8a2a2a;font-size:0.9rem;line-height:1.5;"><strong>Nem sikerült elküldeni.</strong> <span class="of-error-msg">Valami hiba történt. Kérlek, próbáld újra.</span></div>
          </div>
        </div>

        <div class="of-done" hidden><div class="of-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4 10-10"/></svg></div><h3>Kérés megérkezett — nézd meg az emailed.</h3><p>Pár percen belül emailben megkapod a privát, biztonságos feltöltő mappád. Tedd bele a fájljaid, és amint láttam őket, küldök egy fix árajánlatot. Semmi sem megy nyomtatásba, amíg jóvá nem hagyod.</p><button type="button" class="btn btn-outline" data-of-again style="margin-top:1.1rem;">Új kérés küldése</button></div>
      </div>
    </form>
  </div>
</section>

<iframe name="order_sink" hidden></iframe>
<script src="{{ '/assets/work-order.js' | relative_url }}"></script>
<script>
  (function () {
    // ── Accordion: expand a service to read it before ordering ──
    var shop = document.getElementById('services-shop');
    if (shop) {
      shop.querySelectorAll('.shop-head').forEach(function (head) {
        head.addEventListener('click', function () {
          var row = head.closest('.shop-row');
          var open = row.classList.toggle('is-open');
          head.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      });
    }

    var form = document.getElementById('order-form');
    if (!form) return;
    var hint = document.getElementById('gate-hint');

    function block(svc) { return form.querySelector('[data-svc-block="' + svc + '"]'); }
    function box(svc) { return form.querySelector('input[name="service"][value="' + svc + '"]'); }

    // Reveal a service's detail block when its checkbox is on.
    function syncBlocks() {
      ['fdm', 'scan', 'model'].forEach(function (s) {
        var b = block(s), c = box(s);
        if (b && c) b.hidden = !c.checked;
      });
    }

    // Logic gate: a scan always needs modeling cleanup → auto-add Modeling (removable).
    function applyGate(changed) {
      var scan = box('scan'), model = box('model');
      if (changed === 'scan' && scan && scan.checked && model && !model.checked) {
        model.checked = true;
        if (hint) hint.hidden = false;
      }
      if (changed === 'model' && model && !model.checked && hint) hint.hidden = true;
      if (changed === 'scan' && scan && !scan.checked && hint) hint.hidden = true;
    }

    form.querySelectorAll('input[name="service"]').forEach(function (c) {
      c.addEventListener('change', function () { applyGate(c.value); syncBlocks(); });
    });

    // FDM finishing notes reveal
    var fin = document.getElementById('fdm-finish'), finNotes = document.getElementById('fdm-finish-notes');
    if (fin && finNotes) fin.addEventListener('change', function () { finNotes.hidden = !fin.checked; });

    // Select a service + scroll to the form (accordion buttons + the CTA card).
    function startOrder(svc) {
      if (svc) { var c = box(svc); if (c && !c.checked) { c.checked = true; applyGate(svc); } }
      syncBlocks();
      var order = document.getElementById('order');
      if (order) order.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.querySelectorAll('[data-start-order]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        startOrder(btn.getAttribute('data-svc'));
      });
    });

    // Deadline date picker — grey out today + next 6 days (earliest = today + 7).
    var dp = document.getElementById('deadline-picker');
    if (dp) {
      var minD = new Date();
      minD.setDate(minD.getDate() + 7);
      dp.min = minD.toISOString().split('T')[0];
    }

    // Deep-link: /hu/forge/services/?service=fdm (or #order) preselects + scrolls.
    var qs = new URLSearchParams(location.search).get('service');
    if (qs && box(qs)) { box(qs).checked = true; applyGate(qs); syncBlocks(); }
    else syncBlocks();
    if (qs || location.hash === '#order') {
      setTimeout(function () { var o = document.getElementById('order'); if (o) o.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200);
    }
  })();

  // ── Material & colour picker ──
  (function () {
    var picker = document.getElementById('mat-picker');
    if (!picker) return;
    var grid = document.getElementById('mat-grid');
    var search = document.getElementById('mat-search');
    var selBox = document.getElementById('mat-selected');
    var selName = document.getElementById('mat-selected-name');
    var leadnote = document.getElementById('mat-leadnote');
    var clearBtn = document.getElementById('mat-clear');
    var fType = document.getElementById('fdm_material');
    var fName = document.getElementById('material_name');
    var fColour = document.getElementById('material_color');
    var fId = document.getElementById('material_id');
    var typeBtns = Array.prototype.slice.call(document.querySelectorAll('.mat-type'));
    var swatches = Array.prototype.slice.call(grid.querySelectorAll('.mat-swatch'));
    var activeGroup = null;

    function applySearch() {
      var q = (search.value || '').toLowerCase();
      swatches.forEach(function (s) {
        if (s.getAttribute('data-group') !== activeGroup) { s.style.display = 'none'; return; }
        s.style.display = s.getAttribute('data-name').toLowerCase().indexOf(q) > -1 ? '' : 'none';
      });
    }
    function showGroup(group) { activeGroup = group; applySearch(); }
    function clearSelection() {
      swatches.forEach(function (s) { s.classList.remove('is-active'); });
      fName.value = ''; fColour.value = ''; fId.value = '';
      selBox.hidden = true; leadnote.hidden = true;
    }

    typeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        typeBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        fType.value = btn.getAttribute('data-mtype');
        clearSelection();
        var group = btn.getAttribute('data-group');
        if (group) { picker.hidden = false; search.value = ''; showGroup(group); }
        else { picker.hidden = true; }   // "Ajánlj nekem"
      });
    });

    swatches.forEach(function (s) {
      s.addEventListener('click', function () {
        swatches.forEach(function (x) { x.classList.remove('is-active'); });
        s.classList.add('is-active');
        var nm = s.getAttribute('data-name');
        fType.value = s.getAttribute('data-type');
        fName.value = nm;
        fColour.value = s.getAttribute('data-colour');
        fId.value = s.getAttribute('data-id') || '';
        selName.textContent = nm;
        selBox.hidden = false;
        // lead-time note only when the chosen colour is NOT in stock
        if (s.getAttribute('data-instock') === '1') {
          leadnote.hidden = true;
        } else {
          leadnote.innerHTML = '<strong>' + nm + '</strong> rendelésre készül — ha nincs a polcon, beszerzem, ami kb. <strong>1,5 hetet</strong> ad a szokásos átfutáshoz. Válaszd az <em>Ajánlj nekem</em> opciót a leggyorsabb eredményért.';
          leadnote.hidden = false;
        }
        picker.hidden = true;
      });
    });

    if (search) search.addEventListener('input', applySearch);
    if (clearBtn) clearBtn.addEventListener('click', function () { picker.hidden = false; selBox.hidden = true; });
  })();
</script>

{% include project-modal.html %}
