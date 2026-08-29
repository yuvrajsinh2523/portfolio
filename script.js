/* ==========================================================================
   Yuvrajsinh Jadeja — Portfolio
   script.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobileOverlay');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      overlay.classList.remove('open');
    });
  });

  /* ---------- Typewriter effect ---------- */
  const typewriterEl = document.getElementById('typewriter');
  const cursor = document.getElementById('cursor');
  const text =
    'MCA student shipping MERN stack apps, REST APIs and Gemini-powered AI tools — with real client-facing experience behind it.';
  const speed = 28;
  const startDelay = 500;
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      typewriterEl.insertBefore(document.createTextNode(text.charAt(i)), cursor);
      i++;
      setTimeout(typeChar, speed);
    } else {
      cursor.style.display = 'none';
    }
  }
  setTimeout(typeChar, startDelay);

  /* ---------- Pills fade in (independent of typewriter) ---------- */
  setTimeout(() => {
    document.getElementById('pills').classList.add('show');
  }, 400);

  /* ---------- Copy email to clipboard ---------- */
  const copyEmail = document.getElementById('copyEmail');
  const toast = document.getElementById('copyToast');

  copyEmail.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('yuvrajsinhjadeja25023@gmail.com').then(() => {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1600);
    });
  });

  /* ---------- Background videos: play + global sound toggle ----------
     Browsers block autoplay-with-sound everywhere, so every video starts
     muted (that's the only way autoplay is allowed at all). The floating
     button below is the one user gesture that's allowed to turn sound on
     for all three videos at once.
  ------------------------------------------------------------------- */
 const videos = Array.from(
  document.querySelectorAll('.js-bg-video:not(.footer-bg-video)')
);
  const soundToggle = document.getElementById('soundToggle');
  const soundIcon = soundToggle.querySelector('.icon');
  const soundLabel = soundToggle.querySelector('.label');
  let soundOn = false;

  videos.forEach((v) => {
    v.muted = true;
    v.play().catch(() => {
      /* Autoplay can still be blocked on some mobile browsers until the
         user interacts with the page at all — that's expected, not a bug. */
    });
  });

  soundToggle.addEventListener('click', () => {
    soundOn = !soundOn;
    videos.forEach((v) => {
      v.muted = !soundOn;
      if (soundOn) v.play().catch(() => {});
    });
    soundIcon.textContent = soundOn ? '🔊' : '🔈';
    soundLabel.textContent = soundOn ? 'Sound on' : 'Sound off';
  });

});
