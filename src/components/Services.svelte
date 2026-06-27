<section id="services">
  <div class="container">
    <h2>What We Do</h2>
    <p class="section-intro">Six strategic disciplines delivered as one coherent agency, so your brand always moves with commercial clarity.</p>

    <div class="services-grid">
      <div class="service-box">
        <div class="service-icon">📌</div>
        <h3>Brand Strategy</h3>
        <p>We create positioning and narrative frameworks that connect brand identity with commercial ambition.</p>
      </div>
      <div class="service-box">
        <div class="service-icon">🎨</div>
        <h3>Creative Systems</h3>
        <p>Visual identities, campaign systems and content formats designed to behave consistently across every channel.</p>
      </div>
      <div class="service-box">
        <div class="service-icon">🧠</div>
        <h3>Culture & Insight</h3>
        <p>Market, audience and cultural intelligence that informs strategy and makes work feel relevant in the right contexts.</p>
      </div>
      <div class="service-box">
        <div class="service-icon">🌐</div>
        <h3>Digital Experience</h3>
        <p>Web, social and digital activation built to move audiences through attention, trust and action.</p>
      </div>
      <div class="service-box">
        <div class="service-icon">📈</div>
        <h3>Performance & Media</h3>
        <p>Paid, owned and earned media execution with clear measurement and optimisation aligned to business outcomes.</p>
      </div>
      <div class="service-box">
        <div class="service-icon">📰</div>
        <h3>Communications</h3>
        <p>Integrated PR, corporate and reputation work that amplifies strategic positioning and executive presence.</p>
      </div>
    </div>

    <div class="service-notes">
      <p>Crost Media is built to hold strategy, creative and delivery together so each output is directly connected to commercial momentum.</p>
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

  #services {
    background: linear-gradient(135deg, var(--crost-soft) 0%, #ffffff 100%);
    width: 100%;
    overflow-x: hidden;
  }

  h2 {
    text-align: center;
    color: var(--crost-dark);
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .service-box {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    text-align: center;
    border-top: 3px solid transparent;
  }

  .service-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 14px 35px rgba(18, 86, 216, 0.2);
    border-top-color: var(--crost-primary);
  }

  .service-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  .service-box h3 {
    color: var(--crost-dark);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .service-box p {
    color: var(--crost-muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 2.5rem;
    }

    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .service-box {
      padding: 1.5rem;
    }

    .service-icon {
      font-size: 3rem;
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

    .services-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .service-box {
      padding: 1.5rem;
    }

    .service-icon {
      font-size: 2.5rem;
    }

    .service-box h3 {
      font-size: 1.1rem;
    }

    .service-box p {
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

    .service-box {
      padding: 1.25rem;
    }

    .service-icon {
      font-size: 2rem;
      margin-bottom: 0.75rem;
    }

    .service-box h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }

    .service-box p {
      font-size: 0.85rem;
      line-height: 1.5;
    }
  }
</style>
