<script>
  import { onMount, tick } from 'svelte'
  import { fade } from 'svelte/transition'
  import Iridescence from './Iridescence.svelte'

  let visible = $state(false)

  const tabs = [
    'Overview',
    'Capability Leadership',
    'Corporate Leadership',
    'Corporate Governance'
  ]

  let activeTab = $state('Overview')
  let videoBlurVisible = $state(false)
  let videoBlurRef = $state()
  let revealStart = $state(0)
  let revealEnd = $state(0)

  const advantagePills = [
    { label: 'Orchestrated Brand Intelligence', id: 'advantage-0' },
    { label: 'Narrative-Driven Performance', id: 'advantage-1' },
    { label: 'Converged Commerce Architectures', id: 'advantage-2' },
    { label: 'Autonomous Creative Workflows', id: 'advantage-3' },
    { label: 'Privacy-First Audience Sovereignty', id: 'advantage-4' }
  ]

  const advantageDetails = [
    {
      title: 'Orchestrated Brand Intelligence',
      text: 'We unify fragmented data streams into a single source of truth. Our intelligence-led approach ensures that every creative decision is backed by market evidence, resulting in work that resonates deeply and performs predictably.'
    },
    {
      title: 'Narrative-Driven Performance',
      text: 'We don’t just create content; we build influence. By centering every campaign on a core human truth, we develop brand narratives that capture attention and move audiences toward measurable commerce outcomes.'
    },
    {
      title: 'Converged Commerce Architectures',
      text: 'We eliminate the distance between brand desire and final purchase. Our commerce systems integrate storytelling directly into the transactional journey, optimizing for speed, trust, and repeat customer behavior.'
    },
    {
      title: 'Autonomous Creative Workflows',
      text: 'We deploy AI-powered tools to augment, not replace, human creativity. By automating the high-volume technical tasks of production, we free our teams to focus on the high-value strategic thinking that sets your brand apart.'
    },
    {
      title: 'Privacy-First Audience Sovereignty',
      text: 'In an era of shifting data regulations, we protect your brand’s reach. We design audience strategies that respect consumer privacy while maintaining the precision required for personalized, impactful digital delivery.'
    }
  ]

  let activeAdvantageIndex = $state(0)
  let progressPercentage = $derived(((activeAdvantageIndex + 1) / advantagePills.length) * 100)
  let wrapperRef = $state()

  const content = {
    'Overview': {
      title: 'Strategy and creativity, held to the same standard.',
      text: `At Crost, we eliminate the fragmentation between brand strategy and creative production. We operate as a single, high-fidelity partner to ensure your vision remains intact from the first brief to the final pixel.`
    },
    'Capability Leadership': {
      title: 'Capability Leadership',
      text: 'Our leadership team bridges the gap between creative excellence and commercial performance. We ensure every output is not only visually superior but technically sound and strategically aligned.'
    },
    'Corporate Leadership': {
      title: 'Corporate Leadership',
      text: 'We provide dedicated oversight for complex brand ecosystems. Our leadership focus is on sustainable growth, ensuring that every creative investment contributes to long-term brand equity.'
    },
    'Corporate Governance': {
      title: 'Corporate Governance',
      text: 'We prioritize transparency and accountability in every engagement. Our governance models are built to manage risk while maintaining the agility required for modern digital-first execution.'
    }
  }

  function setActive(tab) { activeTab = tab }

  function scrollToSection(id) {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  function updateRevealBounds() {
    if (!videoBlurRef) return
    const rect = videoBlurRef.getBoundingClientRect()
    const scrollY = window.pageYOffset
    revealStart = scrollY + rect.top - window.innerHeight * 0.65
    revealEnd = scrollY + rect.bottom - window.innerHeight * 0.25
  }

  function handleScroll() {
    if (videoBlurRef) {
      const scrollY = window.pageYOffset
      videoBlurVisible = scrollY > revealStart && scrollY < revealEnd
    }

    if (wrapperRef) {
      const rect = wrapperRef.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (rect.top <= 0) {
        const totalHeight = rect.height - windowHeight
        const scrolled = Math.abs(rect.top)
        const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1)

        activeAdvantageIndex = Math.min(
          Math.floor(progress * advantagePills.length),
          advantagePills.length - 1
        )
      } else {
        activeAdvantageIndex = 0
      }
    }
  }

  onMount(async () => {
    visible = true
    await tick()
    updateRevealBounds()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', () => {
      updateRevealBounds()
      handleScroll()
    })
    return () => window.removeEventListener('scroll', handleScroll)
  })
