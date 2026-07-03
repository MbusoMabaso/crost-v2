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

  // Configuration
  const mobileBreakpoint = 768;

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
    const pillDots = pillIndicator.querySelectorAll('.s3-pill-dot');
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
</script>

<section class="section-3">
  <div class="container s3-inner">
    <span class="s3-eyebrow">
      <div class="s3-eyebrow-dot"></div>
      <span>Crost in Motion</span>
    </span>

    <div class="s3-carousel">
      <div class="s3-cards" bind:this={wrapper}>
        <div class="s3-cards-inner" bind:this={container}>

          <div class="s3-card is-active" bind:this={cards[0]}>
            <div class="s3-card-intro">
              <h2 class="s3-card-heading">Empowering the Team</h2>
              <p class="s3-card-intro-text">
                At Crost, we provide structural support for leadership and professional development across our entire creative network:
              </p>
            </div>
            <div class="s3-card-box" style="background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80')">
              <div class="s3-subcards">
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Specialist Intelligence Groups (SIGs)</h3>
                  <p class="s3-subcard-text">
                    Our SIGs connect experts across different geographies to share market intelligence and emerging technology trends. They ensure our clients benefit from global perspectives regardless of their local market.
                  </p>
                </div>
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Collaborative Workshops</h3>
                  <p class="s3-subcard-text">
                    We host recurring virtual and in-person summits where teams spotlight regional successes and demonstrate how strategic principles are being activated in real-world campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="s3-card" bind:this={cards[1]}>
            <div class="s3-card-intro">
              <h2 class="s3-card-heading">Empowering the Work</h2>
              <p class="s3-card-intro-text">
                <strong style="font-weight: 700">LevelZero: Building Clarity from the Ground Up</strong><br>
                Strategic clarity enters the process before the creative begins. LevelZero is our framework for embedding market intelligence before the first concept takes shape.
              </p>
            </div>
            <div class="s3-card-box s3-card-box-low" style="background-image: url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80')">
              <div class="s3-subcards">
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Evidence</h3>
                  <p class="s3-subcard-text">
                    We lead with proof. We document how strategic alignment leads to work that moves audiences and achieves commercial KPIs.
                  </p>
                </div>
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Frameworks</h3>
                  <p class="s3-subcard-text">
                    Custom tools and methodologies that help our teams build consistent brand narratives into creative execution from day one.
                  </p>
                </div>
                <div class="s3-subcard">
                  <h3 class="s3-subcard-text">Knowledge</h3>
                  <p class="s3-subcard-text">
                    Structured training that equips every Crost strategist and designer with the methodologies behind world-class performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="s3-nav" bind:this={nav}>
        <div class="s3-nav-arrows">
          <button class="s3-arrow-btn s3-arrow-prev" on:click={prev} aria-label="Previous slide" bind:this={prevBtn}>
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
          <button class="s3-arrow-btn s3-arrow-next" on:click={next} aria-label="Next slide" bind:this={nextBtn}>
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
        <div class="s3-pill-indicator" bind:this={pillIndicator}>
           <div class="s3-pill-dot active"></div>
           <div class="s3-pill-dot"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section-3 {
    background-color: #000;
    color: #ffffff;
    padding: 100px 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .s3-inner {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  .s3-cards {
    width: 100%;
    position: relative;
    padding: 0;
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

  .s3-card-box {
    background-color: #0a0a0a;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 30px;
    padding: clamp(15px, 0.57rem + 1.45vw, 30px) clamp(15px, 0.33rem + 2.41vw, 40px);
    margin-top: 30px;
    height: clamp(600px, 40rem, 700px);
    display: flex;
    align-items: flex-end;
  }

  .s3-card-box-low {
    background-position: center 32%;
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
    width: 64px;
    height: 64px;
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0;
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
    width: 64px;
    height: 64px;
  }

  .s3-arrow-next .arrow-ico {
    transform: translate(-50%, -50%) scaleX(-1);
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
    .s3-subcards {
      flex-direction: column;
    }
  }

  .s3-eyebrow {
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
    margin-bottom: 2rem;
  }

  .s3-eyebrow-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #fff;
  }
</style>