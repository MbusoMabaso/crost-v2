<section id="mission">
  <div class="container">
    <div class="mission-grid">
      <div class="mission-card">
        <h2>M I S S I O N</h2>
        <p class="mission-text">We exist to close the gap between what an organisation believes about itself and what its audiences actually experience. We do this through strategy that is honest, creative work that is intentional, and execution measured against outcomes that matter.</p>
        <p class="mission-tagline">To build brands that create enduring commercial value.</p>
      </div>

      <div class="vision-card">
        <h2>V I S I O N</h2>
        <p class="vision-text">We are building toward a position of genuine global authority, an agency whose work is studied, whose clients are leaders in their categories, and whose point of view shapes the discipline.</p>
        <p class="vision-tagline">Anchored in Africa. Recognised across EMEA. Built to stand alongside the world's best.</p>
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

  #mission {
    background: linear-gradient(135deg, var(--crost-soft) 0%, #ffffff 100%);
    width: 100%;
    overflow-x: hidden;
  }

  .mission-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .mission-card,
  .vision-card {
    background: white;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(10, 31, 61, 0.08);
    border-left: 4px solid var(--crost-primary);
  }

  .mission-card:hover,
  .vision-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(18, 86, 216, 0.15);
  }

  h2 {
    color: var(--crost-dark);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: 2px;
  }

  .mission-text,
  .vision-text {
    color: var(--crost-muted);
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .mission-tagline,
  .vision-tagline {
    color: var(--crost-primary);
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
    font-style: italic;
  }

  @media (max-width: 1024px) {
    .mission-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .mission-card,
    .vision-card {
      padding: 2.5rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .mission-card,
    .vision-card {
      padding: 2rem;
    }

    h2 {
      font-size: 1.3rem;
      margin-bottom: 1.25rem;
    }

    .mission-text,
    .vision-text {
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .mission-tagline,
    .vision-tagline {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 2rem 0;
    }

    .container {
      padding: 0 1rem;
    }

    .mission-card,
    .vision-card {
      padding: 1.5rem;
    }

    h2 {
      font-size: 1.15rem;
      margin-bottom: 1rem;
    }

    .mission-text,
    .vision-text {
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }

    .mission-tagline,
    .vision-tagline {
      font-size: 0.95rem;
    }
  }
</style>
