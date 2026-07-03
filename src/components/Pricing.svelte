<script>
  let activeTab = 'celebrity'
</script>

<section id="pricing">
  <div class="container">
    <h2>2026 Service Offering</h2>
    
    <div class="pricing-tabs">
      <button class="tab-btn {activeTab === 'celebrity' ? 'active' : ''}" on:click={() => activeTab = 'celebrity'}>
        Celebrity & Public Figure PR
      </button>
      <button class="tab-btn {activeTab === 'business' ? 'active' : ''}" on:click={() => activeTab = 'business'}>
        Business & Brand PR
      </button>
    </div>

    {#if activeTab === 'celebrity'}
      <div class="pricing-content">
        <p class="intro-text">Monthly Retainers (3–6 month minimum)</p>
        
        <div class="pricing-grid">
          <div class="price-card">
            <h3>Signature Visibility</h3>
            <ul class="features">
              <li>Strategic positioning</li>
              <li>Press releases</li>
              <li>National media pitching</li>
              <li>Interview coordination</li>
              <li>Monthly reporting</li>
            </ul>
            <button class="btn">Get Started</button>
          </div>

          <div class="price-card featured">
            <div class="badge">Most Popular</div>
            <h3>Influence Architect</h3>
            <ul class="features">
              <li>Advanced PR roadmap</li>
              <li>Feature placements</li>
              <li>Brand partnerships</li>
              <li>Event publicity</li>
              <li>Reputation advisory</li>
              <li>Bi-weekly check-ins</li>
            </ul>
            <button class="btn btn-featured">Get Started</button>
          </div>

          <div class="price-card">
            <h3>Legacy Elite Representation</h3>
            <ul class="features">
              <li>Full-service reputation management</li>
              <li>International media positioning</li>
              <li>Thought leadership strategy</li>
              <li>Crisis advisory</li>
              <li>Endorsement strategy</li>
              <li>24/7 support</li>
            </ul>
            <button class="btn">Get Started</button>
          </div>
        </div>
      </div>
    {:else}
      <div class="pricing-content">
        <p class="intro-text">Corporate Retainers for Businesses & Brands</p>
        <div class="business-services">
          <div class="service-item">
            <h3>🏢 Corporate PR Campaigns</h3>
            <p>Comprehensive media relations, thought leadership platforms, and corporate communications strategy tailored to your business objectives.</p>
          </div>
          <div class="service-item">
            <h3>📈 Brand Growth Strategy</h3>
            <p>Digital marketing execution, social media management, content strategy, and data-driven growth solutions.</p>
          </div>
          <div class="service-item">
            <h3>💼 Executive Positioning</h3>
            <p>Position C-suite executives as industry thought leaders through strategic media placement and speaking engagements.</p>
          </div>
          <div class="service-item">
            <h3>🤝 Business Development PR</h3>
            <p>PR support for partnerships, mergers, and acquisitions to maximize positive market reception.</p>
          </div>
          <div class="cta-box">
            <h3>Ready to Grow Your Brand?</h3>
            <p>Contact us for a customized corporate retainer package tailored to your specific business needs.</p>
            <button class="btn">Schedule a Consultation</button>
          </div>
        </div>
      </div>
    {/if}

    <div class="values-section">
      <h2 class="editorial-heading">OUR <span class="italic">PROCESS</span></h2>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Commercial Brief</h4>
          </div>
          <p>We begin with the commercial problem, the desired outcome and the audience behaviour that will justify the work.</p>
        </div>

        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Strategic Architecture</h4>
          </div>
          <p>We turn that brief into a positioning, narrative and creative architecture that can be activated consistently.</p>
        </div>

        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Creative Execution</h4>
          </div>
          <p>We produce assets, systems and content that are designed to work in real media and digital environments.</p>
        </div>

        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Performance Momentum</h4>
          </div>
          <p>We measure results, capture learnings and optimise the next phase so the work compounds over time.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

  section {
    padding: 4rem 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  #pricing {
    background: linear-gradient(135deg, #ffffff 0%, var(--crost-surface) 100%);
    width: 100%;
    overflow-x: hidden;
  }

  h2 {
    text-align: center;
    color: var(--crost-dark);
    margin-bottom: 2.5rem;
    font-size: 2rem;
    font-weight: 800;
  }

  .pricing-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }

  .tab-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--crost-border);
    background: white;
    color: var(--crost-dark);
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    font-size: 0.95rem;
  }

  .tab-btn:hover {
    border-color: var(--crost-primary);
    color: var(--crost-primary);
  }

  .tab-btn.active {
    background: var(--crost-primary);
    color: white;
    border-color: var(--crost-primary);
    box-shadow: 0 4px 12px rgba(18, 86, 216, 0.25);
  }

  .intro-text {
    text-align: center;
    font-size: 1rem;
    color: var(--crost-primary);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .price-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 12px;
    border: 1px solid #f0f0f0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    position: relative;
  }

  .price-card:hover {
    border-color: var(--crost-primary);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  }

  .price-card.featured {
    border-color: var(--crost-primary);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(18, 86, 216, 0.15);
  }

  .badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--crost-primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .price-card h3 {
    color: var(--crost-dark);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .features {
    list-style: none;
    margin-bottom: 2rem;
  }

  .features li {
    padding: 0.6rem 0;
    color: #555;
    display: flex;
    align-items: center;
    font-size: 0.95rem;
  }

  .features li:before {
    content: '■';
    color: var(--crost-primary);
    margin-right: 1rem;
    font-size: 0.7rem;
  }

  .btn {
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    background-color: #ffffff;
    color: var(--crost-dark);
    border: 2px solid var(--crost-primary);
  }

  .btn:hover {
    background-color: var(--crost-primary);
    color: white;
  }

  .btn-featured {
    background: var(--crost-primary);
    color: white;
    border: none;
  }

  .business-services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    margin-bottom: 4rem;
  }

  .service-item {
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    border-left: 4px solid var(--crost-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .service-item h3 {
    color: var(--crost-dark);
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .service-item p {
    color: #555;
    line-height: 1.7;
  }

  .cta-box {
    grid-column: 1 / -1;
    background: var(--crost-dark);
    color: white;
    padding: 4rem 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 20px 40px rgba(10, 31, 61, 0.2);
  }

  .cta-box h3 {
    color: white;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }

  .cta-box p {
    color: #bbb;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .cta-box .btn {
    background-color: var(--crost-primary);
    color: white;
    border: none;
    max-width: 300px;
    margin: 0 auto;
  }

  /* NEW PROCESS STYLING (Matched to Culture Page Values) */
  .values-section {
    margin-top: 6rem;
    padding-top: 6rem;
    border-top: 1px solid #eee;
  }

  .editorial-heading {
    color: #000;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.04em;
    margin-bottom: 4rem;
    text-align: center;
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

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .value-card {
    padding: 1rem 0 2rem;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s ease;
  }

  .value-card:hover {
    border-color: #000;
  }

  .value-header {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .value-marker {
    color: #1256d8;
    font-size: 0.7rem;
  }

  .value-card h4 {
    color: #000;
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .value-card p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
    padding-left: 1.95rem;
  }

  @media (max-width: 1024px) {
    .pricing-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }

    .pricing-grid, .business-services, .values-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .cta-box {
      grid-column: 1;
    }

    .pricing-tabs {
      flex-direction: column;
    }

    .tab-btn {
      width: 100%;
    }

    .value-card p {
      padding-left: 0;
    }

    .editorial-heading {
      font-size: 2.75rem;
    }
  }
</style>