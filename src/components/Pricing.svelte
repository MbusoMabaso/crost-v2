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

    <div class="process-flow">
      <h3>Our process</h3>
      <div class="flow-grid">
        <div class="flow-step">
          <span>1</span>
          <h4>Commercial Brief</h4>
          <p>We begin with the commercial problem, the desired outcome and the audience behaviour that will justify the work.</p>
        </div>
        <div class="flow-step">
          <span>2</span>
          <h4>Strategic Architecture</h4>
          <p>We turn that brief into a positioning, narrative and creative architecture that can be activated consistently.</p>
        </div>
        <div class="flow-step">
          <span>3</span>
          <h4>Creative Execution</h4>
          <p>We produce assets, systems and content that are designed to work in real media and digital environments.</p>
        </div>
        <div class="flow-step">
          <span>4</span>
          <h4>Performance Momentum</h4>
          <p>We measure results, capture learnings and optimise the next phase so the work compounds over time.</p>
        </div>
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
    margin-bottom: 2rem;
  }

  @media (max-width: 1024px) {
    .pricing-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .pricing-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .price-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    border: 2px solid var(--crost-border);
    box-shadow: 0 4px 12px rgba(10, 31, 61, 0.08);
    transition: all 0.3s ease;
    position: relative;
  }

  .price-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .price-card.featured {
    border-color: var(--crost-primary);
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(18, 86, 216, 0.2);
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
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .features {
    list-style: none;
    margin-bottom: 2rem;
  }

  .features li {
    padding: 0.5rem 0;
    color: var(--crost-muted);
    display: flex;
    align-items: center;
  }

  .features li:before {
    content: '✓';
    color: var(--crost-primary);
    font-weight: bold;
    margin-right: 0.75rem;
    font-size: 1.2rem;
  }

  .btn {
    width: 100%;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    background-color: #ffffff;
    color: var(--crost-dark);
    border: 1px solid var(--crost-border);
  }

  .btn:hover {
    background-color: #f2f5ff;
  }

  .btn-featured {
    background: linear-gradient(135deg, var(--crost-primary) 0%, var(--crost-primary) 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(18, 86, 216, 0.3);
  }

  .btn-featured:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(18, 86, 216, 0.4);
  }

  .business-services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .service-item {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    border-left: 4px solid var(--crost-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .process-flow {
    margin-top: 3rem;
    padding: 2.5rem;
    background: linear-gradient(180deg, #ffffff 0%, var(--crost-soft) 100%);
    border-radius: 18px;
    border: 1px solid rgba(18, 86, 216, 0.12);
  }

  .process-flow h3 {
    text-align: center;
    color: var(--crost-dark);
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  .flow-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .flow-step {
    background: white;
    padding: 1.75rem;
    border-radius: 14px;
    box-shadow: 0 8px 24px rgba(10, 31, 61, 0.08);
    text-align: left;
  }

  .flow-step span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--crost-primary);
    color: white;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .flow-step h4 {
    margin-bottom: 0.75rem;
    color: var(--crost-dark);
    font-size: 1.1rem;
  }

  .flow-step p {
    color: var(--crost-muted);
    line-height: 1.75;
    font-size: 0.95rem;
  }

  .service-item h3 {
    color: var(--crost-dark);
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .service-item p {
    color: #666;
    line-height: 1.6;
  }

  .cta-box {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, var(--crost-dark) 0%, var(--crost-dark) 100%);
    color: white;
    padding: 3rem 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(10, 31, 61, 0.2);
  }

  .cta-box h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .cta-box p {
    color: #ddd;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  .cta-box .btn {
    background-color: var(--crost-primary);
    color: white;
    max-width: 80%;
    margin: 0 auto;
  }

  .cta-box .btn:hover {
    background-color: var(--crost-primary);
  }

  @media (max-width: 768px) {
    .pricing-grid {
      grid-template-columns: 1fr;
    }

    .price-card.featured {
      transform: none;
    }

    .business-services {
      grid-template-columns: 1fr;
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
  }
</style>
