<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import LightRays from './LightRays.svelte'
  import SoftAurora from './SoftAurora.svelte'

  let visible = false
  const tabs = [
    {
      title: 'Advertising',
      desc: 'At Crost, we create distinctive campaigns that are creatively celebrated and commercially proven. Our approach merges high-level storytelling with strategic distribution to ensure every message reaches its mark and drives measurable growth.',
    },
    {
      title: 'Branding',
      desc: 'We build cohesive brand identities that act as catalysts for growth. From foundational strategy to visual systems, we position brands to resonate in current markets and scale for future opportunities with clarity and purpose.',
    },
    {
      title: 'Commerce',
      desc: 'Our integrated commerce solutions bridge the gap between discovery and transaction. We optimize retail media and digital ecosystems to convert consumer attention into seamless transactions and measurable performance.',
    },
    {
      title: 'Experiential',
      desc: 'We craft immersive brand activations that connect scale with cultural fluency. Our experiential services help brands engage audiences through impactful end-to-end activations that bring brand stories to life in the physical and digital world.',
    },
    {
      title: 'Health',
      desc: 'Combining creative evidence with specialized intelligence, we deliver communications that navigate the complexities of the healthcare sector. We turn medical science into story and technical data into meaningful human connection.',
    },
    {
      title: 'Media',
      desc: 'We integrate market insight with advanced technology to help brands grow faster and act with certainty. Our media strategies are designed to optimize impact through precision planning, data-driven execution, and unparalleled market leverage.',
    },
    {
      title: 'Precision Marketing',
      desc: 'We deliver transformative marketing solutions rooted in data and AI. By focusing on experience design and CRM technology, we ensure every brand interaction is personalized, relevant, and effective across the entire customer journey.',
    },
    {
      title: 'Production',
      desc: 'Our connected production engine leverages modern tools and AI to support large-scale content amplification. We balance high-volume output with the technical excellence required for premium global campaigns and synthetic content.',
    },
    {
      title: 'Public Relations',
      desc: 'We shape perception and manage high-value challenges through integrated public affairs and narrative strategy. We connect brands to the powerful ecosystems of expertise and influence that drive public discourse and long-term reputation.',
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
    display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; justify-content: center;
  }

  .aurora-bg {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;
  }

  #services-hero {
    min-height: 100vh; display: flex; align-items: center; width: 100%; overflow: hidden;
    position: relative; box-sizing: border-box; padding-top: 5.5rem; padding-bottom: 2rem;
  }

  .btn {
    padding: 0.9rem 2.2rem; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer;
    font-weight: 600; transition: all 0.3s;
  }

  .btn-primary {
    background: linear-gradient(135deg, #1256d8 0%, #1e73f1 100%); color: white;
    box-shadow: 0 4px 15px rgba(18, 86, 216, 0.25);
  }

  .btn-primary:hover {
    transform: translateY(-3px); box-shadow: 0 8px 25px rgba(18, 86, 216, 0.3);
  }

  .btn-secondary {
    background-color: transparent; border: 2px solid var(--crost-primary); color: var(--crost-primary);
  }

  .btn-secondary:hover {
    background-color: var(--crost-primary); color: white; transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .content-wrapper {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
</style>