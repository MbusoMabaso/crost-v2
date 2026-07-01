<script>
  import { onMount, onDestroy } from 'svelte'
  import { fade } from 'svelte/transition'
  import LightRays from './LightRays.svelte'
  import SoftAurora from './SoftAurora.svelte'

  const content = [
    {
      title: 'Advertising',
      desc: 'Building the world’s most recognizable and effective brands.',
    },
    {
      title: 'Branding',
      desc: 'Creating brand value that drives business value.',
    },
    {
      title: 'Commerce',
      desc: 'The world’s most advanced end-to-end commerce specialist.',
    },
    {
      title: 'Experiential',
      desc: 'Activating brands at the center of culture.',
    },
    {
      title: 'Health',
      desc: 'Shaping a healthier, more connected world.',
    },
    {
      title: 'Media',
      desc: 'Designing ecosystems for growth.',
    },
    {
      title: 'Precision Marketing',
      desc: 'Omnicom\'s performance powerhouse.',
    },
    {
      title: 'Production',
      desc: 'Delivering connected content at scale.',
    },
    {
      title: 'Public Relations',
      desc: 'Omnicom\'s reputation and influence authority.',
    }
  ]

  let currentIndex = 0
  let interval

  function startCarousel() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % content.length
    }, 4000)
  }

  onMount(() => startCarousel())
  onDestroy(() => clearInterval(interval))

  function scrollToSection(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>
<section id="services-hero">
  <div class="aurora-bg">
    <SoftAurora />
  </div>
  <LightRays />
  <div class="container text-only-container">
    <div class="hero-content">
      {#key currentIndex}
        <div in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
          <h1>{content[currentIndex].title}</h1>
          <p>{content[currentIndex].desc}</p>
        </div>
      {/key}
      <div class="cta-buttons">
        <button class="btn btn-primary" on:click={() => scrollToSection('services')}>Our Services</button>
        <button class="btn btn-secondary" on:click={() => scrollToSection('pricing')}>Pricing Plans</button>
      </div>
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .text-only-container {
    display: flex !important;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .hero-content {
    max-width: 800px;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
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

  #services-hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    padding-top: 5.5rem;
    padding-bottom: 2rem;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    color: var(--crost-dark);
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: 800;
  }

  .hero-content p {
    font-size: 1rem;
    color: var(--crost-muted);
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .btn {
    padding: 0.9rem 2.2rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
  }

  .btn-primary {
    background: linear-gradient(135deg, #1256d8 0%, #1e73f1 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(18, 86, 216, 0.25);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(18, 86, 216, 0.3);
  }

  .btn-secondary {
    background-color: transparent;
    border: 2px solid var(--crost-primary);
    color: var(--crost-primary);
  }

  .btn-secondary:hover {
    background-color: var(--crost-primary);
    color: white;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 1.8rem;
    }

    .hero-content p {
      font-size: 0.95rem;
    }
  }
</style>