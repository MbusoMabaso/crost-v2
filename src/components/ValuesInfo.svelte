<script>
  import Grainient from './lib/Grainient.svelte';
</script>

<div class="values-info relative overflow-hidden">
  <div class="grainient-container">
    <Grainient 
      color1="#0a0a0a" 
      color2="#0a1a3a" 
      color3="#1a0a1a" 
      class="absolute inset-0 w-full h-full"
    />
  </div>
  <div class="content relative z-10">
    <h3>Our Values</h3>
    <p>What we hold ourselves to, always.</p>
    <p class="values-note">These are not aspirations. They are the standards against which we hire, evaluate work, and decide which clients to serve.</p>
  </div>
</div>

<style>
  .values-info {
    background: var(--crost-dark);
    color: white;
    padding: 3rem;
    border-radius: 12px;
    text-align: center;
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

  h3 {
    color: var(--crost-primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
  }

  .values-note {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    .values-info {
      padding: 2rem;
    }
  }

  @media (max-width: 768px) {
    .values-info {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .values-info {
      padding: 1rem;
    }
  }
</style>
