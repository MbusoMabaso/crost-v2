<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  let submitted = false

  function handleSubmit(e) {
    e.preventDefault()
    // In a real application, this would send to a backend
    submitted = true
    setTimeout(() => {
      submitted = false
      formData = { name: '', email: '', phone: '', message: '' }
    }, 3000)
  }
</script>

<section id="contact">
  <div class="container">
    <h2>Get In Touch</h2>
    <div class="contact-grid">
      <div class="contact-info">
        <h3>Let's Start Your Journey</h3>
        <p>Whether you're a celebrity, executive, or business looking to build influence and protect your reputation, we're here to help.</p>
        
        <div class="info-item">
          <h4>Email</h4>
          <p><a href="mailto:hello@crostmedia.com">hello@crostmedia.com</a></p>
        </div>

        <div class="info-item">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="https://www.instagram.com/crostmedia" target="_blank" rel="noopener">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>

        <div class="info-item">
          <h4>Service Areas</h4>
          <p>Celebrity and Public Figure PR</p>
          <p>Business and Brand PR</p>
          <p>Digital and Social Marketing</p>
        </div>
      </div>

      <form on:submit={handleSubmit} class="contact-form">
        <div class="form-group">
          <label for="name">Your Name *</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            placeholder="John Doe"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            bind:value={formData.phone}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div class="form-group">
          <label for="message">Message *</label>
          <textarea
            id="message"
            bind:value={formData.message}
            placeholder="Tell us about your PR and marketing needs..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btn-submit">Send Message</button>
        
        {#if submitted}
          <p class="success-message">Thank you! We'll get back to you soon.</p>
        {/if}
      </form>
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

  #contact {
    background-color: #ffffff;
    width: 100%;
    overflow-x: hidden;
  }

  h2 {
    text-align: center;
    color: var(--crost-dark);
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .contact-info h3 {
    color: var(--crost-dark);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .contact-info > p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .info-item {
    margin-bottom: 2rem;
  }

  .info-item h4 {
    color: var(--crost-primary);
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .info-item p {
    color: #555;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .social-links a {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background-color: #ffffff;
    border-radius: 6px;
    color: var(--crost-primary);
    transition: all 0.3s;
    font-weight: 500;
    border: 1px solid var(--crost-border);
  }

  .social-links a:hover {
    background-color: rgba(18, 86, 216, 0.12);
    color: var(--crost-dark);
    text-decoration: none;
    border-color: rgba(18, 86, 216, 0.2);
  }

  .contact-form {
    background: #ffffff;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid var(--crost-border);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--crost-dark);
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--crost-border);
    border-radius: 6px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s;
    background: #ffffff;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--crost-primary);
    box-shadow: 0 0 0 3px rgba(18, 86, 216, 0.15);
  }

  .btn-submit {
    width: 100%;
    padding: 0.9rem 2rem;
    background: linear-gradient(135deg, var(--crost-primary) 0%, var(--crost-dark) 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 10px 25px rgba(18, 86, 216, 0.25);
  }

  .btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(18, 86, 216, 0.35);
  }

  .success-message {
    background-color: #d4edda;
    color: #155724;
    padding: 1rem;
    border-radius: 6px;
    margin-top: 1rem;
    text-align: center;
    border: 1px solid #c3e6cb;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.8rem;
    }

    .contact-grid {
      gap: 2rem;
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

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-info h3 {
      font-size: 1.3rem;
    }

    .contact-info > p {
      font-size: 0.95rem;
    }

    .contact-form {
      padding: 1.5rem;
    }

    .social-links {
      gap: 0.75rem;
    }

    .social-links a {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }

    .form-group input,
    .form-group textarea {
      padding: 0.65rem;
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

    .contact-info h3 {
      font-size: 1.1rem;
    }

    .contact-info > p {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .info-item {
      margin-bottom: 1.5rem;
    }

    .info-item h4 {
      font-size: 0.95rem;
    }

    .info-item p {
      font-size: 0.85rem;
    }

    .social-links {
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .social-links a {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }

    .contact-form {
      padding: 1rem;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    .form-group label {
      font-size: 0.9rem;
      margin-bottom: 0.4rem;
    }

    .form-group input,
    .form-group textarea {
      padding: 0.6rem;
      font-size: 0.95rem;
    }

    .btn-submit {
      padding: 0.7rem 1.5rem;
      font-size: 0.9rem;
    }
  }
</style>
