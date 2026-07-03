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
    { label: 'Strongest Media Ecosystem', id: 'advantage-0' },
    { label: 'Most Influential Content', id: 'advantage-1' },
    { label: 'Connected Commerce Excellence', id: 'advantage-2' },
    { label: 'Enterprise Generative AI Capability', id: 'advantage-3' },
    { label: 'Identity Leadership', id: 'advantage-4' }
  ]

  const advantageDetails = [
    {
      title: 'Strongest Media Ecosystem',
      text: 'Our unparalleled media scale, market leverage, and intelligence—based in Acxiom RealID™ and advanced ID-less solutions—unify paid, owned, earned, and commerce channels into a privacy-first system that delivers measurable performance.'
    },
    {
      title: 'Most Influential Content',
      text: 'We create influential content that moves audiences, builds brand preference, and drives measurable commerce outcomes in every channel.'
    },
    {
      title: 'Connected Commerce Excellence',
      text: 'Our commerce experiences connect media, data, and creative to turn attention into transactions across digital and retail ecosystems.'
    },
    {
      title: 'Enterprise Generative AI Capability',
      text: 'We harness generative AI responsibly to amplify efficiency, personalize experiences, and unlock new creative workflows at scale.'
    },
    {
      title: 'Identity Leadership',
      text: 'We protect and activate identity-based media strategies so brands can deliver relevant experiences without compromising consumer privacy.'
    }
  ]

  let activeAdvantageIndex = $state(0)
  let progressPercentage = $derived(((activeAdvantageIndex + 1) / advantagePills.length) * 100)
  let wrapperRef = $state()

  const content = {
    'Overview': {
      title: 'Strategy and creativity, held to the same standard.',
      text: `Crost Media strategically combines brand strategy, creative production, and digital execution into a single, coherent service, so our clients never have to manage three separate agencies to achieve one result.`
    },
    'Capability Leadership': {
      title: 'Capability Leadership',
      text: 'We coordinate cross-disciplinary leadership to ensure capability-led delivery across strategy, creative and technology.'
    },
    'Corporate Leadership': {
      title: 'Corporate Leadership',
      text: 'Our corporate leadership team ensures governance, oversight and long-term strategic alignment for client portfolios.'
    },
    'Corporate Governance': {
      title: 'Corporate Governance',
      text: 'We embed transparent governance practices that keep creative risk managed and outcomes measurable.'
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
            <span>Reveal on scroll</span>
            <h2>Visual motion that appears as you move.</h2>
            <p>Scroll down past the hero to reveal a refined visual panel that highlights our creative approach.</p>
            <ul>
              <li>Clear, spacious layout</li>
              <li>Refined typography</li>
              <li>Animated reveal</li>
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
              <div class="advantage-details">
                <h2 class="advantage-title">{advantageDetails[activeAdvantageIndex].title}</h2>
                <p class="advantage-desc">{advantageDetails[activeAdvantageIndex].text}</p>
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
  /* RESET GLOBAL OVERFLOWS IN CASE THEY ARE PERSISTING */
  :global(body), :global(html), :global(#app) {
    overflow-x: visible !important;
  }

  .about-hero-root { width: 100%; position: relative; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; box-sizing: border-box; }
  .relative { position: relative; }
  .z-10 { z-index: 10; }

  #about-hero {
    min-height: 100vh; display: flex; align-items: center; position: relative;
    background: #ffffff; padding: 80px 0; overflow: hidden;
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
  }
  .about-menu button.active { background: #1256d8; color: #fff; }

  .hero-content h1 { font-size: clamp(2.2rem, 4.5vw, 3.8rem); line-height: 1.1; margin-bottom: 1.5rem; }
  .hero-content p { font-size: 1.1rem; color: #666; margin-bottom: 2.5rem; max-width: 500px; }

  .cta-buttons { display: flex; gap: 1rem; }
  .btn { padding: 0.9rem 2.2rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: 0.3s; }
  .btn-primary { background: #1256d8; color: #fff; border: none; }
  .btn-secondary { background: transparent; border: 2px solid #1256d8; color: #1256d8; }
  .hero-image img { width: 100%; max-width: 380px; }

  .hero-blur-section { padding: 100px 0; background: #f8f9fa; opacity: 0; transition: 0.8s; }
  .hero-blur-section.revealed { opacity: 1; }
  .blur-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .blur-copy h2 { font-size: 2.3rem; margin: 1.2rem 0; }
  .blur-copy ul { list-style: none; padding: 0; display: grid; gap: 0.6rem; }
  .blur-copy li::before { content: "→"; margin-right: 0.8rem; color: #1256d8; }
  .video-blur-card { height: 400px; border-radius: 24px; background: #fff; border: 1px solid #eee; overflow: hidden; }

  /* PINNING SECTION FIXES */
  .advantage-pin-wrapper {
    position: relative;
    height: 350vh;
    width: 100%;
    background: #fff;
    /* This must NOT have overflow: hidden */
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
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    width: 100%;
  }

  .pin-visual-col { position: relative; }
  .lottie-container {
    position: absolute; left: -80px; top: 50%; transform: translateY(-50%);
    width: 550px; height: 550px; opacity: 0.1; pointer-events: none;
  }
  .advantage-details { position: relative; z-index: 2; }
  .advantage-title { font-size: clamp(2rem, 3.5vw, 3rem); line-height: 1.1; margin-bottom: 1.2rem; }
  .advantage-desc { font-size: 1.1rem; color: #555; line-height: 1.6; }

  .pills-stack { display: flex; flex-direction: column; gap: 0.75rem; }
  .advantage-pill {
    padding: 0.9rem 1.8rem; border-radius: 50px; border: 1px solid #eee;
    background: #fafafa; text-align: left; cursor: pointer; font-weight: 600;
    transition: 0.25s ease; font-size: 0.95rem; color: #666;
  }
  .advantage-pill:hover { border-color: #ccc; }
  .advantage-pill.active { background: #000; color: #fff; border-color: #000; transform: translateX(8px); }

  .progress-track { height: 4px; background: #eee; border-radius: 10px; margin-top: 1.8rem; overflow: hidden; width: 100%; }
  .progress-bar { height: 100%; background: #000; transition: width 0.3s ease; }

  @media (max-width: 1024px) {
    .hero-flex, .blur-grid, .pin-grid { grid-template-columns: 1fr; gap: 3rem; }
    .advantage-pin-wrapper { height: auto; }
    .sticky-container { position: relative; height: auto; padding: 60px 0; }
    .lottie-container { width: 300px; height: 300px; left: 50%; transform: translate(-50%, -50%); }
    .advantage-pill.active { transform: none; }
  }
</style>
