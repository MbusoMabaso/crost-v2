<script>
  import { onMount, onDestroy } from 'svelte'
  import LightRays from './LightRays.svelte'
  import Grainient from './lib/Grainient.svelte'

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

<section id="about" class="relative">
  <LightRays />
  <div class="container relative z-10">

    <h2>W H O &nbsp; W E &nbsp; A R E</h2>

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

  h2 {
    text-align: center;
    color: var(--crost-dark);
    margin-bottom: 3rem;
    font-size: 2rem;
    letter-spacing: 3px;
  }

  .who-we-are-content {
    background: var(--crost-dark);
    color: white;
    padding: 3rem;
    border-radius: 12px;
    text-align: center;
    font-size: 1.05rem;
    line-height: 1.8;
    box-shadow: 0 8px 20px rgba(22, 33, 62, 0.2);
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
  }

  .who-we-are-content p {
    margin-bottom: 1.5rem;
    color: #ddd;
  }

  .who-we-are-content p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    .who-we-are-content {
      padding: 2rem;
    }
  }

  @media (max-width: 768px) {
    .who-we-are-content {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .who-we-are-content {
      padding: 1rem;
    }
  }
</style>