</script>

<div class="about-hero-root">
  {#if visible}
    <section id="about-hero" transition:fade={{ duration: 750 }}>
      <div class="iridescence-bg">
        <Iridescence color={[0.7, 0.8, 1]} mouseReact={true} amplitude={0.05} speed={0.5} />
      </div>

      <div class="container relative z-10">
        <div class="hero-flex">
          <div class="hero-content">
            <div class="hero-nav-wrapper">
              <nav class="about-menu">
                {#each tabs as t}
                  <button class:active={activeTab === t} on:click={() => setActive(t)}>{t}</button>
                {/each}
              </nav>
            </div>
            <h1>{content[activeTab].title}</h1>
            <p>{content[activeTab].text}</p>
            <div class="cta-buttons">
              <button class="btn btn-primary" on:click={() => scrollToSection('about')}>Our Process</button>
              <button class="btn btn-secondary" on:click={() => scrollToSection('team')}>Meet the Team</button>
            </div>
          </div>
          <div class="hero-image">
            <img src="/LogoFullName.svg" alt="Crost Media" />
          </div>
        </div>
      </div>
    </section>

    <section class="hero-blur-section" bind:this={videoBlurRef} class:revealed={videoBlurVisible}>
      <div class="container">
        <div class="blur-grid">
          <div class="blur-copy">
            <span class="blur-eyebrow">Connected Impact</span>
            <h2 class="editorial-heading">Growth through <span class="italic">connected</span> capabilities.</h2>
            <p class="blur-text">Our Connected Capabilities across media, commerce, and creative delivery ensure that your brand resonates at every touchpoint of the global landscape.</p>
            <ul class="blur-list">
              <li>Media, Commerce & Consulting</li>
              <li>Precision Marketing & Advertising</li>
              <li>Production, Health & Public Relations</li>
              <li>Branding & Experiential</li>
            </ul>
          </div>
          <div class="blur-visual">
            <div class="video-blur-card">
              <div id="video-blur">
                <div class="blur-overlay"></div>
                <div class="noise-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="advantage-pin-wrapper" bind:this={wrapperRef}>
      <div class="sticky-container">
        <div class="container">
          <div class="pin-grid">
            <div class="pin-visual-col">
              <div class="lottie-container">
                <lottie-player
                  src={[
                    '/wp-content/uploads/2025/11/05-About-us-graphic-01.json',
                    '/wp-content/uploads/2025/11/05-About-us-graphic-02.json',
                    '/wp-content/uploads/2025/11/05-About-us-graphic-03.json',
                    '/wp-content/uploads/2025/11/05-About-us-graphic-04.json',
                    '/wp-content/uploads/2025/11/05-About-us-graphic-05.json'
                  ][activeAdvantageIndex]}
                  background="transparent"
                  loop autoplay
                  key={activeAdvantageIndex}
                ></lottie-player>
              </div>
              <div class="advantage-details-card">
                <div class="card-header">
                  <span class="card-marker">■</span>
                  <h3 class="card-title">{advantageDetails[activeAdvantageIndex].title}</h3>
                </div>
                <p class="card-description">{advantageDetails[activeAdvantageIndex].text}</p>
              </div>
            </div>

            <div class="pin-controls-col">
              <div class="pills-stack">
                {#each advantagePills as pill, i}
                  <button
                    class="advantage-pill"
                    class:active={activeAdvantageIndex === i}
                    on:click={() => activeAdvantageIndex = i}
                  >
                    {pill.label}
                  </button>
                {/each}
              </div>
              <div class="progress-track">
                <div class="progress-bar" style="width: {progressPercentage}%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

  /* RESET GLOBAL OVERFLOWS IN CASE THEY ARE PERSISTING */
  :global(body), :global(html), :global(#app) {
    overflow-x: visible !important;
  }

  .about-hero-root {
    width: 100%;
    position: relative;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #1a1a1a;
  }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; box-sizing: border-box; }
  .relative { position: relative; }
  .z-10 { z-index: 10; }

  #about-hero {
    min-height: 100vh; display: flex; align-items: center; position: relative;
    background: #ffffff; padding: 100px 0; overflow: hidden;
  }
  .iridescence-bg { position: absolute; inset: 0; z-index: 0; }
  .hero-flex { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: center; }

  .about-menu {
    display: flex; gap: 0.5rem; padding: 0.4rem; border: 1px solid #eee;
    border-radius: 50px; width: fit-content; margin-bottom: 2rem;
  }
  .about-menu button {
    background: none; border: none; padding: 0.6rem 1.2rem; cursor: pointer;
    font-weight: 500; border-radius: 50px; transition: 0.3s;
    font-family: 'Inter', sans-serif;
  }
  .about-menu button.active { background: #1256d8; color: #fff; }

  /* REVERTING HERO TITLE STYLING PER REQUEST, JUST KEEPING THE FONT */
  #about-hero h1 {
    font-size: 2.5rem;
    color: var(--crost-dark);
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: 800;
  }
  #about-hero p {
    font-size: 1rem;
    color: var(--crost-muted);
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .cta-buttons { display: flex; gap: 1rem; }
  .btn { padding: 0.9rem 2.2rem; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s; font-family: 'Inter', sans-serif; }
  .btn-primary { background: #1256d8; color: #fff; border: none; }
  .btn-secondary { background: transparent; border: 2px solid #1256d8; color: #1256d8; }
  .hero-image img { width: 100%; max-width: 380px; }

  .hero-blur-section { padding: 120px 0; background: #f8f9fa; opacity: 0; transition: 0.8s; }
  .hero-blur-section.revealed { opacity: 1; }
  .blur-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }

  .editorial-heading {
    color: #000;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 2rem;
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

  .blur-eyebrow {
    display: block;
    color: #1256d8;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .blur-text { font-size: 1.25rem; color: #4a4a4a; line-height: 1.6; margin-bottom: 2rem; }
  .blur-list { list-style: none; padding: 0; display: grid; gap: 0.8rem; }
  .blur-list li::before { content: "→"; margin-right: 0.8rem; color: #1256d8; }
  .video-blur-card { height: 400px; border-radius: 24px; background: #fff; border: 1px solid #eee; overflow: hidden; }

  /* PINNING SECTION STYLING (MATCHED TO CULTURE VALUES) */
  .advantage-pin-wrapper {
    position: relative;
    height: 350vh;
    width: 100%;
    background: #fff;
    overflow: visible !important;
  }

  .sticky-container {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    background: #ffffff;
    z-index: 10;
  }

  .pin-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;
    width: 100%;
  }

  .pin-visual-col { position: relative; min-height: 400px; display: flex; align-items: center; }
  .lottie-container {
    position: absolute; left: -80px; top: 50%; transform: translateY(-50%);
    width: 550px; height: 550px; opacity: 0.15; pointer-events: none;
  }

  .advantage-details-card {
    position: relative;
    z-index: 2;
    padding: 1rem 0 2rem;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s ease;
    width: 100%;
  }

  .card-header {
    display: flex;
    align-items: center; gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .card-marker {
    color: #1256d8;
    font-size: 0.7rem;
  }

  .card-title {
    color: #000;
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .card-description {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.7;
    margin: 0;
    padding-left: 1.95rem;
  }

  .pills-stack { display: flex; flex-direction: column; gap: 0.75rem; }
  .advantage-pill {
    padding: 1rem 1.8rem; border-radius: 50px; border: 1px solid #eee;
    background: #fafafa; text-align: left; cursor: pointer; font-weight: 600;
    transition: 0.25s ease; font-size: 0.95rem; color: #666;
    font-family: 'Inter', sans-serif;
  }
  .advantage-pill:hover { border-color: #ccc; }
  .advantage-pill.active { background: #000; color: #fff; border-color: #000; transform: translateX(8px); }

  .progress-track { height: 4px; background: #eee; border-radius: 10px; margin-top: 1.8rem; overflow: hidden; width: 100%; }
  .progress-bar { height: 100%; background: #000; transition: width 0.3s ease; }

  @media (max-width: 1024px) {
    .hero-flex, .blur-grid, .pin-grid { grid-template-columns: 1fr; gap: 3rem; }
    .advantage-pin-wrapper { height: auto; }
    .sticky-container { position: relative; height: auto; padding: 100px 0; }
    .lottie-container { width: 300px; height: 300px; left: 50%; transform: translate(-50%, -50%); }
    .advantage-pill.active { transform: none; }
    .editorial-heading { font-size: 2.5rem; }
    .card-description { padding-left: 0; }
  }
</style>