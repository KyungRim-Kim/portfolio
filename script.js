/* ==========================================================================
   김경림 포트폴리오 — script.js
   Vanilla JS only. No frameworks.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Icons ---------- */
  if (window.lucide) {
    lucide.createIcons();
  }

  /* ---------- Progress bar + topnav shadow ---------- */
  const progressBar = document.getElementById('progressBar');
  const topnav = document.getElementById('topnav');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
    if (topnav) topnav.classList.toggle('scrolled', scrollTop > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ---------- Active nav link on scroll (목차 클릭 시 이동 + 현재 위치 표시) ---------- */
  const navAnchors = document.querySelectorAll('[data-nav]');
  const sections = Array.from(navAnchors)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function setActiveNav() {
    let currentId = '';
    const scrollPos = window.scrollY + window.innerHeight * 0.35;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) {
        currentId = sec.id;
      }
    });

    navAnchors.forEach(a => {
      const targetId = a.getAttribute('href').replace('#', '');
      a.classList.toggle('active', targetId === currentId);
    });
  }
  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  /* ---------- 프로젝트 카드 펼치기/접기 ---------- */
  document.querySelectorAll('[data-expandable]').forEach(card => {
    const head = card.querySelector('.project-card-head');
    if (!head) return;

    head.addEventListener('click', () => {
      const expanded = head.getAttribute('aria-expanded') === 'true';
      head.setAttribute('aria-expanded', String(!expanded));
      card.classList.toggle('is-collapsed', expanded);
    });
  });

  /* ---------- "그 외 경험" 토글 ---------- */
  const toggleOtherBtn = document.getElementById('toggleOther');
  const otherGrid = document.getElementById('otherGrid');

  if (toggleOtherBtn && otherGrid) {
    toggleOtherBtn.addEventListener('click', () => {
      const isOpen = toggleOtherBtn.getAttribute('aria-expanded') === 'true';
      toggleOtherBtn.setAttribute('aria-expanded', String(!isOpen));
      otherGrid.hidden = isOpen;
      toggleOtherBtn.childNodes[0].textContent = isOpen ? '그 외 경험 보기 ' : '그 외 경험 접기 ';
    });
  }

  /* ---------- Project Overview 카드 클릭 시 해당 섹션으로 부드럽게 이동 ---------- */
  document.querySelectorAll('[data-scrollto]').forEach(card => {
    card.addEventListener('click', (e) => {
      const targetId = card.getAttribute('data-scrollto');
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- 이미지 확대 보기 (라이트박스) ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---------- 스크롤 리빌 애니메이션 ---------- */
  const revealTargets = document.querySelectorAll(
    '.about-card, .strength-card, .skill-card, .timeline-item, .overview-card, ' +
    '.project-card, .stat-card, .hub-spoke, .ba-item, .other-card'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- PDF 출력 버튼 ---------- */
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  /* ---------- 인쇄 시 애니메이션/펼침 상태 정리 ---------- */
  function prepareForPrint() {
    // 모든 프로젝트 카드를 펼친 상태로, reveal 애니메이션은 즉시 표시 상태로 전환
    document.querySelectorAll('.project-card').forEach(card => card.classList.remove('is-collapsed'));
    document.querySelectorAll('.project-card-head').forEach(h => h.setAttribute('aria-expanded', 'true'));
    revealTargets.forEach(el => el.classList.add('is-visible'));
    if (otherGrid) otherGrid.hidden = false;
  }

  window.addEventListener('beforeprint', prepareForPrint);
  if (window.matchMedia) {
    window.matchMedia('print').addEventListener('change', (mql) => {
      if (mql.matches) prepareForPrint();
    });
  }

});
