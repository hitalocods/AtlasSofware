const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu a');

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    setMenu(!document.body.classList.contains('menu-open'));
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
    }
  });
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const projectTrack = document.querySelector('.project-track');
const projectPrev = document.querySelector('.project-prev');
const projectNext = document.querySelector('.project-next');
const projectProgress = document.querySelector('.project-progress span');
let isPointerDown = false;
let startX = 0;
let scrollStart = 0;
let autoScrollPaused = false;
let autoScrollFrame = 0;

if (projectTrack) {
  const mobileCarouselQuery = window.matchMedia('(max-width: 680px), (pointer: coarse)');

  const getCardStep = () => {
    const card = projectTrack.querySelector('.project-card');
    if (!card) return 320;
    const styles = window.getComputedStyle(projectTrack);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const updateProjectProgress = () => {
    if (!projectProgress) return;
    const maxScroll = projectTrack.scrollWidth - projectTrack.clientWidth;
    const progress = maxScroll <= 0 ? 0 : projectTrack.scrollLeft / maxScroll;
    projectProgress.style.setProperty('--project-progress', `${progress * 82}%`);
  };

  const scrollProjects = (direction) => {
    autoScrollPaused = true;
    projectTrack.scrollBy({
      left: getCardStep() * direction,
      behavior: 'smooth',
    });
    window.setTimeout(() => {
      autoScrollPaused = mobileCarouselQuery.matches;
    }, 1800);
  };

  projectPrev?.addEventListener('click', () => scrollProjects(-1));
  projectNext?.addEventListener('click', () => scrollProjects(1));

  projectTrack.addEventListener('pointerdown', (event) => {
    isPointerDown = true;
    autoScrollPaused = true;
    projectTrack.classList.add('is-dragging');
    startX = event.clientX;
    scrollStart = projectTrack.scrollLeft;
    projectTrack.setPointerCapture(event.pointerId);
  });

  projectTrack.addEventListener('pointermove', (event) => {
    if (!isPointerDown) return;
    projectTrack.scrollLeft = scrollStart - (event.clientX - startX);
  });

  projectTrack.addEventListener('pointerup', () => {
    isPointerDown = false;
    projectTrack.classList.remove('is-dragging');
    window.setTimeout(() => {
      autoScrollPaused = mobileCarouselQuery.matches;
    }, 1600);
  });

  projectTrack.addEventListener('pointercancel', () => {
    isPointerDown = false;
    projectTrack.classList.remove('is-dragging');
    autoScrollPaused = mobileCarouselQuery.matches;
  });

  projectTrack.addEventListener('mouseenter', () => {
    autoScrollPaused = true;
  });

  projectTrack.addEventListener('mouseleave', () => {
    if (!isPointerDown) autoScrollPaused = false;
  });

  projectTrack.addEventListener('scroll', updateProjectProgress, { passive: true });

  const autoScrollProjects = () => {
    if (!mobileCarouselQuery.matches && !autoScrollPaused && !document.hidden) {
      const maxScroll = projectTrack.scrollWidth - projectTrack.clientWidth;
      if (maxScroll > 0) {
        if (projectTrack.scrollLeft >= maxScroll - 2) {
          autoScrollPaused = true;
        } else {
          projectTrack.scrollLeft += 0.45;
        }
        updateProjectProgress();
      }
    }
    autoScrollFrame = window.requestAnimationFrame(autoScrollProjects);
  };

  updateProjectProgress();
  autoScrollPaused = mobileCarouselQuery.matches;
  autoScrollFrame = window.requestAnimationFrame(autoScrollProjects);

  mobileCarouselQuery.addEventListener('change', () => {
    autoScrollPaused = mobileCarouselQuery.matches;
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !autoScrollFrame) {
      autoScrollFrame = window.requestAnimationFrame(autoScrollProjects);
    }
  });
}

const animatedSections = document.querySelectorAll('.section, .marquee');
let ticking = false;

function updateScrollEffects() {
  const viewportHeight = window.innerHeight || 1;

  animatedSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const rawProgress = 1 - rect.top / viewportHeight;
    const progress = Math.max(-1, Math.min(1.4, rawProgress));
    section.style.setProperty('--scroll-progress', progress.toFixed(3));
  });

  ticking = false;
}

function requestScrollEffects() {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(updateScrollEffects);
}

updateScrollEffects();
window.addEventListener('scroll', requestScrollEffects, { passive: true });
window.addEventListener('resize', requestScrollEffects);
