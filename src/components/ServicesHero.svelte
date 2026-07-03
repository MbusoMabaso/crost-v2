<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import LightRays from './LightRays.svelte'
  import SoftAurora from './SoftAurora.svelte'

  let visible = false
  const tabs = [
    {
      title: 'Advertising',
      desc: 'Omnicom Advertising is the world\'s biggest creative network, comprised of iconic agencies trusted by almost two thirds of the world\'s leading companies to build distinctive and lasting brands that are creatively celebrated and commercially proven.',
    },
    {
      title: 'Branding',
      desc: 'Omnicom Branding is a catalyst for change for the world\'s biggest brands, moving businesses, people, and the world forward. Our agencies have been trusted to create some of the most recognizable brands while positioning others for tomorrow.',
    },
    {
      title: 'Commerce',
      desc: 'Omnicom Commerce runs on Flywheel, our cloud-based commerce and retail media accelerator. Our modern commerce solutions are seamlessly integrated across Omnicom\'s capabilities, connecting sales and marketing more closely than ever.',
    },
    {
      title: 'Experiential',
      desc: 'Omnicom Experiential is the most comprehensive end-to-end sports, entertainment, and experiential ecosystem in the world. With unmatched scale, talent access, media influence and cultural fluency, Experiential helps brands activate, engage, and grow.',
    },
    {
      title: 'Health',
      desc: 'Omnicom Health is the world\'s most comprehensive, multi-specialty healthcare communications network. Powered by Omni and Acxiom\'s unparalleled life-sciences data, we are an engine of creativity and science.',
    },
    {
      title: 'Media',
      desc: 'Omnicom Media integrates insight, data, technology and talent to help the world\'s leading brands grow faster, decide smarter, and act with certainty.',
    },
    {
      title: 'Precision Marketing',
      desc: 'With deeply specialized agencies and consultancies across experience design, CRM, and marketing technology, Omnicom Precision Marketing delivers transformative solutions rooted in data, technology, and AI.',
    },
    {
      title: 'Production',
      desc: 'Omnicom Production is Omnicom\'s connected content and production engine, leveraging AI-powered tools, platforms, and connected data to support large-scale global campaigns, content amplification, and the development of scaled and synthetic content.',
    },
    {
      title: 'Public Relations',
      desc: 'Omnicom Public Relations connects clients to a powerful ecosystem of expertise spanning public relations, public affairs, and specialty. When you\'re shaping perception, navigating policy, or solving high-value challenges.',
    }
  ]

  let currentIndex = 0
  let interval

  function startCarousel() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length
    }, 4000)
  }

  function stopCarousel() {
    clearInterval(interval)
  }

  function selectTab(index) {
    currentIndex = index
    stopCarousel() // Stop loop on manual interaction
  }

  onMount(() => {
    visible = true
    startCarousel()
  })

  function scrollToSection(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>
{#if visible}
  <section id="services-hero" transition:fade={{ duration: 750 }}>
    <div class="aurora-bg">
      <SoftAurora />
    </div>
    <LightRays />
    <div class="container text-only-container">
      <div class="hero-content">

        <div class="tabs">
          {#each tabs as tab, index}
            <button class="tab {index === currentIndex ? 'active' : ''}" 
                    aria-pressed={index === currentIndex ? "true" : "false"}
                    on:click={() => selectTab(index)}>
              <span class="tab-title">{tab.title}</span>
            </button>
          {/each}
        </div>

        <div class="content-wrapper">
          <h1 class="content-title">{tabs[currentIndex].title}</h1>
          <p class="content-desc">{tabs[currentIndex].desc}</p>
        </div>

        <div class="cta-buttons">
          <button class="btn btn-primary" on:click={() => scrollToSection('services')}>Our Services</button>
          <button class="btn btn-secondary" on:click={() => scrollToSection('pricing')}>Pricing Plans</button>
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  /* Tabs Styles */
  .tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 3rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .tab {
    padding: 0.7rem 1.5rem;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #000;
    cursor: pointer;
    border-radius: 50px;
    transition: all 0.3s;
  }
  .tab.active {
    background: var(--crost-primary);
    border-color: var(--crost-primary);
    color: #fff;
  }
  .tab-title {
    font-size: 1rem;
    font-weight: 500;
  }


  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  /* Restore Grid Layout */
  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
    text-align: left;
    margin-bottom: 3rem;
    min-height: 250px;
    position: relative;
    z-index: 10;
  }

  .content-title {
    font-size: 3rem !important;
    margin: 0 !important;
    line-height: 1.1 !important;
    color: #000 !important;
  }

  .content-desc {
    font-size: 1.25rem !important;
    margin: 0 !important;
    line-height: 1.6 !important;
    color: #000 !important;
  }

  .text-only-container {
    display: flex !important;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  .hero-content {
    max-width: 1000px;
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
    .content-wrapper {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
</style>