<section id="process">
  <div class="container">
    <h2>H O W &nbsp; W E &nbsp; W O R K</h2>

    <div class="process-grid">
      <div class="process-card">
        <div class="process-number">08</div>
        <h3>Discovery</h3>
        <p>We audit your current position — brand, market, competitors, and commercial context. We ask hard questions and document what we find, without assumption.</p>
      </div>

      <div class="process-card">
        <div class="process-number">01</div>
        <h3>Strategy</h3>
        <p>We define objectives, audiences, channels, and success metrics. The strategy document becomes the single source of truth that every creative decision is tested against.</p>
      </div>

      <div class="process-card">
        <div class="process-number">02</div>
        <h3>Creative Development</h3>
        <p>Our creative team develops concepts grounded in the strategy. We present options with clear rationale.</p>
      </div>

      <div class="process-card">
        <div class="process-number">03</div>
        <h3>Execution & Reporting</h3>
        <p>We deliver, measure, and iterate. Reporting is honest and structured around your KPIs.</p>
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

  #process {
    background: linear-gradient(135deg, var(--crost-soft) 0%, #ffffff 100%);
    width: 100%;
    overflow-x: hidden;
  }

  h2 {
    text-align: center;
    color: var(--crost-dark);
    font-size: 2rem;
    margin-bottom: 3rem;
    letter-spacing: 3px;
  }

  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .process-card {
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(10, 31, 61, 0.08);
    transition: all 0.3s ease;
    border-top: 4px solid var(--crost-primary);
    position: relative;
  }

  .process-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(18, 86, 216, 0.15);
  }

  .process-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--crost-primary);
    margin-bottom: 1rem;
    letter-spacing: 1px;
    opacity: 0.8;
  }

  .process-card h3 {
    color: var(--crost-dark);
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .process-card p {
    color: var(--crost-muted);
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 2.5rem;
    }

    .process-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .process-card {
      padding: 2rem;
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

    .process-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .process-card {
      padding: 1.5rem;
    }

    .process-number {
      font-size: 2rem;
    }

    .process-card h3 {
      font-size: 1.1rem;
    }

    .process-card p {
      font-size: 0.9rem;
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

    .process-grid {
      gap: 1rem;
    }

    .process-card {
      padding: 1.25rem;
    }

    .process-number {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
    }

    .process-card h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }

    .process-card p {
      font-size: 0.85rem;
      line-height: 1.5;
    }
  }
</style>
