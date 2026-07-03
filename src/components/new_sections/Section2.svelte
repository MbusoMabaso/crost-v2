<script>
  import { onMount } from 'svelte';

  let wrapper;
  let container;
  let nav;
  let prevBtn;
  let nextBtn;
  let pillIndicator;
  let cards = [];
  let currentPosition = 0;
  let maxPosition = 0;
  let seps = [];

  // Configuration
  const mobileBreakpoint = 640;
  const CAROUSEL_SPEED = 900;
  const CAROUSEL_DUR_MIN = 0.45;
  const CAROUSEL_DUR_MAX = 1.2;

  function getVisibleWidth() {
    if (!wrapper) return 0;
    const s = getComputedStyle(wrapper);
    return wrapper.offsetWidth - (parseFloat(s.paddingLeft) || 0) - (parseFloat(s.paddingRight) || 0);
  }

  function isNavNeeded() {
    if (!container || !wrapper) return false;
    return container.scrollWidth > getVisibleWidth() + 1;
  }

  function isCarouselActive() {
    return window.innerWidth > mobileBreakpoint;
  }

  function updateNavVisibility() {
    if (!nav || !container || !wrapper) return;
    if (!isCarouselActive()) {
      nav.style.display = 'none';
      return;
    }
    nav.style.display = isNavNeeded() ? 'flex' : 'none';
  }

  function getGap() {
    if (!container) return 0;
    return parseFloat(getComputedStyle(container).gap) || 0;
  }

  function getCardWidth() {
    if (!cards || cards.length === 0) return 0;
    return cards[0]?.offsetWidth || 0;
  }

  function getStep() {
    if (cards.length < 2) return getCardWidth() + getGap();
    return (cards[1]?.offsetLeft || 0) - (cards[0]?.offsetLeft || 0);
  }

  const SEP_FADE = 32;
  function updateSepVisibility(xPos) {
    if (!seps.length || !cards[0]) return;
    const base = cards[0].offsetLeft;
    const gap = getGap();
    seps.forEach(sep => {
      if (!sep) return;
      const rightRel = sep.offsetLeft - base + sep.offsetWidth - xPos;
      const o = (rightRel + gap) / SEP_FADE;
      sep.style.opacity = o < 0 ? 0 : o > 1 ? 1 : o;
    });
  }

  function getMaxScroll() {
    if (!container || !wrapper) return 0;
    return Math.max(0, container.scrollWidth - getVisibleWidth());
  }

  function getMaxPosition() {
    const step = getStep();
    if (step <= 0) return 0;
    return Math.max(1, Math.ceil(getMaxScroll() / step));
  }

  function updatePillIndicator() {
    if (!pillIndicator || !cards) return;
    const pillDots = pillIndicator.querySelectorAll('.s2-pill-dot');
    const activeIndex = Math.min(currentPosition, cards.length - 1);
    
    pillDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
    cards.forEach((card, index) => {
      if (card) card.classList.toggle('is-active', index === activeIndex);
    });
  }

  function updateArrowStates() {
    if (!prevBtn || !nextBtn) return;
    prevBtn.classList.toggle('is-disabled', currentPosition <= 0);
    nextBtn.classList.toggle('is-disabled', currentPosition >= maxPosition);
  }

  function updatePosition() {
    if (!isCarouselActive()) {
      currentPosition = 0;
      if (container) container.style.transform = "";
      return;
    }

    const maxScroll = getMaxScroll();
    const xPos = Math.min(currentPosition * getStep(), maxScroll);

    if (window.gsap) {
      window.gsap.to(container, {
        x: -xPos,
        duration: 0.6,
        ease: "power2.inOut",
        onUpdate: () => {
          updateSepVisibility(-(window.gsap.getProperty(container, "x") || 0));
        },
      });
    } else if (container) {
      container.style.transform = `translateX(${-xPos}px)`;
      updateSepVisibility(xPos);
    }

    updatePillIndicator();
    updateArrowStates();
  }

  onMount(() => {
    updateNavVisibility();
    updatePillIndicator();
    updateArrowStates();

    const handleResize = () => {
      updateNavVisibility();
      updatePosition();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  function next() {
    if (currentPosition < maxPosition) {
      currentPosition++;
      updatePosition();
    }
  }

  function prev() {
    if (currentPosition > 0) {
      currentPosition--;
      updatePosition();
    }
  }
</script>

<section class="section-2">
  <div class="container s2-inner">
    <span class="s2-eyebrow">
      <div class="s2-eyebrow-dot"></div>
      <span>Our Culture Pillars</span>
    </span>

    <div class="s2-row">
      <h2 class="s2-heading">Clarity, Curiosity, and Connection</h2>
      <p class="s2-text">
        We drive brand value by operationalizing our three core cultural tenets:
      </p>
    </div>

    <div class="s2-carousel">
      <div class="s2-cards" bind:this={wrapper}>
        <div class="s2-cards-inner" bind:this={container}>
          <div class="s2-card is-active" bind:this={cards[0]}>
            <p class="s2-card-title">Commercial Clarity</p>
            <p class="s2-card-text">
              We begin every engagement by uncovering the core business objective. We ask the hard questions to ensure every creative decision serves a measurable goal.
            </p>
          </div>
          <p class="s2-card-sep" bind:this={seps[0]}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path d="M25.1265 14.6721C26.3815 14.6721 27.3988 15.6897 27.3991 16.9446V22.6382H32.3993C33.6544 22.6382 34.6717 23.6557 34.6719 24.9107C34.6718 26.1658 33.6544 27.1832 32.3993 27.1832H27.3991V32.3996C27.3989 33.6546 26.3816 34.6721 25.1265 34.6721C23.8715 34.672 22.8541 33.6545 22.8539 32.3996V27.1832L16.9445 27.184C15.6895 27.1839 14.6722 26.1664 14.6719 24.9115C14.6719 23.6564 15.6893 22.6391 16.9445 22.639L22.8539 22.6382V16.9454C22.854 15.6904 23.8714 14.6722 25.1265 14.6721Z" fill="#FAFAFA" fill-opacity="0.9"></path></svg></span>
          </p>
          <div class="s2-card" bind:this={cards[1]}>
            <p class="s2-card-title">Creative Curiosity</p>
            <p class="s2-card-text">
              We foster a workspace where ideas are tested, not just presented. Our team combines strategy and design to find innovative paths to audience engagement.
            </p>
          </div>
          <p class="s2-card-sep" bind:this={seps[1]}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M17.7272 9.33333C18.9824 9.33333 20 10.378 20 11.6667C20 12.9553 18.9824 14 17.7272 14H2.27278C1.01756 14 0 12.9553 0 11.6667C0 10.378 1.01756 9.33333 2.27278 9.33333H17.7272Z" fill="#FAFAFA" fill-opacity="0.9"></path><path d="M17.7272 0C18.9824 0 20 1.04467 20 2.33333C20 3.622 18.9824 4.66667 17.7272 4.66667H2.27278C1.01756 4.66667 0 3.622 0 2.33333C0 1.04467 1.01756 0 2.27278 0H17.7272Z" fill="#FAFAFA" fill-opacity="0.9"></path></svg></span>
          </p>
          <div class="s2-card" bind:this={cards[2]}>
            <p class="s2-card-title">Collective Connection</p>
            <p class="s2-card-text">
              Storytelling and technology work in unison at Crost. We connect the dots between brand identity and digital performance to deliver world-class impact.
            </p>
          </div>
        </div>
      </div>

      <div class="s2-nav" bind:this={nav}>
        <div class="s2-nav-arrows">
          <button class="s2-arrow-btn s2-arrow-prev" on:click={prev} aria-label="Previous slide" bind:this={prevBtn}>
            <svg class="arrow-ico arrow-ico-default" xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
              <rect width="62.4802" height="62.4802" rx="31.2401" fill="#B7B7B7"></rect>
              <path d="M43.6483 31.0164L20.8501 31.464" stroke="#2D2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M32.0254 19.8411L20.8501 31.464L32.473 42.6393" stroke="#2D2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <svg class="arrow-ico arrow-ico-hover" xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
              <rect width="62.4802" height="62.4802" rx="31.2401" fill="white"></rect>
              <path d="M43.6498 31.0894L20.8491 31.391" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M32.0986 19.8398L20.8491 31.391L32.4002 42.6405" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <button class="s2-arrow-btn s2-arrow-next" on:click={next} aria-label="Next slide" bind:this={nextBtn}>
            <svg class="arrow-ico arrow-ico-default" xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
              <rect width="62.4802" height="62.4802" rx="31.2401" fill="#B7B7B7"></rect>
              <path d="M43.6483 31.0164L20.8501 31.464" stroke="#2D2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M32.0254 19.8411L20.8501 31.464L32.473 42.6393" stroke="#2D2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <svg class="arrow-ico arrow-ico-hover" xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
              <rect width="62.4802" height="62.4802" rx="31.2401" fill="white"></rect>
              <path d="M43.6498 31.0894L20.8491 31.391" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M32.0986 19.8398L20.8491 31.391L32.4002 42.6405" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
        <div class="s2-pill-indicator" bind:this={pillIndicator}>
           <div class="s2-pill-dot active"></div>
           <div class="s2-pill-dot"></div>
           <div class="s2-pill-dot"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section-2 {
    background-color: #0a0a0a;
    background:
      linear-gradient(
        0deg,
        #000 0.21%,
        rgba(2, 2, 2, 0.88) 13.01%,
        rgba(12, 12, 12, 0.33) 38.87%,
        rgba(18, 18, 18, 0) 49.73%
      ),
      linear-gradient(180deg, #000 4.65%, rgba(0, 0, 0, 0) clamp(340px, 43.54rem - 24.76vw, 600px)),
      url("/wp-content/uploads/2026/05/1486d37ab0ab15daf57de2ff1f9bd25dc90c048b.jpg") lightgray
        50% / cover no-repeat;
    color: #ffffff;
    padding: 100px 0;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .s2-inner {
    display: flex;
    flex-direction: column;
  }

  .s2-eyebrow {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 600;
    letter-spacing: 0.16px;
    line-height: 1.4;
    color: #fff;
    text-transform: uppercase;
  }

  .s2-eyebrow-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #fff;
  }

  .s2-text {
    margin: 0;
    width: clamp(100px, -3.68rem + 42.35vw, 551px);
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 400;
    line-height: 160%;
    color: #ffffff;
  }

  .s2-heading {
    margin: 0;
    padding-top: 20px;
    width: clamp(100px, -3.68rem + 42.35vw, 551px);
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(30px, 0.73rem + 2.38vw, 46px);
    font-weight: 600;
    line-height: 1;
    color: #ffffff;
  }

  .s2-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .s2-carousel {
    width: 100%;
    position: relative;
    padding: 0;
    overflow: hidden;
  }

  .s2-cards {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .s2-cards-inner {
    display: flex;
    padding-top: clamp(30px, -0.27rem + 4.46vw, 60px);
    gap: 20px;
    will-change: transform;
    backface-visibility: hidden;
  }

  .s2-card {
    flex: 1;
    background: rgba(250, 250, 250, 0.9);
    border-radius: 24px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 320px;
  }

  .s2-card-title {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(16px, 0.91rem + 0.38vw, 20px);
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.4px;
    color: #000;
  }

  .s2-card-text {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 500;
    line-height: 153%;
    color: #1b1b1b;
  }

  .s2-card-sep {
    margin: 0;
    flex-shrink: 0;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  @media (max-width: 640px) {
    .s2-row {
        flex-direction: column;
        gap: 20px;
    }
    .s2-card {
      min-width: 280px;
    }
  }

  .s2-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 30px;
  }

  .s2-nav-arrows {
    display: flex;
    gap: 10px;
  }

  .s2-arrow-btn {
    width: clamp(45px, 1.46rem + 2.83vw, 64px);
    height: clamp(45px, 1.46rem + 2.83vw, 64px);
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0;
  }

  .s2-arrow-btn.is-disabled {
    opacity: 0.6;
    cursor: default;
    pointer-events: none;
  }

  .s2-pill-indicator {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .s2-pill-dot {
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background-color: rgba(255, 255, 255, 0.3);
    transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .s2-pill-dot.active {
    width: 35px;
    background-color: #ffffff;
  }

  .arrow-ico {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(45px, 1.46rem + 2.83vw, 64px);
    height: clamp(45px, 1.46rem + 2.83vw, 64px);
  }

  .s2-arrow-next .arrow-ico {
    transform: translate(-50%, -50%) scaleX(-1);
  }

  .arrow-ico-hover {
    display: none;
  }

  .s2-arrow-btn:hover .arrow-ico-default {
    display: none;
  }

  .s2-arrow-btn:hover .arrow-ico-hover {
    display: block;
  }
</style>