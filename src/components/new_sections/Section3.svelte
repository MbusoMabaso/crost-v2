<script>
  import { onMount } from 'svelte';

  let wrapper;
  let container;
  let nav;
  let prevBtn;
  let nextBtn;
  let pillIndicator;
  let cards;
  let currentPosition = 0;
  let maxPosition = 0;

  // Configuration
  const prefix = 's3';
  const mobileBreakpoint = 768;
  const CAROUSEL_SPEED = 900;
  const CAROUSEL_DUR_MIN = 0.45;
  const CAROUSEL_DUR_MAX = 1.2;
  const CAROUSEL_EASE = "power2.inOut";

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
    return cards[0].offsetWidth;
  }

  function getStep() {
    if (cards.length < 2) return getCardWidth() + getGap();
    return cards[1].offsetLeft - cards[0].offsetLeft;
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
    if (!pillIndicator || !cards || !nav) return;
    const pillDots = nav.querySelectorAll('.s3-pill-dot');
    const activeIndex = currentPosition >= maxPosition ? cards.length - 1 : Math.min(currentPosition, cards.length - 1);
    
    pillDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
    cards.forEach((card, index) => {
      card.classList.toggle('is-active', index === activeIndex);
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
      if (window.gsap) window.gsap.set(container, { x: 0 });
      else if (container) container.style.transform = "";
      return;
    }

    const maxScroll = getMaxScroll();
    const xPos = currentPosition >= maxPosition ? maxScroll : Math.min(currentPosition * getStep(), maxScroll);

    if (window.gsap) {
      const currentX = window.gsap.getProperty(container, "x") || 0;
      const distance = Math.abs(-xPos - currentX);
      const duration = Math.min(CAROUSEL_DUR_MAX, Math.max(CAROUSEL_DUR_MIN, distance / CAROUSEL_SPEED));
      
      window.gsap.to(container, {
        x: -xPos,
        duration: duration,
        ease: CAROUSEL_EASE,
        force3D: true,
      });
    } else if (container) {
      container.style.transform = `translateX(${-xPos}px)`;
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

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  let touchStartX = 0;
  function handleTouchEnd(e) {
    if (!isCarouselActive()) return;
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentPosition < maxPosition) {
        currentPosition++;
        updatePosition();
      } else if (diff < 0 && currentPosition > 0) {
        currentPosition--;
        updatePosition();
      }
    }
  }
</script>

<section class="section-3">
  <div class="s3-inner container">
    <span class="s3-eyebrow">
      <img class="s3-eyebrow-bg" src="/wp-content/uploads/2026/03/meetOmni-badge-03.png" alt="" aria-hidden="true">
      <span class="s3-eyebrow-dot"></span>
      <span>OPEN in Action</span>
    </span>

    <div class="s3-carousel">
      <div class="s3-cards" bind:this={wrapper}>
        <div class="s3-cards-inner" bind:this={container}>
          <div class="s3-card is-active">
            <div class="s3-card-intro">
              <h2 class="s3-card-heading">Fueling the People</h2>
              <p class="s3-card-intro-text">
                OPEN creates real opportunities for participation and
                leadership across the Omnicom network:
              </p>
            </div>
            <div class="s3-card-box" style="background-image: url('/wp-content/uploads/2026/06/s3-fueling-people.jpg')">
              <div class="s3-subcards">
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Business Resource Groups (BRGs)</h3>
                  <p class="s3-subcard-text">
                    Our BRGs are open to everyone. They’re where community
                    takes shape across agencies, disciplines, geographies, and spaces to connect, share perspectives,
                    and support each other’s growth. Omnicom’s BRGs
                    include: AcentO, ALC, Black Together, OmniVets,
                    Omniwomen, OPEN Disability, and OPEN Pride.
                  </p>
                </div>
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Global OPEN House Series</h3>
                  <p class="s3-subcard-text">
                    Through in-person and virtual events hosted at our agencies, we bring the global community together to spotlight regional wins and show how inclusion priorities are being activated locally.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="s3-card">
            <div class="s3-card-intro">
              <h2 class="s3-card-heading">Fueling the Business</h2>
              <p class="s3-card-intro-text">
                <strong style="font-weight: 700">RoundZero: Ensuring Inclusion from the Start</strong><br>Inclusion enters the work before the work begins.
                RoundZero is Omnicom’s approach to embedding cultural
                intelligence and diverse perspectives before the brief,
                before the pitch, and before a single concept takes shape.
                It comes to life through three components:
              </p>
            </div>
            <div class="s3-card-box s3-card-box-low" style="background-image: url('/wp-content/uploads/2026/06/s3-fueling-business.jpg')">
              <div class="s3-subcards">
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Content</h3>
                  <p class="s3-subcard-text">
                    The proof. We showcase how inclusive thinking leads to
                    work that drives real results for clients.
                  </p>
                </div>
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Capabilities</h3>
                  <p class="s3-subcard-text">
                    Tools and offerings that help agencies build inclusive
                    practices into creative development from day one.
                  </p>
                </div>
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Curriculum</h3>
                  <p class="s3-subcard-text">
                    Training that equips every Omnicom employee with the practices behind more inclusive work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="s3-nav" bind:this={nav}>
        <div class="s3-nav-arrows">
          <button class="s3-arrow-btn s3-arrow-prev" on:click={prev} aria-label="Previous slide">
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
          <button class="s3-arrow-btn s3-arrow-next" on:click={next} aria-label="Next slide">
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
        <div class="s3-pill-indicator" bind:this={pillIndicator}></div>
      </div>
    </div>
  </div>
</section>

<style>
  .section-3 {
    background-color: #000;
    color: #ffffff;
    padding: 60px 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .s3-inner {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  .s3-text {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 400;
    line-height: 160%;
    color: #ffffff;
  }

  .s3-heading {
    margin: 0;
    padding-top: 20px;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(30px, 1.45rem + 0.89vw, 36px);
    font-weight: 600;
    line-height: 1;
    color: #ffffff;
  }

  .s3-cards {
    width: 100%;
    position: relative;
    padding-left: max(32px, 5vw);
    padding-right: max(32px, 5vw);
    overflow: hidden;
  }

  .s3-cards-inner {
    display: flex;
    gap: clamp(60px, 2.43rem + 5.63vw, 120px);
    will-change: transform;
    backface-visibility: hidden;
  }

  .s3-card {
    flex: 0 0 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 20px;
    transition: opacity 0.3s ease;
  }

  .s3-card-box,
  .s3-card-intro,
  .s3-subcards {
    transition: opacity 0.3s ease;
    will-change: opacity;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  @media (min-width: 769px) {
    .s3-card:not(.is-active) .s3-card-box {
      opacity: 0.5;
    }
    .s3-card:not(.is-active) .s3-subcards {
      opacity: 1;
    }
    .s3-card:not(.is-active) .s3-card-intro {
      opacity: 0.5;
    }
  }

  .s3-card-box {
    background-color: #0a0a0a;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 30px;
    padding: clamp(15px, 0.57rem + 1.45vw, 30px) clamp(15px, 0.33rem + 2.41vw, 40px);
    margin-top: 30px;
    height: clamp(686px, 46.35rem - 3.857vw, 726px);
    display: flex;
    align-items: flex-end;
  }

  .s3-card-box-low {
    background-position: center 32%;
  }

  @media (max-width: 768px) {
    .s3-card-box-low {
      background-image: url('/wp-content/uploads/2026/06/s3-fueling-business-mobile.jpg') !important;
      background-position: center top;
    }
    .s3-card-box:not(.s3-card-box-low) {
      background-image: url('/wp-content/uploads/2026/06/a8770e51ec8828d748cf1c299a0e1f20cbc2d585.jpg') !important;
      background-size: 460% auto;
      background-position: 45% calc(158px - 116.3vw);
    }
  }

  .s3-card-intro {
    display: flex;
    flex-direction: column;
  }

  .s3-card-intro-text {
    margin: 0;
    padding-top: 26px;
    min-height: 76px;
    font-family: "Instrument Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    color: #ffffff;
  }

  .s3-card-heading {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(30px, 1.45rem + 0.89vw, 36px);
    font-weight: 600;
    line-height: 1;
    color: #ffffff;
  }

  .s3-subcards {
    display: flex;
    flex-direction: row;
    gap: clamp(8px, 0.16rem + 1.35vw, 22px);
  }

  .s3-subcard {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 0.38rem + 0.97vw, 20px);
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.19);
    border-radius: 30px;
    padding: clamp(23px, 1.268rem + 0.675vw, 30px) clamp(16px, 0.66rem + 1.35vw, 30px) clamp(23px, 1.268rem + 0.675vw, 30px);
  }

  .s3-subcard-text {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 500;
    line-height: 1.53;
    color: #e1e1e1;
  }

  .s3-subcard-text:first-child {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.16px;
  }

  .s3-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 60px;
  }

  .s3-nav-arrows {
    display: flex;
    gap: 10px;
  }

  .s3-arrow-btn {
    width: clamp(45px, 1.46rem + 2.83vw, 64px);
    height: clamp(45px, 1.46rem + 2.83vw, 64px);
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0;
  }

  .s3-arrow-btn.is-disabled {
    opacity: 0.6;
    cursor: default;
    pointer-events: none;
  }

  .s3-pill-indicator {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .s3-pill-dot {
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background-color: rgba(255, 255, 255, 0.3);
    transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .s3-pill-dot.active {
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

  .s3-arrow-next .arrow-ico {
    transform: translate(-50%, -50%) scaleX(-1);
  }

  .arrow-ico-hover {
    display: none;
  }

  .s3-arrow-btn:hover .arrow-ico-default {
    display: none;
  }

  .s3-arrow-btn:hover .arrow-ico-hover {
    display: block;
  }

  @media (max-width: 768px) {
    .s3-cards {
      overflow: visible;
    }
    .s3-cards-inner {
      flex-direction: column;
    }
    .s3-card {
      flex: 0 0 auto;
    }
    .s3-card:nth-of-type(2) {
      padding-top: 0;
    }
    .s3-subcards {
      flex-direction: column;
    }
    .s3-subcard-text:first-child {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.4px;
    }
  }

  .s3-eyebrow {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: 272px;
    height: 41px;
    padding: 6px 14px;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 600;
    letter-spacing: 0.16px;
    line-height: 1.4;
  }

  .s3-eyebrow-bg {
    position: absolute;
    width: 440px !important;
    max-width: none !important;
    height: 196px !important;
    top: -77px;
    left: -81px;
    z-index: 0;
    pointer-events: none;
  }

  .s3-eyebrow > :not(.s3-eyebrow-bg) {
    position: relative;
    z-index: 1;
  }

  .s3-eyebrow-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #fff;
  }
</style>
