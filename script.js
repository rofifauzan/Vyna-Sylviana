<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Story - Somewhere In The Universe</title>
  
  <!-- Import Font Cursive / Calligraphy Estetik -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet">

  <style>
    /* Reset & Dasar */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
    }

    body, html {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #03050a;
      font-family: 'Montserrat', sans-serif;
      color: #ffffff;
    }

    /* Canvas Latar Belakang Bintang & Meteor */
    #spaceCanvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    /* Kabut Galaksi / Nebula Awan Bergerak */
    .nebula-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 50% 20%, rgba(30, 50, 100, 0.35) 0%, transparent 60%),
        radial-gradient(circle at 20% 40%, rgba(60, 30, 90, 0.25) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(10, 80, 150, 0.3) 0%, transparent 60%);
      z-index: 1;
      pointer-events: none;
      animation: nebulaPulse 12s ease-in-out infinite alternate;
    }

    @keyframes nebulaPulse {
      0% { opacity: 0.7; transform: scale(1); }
      100% { opacity: 1; transform: scale(1.05); }
    }

    /* Bima Sakti / Milky Way Diagonal Glow */
    .milky-way {
      position: absolute;
      top: -30%;
      left: -20%;
      width: 140%;
      height: 140%;
      background: linear-gradient(135deg, transparent 35%, rgba(120, 160, 255, 0.12) 48%, rgba(200, 220, 255, 0.2) 50%, rgba(120, 160, 255, 0.12) 52%, transparent 65%);
      transform: rotate(-25deg);
      filter: blur(35px);
      z-index: 1;
      pointer-events: none;
      animation: milkyWaySlow 25s ease-in-out infinite alternate;
    }

    @keyframes milkyWaySlow {
      0% { transform: rotate(-25deg) translateY(0px); }
      100% { transform: rotate(-23deg) translateY(-20px); }
    }

    /* Planet Bumi Raksasa di Sudut Kanan Bawah */
    .earth-container {
      position: absolute;
      bottom: -45vh;
      right: -30vw;
      width: 115vw;
      height: 115vw;
      max-width: 1500px;
      max-height: 1500px;
      border-radius: 50%;
      z-index: 2;
      pointer-events: none;
      
      /* Tekstur Dasar Bumi dan Glow Cahaya Matahari Terbit */
      background: 
        radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.95) 0%, rgba(135, 206, 250, 0.8) 12%, rgba(10, 40, 90, 0.95) 40%, rgba(2, 8, 20, 1) 75%);
      box-shadow: 
        inset 15px 15px 50px rgba(255, 255, 255, 0.8),
        inset -30px -30px 100px rgba(0, 0, 0, 0.95),
        -10px -10px 80px rgba(79, 172, 254, 0.6),
        -20px -20px 150px rgba(0, 150, 255, 0.4);
      animation: earthFloat 16s ease-in-out infinite alternate;
    }

    /* Atmosfer Atmosferik & Sunrise Flare di Lengkungan Bumi */
    .earth-glow-atmosphere {
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border-radius: 50%;
      box-shadow: 0 0 60px rgba(100, 200, 255, 0.8), 0 0 120px rgba(0, 120, 255, 0.4);
      z-index: 3;
    }

    /* Titik Cahaya Terbit Matahari (Sunflare) di Horison */
    .sunflare {
      position: absolute;
      top: 10.5%;
      left: 10.5%;
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,240,255,0.8) 30%, rgba(79,172,254,0) 70%);
      border-radius: 50%;
      box-shadow: 0 0 80px 40px rgba(255, 255, 255, 0.9), 0 0 150px 80px rgba(79, 172, 254, 0.7);
      transform: translate(-50%, -50%);
      z-index: 4;
      animation: flarePulse 4s ease-in-out infinite alternate;
    }

    @keyframes flarePulse {
      0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.85; }
      100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
    }

    @keyframes earthFloat {
      0% { transform: rotate(0deg) translateY(0px); }
      100% { transform: rotate(2deg) translateY(-12px); }
    }

    /* Layer UI / Tampilan Antarmuka */
    .ui-layer {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px 50px;
    }

    /* Header & Navigasi Atas */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .brand-logo {
      font-family: 'Great Vibes', cursive;
      font-size: 28px;
      letter-spacing: 1px;
      color: #ffffff;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    nav {
      display: flex;
      gap: 30px;
    }

    nav a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-weight: 300;
      transition: all 0.3s ease;
      position: relative;
      padding-bottom: 4px;
    }

    nav a:hover, nav a.active {
      color: #ffffff;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
    }

    nav a.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 1px;
      background: #ffffff;
      box-shadow: 0 0 5px #ffffff;
    }

    .header-icons {
      display: flex;
      gap: 20px;
      align-items: center;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }

    /* Konten Tengah (Hero Section) */
    .hero-content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: -20px;
    }

    .tagline-top {
      font-size: 11px;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.65);
      margin-bottom: 10px;
      font-weight: 300;
    }

    .main-title {
      font-family: 'Great Vibes', cursive;
      font-size: 95px;
      font-weight: 400;
      color: #ffffff;
      line-height: 1.1;
      text-shadow: 
        0 0 20px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(100, 180, 255, 0.4);
      margin-bottom: 5px;
    }

    .heart-icon {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 20px;
      animation: heartBeat 2s infinite ease-in-out;
    }

    @keyframes heartBeat {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.25); opacity: 1; text-shadow: 0 0 10px #fff; }
    }

    .subtitle-desc {
      font-size: 13px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.75);
      line-height: 1.8;
      max-width: 450px;
      margin-bottom: 35px;
      letter-spacing: 0.5px;
    }

    /* Tombol Kapsul Glowing */
    .btn-action {
      position: relative;
      padding: 12px 35px;
      border-radius: 30px;
      border: 1px solid rgba(255, 255, 255, 0.35);
      background: rgba(10, 20, 35, 0.4);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: #ffffff;
      text-decoration: none;
      font-size: 13px;
      letter-spacing: 1px;
      font-weight: 400;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 
        0 0 20px rgba(79, 172, 254, 0.25),
        inset 0 0 15px rgba(255, 255, 255, 0.1);
      transition: all 0.4s ease;
      cursor: pointer;
    }

    .btn-action:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.8);
      box-shadow: 
        0 0 30px rgba(0, 191, 255, 0.6),
        inset 0 0 20px rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }

    /* Sidebar Ornamen "SCROLL" Kiri */
    .scroll-indicator {
      position: absolute;
      left: 50px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      gap: 15px;
      writing-mode: vertical-rl;
      font-size: 10px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.4);
      z-index: 10;
    }

    .scroll-indicator::before {
      content: '';
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.4));
    }

    /* Footer / Teks Bawah */
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 11px;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 300;
    }

    .footer-left, .footer-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .line-decor {
      width: 30px;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }

    /* Responsif untuk Layar HP */
    @media (max-width: 768px) {
      nav { display: none; }
      .main-title { font-size: 65px; }
      .scroll-indicator { display: none; }
      .ui-layer { padding: 20px 25px; }
      .earth-container {
        width: 180vw;
        height: 180vw;
        bottom: -35vh;
        right: -40vw;
      }
    }
  </style>
