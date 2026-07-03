<script>
  import { onMount, onDestroy } from 'svelte'
  import LightRays from './LightRays.svelte'
  import Grainient from './lib/Grainient.svelte'

  const values = [
    { id: 1, title: 'Discovery', copy: 'We audit your current position — brand, market, competitors, and commercial context. We ask hard questions and document what we find, without assumption.' },
    { id: 2, title: 'Strategy', copy: 'We define objectives, audiences, channels, and success metrics. The strategy document becomes the single source of truth that every creative decision is tested against.' },
    { id: 3, title: 'Creative Development', copy: 'Our creative team develops concepts grounded in the strategy. We present options with clear rationale' },
    { id: 4, title: 'Execution & Reporting', copy: 'We deliver, measure, and iterate. Reporting is honest and structured around your KPIs.' },
  ]
</script>

<section id="about" class="relative">
  <LightRays />
  <div class="container relative z-10">

    <h2 class="editorial-heading">WHO WE <span class="italic">ARE</span></h2>

    <div class="who-we-are-content relative overflow-hidden">
      <div class="grainient-container">
        <Grainient 
          color1="#0a0a0a" 
          color2="#0a1a3a" 
          color3="#1a0a1a" 
          class="absolute inset-0 w-full h-full"
        />
      </div>
      <div class="content relative z-10">
        <p>We work with organisations that require more than visual output. Our engagements begin with commercial clarity: who you are, what you need to achieve, and what stands between you and that goal. Creative work follows. Not the other way around.</p>
        <p>Our team brings together strategy, design, culture, storytelling, and technology, disciplines that operate independently in most agencies, and in unison at Crost.</p>
      </div>
    </div>

    <div class="values-section">
      <h2 class="editorial-heading">OUR <span class="italic">METHODOLOGY</span></h2>

      <div class="values-grid">
        {#each values as value}
          <div class="value-card">
            <div class="value-header">
              <span class="value-marker">■</span>
              <h4>{value.title}</h4>
            </div>
            <p>{value.copy}</p>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

  section {
    padding: 8rem 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #ffffff;
    width: 100%;
    overflow-x: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .editorial-heading {
    text-align: center;
    color: #000;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-weight: 800;
    line-height: 0.95;
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

  .who-we-are-content {
    background: var(--crost-dark);
    color: white;
    padding: 4rem;
    border-radius: 24px;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.6;
    box-shadow: 0 20px 40px rgba(10, 31, 61, 0.15);
    margin-bottom: 8rem;
  }

  .grainient-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .content {
    position: relative;
    z-index: 10;
    max-width: 900px;
    margin: 0 auto;
  }

  .content p {
    margin-bottom: 2rem;
    color: #f0f0f0;
    font-weight: 400;
  }

  .content p:last-child {
    margin-bottom: 0;
  }

  /* Values Section Styling (Matched to Culture Page) */
  .values-section {
    margin-top: 4rem;
    padding-top: 6rem;
    border-top: 1px solid #eee;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .value-card {
    padding: 1rem 0 2rem;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s ease;
  }

  .value-card:hover {
    border-color: #000;
  }

  .value-header {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .value-marker {
    color: #1256d8;
    font-size: 0.7rem;
  }

  .value-card h4 {
    color: #000;
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .value-card p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
    padding-left: 1.95rem;
  }

  @media (max-width: 1024px) {
    .who-we-are-content {
      padding: 3rem;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 6rem 0;
    }
    .container {
      padding: 0 1.5rem;
    }
    .who-we-are-content {
      padding: 2.5rem 1.5rem;
      font-size: 1.1rem;
    }
    .editorial-heading {
      font-size: 2.75rem;
    }
    .values-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .value-card p {
      padding-left: 0;
    }
  }
</style>
