<<<<<<< HEAD
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>README – सेलोकर ट्रेडर्स | Rahul Subhash Selokar</title>
  <link href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi&family=Hind:wght@400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet"/>
  <style>
    /* ══════════════════════════════
       TOKENS
    ══════════════════════════════ */
    :root {
      --ink:        #0d1117;
      --ink-mid:    #161b22;
      --ink-border: #21262d;
      --green:      #238636;
      --green-glow: #39d353;
      --gold:       #e3b341;
      --gold-dim:   #b08800;
      --text:       #e6edf3;
      --text-mid:   #8b949e;
      --text-dim:   #484f58;
      --white:      #ffffff;
      --accent-red: #f85149;
      --radius:     12px;
    }
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body {
      font-family:'Hind','Nirmala UI',sans-serif;
      background:var(--ink);
      color:var(--text);
      min-height:100vh;
      overflow-x:hidden;
    }

    /* ══════════════════════════════
       STARS BACKGROUND (pure CSS)
    ══════════════════════════════ */
    body::before {
      content:'';
      position:fixed; inset:0; z-index:0;
      background:
        radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,.6) 0%, transparent 100%),
        radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,.4) 0%, transparent 100%),
        radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,.5) 0%, transparent 100%),
        radial-gradient(1px 1px at 75% 40%, rgba(255,255,255,.3) 0%, transparent 100%),
        radial-gradient(1px 1px at 88% 70%, rgba(255,255,255,.5) 0%, transparent 100%),
        radial-gradient(1px 1px at 20% 80%, rgba(255,255,255,.4) 0%, transparent 100%),
        radial-gradient(1px 1px at 65% 85%, rgba(255,255,255,.3) 0%, transparent 100%),
        radial-gradient(1px 1px at 45% 50%, rgba(255,255,255,.2) 0%, transparent 100%),
        radial-gradient(2px 2px at 5%  45%, rgba(255,255,255,.25) 0%, transparent 100%),
        radial-gradient(2px 2px at 92% 15%, rgba(255,255,255,.2) 0%, transparent 100%);
      pointer-events:none;
    }

    /* ══════════════════════════════
       LAYOUT WRAPPER
    ══════════════════════════════ */
    .page { position:relative; z-index:1; max-width:900px; margin:0 auto; padding:3rem 1.5rem 5rem; }

    /* ══════════════════════════════
       HERO CARD – 3D perspective
    ══════════════════════════════ */
    .hero-card {
      background: linear-gradient(145deg, #161b22 0%, #0d1117 60%, #161b22 100%);
      border: 1px solid var(--ink-border);
      border-radius: 20px;
      padding: 3rem 2.5rem 2.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      margin-bottom: 2rem;
      /* 3D glow */
      box-shadow:
        0 0 0 1px rgba(57,211,83,.08),
        0 8px 32px rgba(0,0,0,.6),
        0 0 80px rgba(35,134,54,.06) inset;
      transform: perspective(1000px) rotateX(0deg);
      transition: transform .4s, box-shadow .4s;
    }
    .hero-card:hover {
      transform: perspective(1000px) rotateX(1.5deg) translateY(-4px);
      box-shadow: 0 0 0 1px rgba(57,211,83,.2), 0 24px 60px rgba(0,0,0,.7), 0 0 100px rgba(35,134,54,.1) inset;
    }
=======
# 🌿 Selokar Traders & Selokar Krishi Seva Kendra
### Portfolio Website — selokartrader.online
>>>>>>> b77e6e36168092d35faab80dae8c967b62a1541b

    /* animated top glow line */
    .hero-card::before {
      content:'';
      position:absolute; top:0; left:10%; right:10%; height:2px;
      background: linear-gradient(90deg, transparent, var(--green-glow), var(--gold), var(--green-glow), transparent);
      border-radius:999px;
      animation: line-glow 3s ease-in-out infinite;
    }
    @keyframes line-glow {
      0%,100%{opacity:.5; transform:scaleX(.8)}
      50%{opacity:1; transform:scaleX(1)}
    }

<<<<<<< HEAD
    /* ambient glow orb */
    .hero-card::after {
      content:'';
      position:absolute; top:-80px; left:50%; transform:translateX(-50%);
      width:300px; height:200px;
      background: radial-gradient(ellipse, rgba(35,134,54,.18) 0%, transparent 70%);
      pointer-events:none;
    }

    .hero-badge {
      display:inline-flex; align-items:center; gap:.4rem;
      background:rgba(57,211,83,.1); border:1px solid rgba(57,211,83,.25);
      color:var(--green-glow); font-size:.72rem; font-weight:700; letter-spacing:.1em;
      padding:.3rem 1rem; border-radius:999px; text-transform:uppercase;
      margin-bottom:1.5rem;
    }
    .badge-dot { width:6px; height:6px; border-radius:50%; background:var(--green-glow); animation:pulse-dot 1.5s ease-in-out infinite; }
    @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
=======
## 👨‍💼 Proprietor

**Rahul Subhash Selokar**  
Proprietor — Selokar Traders & Selokar Krishi Seva Kendra  
📞 9669241098 | 7999512305  
📍 At+Post: Kumhali, Th. Khairlanji, Dist. Balaghat – 481337 (Madhya Pradesh)
>>>>>>> b77e6e36168092d35faab80dae8c967b62a1541b

    .hero-title {
      font-family:'Tiro Devanagari Hindi',serif;
      font-size: clamp(2rem, 5vw, 3.2rem);
      line-height:1.2;
      background: linear-gradient(135deg, #e6edf3 30%, var(--green-glow) 60%, var(--gold) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom:.6rem;
    }
    .hero-sub {
      color:var(--text-mid); font-size:1rem; line-height:1.7; margin-bottom:2rem; max-width:580px; margin-left:auto; margin-right:auto;
    }

<<<<<<< HEAD
    /* URL chip */
    .url-chip {
      display:inline-flex; align-items:center; gap:.5rem;
      background:var(--ink-mid); border:1px solid var(--ink-border);
      color:var(--green-glow); font-family:'JetBrains Mono',monospace;
      font-size:.85rem; padding:.5rem 1.3rem; border-radius:999px;
      text-decoration:none; transition:.25s;
    }
    .url-chip:hover { border-color:var(--green-glow); box-shadow:0 0 20px rgba(57,211,83,.15); }

    /* stat pills row */
    .hero-stats {
      display:flex; justify-content:center; flex-wrap:wrap; gap:.8rem;
      margin-top:2rem;
    }
    .hstat {
      background:rgba(255,255,255,.04); border:1px solid var(--ink-border);
      border-radius:10px; padding:.7rem 1.3rem; text-align:center;
      transition:transform .25s, box-shadow .25s;
    }
    .hstat:hover { transform:translateY(-3px); box-shadow:0 8px 20px rgba(0,0,0,.4); border-color:var(--green); }
    .hstat .n { font-family:'JetBrains Mono',monospace; font-size:1.5rem; font-weight:700; color:var(--green-glow); display:block; }
    .hstat .l { font-size:.72rem; color:var(--text-mid); margin-top:.2rem; }

    /* ══════════════════════════════
       SECTION CARDS
    ══════════════════════════════ */
    .card {
      background:var(--ink-mid);
      border:1px solid var(--ink-border);
      border-radius:var(--radius);
      padding:2rem;
      margin-bottom:1.5rem;
      transition:transform .3s cubic-bezier(.34,1.4,.64,1), box-shadow .3s, border-color .3s;
      position:relative;
      overflow:hidden;
    }
    .card:hover {
      transform:translateY(-5px);
      box-shadow:0 16px 48px rgba(0,0,0,.5);
      border-color:rgba(57,211,83,.25);
    }
    /* left accent bar */
    .card::before {
      content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
      background:linear-gradient(180deg, var(--green-glow), var(--gold));
      border-radius:999px;
      opacity:0; transition:opacity .3s;
    }
    .card:hover::before { opacity:1; }

    .card-title {
      font-family:'Tiro Devanagari Hindi',serif;
      font-size:1.25rem; color:var(--text); margin-bottom:1.2rem;
      display:flex; align-items:center; gap:.6rem;
    }
    .card-title .icon { font-size:1.4rem; }

    /* ══════════════════════════════
       OWNER SECTION
    ══════════════════════════════ */
    .owner-row {
      display:flex; gap:2rem; align-items:center; flex-wrap:wrap;
    }
    .owner-avatar {
      width:100px; height:100px; border-radius:50%; overflow:hidden; flex-shrink:0;
      border:3px solid var(--green);
      box-shadow: 0 0 0 6px rgba(35,134,54,.15), 0 8px 24px rgba(0,0,0,.5);
      transition:box-shadow .3s, transform .3s;
    }
    .owner-avatar:hover { box-shadow:0 0 0 10px rgba(35,134,54,.25), 0 12px 32px rgba(0,0,0,.6); transform:scale(1.05); }
    .owner-avatar img { width:100%; height:100%; object-fit:cover; object-position:top; }
    .owner-info h2 {
      font-family:'Tiro Devanagari Hindi',serif; font-size:1.5rem; color:var(--text); margin-bottom:.3rem;
    }
    .owner-info .role { color:var(--green-glow); font-size:.88rem; font-weight:700; margin-bottom:.5rem; }
    .owner-info p { color:var(--text-mid); font-size:.9rem; line-height:1.7; }
=======
## 🏪 Hamari Dukanen

### 1. Selokar Traders — Kirana & General Items
- Anaj, Dal, Aata, Chawal, Tel, Masale
- Sabun, Shampoo, Daily Use Items
- Biscuit, Chips, Cold Drinks, Juice
- Stationery (Copy, Pen, Pencil, Register)
- Bartan, Grihsthi Saman
- Agarbatti, Pooja Saman, Diye, Mombatti
- Aur Bahut Kuch...

### 2. Selokar Krishi Seva Kendra — Kitnashak, Bijai & Urvarak
**🌾 Dhaan Bijai (Seeds):**
- Hybrid Dhaan — MTU 1010, IR 64, Swarna Sub-1, Lalat, Pooja
- Gehu, Soyabean, Makka, Arhar, Mung, Lobia Beej

**🧪 Kitnashak Dawai (Pesticides):**
- Keet Nashak — Chlorpyrifos, Imidacloprid, Profenofos, Cypermethrin
- Herbicide — Bispyribac Sodium, Pretilachlor, Butachlor, 2,4-D
- Fungicide — Tricyclazole, Hexaconazole, Carbendazim

**🌱 Khat / Urvarak (Fertilizers):**
- DAP 50Kg, Urea, SSP, MOP
- NPK — 10-26-26, 12-32-16
- Jaivik Khat — Vermicompost, Jeevamrit, Neem Khali
>>>>>>> b77e6e36168092d35faab80dae8c967b62a1541b

    /* ══════════════════════════════
       SHOP CARDS – twin 3D
    ══════════════════════════════ */
    .shops-row { display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; margin-top:1rem; }
    .shop-mini {
      border-radius:10px; overflow:hidden;
      border:1px solid var(--ink-border);
      transition:transform .35s cubic-bezier(.34,1.4,.64,1), box-shadow .35s;
    }
    .shop-mini:hover { transform:perspective(600px) rotateY(-6deg) translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,.5); }
    .shop-mini.mitti:hover { transform:perspective(600px) rotateY(6deg) translateY(-6px); }
    .shop-top { padding:1.2rem 1.4rem; }
    .sh-g .shop-top { background:linear-gradient(135deg,#052e16,#15803d); }
    .sh-m .shop-top { background:linear-gradient(135deg,#3c1a04,#b45309); }
    .shop-top h3 { font-family:'Tiro Devanagari Hindi',serif; font-size:1rem; color:#fff; }
    .shop-top p  { font-size:.75rem; color:rgba(255,255,255,.75); margin-top:.2rem; }
    .shop-body  { padding:1.2rem 1.4rem; background:rgba(255,255,255,.03); }
    .shop-list  { list-style:none; display:flex; flex-direction:column; gap:.4rem; }
    .shop-list li { font-size:.8rem; color:var(--text-mid); display:flex; gap:.5rem; }
    .shop-list li::before { content:'›'; color:var(--green-glow); flex-shrink:0; font-weight:700; }

<<<<<<< HEAD
    /* ══════════════════════════════
       PRODUCT GRID
    ══════════════════════════════ */
    .prod-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:.9rem; margin-top:1rem; }
    .prod-pill {
      background:rgba(255,255,255,.04); border:1px solid var(--ink-border);
      border-radius:10px; padding:1rem .8rem; text-align:center;
      transition:transform .3s cubic-bezier(.34,1.4,.64,1), box-shadow .3s, border-color .3s;
    }
    .prod-pill:hover { transform:translateY(-6px) scale(1.04); border-color:var(--green); box-shadow:0 12px 28px rgba(0,0,0,.4), 0 0 20px rgba(57,211,83,.08); }
    .prod-pill .pi { font-size:2rem; margin-bottom:.4rem; }
    .prod-pill h4 { font-size:.8rem; color:var(--text); font-weight:700; }
    .prod-pill p  { font-size:.68rem; color:var(--text-mid); margin-top:.2rem; line-height:1.4; }

    /* ══════════════════════════════
       CONTRIBUTION GRAPH (decorative)
    ══════════════════════════════ */
    .contrib-grid {
      display:grid; grid-template-columns:repeat(52,1fr); gap:3px;
      margin-top:1rem;
    }
    .contrib-cell {
      aspect-ratio:1; border-radius:2px;
      background:var(--ink-border);
    }
    .contrib-cell.l1 { background:#0e4429; }
    .contrib-cell.l2 { background:#006d32; }
    .contrib-cell.l3 { background:#26a641; }
    .contrib-cell.l4 { background:#39d353; }

    /* ══════════════════════════════
       TECH STACK BADGES
    ══════════════════════════════ */
    .badge-row { display:flex; flex-wrap:wrap; gap:.6rem; margin-top:1rem; }
    .tbadge {
      display:inline-flex; align-items:center; gap:.4rem;
      font-family:'JetBrains Mono',monospace; font-size:.75rem; font-weight:700;
      padding:.35rem .9rem; border-radius:6px; letter-spacing:.04em;
    }
    .tb-html  { background:rgba(228,77,38,.15);  color:#e4512a; border:1px solid rgba(228,77,38,.3); }
    .tb-css   { background:rgba(38,77,228,.15);  color:#4da6ff; border:1px solid rgba(38,77,228,.3); }
    .tb-js    { background:rgba(240,219,79,.15); color:#f0db4f; border:1px solid rgba(240,219,79,.3); }
    .tb-gh    { background:rgba(255,255,255,.06);color:var(--text); border:1px solid var(--ink-border); }
    .tb-g     { background:rgba(57,211,83,.1);   color:var(--green-glow); border:1px solid rgba(57,211,83,.25); }
    .tb-mob   { background:rgba(227,179,65,.1);  color:var(--gold); border:1px solid rgba(227,179,65,.25); }
=======
## 🌐 Website ke Baare Mein

- **Domain:** [selokartrader.online](https://selokartrader.online)
- **Hosting:** GitHub Pages (free)
- **File:** `index.html` (single page, no framework needed)
- **Responsive:** Mobile, Tablet, Desktop — sab pe chalti hai
>>>>>>> b77e6e36168092d35faab80dae8c967b62a1541b

    /* ══════════════════════════════
       DEPLOY STEPS
    ══════════════════════════════ */
    .steps { display:flex; flex-direction:column; gap:1rem; margin-top:1rem; }
    .step {
      display:flex; gap:1.2rem; align-items:flex-start;
      background:rgba(255,255,255,.03); border:1px solid var(--ink-border);
      border-radius:10px; padding:1.1rem 1.3rem;
      transition:transform .3s, box-shadow .3s, border-color .3s;
    }
    .step:hover { transform:translateX(6px); border-color:rgba(57,211,83,.3); box-shadow:0 4px 20px rgba(0,0,0,.3); }
    .step-num {
      width:32px; height:32px; border-radius:50%;
      background:linear-gradient(135deg,var(--green),#39d353);
      color:#fff; font-weight:700; font-size:.9rem;
      display:flex; align-items:center; justify-content:center;
      flex-shrink:0; box-shadow:0 0 12px rgba(57,211,83,.4);
    }
    .step-text h4 { color:var(--text); font-size:.95rem; margin-bottom:.3rem; }
    .step-text p  { color:var(--text-mid); font-size:.83rem; line-height:1.6; }
    .step-text code {
      font-family:'JetBrains Mono',monospace; font-size:.75rem;
      background:rgba(255,255,255,.06); padding:.1rem .4rem; border-radius:4px;
      color:var(--gold);
    }

<<<<<<< HEAD
    /* ══════════════════════════════
       DNS TABLE
    ══════════════════════════════ */
    .dns-table { width:100%; border-collapse:collapse; margin-top:1rem; font-size:.82rem; }
    .dns-table th { background:rgba(57,211,83,.1); color:var(--green-glow); padding:.6rem 1rem; text-align:left; font-family:'JetBrains Mono',monospace; }
    .dns-table td { padding:.6rem 1rem; border-bottom:1px solid var(--ink-border); color:var(--text-mid); font-family:'JetBrains Mono',monospace; }
    .dns-table tr:hover td { background:rgba(255,255,255,.03); }

    /* ══════════════════════════════
       CONTACT CARD
    ══════════════════════════════ */
    .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-top:1rem; }
    .citem {
      background:rgba(255,255,255,.03); border:1px solid var(--ink-border);
      border-radius:10px; padding:1.2rem;
      transition:.25s;
    }
    .citem:hover { border-color:rgba(57,211,83,.3); transform:translateY(-3px); }
    .citem .ci { font-size:1.5rem; margin-bottom:.5rem; }
    .citem h4 { font-size:.78rem; color:var(--text-mid); text-transform:uppercase; letter-spacing:.08em; margin-bottom:.3rem; }
    .citem p, .citem a { font-size:.9rem; color:var(--text); font-weight:600; text-decoration:none; }
    .citem a:hover { color:var(--green-glow); }

    /* ══════════════════════════════
       FOOTER / SIGNATURE
    ══════════════════════════════ */
    .sig-footer {
      margin-top:3rem;
      text-align:center;
      padding:2.5rem;
      border:1px solid var(--ink-border);
      border-radius:var(--radius);
      background:var(--ink-mid);
      position:relative; overflow:hidden;
    }
    .sig-footer::before {
      content:'';
      position:absolute; bottom:-40px; left:50%; transform:translateX(-50%);
      width:300px; height:150px;
      background:radial-gradient(ellipse, rgba(35,134,54,.15) 0%, transparent 70%);
      pointer-events:none;
    }
    .sig-name {
      font-family:'Tiro Devanagari Hindi',serif;
      font-size:clamp(1.5rem,4vw,2.2rem);
      background:linear-gradient(135deg,var(--green-glow),var(--gold),var(--green-glow));
      background-size:200% auto;
      -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      animation:shine 4s linear infinite;
      display:block; margin-bottom:.4rem;
    }
    @keyframes shine { 0%{background-position:0%} 100%{background-position:200%} }
    .sig-role { color:var(--text-mid); font-size:.9rem; margin-bottom:1rem; }
    .sig-links { display:flex; justify-content:center; gap:.8rem; flex-wrap:wrap; }
    .slink {
      display:inline-flex; align-items:center; gap:.4rem;
      background:rgba(255,255,255,.05); border:1px solid var(--ink-border);
      color:var(--text-mid); font-size:.8rem; padding:.4rem 1rem;
      border-radius:999px; text-decoration:none; transition:.2s;
    }
    .slink:hover { border-color:var(--green-glow); color:var(--green-glow); background:rgba(57,211,83,.07); }
    .copy { margin-top:1.5rem; font-size:.72rem; color:var(--text-dim); }

    /* ══════════════════════════════
       RESPONSIVE
    ══════════════════════════════ */
    @media(max-width:700px){
      .shops-row { grid-template-columns:1fr; }
      .contact-grid { grid-template-columns:1fr; }
      .owner-row { flex-direction:column; align-items:flex-start; }
      .contrib-grid { grid-template-columns:repeat(26,1fr); }
    }
    @media(max-width:480px){
      .page { padding:1.5rem 1rem 4rem; }
      .hero-card { padding:2rem 1.2rem; }
      .card { padding:1.5rem 1.2rem; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- ═══ HERO CARD ═══ -->
  <div class="hero-card">
    <div class="hero-badge"><span class="badge-dot"></span> Live Website · selokartrader.online</div>
    <h1 class="hero-title">सेलोकर ट्रेडर्स<br>एवं कृषि सेवा केंद्र</h1>
    <p class="hero-sub">
      कुम्हली, बालाघाट की सबसे विश्वसनीय किराना एवं कृषि दुकान।<br>
      धान बीज, कीटनाशक, खाद एवं किराना सामान — एक ही छत के नीचे।
    </p>
    <a class="url-chip" href="https://selokartrader.online" target="_blank">
      🌐 selokartrader.online
    </a>
    <div class="hero-stats">
      <div class="hstat"><span class="n">10+</span><div class="l">वर्षों का अनुभव</div></div>
      <div class="hstat"><span class="n">500+</span><div class="l">खुश किसान</div></div>
      <div class="hstat"><span class="n">2</span><div class="l">दुकानें</div></div>
      <div class="hstat"><span class="n">100%</span><div class="l">हिन्दी में</div></div>
      <div class="hstat"><span class="n">Free</span><div class="l">GitHub Hosting</div></div>
    </div>
  </div>

  <!-- ═══ MALIK ═══ -->
  <div class="card">
    <div class="card-title"><span class="icon">👨‍💼</span> स्वामी / मालिक</div>
    <div class="owner-row">
      <div class="owner-avatar">
        <img src="images/file_000000000f6471f785b773f99333d2c1.png" alt="राहुल सुभाष सेलोकर"/>
      </div>
      <div class="owner-info">
        <h2>राहुल सुभाष सेलोकर</h2>
        <div class="role">🏪 स्वामी – सेलोकर ट्रेडर्स एवं सेलोकर कृषि सेवा केंद्र</div>
        <p>हम वर्षों से कुम्हली एवं आसपास के किसानों और परिवारों की सेवा करते आ रहे हैं। हमारा उद्देश्य है कि आपको घर का राशन हो या खेत का बीज — सब कुछ सही दाम पर और एक ही जगह मिले।</p>
      </div>
    </div>
  </div>

  <!-- ═══ DONO DUKAN ═══ -->
  <div class="card">
    <div class="card-title"><span class="icon">🏪</span> हमारी दो दुकानें</div>
    <div class="shops-row">
      <div class="shop-mini sh-g">
        <div class="shop-top">
          <h3>🛒 सेलोकर ट्रेडर्स</h3>
          <p>किराना एवं जनरल स्टोर · कुम्हली</p>
        </div>
        <div class="shop-body">
          <ul class="shop-list">
            <li>चावल, आटा, दाल, चीनी, तेल, मसाले</li>
            <li>साबुन, शैम्पू, डिटर्जेंट</li>
            <li>बिस्कुट, चिप्स, कोल्ड ड्रिंक</li>
            <li>स्टेशनरी, बर्तन, गृहस्थी सामान</li>
            <li>अगरबत्ती, पूजा सामान, दीये</li>
          </ul>
        </div>
      </div>
      <div class="shop-mini sh-m mitti">
        <div class="shop-top">
          <h3>🌾 सेलोकर कृषि सेवा केंद्र</h3>
          <p>कीटनाशक · बीज · उर्वरक · कुम्हली</p>
        </div>
        <div class="shop-body">
          <ul class="shop-list">
            <li>धान बीज – MTU 1010, IR 64, स्वर्णा</li>
            <li>गेहूँ, सोयाबीन, मक्का, अरहर बीज</li>
            <li>कीटनाशक – कीट नाशक, फफूंदनाशक</li>
            <li>DAP, यूरिया, NPK, जैविक खाद</li>
            <li>फसल सुरक्षा सलाह – बिल्कुल मुफ्त</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ PRODUCTS ═══ -->
  <div class="card">
    <div class="card-title"><span class="icon">🧺</span> उत्पाद सूची</div>
    <div class="prod-grid">
      <div class="prod-pill"><div class="pi">🌾</div><h4>धान बीज</h4><p>Hybrid & Desi किस्में</p></div>
      <div class="prod-pill"><div class="pi">🌽</div><h4>अन्य बीज</h4><p>गेहूँ, मक्का, सोया</p></div>
      <div class="prod-pill"><div class="pi">🧪</div><h4>कीटनाशक</h4><p>Chlorpyrifos, IMI</p></div>
      <div class="prod-pill"><div class="pi">🌿</div><h4>Herbicide</h4><p>खरपतवार नाशक</p></div>
      <div class="prod-pill"><div class="pi">🍄</div><h4>Fungicide</h4><p>फफूंदनाशक दवाई</p></div>
      <div class="prod-pill"><div class="pi">💊</div><h4>DAP / Urea</h4><p>50Kg खाद</p></div>
      <div class="prod-pill"><div class="pi">♻️</div><h4>जैविक खाद</h4><p>Vermicompost</p></div>
      <div class="prod-pill"><div class="pi">🍚</div><h4>अनाज-दालें</h4><p>रोज़ की ज़रूरत</p></div>
      <div class="prod-pill"><div class="pi">🧴</div><h4>तेल-मसाले</h4><p>घर का स्वाद</p></div>
      <div class="prod-pill"><div class="pi">🧼</div><h4>साबुन-शैम्पू</h4><p>सफाई सामान</p></div>
      <div class="prod-pill"><div class="pi">📚</div><h4>स्टेशनरी</h4><p>पढ़ाई सामान</p></div>
      <div class="prod-pill"><div class="pi">🪔</div><h4>पूजा सामान</h4><p>धार्मिक सामग्री</p></div>
    </div>
  </div>

  <!-- ═══ TECH STACK ═══ -->
  <div class="card">
    <div class="card-title"><span class="icon">⚙️</span> वेबसाइट – Tech Stack</div>
    <div class="badge-row">
      <span class="tbadge tb-html">HTML5</span>
      <span class="tbadge tb-css">CSS3</span>
      <span class="tbadge tb-js">JavaScript</span>
      <span class="tbadge tb-gh">GitHub Pages</span>
      <span class="tbadge tb-g">GoDaddy DNS</span>
      <span class="tbadge tb-mob">Responsive Design</span>
      <span class="tbadge tb-g">हिन्दी भाषा</span>
      <span class="tbadge tb-mob">Lightbox Gallery</span>
    </div>
  </div>

  <!-- ═══ ACTIVITY GRAPH (decorative) ═══ -->
  <div class="card">
    <div class="card-title"><span class="icon">📊</span> GitHub Activity</div>
    <div class="contrib-grid" id="cgrid"></div>
  </div>

  <!-- ═══ DEPLOY STEPS ═══ -->
  <div class="card">
    <div class="card-title"><span class="icon">🚀</span> GitHub Pages पर Deploy कैसे करें</div>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-text">
          <h4>GitHub पर Repository बनाएँ</h4>
          <p>github.com पर जाएँ → New Repository → नाम दें → <code>Public</code> चुनें → Create करें</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-text">
          <h4>Files Upload करें</h4>
          <p><code>index.html</code>, <code>style.css</code>, <code>script.js</code>, <code>CNAME</code> और <code>images/</code> फोल्डर upload करें → Commit करें</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-text">
          <h4>GitHub Pages ON करें</h4>
          <p>Settings → Pages → Branch: <code>main</code> → Save → थोड़ी देर में URL मिलेगा</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-text">
          <h4>GoDaddy DNS Connect करें</h4>
          <p>GoDaddy → DNS → नीचे दिए A Records add करें → GitHub Pages में Custom Domain: <code>selokartrader.online</code> → Enforce HTTPS ✅</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">5</div>
        <div class="step-text">
          <h4>Live! 🎉</h4>
          <p>24 घंटे में <code>selokartrader.online</code> पर वेबसाइट live हो जाएगी।</p>
        </div>
      </div>
    </div>

    <!-- DNS TABLE -->
    <p style="color:var(--text-mid);font-size:.82rem;margin-top:1.5rem;margin-bottom:.5rem;">📋 GoDaddy में add करने वाले A Records:</p>
    <table class="dns-table">
      <tr><th>Type</th><th>Name</th><th>Value</th></tr>
      <tr><td>A</td><td>@</td><td>185.199.108.153</td></tr>
      <tr><td>A</td><td>@</td><td>185.199.109.153</td></tr>
      <tr><td>A</td><td>@</td><td>185.199.110.153</td></tr>
      <tr><td>A</td><td>@</td><td>185.199.111.153</td></tr>
      <tr><td>CNAME</td><td>www</td><td>rahulselokar27-collab.github.io</td></tr>
    </table>
  </div>

  <!-- ═══ FILE STRUCTURE ═══ -->
  <div class="card">
    <div class="card-title"><span class="icon">📁</span> File Structure</div>
    <pre style="font-family:'JetBrains Mono',monospace;font-size:.8rem;color:var(--text-mid);line-height:1.8;background:rgba(0,0,0,.3);padding:1.2rem;border-radius:8px;overflow-x:auto;">
<span style="color:var(--green-glow);">Selokartrader.online/</span>
├── <span style="color:var(--gold);">index.html</span>       ← मुख्य वेबसाइट (पूरी हिन्दी में)
├── <span style="color:#4da6ff);">style.css</span>        ← CSS styles
├── <span style="color:#f0db4f);">script.js</span>        ← JavaScript
├── <span style="color:var(--text-mid);">CNAME</span>            ← selokartrader.online
├── <span style="color:var(--text-mid);">README.html</span>      ← यह portfolio README
└── <span style="color:var(--green-glow);">images/</span>
    ├── Snapchat-1556347018.jpg    (हमारी दुकान)
    ├── IMG_20260612_234553.jpg    (बिल्डिंग)
    ├── IMG_20260612_234502.jpg    (कृषि केंद्र)
    ├── IMG_20200101_165505.jpg    (किराना स्टोर)
    ├── IMG-20220604-WA0028.jpg    (कृषि सामान)
    └── file_000...png             (मालिक फोटो)</pre>
  </div>
=======
## 🚀 GitHub Pages pe Deploy Karne ke Steps

### Step 1 — GitHub Account Banao
1. [github.com](https://github.com) par jaao
2. "Sign Up" karo — username, email, password daalo

### Step 2 — New Repository Banao
1. Login ke baad green **"New"** button dabao
2. Repository name daalo: `selokar-portfolio` (ya kuch bhi)
3. **"Public"** select karo ✅
4. **"Add a README file"** tick karo
5. **"Create Repository"** dabao

### Step 3 — index.html Upload Karo
1. Repository ke andar jaao
2. **"Add file" → "Upload files"** dabao
3. `index.html` file drag & drop karo
4. Neeche "Commit changes" dabao

### Step 4 — GitHub Pages Enable Karo
1. Repository mein **Settings** tab pe click karo
2. Left sidebar mein **"Pages"** pe click karo
3. **Source:** `Deploy from a branch` choose karo
4. **Branch:** `main` select karo, folder `/root` rakho
5. **Save** karo
6. Thodi der mein aapko URL milega: `https://yourusername.github.io/selokar-portfolio`

### Step 5 — GoDaddy Domain Connect Karo (selokartrader.online)
1. [GoDaddy](https://godaddy.com) mein login karo
2. **My Products → Domains → selokartrader.online → DNS**
3. Yeh DNS Records add karo:

```
Type    | Name  | Value
--------|-------|---------------------------
A       | @     | 185.199.108.153
A       | @     | 185.199.109.153
A       | @     | 185.199.110.153
A       | @     | 185.199.111.153
CNAME   | www   | yourusername.github.io
```

4. GitHub Repository Settings → Pages mein **Custom Domain** mein `selokartrader.online` likho
5. **"Enforce HTTPS"** ✅ tick karo
6. 24-48 ghante mein domain live ho jayega!
>>>>>>> b77e6e36168092d35faab80dae8c967b62a1541b

  <!-- ═══ CONTACT ═══ -->
  <div class="card">
    <div class="card-title"><span class="icon">📞</span> संपर्क जानकारी</div>
    <div class="contact-grid">
      <div class="citem"><div class="ci">👤</div><h4>मालिक</h4><p>राहुल सुभाष सेलोकर</p></div>
      <div class="citem"><div class="ci">📞</div><h4>मोबाइल</h4><a href="tel:9669241098"><p>9669241098</p></a></div>
      <div class="citem"><div class="ci">📱</div><h4>मोबाइल 2</h4><a href="tel:7999512305"><p>7999512305</p></a></div>
      <div class="citem"><div class="ci">💬</div><h4>WhatsApp</h4><a href="https://wa.me/919669241098" target="_blank"><p>Chat करें</p></a></div>
      <div class="citem"><div class="ci">📍</div><h4>पता</h4><p>AT+POST कुम्हली, तह. खैरलांजी, जिला. बालाघाट – 481337 (म.प्र.)</p></div>
      <div class="citem"><div class="ci">🌐</div><h4>Website</h4><a href="https://selokartrader.online" target="_blank"><p>selokartrader.online</p></a></div>
    </div>
  </div>

<<<<<<< HEAD
  <!-- ═══ SIGNATURE FOOTER ═══ -->
  <div class="sig-footer">
    <span class="sig-name">राहुल सुभाष सेलोकर</span>
    <div class="sig-role">स्वामी · सेलोकर ट्रेडर्स एवं सेलोकर कृषि सेवा केंद्र · कुम्हली, बालाघाट</div>
    <div class="sig-links">
      <a class="slink" href="https://selokartrader.online" target="_blank">🌐 Website</a>
      <a class="slink" href="tel:9669241098">📞 Call करें</a>
      <a class="slink" href="https://wa.me/919669241098" target="_blank">💬 WhatsApp</a>
      <a class="slink" href="https://github.com/rahulselokar27-collab/Selokartrader.online" target="_blank">🐙 GitHub Repo</a>
    </div>
    <div class="copy">
      © 2026 सेलोकर ट्रेडर्स एवं कृषि सेवा केंद्र · selokartrader.online · सभी अधिकार सुरक्षित<br>
      <span style="color:var(--green-glow);">Made with ❤️ for Kumhali, Balaghat</span>
    </div>
  </div>

</div>

<script>
  // Generate decorative GitHub contribution graph
  const grid = document.getElementById('cgrid');
  const levels = [0,0,0,1,1,2,2,3,4,3,2,1,0,0,1,2,3,4,3,2,1,0,0,1,1,2,3,2,1,0,1,2,3,4,3,2,1,0,0,1,2,3,4,2,1,0,0,1,2,3,3,2];
  for(let i=0;i<364;i++){
    const cell=document.createElement('div');
    cell.className='contrib-cell';
    const lvl = levels[i % levels.length];
    if(Math.random()>.3 && lvl>0) cell.classList.add('l'+lvl);
    else if(Math.random()>.7) cell.classList.add('l1');
    grid.appendChild(cell);
  }
</script>
</body>
</html>
=======
## 📁 File Structure

```
selokar-portfolio/
├── index.html      ← Main website file (yahi ek kaafi hai)
└── README.md       ← Ye file
```

---

## ✅ Website Features

- ✅ Do dukano ki poori jankari
- ✅ Krishi dawai, beej, urvarak ki suchi
- ✅ Kirana & general items ki suchi
- ✅ Mobile-friendly responsive design
- ✅ Phone number se direct call
- ✅ Attractive green & gold theme
- ✅ Fast loading — no heavy framework
- ✅ Animated hero section

---

## 📞 Sampark

| Vivaran | Jankari |
|--------|---------|
| Malik | Rahul Subhash Selokar |
| Mobile 1 | 9669241098 |
| Mobile 2 | 7999512305 |
| Website | selokartrader.online |
| Pata | At+Post Kumhali, Th. Khairlanji, Dist. Balaghat – 481337, M.P. |

---

*© 2015 Selokar Traders & Krishi Seva Kendra · Sab Adhikar Surakshit*

cloud & devops engineer - Rahul Selokar
>>>>>>> b77e6e36168092d35faab80dae8c967b62a1541b
