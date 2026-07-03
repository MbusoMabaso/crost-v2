<script>
</script>

<section class="team-empowerment">
  <div class="container">
    <div class="card">
      <div class="card-intro">
        <h2 class="card-heading">Empowering the Team</h2>
        <p class="card-intro-text">
          At Crost, we provide structural support for leadership and professional development across our entire creative network:
        </p>
      </div>
      <div class="card-box" style="background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80')">
        <div class="subcards">
          <div class="subcard">
            <h3 class="subcard-text">Specialist Intelligence Groups (SIGs)</h3>
            <p class="subcard-text">
              Our SIGs connect experts across different geographies to share market intelligence and emerging technology trends. They ensure our clients benefit from global perspectives regardless of their local market.
            </p>
          </div>
          <div class="subcard">
            <h3 class="subcard-text">Collaborative Workshops</h3>
            <p class="subcard-text">
              We host recurring virtual and in-person summits where teams spotlight regional successes and demonstrate how strategic principles are being activated in real-world campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  .team-empowerment {
    background-color: #000;
    color: #ffffff;
    padding: 80px 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .card-box {
    background-color: #0a0a0a;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 30px;
    padding: clamp(20px, 5vw, 40px);
    margin-top: 30px;
    min-height: 500px;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .card-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
    border-radius: 30px;
  }

  .card-intro-text {
    margin: 0;
    padding-top: 20px;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #ccc;
    max-width: 800px;
  }

  .card-heading {
    margin: 0;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1;
    color: #ffffff;
    letter-spacing: -0.04em;
  }

  .subcards {
    display: flex;
    flex-direction: row;
    gap: 20px;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .subcard {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 30px;
  }

  .subcard-text {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #e1e1e1;
    font-weight: 400;
  }

  .subcard-text:first-child {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }
    .subcards {
      flex-direction: column;
    }
    .card-box {
      min-height: 400px;
    }
  }
</style>