<script>
</script>

<section id="culture">
  <div class="gradient-divider"></div>
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
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Instrument+Sans:wght@400;500;600;800&display=swap');

  section {
    padding: 6rem 0;
    background: #ffffff;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Instrument Sans', sans-serif;
    position: relative;
  }

  .gradient-divider {
    width: 100%;
    height: 6px;
    background: linear-gradient(to right, #ff672e, #4f7ff2);
    position: absolute;
    top: 0;
    left: 0;
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
    margin-bottom: 6rem;
  }

  .intro-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .editorial-heading {
    color: #000;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .editorial-heading .italic {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 400;
    text-transform: none;
    font-size: 1.1em;
  }

  .intro-text {
    color: #555;
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 400;
  }

  .culture-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 8rem;
  }

  .culture-card {
    background: #fafafa;
    padding: 3rem 2rem;
    border: 1px solid #eee;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .culture-card:hover {
    border-color: #ddd;
    background: #ffffff;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  }

  .culture-card h3 {
    color: #000;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    line-height: 1.2;
    font-style: italic;
  }

  .culture-card p {
    color: #666;
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
  }

  .values-section {
    margin-top: 4rem;
  }

  .values-heading {
    text-align: center;
    margin-bottom: 4rem;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .value-card {
    padding: 2rem 0;
    border-bottom: 1px solid #eee;
    transition: border-color 0.3s ease;
  }

  .value-card:hover {
    border-color: #000;
  }

  .value-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .value-marker {
    color: #000;
    font-size: 0.6rem;
  }

  .value-card h4 {
    color: #000;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .value-card p {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    padding-left: 1.6rem;
  }

  @media (max-width: 1024px) {
    .culture-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 4rem 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .editorial-heading {
      font-size: 2.2rem;
    }

    .culture-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .intro-text {
      font-size: 1.1rem;
    }
  }
</style>
