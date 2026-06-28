<script>
  import LightRays from './lib/LightRays.svelte'

  function scrollToSection(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<section id="contact-hero">
  <div class="rays-bg">
    <LightRays raysOrigin="top-center" raysColor="#ffffff" raysSpeed={1} />
  </div>
  <div class="container">
    <div class="hero-content">
      <h1>Let's Start Your Journey</h1>
      <p>Whether you're a celebrity, executive, or business looking to build influence and protect your reputation, we're here to help.</p>
      <div class="cta-buttons">
        <button class="btn btn-primary" on:click={() => scrollToSection('contact')}>Send Message</button>
        <a href="#/services" class="btn btn-secondary text-center flex items-center justify-center">Our Services</a>
      </div>
    </div>
    <div class="hero-image">
      <img src="/LogoFullName.svg" alt="Crost Media Contact Hero" />
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  #contact-hero {
    background: linear-gradient(135deg, var(--crost-soft) 0%, #ffffff 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    padding-top: 5.5rem;
    padding-bottom: 2rem;
  }

  .rays-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  #contact-hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    color: var(--crost-dark);
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: 800;
  }

  .hero-content p {
    font-size: 1rem;
    color: var(--crost-muted);
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 0.9rem 2.2rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    text-decoration: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, #1256d8 0%, #1e73f1 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(18, 86, 216, 0.25);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(18, 86, 216, 0.3);
    color: white;
    text-decoration: none;
  }

  .btn-secondary {
    background-color: transparent;
    border: 2px solid var(--crost-primary);
    color: var(--crost-primary);
  }

  .btn-secondary:hover {
    background-color: var(--crost-primary);
    color: white;
    transform: translateY(-3px);
    text-decoration: none;
  }

  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem;
  }

  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    #contact-hero .container {
      gap: 2rem;
    }

    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-image {
      min-height: 250px;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }

    #contact-hero .container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero-content h1 {
      font-size: 1.8rem;
    }

    .hero-content p {
      font-size: 0.95rem;
    }

    .cta-buttons {
      flex-direction: column;
      gap: 0.75rem;
    }

    .btn {
      width: 100%;
      padding: 0.85rem 2rem;
    }

    .hero-image img {
      max-width: 70%;
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 1rem;
    }

    .hero-content h1 {
      font-size: 1.4rem;
      margin-bottom: 0.75rem;
    }

    .hero-content p {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .btn {
      font-size: 0.9rem;
      padding: 0.75rem 1.5rem;
    }
  }
</style>