</head>
<body>

  <!-- Canvas Animasi Bintang & Meteor -->
  <canvas id="spaceCanvas"></canvas>

  <!-- Kabut Galaksi & Bima Sakti -->
  <div class="nebula-bg"></div>
  <div class="milky-way"></div>

  <!-- Lengkungan Bumi Besar di Sudut Kanan Bawah -->
  <div class="earth-container">
    <div class="earth-glow-atmosphere"></div>
    <div class="sunflare"></div>
  </div>

  <!-- Sidebar Scroll Indicator Kiri -->
  <div class="scroll-indicator">
    ‹ &nbsp; SCROLL
  </div>

  <!-- Layer Tampilan Antarmuka Utamanya -->
  <div class="ui-layer">
    <!-- Header -->
    <header>
      <div class="brand-logo">Our Story ♡</div>
      <nav>
        <a href="#" class="active">Home</a>
        <a href="#">Story</a>
        <a href="#">Gallery</a>
        <a href="#">Music</a>
        <a href="#">Letter</a>
        <a href="#">More</a>
      </nav>
      <div class="header-icons">
        <span>🎵</span>
        <span>☰</span>
      </div>
    </header>

    <!-- Hero Content Tengah -->
    <main class="hero-content">
      <div class="tagline-top">Somewhere in the Universe</div>
      <h1 class="main-title">You & Me</h1>
      <div class="heart-icon">🤍</div>
      <p class="subtitle-desc">
        Dua jiwa, satu semesta,<br>
        dan perjalanan yang tak pernah berakhir.
      </p>
      <a href="#" class="btn-action">
        Buka Cerita Kita &nbsp; →
      </a>
    </main>

    <!-- Footer -->
    <footer>
      <div class="footer-left">
        <span>🤍</span> Always & Forever <div class="line-decor"></div>
      </div>
      <div class="footer-right">
        <div class="line-decor"></div> ✦ Our Little Universe ✦
      </div>
    </footer>
  </div>

  <!-- Script JavaScript Animasi Bintang & Meteor Real-time -->
  <script>
    const canvas = document.getElementById('spaceCanvas');
    const ctx = canvas.getContext('2d');

    let stars = [];
    let shootingStars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Inisialisasi Bintang-bintang
    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.alpha = Math.random();
        this.speed