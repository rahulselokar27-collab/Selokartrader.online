<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Selokartrader.online - README Portfolio</title>
  <meta name="description" content="सेलोकर ट्रेडर्स एवं कृषि सेवा केंद्र का हिंदी portfolio-style README, 2D-3D effects के साथ।" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700;800&family=Tiro+Devanagari+Hindi&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#06130a;
      --bg2:#0d2214;
      --card:rgba(255,255,255,.08);
      --card2:rgba(255,255,255,.13);
      --text:#f7fff8;
      --muted:#cfe7d6;
      --green:#22c55e;
      --green-dark:#15803d;
      --gold:#f59e0b;
      --gold-dark:#b45309;
      --line:rgba(255,255,255,.12);
      --shadow:0 18px 50px rgba(0,0,0,.35);
      --radius:22px;
    }

    *{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      font-family:'Hind',sans-serif;
      color:var(--text);
      background:
        radial-gradient(circle at top left, rgba(34,197,94,.25), transparent 28%),
        radial-gradient(circle at top right, rgba(245,158,11,.18), transparent 26%),
        linear-gradient(135deg, var(--bg), var(--bg2));
      min-height:100vh;
      overflow-x:hidden;
    }

    body::before{
      content:"";
      position:fixed;
      inset:0;
      pointer-events:none;
      background-image:
        linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
      background-size:72px 72px;
      opacity:.18;
      z-index:-1;
    }

    .wrap{
      max-width:1180px;
      margin:0 auto;
      padding:24px 16px 60px;
    }

    .hero{
      position:relative;
      padding:34px 18px;
      border-radius:28px;
      background:linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.05));
      border:1px solid rgba(255,255,255,.13);
      box-shadow:var(--shadow);
      overflow:hidden;
      transform-style:preserve-3d;
    }

    .hero::before{
      content:"";
      position:absolute;
      inset:-40% -20%;
      background:radial-gradient(circle, rgba(34,197,94,.20), transparent 40%);
      animation:drift 14s ease-in-out infinite alternate;
    }

    @keyframes drift{
      from{transform:translate3d(0,0,0) rotate(0deg)}
      to{transform:translate3d(70px,30px,0) rotate(12deg)}
    }

    .hero-content{
      position:relative;
      z-index:2;
      text-align:center;
    }

    .badge{
      display:inline-block;
      padding:.35rem .85rem;
      border-radius:999px;
      background:rgba(245,158,11,.16);
      border:1px solid rgba(245,158,11,.28);
      color:#fde68a;
      font-size:.78rem;
      font-weight:800;
      letter-spacing:.12em;
      text-transform:uppercase;
      margin-bottom:16px;
    }

    h1{
      font-family:'Tiro Devanagari Hindi',serif;
      font-size:clamp(2rem,5vw,4.3rem);
      line-height:1.05;
      margin-bottom:12px;
    }

    h1 em{font-style:normal;color:#86efac}

    .subtitle{
      color:var(--muted);
      max-width:820px;
      margin:0 auto;
      line-height:1.9;
      font-size:1.02rem;
    }

    .btns{
      margin-top:22px;
      display:flex;
      gap:12px;
      justify-content:center;
      flex-wrap:wrap;
    }

    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      padding:.92rem 1.2rem;
      border-radius:14px;
      font-weight:800;
      text-decoration:none;
      transition:.25s ease;
    }
    .btn:hover{transform:translateY(-3px)}
    .btn-green{background:linear-gradient(135deg, var(--green), var(--green-dark));color:#fff}
    .btn-gold{background:linear-gradient(135deg, var(--gold), #f59e0b);color:#231300}
    .btn-outline{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.04);color:#effdf2}

    .grid{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
      gap:16px;
      margin-top:18px;
    }

    .card{
      background:linear-gradient(145deg, rgba(255,255,255,.10), rgba(255,255,255,.05));
      border:1px solid rgba(255,255,255,.12);
      border-radius:22px;
      box-shadow:var(--shadow);
      padding:18px;
      transition:.28s ease;
      transform-style:preserve-3d;
    }

    .card:hover{
      transform:translateY(-8px) perspective(1100px) rotateX(6deg) rotateY(-4deg);
    }

    .card h2,.section h2{
      font-family:'Tiro Devanagari Hindi',serif;
      font-size:1.6rem;
      margin-bottom:10px;
      color:#dcfce7;
    }

    .card p,.section p,.list li{
      color:var(--muted);
      line-height:1.8;
    }

    .section{
      margin-top:18px;
      padding:22px;
      border-radius:22px;
      background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.10);
      box-shadow:var(--shadow);
    }

    .section h3{
      font-family:'Tiro Devanagari Hindi',serif;
      font-size:1.35rem;
      margin-bottom:10px;
      color:#fef3c7;
    }

    .list{
      list-style:none;
      display:grid;
      gap:8px;
      margin-top:10px;
    }

    .list li::before{
      content:"✅ ";
      color:#86efac;
    }

    .timeline{
      display:grid;
      gap:12px;
      margin-top:10px;
    }

    .step{
      padding:14px 16px;
      border-radius:16px;
      background:rgba(255,255,255,.06);
      border:1px solid rgba(255,255,255,.10);
    }

    .footer{
      margin-top:18px;
      text-align:center;
      padding:18px;
      border-radius:20px;
      background:linear-gradient(135deg, rgba(34,197,94,.12), rgba(245,158,11,.10));
      border:1px solid rgba(255,255,255,.10);
    }

    .footer strong{color:#86efac}

    @media (max-width:700px){
      .wrap{padding:14px 12px 40px}
      .hero{padding:24px 14px}
      .section{padding:18px}
      .btn{width:100%}
      .btns{flex-direction:column}
    }

    @media (prefers-reduced-motion: reduce){
      *{animation:none !important;transition:none !important;scroll-behavior:auto !important}
    }
  </style>
</head>
<body>
  <div class="wrap">

    <section class="hero">
      <div class="hero-content">
        <span class="badge">PORTFOLIO README</span>
        <h1><em>Selokartrader.online</em><br>README Portfolio</h1>
        <p class="subtitle">
          यह एक modern, Hindi portfolio-style README page है, जिसे 2D और 3D visual effects के साथ बनाया गया है।
          इसमें आपकी दुकान, सेवा, संपर्क, और brand identity को professional तरीके से दिखाया गया है।
        </p>

        <div class="btns">
          <a class="btn btn-gold" href="#about">परिचय देखें</a>
          <a class="btn btn-green" href="#features">फीचर्स देखें</a>
          <a class="btn btn-outline" href="#contact">संपर्क देखें</a>
        </div>
      </div>
    </section>

    <div class="grid">
      <div class="card">
        <h2>📌 प्रोजेक्ट का नाम</h2>
        <p>सेलोकर ट्रेडर्स एवं कृषि सेवा केंद्र – एक professional business portfolio website / README style presentation.</p>
      </div>

      <div class="card">
        <h2>🎯 उद्देश्य</h2>
        <p>किसानों और ग्राहकों को दुकान की सेवाएँ, products, contact details, और brand trust एक ही जगह दिखाना।</p>
      </div>

      <div class="card">
        <h2>✨ Design Style</h2>
        <p>2D glow, 3D depth, glassmorphism, animated background, smooth hover, और mobile responsive layout.</p>
      </div>
    </div>

    <section class="section" id="about">
      <h2>👨‍💼 मेरे बारे में</h2>
      <p>
        मैं राहुल सुभाष सेलोकर द्वारा संचालित व्यापारिक पहचान को एक modern digital presentation में दिखाने के लिए यह page तैयार किया गया है।
        इसका layout clean, interactive, और responsive रखा गया है ताकि mobile और desktop दोनों पर अच्छा दिखे।
      </p>
    </section>

    <section class="section" id="features">
      <h2>🚀 मुख्य फीचर्स</h2>
      <div class="timeline">
        <div class="step">3D hover effects और card lift animation</div>
        <div class="step">Animated background gradients और floating glow shapes</div>
        <div class="step">Mobile-friendly responsive grid layout</div>
        <div class="step">Hindi content के साथ professional portfolio feel</div>
        <div class="step">Contact, services, and brand sections का clean structure</div>
      </div>
    </section>

    <section class="section">
      <h2>🛠️ इसमें क्या-क्या बदला जा सकता है</h2>
      <ul class="list">
        <li>Logo image</li>
        <li>Phone number</li>
        <li>WhatsApp link</li>
        <li>Address</li>
        <li>Shop images</li>
        <li>Products list</li>
      </ul>
    </section>

    <section class="section">
      <h2>📱 Responsive Design</h2>
      <p>
        यह layout mobile-first सोच के साथ बनाया गया है। छोटे screen पर cards नीचे-नीचे आ जाते हैं, buttons full width हो जाते हैं,
        और content readable रहता है।
      </p>
    </section>

    <section class="section" id="contact">
      <h2>📞 संपर्क जानकारी</h2>
      <div class="timeline">
        <div class="step">Phone: 9669241098</div>
        <div class="step">WhatsApp: 7999512305</div>
        <div class="step">Location: कुम्हली, तहसील खैरलांजी, जिला बालाघाट, म.प्र.</div>
      </div>
    </section>

    <section class="footer">
      <p><strong>Designed with 2D & 3D effects</strong> for Selokartrader.online</p>
      <p>नीचे नाम: राहुल सुभाष सेलोकर</p>
    </section>

  </div>
</body>
</html>
