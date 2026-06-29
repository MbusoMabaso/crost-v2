<script lang="ts">
  import PixelCard from "../lib/components/PixelCard.svelte";
  import LightRays from "./LightRays.svelte";
  import SoftAurora from "./SoftAurora.svelte";
</script>

<section id="services">
  <div class="aurora-bg">
    <SoftAurora />
  </div>
  <LightRays />
  <div class="container">
    <h2>What We Do</h2>
    <p class="section-intro">Six strategic disciplines delivered as one coherent agency, so your brand always moves with commercial clarity.</p>

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
          <p>Market, audience and cultural intelligence that informs strategy and makes work feel relevant in the right contexts.</p>
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
          <p>Paid, owned and earned media execution with clear measurement and optimisation aligned to business outcomes.</p>
        </div>
      </PixelCard>
      <PixelCard>
        <div class="service-box-content">
          <div class="service-icon">📰</div>
          <h3>Communications</h3>
          <p>Integrated PR, corporate and reputation work that amplifies strategic positioning and executive presence.</p>
        </div>
      </PixelCard>
    </div>

    <div class="service-notes">
      <p>Crost Media is built to hold strategy, creative and delivery together so each output is directly connected to commercial momentum.</p>
    </div>
  </div>
</section>

<style>
  section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
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
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }

  #services {
    background: linear-gradient(135deg, var(--crost-soft) 0%, #ffffff 100%);
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  h2 {
    text-align: center;
    color: var(--crost-dark);
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
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
    z-index: 10; /* Ensure content is above canvas */
    position: relative;
    color: var(--crost-dark);
  }

  .service-icon {
    font-size: 2.625rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.625rem;
  }

  .large-enhanced-icon {
    height: 5.6rem;
    width: 5.6rem;
  }

  .service-box-content h3 {
    color: var(--crost-dark);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .service-box-content p {
    color: var(--crost-muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 2.5rem;
    }

    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .service-box-content {
      padding: 1.5rem;
    }

    .service-icon {
      font-size: 2.25rem;
      height: 2.25rem;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    h2 {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .service-box-content {
      padding: 1.5rem;
    }

    .service-icon {
      font-size: 2rem;
      height: 2rem;
    }

    .service-box-content h3 {
      font-size: 1.1rem;
    }

    .service-box-content p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 2rem 0;
    }

    .container {
      padding: 0 1rem;
    }

    h2 {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
    }

    .service-box-content {
      padding: 1.25rem;
    }

    .service-icon {
      font-size: 1.75rem;
      height: 1.75rem;
      margin-bottom: 0.75rem;
    }

    .service-box-content h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }

    .service-box-content p {
      font-size: 0.85rem;
      line-height: 1.5;
    }
  }
</style>
