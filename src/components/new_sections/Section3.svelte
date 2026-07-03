<script>
  import { onMount } from 'svelte';
</script>

<section class="section-3">
  <div class="container s3-inner">
    <span class="s3-eyebrow">
      <div class="s3-eyebrow-dot"></div>
      <span>Crost in Motion</span>
    </span>

    <div class="s3-content-wrapper">
      <div class="s3-card is-active">
        <div class="s3-card-intro">
          <h2 class="s3-card-heading">Empowering the Work</h2>
          <p class="s3-card-intro-text">
            <strong style="font-weight: 700">LevelZero: Building Clarity from the Ground Up</strong><br>
            Strategic clarity enters the process before the creative begins. LevelZero is our framework for embedding market intelligence before the first concept takes shape.
          </p>
        </div>
        <div class="s3-card-box s3-card-box-low" style="background-image: url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80')">
          <div class="s3-subcards">
            <div class="s3-subcard">
              <h3 class="s3-subcard-text">Evidence</h3>
              <p class="s3-subcard-text">
                We lead with proof. We document how strategic alignment leads to work that moves audiences and achieves commercial KPIs.
              </p>
            </div>
            <div class="s3-subcard">
              <h3 class="s3-subcard-text">Frameworks</h3>
              <p class="s3-subcard-text">
                Custom tools and methodologies that help our teams build consistent brand narratives into creative execution from day one.
              </p>
            </div>
            <div class="s3-subcard">
              <h3 class="s3-subcard-text">Knowledge</h3>
              <p class="s3-subcard-text">
                Structured training that equips every Crost strategist and designer with the methodologies behind world-class performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  .section-3 {
    background-color: #000;
    color: #ffffff;
    padding: 100px 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .s3-inner {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  .s3-content-wrapper {
    width: 100%;
    position: relative;
  }

  .s3-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 20px;
  }

  .s3-card-box {
    background-color: #0a0a0a;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 30px;
    padding: clamp(15px, 0.57rem + 1.45vw, 30px) clamp(15px, 0.33rem + 2.41vw, 40px);
    margin-top: 30px;
    min-height: 600px;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .s3-card-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
    border-radius: 30px;
  }

  .s3-card-box-low {
    background-position: center 32%;
  }

  .s3-card-intro-text {
    margin: 0;
    padding-top: 26px;
    min-height: 76px;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #ffffff;
    max-width: 800px;
  }

  .s3-card-heading {
    margin: 0;
    font-size: clamp(30px, 1.45rem + 0.89vw, 46px);
    font-weight: 800;
    line-height: 1;
    color: #ffffff;
    letter-spacing: -0.04em;
  }

  .s3-subcards {
    display: flex;
    flex-direction: row;
    gap: clamp(8px, 1.5vw, 22px);
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .s3-subcard {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 1.2vw, 20px);
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 30px;
  }

  .s3-subcard-text {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.53;
    color: #e1e1e1;
    font-weight: 400;
  }

  .s3-subcard-text:first-child {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: #fff;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }
    .s3-subcards {
      flex-direction: column;
    }
    .s3-card-box {
      min-height: 500px;
    }
  }

  .s3-eyebrow {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 600;
    letter-spacing: 0.16px;
    line-height: 1.4;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .s3-eyebrow-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #fff;
  }
</style>