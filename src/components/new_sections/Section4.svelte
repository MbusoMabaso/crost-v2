<script>
  import { onMount } from 'svelte';

  let wrapper;
  let container;
  let cards;

  // Configuration
  const prefix = 's4';
</script>

<section class="section-4">
  <div class="container s4-inner">
    <span class="s4-eyebrow">
      <div class="s4-eyebrow-dot"></div>
      <span>Crost Centers of Excellence</span>
    </span>

    <div class="s4-row">
      <h2 class="s4-heading">Strategy Driven, Creative Led</h2>
      <p class="s4-text">
        Our culture operates through three core focus areas, each dedicated to bridging the gap between high-level brand strategy and measurable digital execution.
      </p>
    </div>

    <!-- feature 1 -->
    <div class="s4-feature">
      <img class="s4-feature-img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Creative team collaborating in a bright workspace">
      <div class="s4-feature-col">
        <p class="s4-feature-eyebrow">The Creative Standard</p>
        <h3 class="s4-feature-title">
          Clarity of Thinking: The Foundation of Quality
        </h3>
        <p class="s4-text">
          Visual quality at Crost is a direct consequence of clear strategic thinking. We foster an environment where every design choice is rooted in commercial logic, ensuring the work is as effective as it is beautiful.
        </p>
      </div>
    </div>

    <!-- feature 2 -->
    <div class="s4-feature s4-feature-reverse">
      <img class="s4-feature-img" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Team lead facilitating a workshop">
      <div class="s4-feature-col">
        <p class="s4-feature-eyebrow">Continuous Evolution</p>
        <h3 class="s4-feature-title">Professional Growth & Mastery</h3>
        <p class="s4-text">
          We prioritize the growth of our people through a culture of mentorship and shared intelligence. By combining diverse backgrounds in design, culture, and technology, we create a workplace where continuous learning is mandatory.
        </p>
      </div>
    </div>

    <!-- feature 3 -->
    <div class="s4-feature">
      <img class="s4-feature-img" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Digital analytics dashboard on a screen">
      <div class="s4-feature-col">
        <p class="s4-feature-eyebrow">Unified Execution</p>
        <h3 class="s4-feature-title">Integrated Technical Excellence</h3>
        <p class="s4-text">
          We eliminate the friction between separate agencies. Our integrated approach ensures that strategy, storytelling, and digital technology work in unison to deliver results that exceed traditional agency benchmarks.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .section-4 {
    background-color: #ffffff;
    padding: clamp(60px, 4rem, 120px) 0;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .s4-inner {
    display: flex;
    flex-direction: column;
  }

  .s4-text {
    margin: 0;
    margin-top: 26px;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 400;
    line-height: 160%;
    color: #373737;
  }

  .s4-feature-eyebrow {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.815rem + 0.237vw, 16.46px);
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: #373737;
  }

  .s4-heading {
    margin: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(30px, 0.73rem + 2.38vw, 46px);
    font-weight: 600;
    line-height: 1;
    color: #373737;
  }

  .s4-feature-title {
    margin: 0;
    margin-top: 10px;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(20px, -0.61rem + 3.87vw, 46px);
    font-weight: 600;
    line-height: 1.1;
    color: #373737;
  }

  .s4-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 64px;
    padding-top: clamp(20px, 0.39rem + 1.79vw, 32px);
  }

  .s4-row .s4-heading {
    flex: 1 1 0;
    min-width: 0;
  }

  .s4-row .s4-text {
    flex: 1 1 0;
    min-width: 0;
    margin-top: 0;
  }

  .s4-feature {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;
    margin-top: clamp(30px, 1.146rem + 2.893vw, 60px);
  }

  .s4-feature-reverse {
    flex-direction: row-reverse;
  }

  .s4-feature + .s4-feature {
    margin-top: clamp(50px, 2.41rem + 1.49vw, 60px);
  }

  .s4-feature-img {
    flex: 1 1 0;
    min-width: 0;
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
  }

  .s4-feature-col {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }
    .s4-row {
      flex-direction: column;
      gap: 20px;
    }
    .s4-feature {
      flex-direction: column;
      gap: 20px;
    }
    .s4-feature-img,
    .s4-feature-col,
    .s4-row .s4-heading,
    .s4-row .s4-text {
      flex: 0 0 auto;
      width: 100%;
    }
    .s4-row .s4-heading,
    .s4-row .s4-text {
      width: 100%;
    }
  }

  .s4-eyebrow {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: "Instrument Sans", sans-serif;
    font-size: clamp(14px, 0.73rem + 0.30vw, 16px);
    font-weight: 600;
    letter-spacing: 0.16px;
    line-height: 1.4;
    color: #1256d8;
    text-transform: uppercase;
  }

  .s4-eyebrow-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: #1256d8;
  }
</style>