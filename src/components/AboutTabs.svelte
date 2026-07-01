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
    clearInterval(loopInterval)
  }
</script>

<div class="values-tabs">
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

<style>
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
