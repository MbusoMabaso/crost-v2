<script>
  import { onMount, onDestroy } from 'svelte'
  let activeValue = 1
  const values = [
    { id: 1, title: 'Discovery', copy: 'We audit your current position — brand, market, competitors, and commercial context. We ask hard questions and document what we find, without assumption.' },
    { id: 2, title: 'Strategy', copy: 'We define objectives, audiences, channels, and success metrics. The strategy document becomes the single source of truth that every creative decision is tested against.' },
    { id: 3, title: 'Creative Development', copy: 'Our creative team develops concepts grounded in the strategy. We present options with clear rationale' },
    { id: 4, title: 'Execution & Reporting', copy: 'We deliver, measure, and iterate. Reporting is honest and structured around your KPIs.' },
  ]

  let loopInterval
  const cycle = () => {
    activeValue = activeValue >= values.length ? 1 : activeValue + 1
  }

  function startLoop() {
    clearInterval(loopInterval)
    loopInterval = setInterval(cycle, 4000)
  }

  onMount(() => startLoop())
  onDestroy(() => clearInterval(loopInterval))

  function selectValue(id) {
    activeValue = id
    startLoop()
  }
</script>

<section id="about">
  <div class="container">

    <div class="values-tabs above">
      <div class="tabs">
        {#each values as v}
          <button class="tab {activeValue === v.id ? 'active' : ''}" on:click={() => selectValue(v.id)} aria-pressed={activeValue === v.id}>
            <span class="tab-title">{v.title}</span>
          </button>
        {/each}
      </div>

      <div class="value-content">
        {#each values as v}
          {#if activeValue === v.id}
            <div class="value-panel">
              <h4>{v.title}</h4>
              <p>{v.copy}</p>
            </div>
          {/if}
        {/each}
      </div>
    </div>

    <div class="who-we-are-intro">
      <p class="intro-main">Crost Media strategically combines brand strategy, creative production, and digital execution into a single, coherent service, so our clients never have to manage three separate agencies to achieve one result.</p>
      <p class="intro-tagline">Strategy and creativity,<br />held to the same<br />standard.</p>
    </div>

    <h2>W H O &nbsp; W E &nbsp; A R E</h2>

    <div class="who-we-are-content">
      <p>We work with organisations that require more than visual output. Our engagements begin with commercial clarity: who you are, what you need to achieve, and what stands between you and that goal. Creative work follows. Not the other way around.</p>
      <p>Our team brings together strategy, design, culture, storytelling, and technology, disciplines that operate independently in most agencies, and in unison at Crost.</p>
    </div>
    
  </div>
</section>

<style>
  section {
    padding: 4rem 0;
  }

  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  #about {
    background-color: #ffffff;
    width: 100%;
    overflow-x: hidden;
  }

  .who-we-are-intro {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4rem;
    padding: 2rem;
    background: linear-gradient(135deg, var(--crost-soft) 0%, #ffffff 100%);
    border-radius: 12px;
  }

  .intro-main {
    font-size: 1.1rem;
    color: var(--crost-dark);
    line-height: 1.8;
    margin: 0;
  }

  .intro-tagline {
    font-size: 1.25rem;
    color: var(--crost-primary);
    font-weight: 600;
    line-height: 1.6;
    margin: 0;
  }

  h2 {
    text-align: center;
    color: var(--crost-dark);
    margin-bottom: 3rem;
    font-size: 2rem;
    letter-spacing: 3px;
  }

  .who-we-are-content {
    background: linear-gradient(135deg, var(--crost-dark) 0%, var(--crost-dark) 100%);
    color: white;
    padding: 3rem;
    border-radius: 12px;
    text-align: center;
    font-size: 1.05rem;
    line-height: 1.8;
    box-shadow: 0 8px 20px rgba(22, 33, 62, 0.2);
  }

  .who-we-are-content p {
    margin-bottom: 1.5rem;
    color: #ddd;
  }

  .who-we-are-content p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 2.5rem;
    }

    .who-we-are-intro {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .who-we-are-content {
      padding: 2rem;
      font-size: 1rem;
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

    .who-we-are-intro {
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .intro-main {
      font-size: 1rem;
    }

    .intro-tagline {
      font-size: 1.1rem;
    }

    .who-we-are-content {
      padding: 1.5rem;
      font-size: 0.95rem;
    }

    .who-we-are-content p {
      line-height: 1.6;
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

    .who-we-are-intro {
      padding: 1.25rem;
      margin-bottom: 1.5rem;
    }

    .intro-main {
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .intro-tagline {
      font-size: 1rem;
    }

    .who-we-are-content {
      padding: 1rem;
      font-size: 0.9rem;
      border-radius: 8px;
    }

    .who-we-are-content p {
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }

  /* Values tabs */
  .values-tabs {
    margin-top: 2.5rem;
  }

  .tabs {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1.25rem;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.65rem 1rem;
    border-radius: 999px;
    background: transparent;
    border: 1px solid var(--crost-border);
    cursor: pointer;
    font-weight: 600;
    color: var(--crost-dark);
    transition: all 0.18s ease;
  }

  .tab.active {
    background: var(--crost-primary);
    color: white;
    border-color: var(--crost-primary);
    box-shadow: 0 8px 20px rgba(18,86,216,0.12);
  }

  .tab-title {
    display: inline-block;
    white-space: nowrap;
  }

  .value-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .value-panel {
    background: linear-gradient(135deg, #ffffff 0%, var(--crost-surface) 100%);
    padding: 1.75rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(10,31,61,0.06);
  }

  .value-panel h4 {
    margin: 0 0 0.5rem 0;
    color: var(--crost-dark);
  }

  .value-panel p {
    margin: 0;
    color: var(--crost-muted);
    line-height: 1.7;
  }
</style>
