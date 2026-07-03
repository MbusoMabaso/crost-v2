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
  const prefix = 's4';
  const mobileBreakpoint = 768;

  function getMaxScroll() {
    if (!container || !wrapper) return 0;
    const s = getComputedStyle(wrapper);
    const visibleWidth = wrapper.offsetWidth - (parseFloat(s.paddingLeft) || 0) - (parseFloat(s.paddingRight) || 0);
    return Math.max(0, container.scrollWidth - visibleWidth);
  }

  function getMaxPosition() {
    if (!container || !cards || cards.length === 0) return 0;
    const step = cards[1]?.offsetLeft - cards[0].offsetLeft || cards[0].offsetWidth;
    if (step <= 0) return 0;
    return Math.max(1, Math.ceil(getMaxScroll() / step));
  }

  onMount(() => {
    maxPosition = getMaxPosition();
    const handleResize = () => {
      maxPosition = getMaxPosition();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<section class="section-4">
  <div class="s4-inner container">
    <!-- child 1 — paragraph -->
    <span class="s4-eyebrow">
      <img class="s4-eyebrow-bg" src="/wp-content/uploads/2026/03/meetOmni-badge-02.png" alt="" aria-hidden="true">
      <span class="s4-eyebrow-dot"></span>
      <span>OPEN Centers of Excellence</span>
    </span>

    <!-- child 2 — flex-row, justify-content: space-between -->
    <div class="s4-row">
      <h2 class="s4-heading">From Inclusion Into Impact</h2>
      <p class="s4-text">
        OPEN operates through three Centers of Excellence, each focused on
        a different dimension of how inclusion drives our business:
      </p>
    </div>

    <!-- feature 1 — image left, text right -->
    <div class="s4-feature">
      <img class="s4-feature-img" src="/wp-content/uploads/2026/06/s4-how-we-work.jpg" alt="Two Omnicom colleagues, one using a wheelchair, talking in a workplace lounge">
      <div class="s4-feature-col">
        <p class="s4-feature-eyebrow">How We Work</p>
        <h3 class="s4-feature-title">
          Culture &amp; Workplace Experience: Why Employee Development
          Matters
        </h3>
        <p class="s4-text">
          Culture is built in the day-to-day. Through engagement,
          community, and continuous learning, we shape a
          workplace where every person feels valued, connected, and
          equipped to grow.
        </p>
      </div>
    </div>

    <!-- feature 2 — reversed: image right, text left (image is still first in the DOM → image-first on mobile) -->
    <div class="s4-feature s4-feature-reverse">
      <img class="s4-feature-img" src="/wp-content/uploads/2026/06/s4-how-we-lead.jpg" alt="A group of Omnicom colleagues in discussion around a meeting table">
      <div class="s4-feature-col">
        <p class="s4-feature-eyebrow">How We Lead</p>
        <h3 class="s4-feature-title">Social Impact &amp; Advocacy</h3>
        <p class="s4-text">
          Influence carries responsibility. We use our platform and
          partnerships to champion inclusion beyond our walls, proving that corporate
          responsibility and business results aren’t competing priorities.
        </p>
      </div>
    </div>

    <!-- feature 3 — image left, text right (same order as feature 1) -->
    <div class="s4-feature">
      <img class="s4-feature-img" src="/wp-content/uploads/2026/06/s4-how-we-win.jpg" alt="Two Omnicom colleagues collaborating in an office">
      <div class="s4-feature-col">
        <p class="s4-feature-eyebrow">How We Win</p>
        <h3 class="s4-feature-title">Inclusive Business Performance</h3>
        <p class="s4-text">
          Better work starts with broader thinking. We equip teams with
          cultural intelligence, consistent guidance, and proven
          strategies so the work we put into market reflects the audiences
          it’s meant to reach.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .section-4 {
    background-color: #ffffff;
    padding: clamp(60px, -0.54rem + 8.93vw, 120px) 0;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .s4-inner {
    display: flex;
    flex-direction: column;
  }

  .s4-text {
    margin: 0;
    margin-top: 26px;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 400;
    line-height: 160%;
    color: #373737;
  }

  .s4-feature-eyebrow {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.815rem + 0.237vw, 16.46px);
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: #373737;
  }

  .s4-heading {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(30px, 0.73rem + 2.38vw, 46px);
    font-weight: 600;
    line-height: 1;
    color: #373737;
  }

  .s4-feature-title {
    margin: 0;
    margin-top: 10px;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(20px, -0.61rem + 3.87vw, 46px);
    font-weight: 600;
    line-height: 1.1;
    color: #373737;
  }

  .s4-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 64px;
    padding-top: clamp(20px, 0.39rem + 1.79vw, 32px);
  }

  .s4-row .s4-heading {
    flex: 1 1 0;
    min-width: 0;
  }

  .s4-row .s4-text {
    flex: 1 1 0;
    min-width: 0;
    margin-top: 0;
  }

  .s4-feature {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;
    margin-top: clamp(30px, 1.146rem + 2.893vw, 60px);
  }

  .s4-feature-reverse {
    flex-direction: row-reverse;
  }

  .s4-feature + .s4-feature {
    margin-top: clamp(50px, 2.41rem + 1.49vw, 60px);
  }

  .s4-feature-img {
    flex: 1 1 0;
    min-width: 0;
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
  }

  .s4-feature-col {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .s4-row {
      flex-direction: column;
      gap: 20px;
    }
    .s4-feature {
      flex-direction: column;
      gap: 20px;
    }
    .s4-feature-img,
    .s4-feature-col,
    .s4-row .s4-heading,
    .s4-row .s4-text {
      flex: 0 0 auto;
      width: 100%;
    }
    .s2-text,
    .s2-heading,
    .s4-row .s4-heading,
    .s4-row .s4-text {
      width: 100%;
    }
    .s2-text {
      margin-top: 30px;
    }
  }

  .s4-eyebrow {
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

  .s4-eyebrow-bg {
    position: absolute;
    width: 440px !important;
    max-width: none !important;
    height: 196px !important;
    top: -77px;
    left: -86px;
    z-index: 0;
    pointer-events: none;
  }

  .s4-eyebrow > :not(.s4-eyebrow-bg) {
    position: relative;
    z-index: 1;
  }

  .s4-eyebrow-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #000;
  }
</style>
