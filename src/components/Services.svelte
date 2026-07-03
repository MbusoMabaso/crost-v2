<script lang="ts">
  import PixelCard from "../lib/components/PixelCard.svelte";
  import SoftAurora from "./SoftAurora.svelte";
</script>

<section id="services" class="snap-section">
  <div class="aurora-bg">
    <SoftAurora />
  </div>
  <div class="container snap-container">
    <h2 class="editorial-heading">What We <span class="italic">Do</span></h2>
    <div class="services-grid">
      <PixelCard>
        <div class="service-box-content">
          <div class="service-icon">📌</div>
          <h3>Brand Strategy</h3>
          <p>We create positioning and narrative frameworks that connect brand identity with commercial ambition.</p>
        </div>
      </PixelCard>
      <PixelCard>
        <div class="service-box-content">
          <div class="service-icon"><img src="/Icons/creative.svg" alt="Creative Systems" class="large-enhanced-icon" /></div>
          <h3>Creative Systems</h3>
          <p>Visual identities, campaign systems and content formats designed to behave consistently across every channel.</p>
        </div>
      </PixelCard>
      <PixelCard>
        <div class="service-box-content">
          <div class="service-icon"><img src="/Icons/Culture.svg" alt="Culture & Insight" class="large-enhanced-icon" /></div>
          <h3>Culture & Insight</h3>
          <p>Market, audience and cultural intelligence that informs strategy and makes work feel relevant in context.</p>
        </div>
      </PixelCard>
      <PixelCard>
        <div class="service-box-content">
          <div class="service-icon">🌐</div>
          <h3>Digital Experience</h3>
          <p>Web, social and digital activation built to move audiences through attention, trust and action.</p>
        </div>
      </PixelCard>
      <PixelCard>
        <div class="service-box-content">
          <div class="service-icon">📈</div>
          <h3>Performance & Media</h3>
          <p>Paid, owned and earned media execution with clear measurement aligned to business outcomes.</p>
        </div>
      </PixelCard>
      <PixelCard>
        <div class="service-box-content">
          <div class="service-icon">📰</div>
          <h3>Communications</h3>
          <p>Integrated PR and reputation work that amplifies strategic positioning and executive presence.</p>
        </div>
      </PixelCard>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

  .snap-section {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
  
  section {
    padding: 8rem 0;
    position: relative;
    overflow: hidden;
    background: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .aurora-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }

  .editorial-heading {
    text-align: center;
    color: #000;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 4rem;
    text-transform: uppercase;
  }

  .editorial-heading .italic {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 400;
    text-transform: none;
    font-size: 1.05em;
    letter-spacing: -0.01em;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
    justify-items: center;
  }

  .service-box-content {
    padding: 2rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 10;
    position: relative;
    color: #1a1a1a;
  }

  .service-icon {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.2rem;
  }

  .large-enhanced-icon {
    height: 4.5rem;
    width: 4.5rem;
  }

  .service-box-content h3 {
    color: #000;
    font-family: 'EB Garamond', serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    line-height: 1.1;
    font-style: italic;
  }

  .service-box-content p {
    color: #555;
    line-height: 1.5;
    font-size: 0.9rem;
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 5rem 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .editorial-heading {
      font-size: 2.5rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }
  }
</style>