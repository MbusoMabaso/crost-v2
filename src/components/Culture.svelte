<script>
</script>

<section id="culture">
  <div class="container">
    <div class="intro-section">
      <div class="intro-content">
        <h2 class="editorial-heading">WHAT SETS <span class="italic">US</span> APART?</h2>
        <p class="intro-text">We ask what a brand needs to achieve before we consider how it should look. The work's visual quality is a consequence of the clarity of thinking, not a substitute for it.</p>
      </div>
    </div>

    <div class="culture-grid">
      <div class="culture-card">
        <h3>Strategy First</h3>
        <p>We resist the impulse to do more than the brief requires. The discipline to say the right thing once — rather than everything repeatedly — is how lasting brand work is made.</p>
      </div>

      <div class="culture-card">
        <h3>Cultural Precision</h3>
        <p>Brands that endure understand the culture they operate in, not as a backdrop, but as the territory in which meaning is made. We take cultural literacy as seriously as we take strategy.</p>
      </div>

      <div class="culture-card">
        <h3>Deliberate Originality</h3>
        <p>We track results and report them plainly. If a campaign underperforms, we analyse why and adapt. Honest reporting is a mark of professional maturity, not a commercial risk.</p>
      </div>

      <div class="culture-card">
        <h3>Integrated Delivery</h3>
        <p>We track results and report them plainly. If a campaign underperforms, we analyse why and adapt. Honest reporting is a mark of professional maturity, not a commercial risk.</p>
      </div>

      <div class="culture-card">
        <h3>Measured Outcomes</h3>
        <p>We track results and report them plainly. If a campaign underperforms, we analyse why and adapt. Honest reporting is a mark of professional maturity, not a commercial risk.</p>
      </div>

      <div class="culture-card">
        <h3>Long-Term Partnership</h3>
        <p>We are a brand-building agency, not a campaign shop. The most valuable contribution we make is not the work produced this quarter, but the brand equity compounded over time.</p>
      </div>
    </div>

    <div class="values-section">
      <h2 class="editorial-heading">OUR <span class="italic">VALUES</span></h2>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Strategic Integrity</h4>
          </div>
          <p>We do not sacrifice the strategy to make the execution more comfortable.</p>
        </div>

        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Creative Courage</h4>
          </div>
          <p>We advocate for ideas that are genuinely differentiated, even when the safer option is available.</p>
        </div>

        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Commercial Honesty</h4>
          </div>
          <p>We measure what matters and report it accurately. We do not reframe the numbers to protect the relationship.</p>
        </div>

        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Cultural Intelligence</h4>
          </div>
          <p>We understand the markets we operate in with depth and specificity.</p>
        </div>

        <div class="value-card">
          <div class="value-header">
            <span class="value-marker">■</span>
            <h4>Considered Excellence</h4>
          </div>
          <p>We produce work to the standard we want to be remembered for.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

  section {
    padding: 8rem 0;
    background: #ffffff;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    position: relative;
    color: #1a1a1a;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .intro-section {
    text-align: center;
    margin-bottom: 8rem;
  }

  .intro-content {
    max-width: 850px;
    margin: 0 auto;
  }

  .editorial-heading {
    color: #000;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.04em;
    margin-bottom: 2.5rem;
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

  .intro-text {
    color: #4a4a4a;
    font-size: 1.35rem;
    line-height: 1.5;
    font-weight: 450;
    letter-spacing: -0.01em;
  }

  .culture-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin-bottom: 10rem;
  }

  .culture-card {
    background: #ffffff;
    padding: 3.5rem 2.5rem;
    border: 1px solid #f0f0f0;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }

  .culture-card:hover {
    border-color: #1256d8;
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  }

  .culture-card h3 {
    color: #000;
    font-family: 'EB Garamond', serif;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    font-style: italic;
  }

  .culture-card p {
    color: #555;
    font-size: 1.05rem;
    line-height: 1.75;
    margin: 0;
    font-weight: 400;
  }

  .values-section {
    margin-top: 6rem;
    padding-top: 6rem;
    border-top: 1px solid #eee;
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
    .culture-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 5rem 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .editorial-heading {
      font-size: 2.75rem;
      letter-spacing: -0.03em;
    }

    .intro-section {
      margin-bottom: 5rem;
    }

    .culture-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .intro-text {
      font-size: 1.2rem;
    }

    .value-card p {
      padding-left: 0;
    }
  }
</style>