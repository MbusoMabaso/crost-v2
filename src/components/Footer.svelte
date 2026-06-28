<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-section footer-logo">
        <img src="/LogoName.svg" alt="Crost Media Logo" />
      </div>
      <div class="footer-section">
        <h4>Services</h4>
        <ul>
          <li><a href="#services">Celebrity and Public Figure PR</a></li>
          <li><a href="#services">Business and Brand PR</a></li>
          <li><a href="#services">Digital Marketing</a></li>
          <li><a href="#services">Crisis Management</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="https://www.instagram.com/crostmedia" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 CROST MEDIA. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    background: linear-gradient(135deg, var(--crost-dark) 0%, var(--crost-dark) 100%);
    color: white;
    padding: 3rem 0 1rem;
    width: 100%;
    overflow-x: hidden;
  }

  .container {
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-section.footer-logo img {
    max-width: 120px;
    margin-bottom: 1rem;
    display: block;
  }

  .footer-section h4 {
    color: var(--crost-primary);
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .footer-section p {
    color: var(--crost-muted);
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .footer-section ul {
    list-style: none;
  }

  .footer-section ul li {
    margin-bottom: 0.5rem;
  }

  .footer-section a {
    color: var(--crost-muted);
    transition: all 0.3s;
    font-size: 0.9rem;
  }

  .footer-section a:hover {
    color: var(--crost-primary);
    text-decoration: none;
  }

  .footer-bottom {
    border-top: 1px solid rgba(18, 86, 216, 0.2);
    padding-top: 2rem;
    text-align: center;
    color: #8c9bc2;
    font-size: 0.85rem;
  }

  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    footer {
      padding: 2rem 0 1rem;
    }

    .container {
      padding: 0 1.5rem;
    }

    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .footer-section h4 {
      font-size: 0.95rem;
      margin-bottom: 0.75rem;
    }

    .footer-section p {
      font-size: 0.85rem;
    }

    .footer-section a {
      font-size: 0.85rem;
    }

    .footer-bottom {
      padding-top: 1.5rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    footer {
      padding: 1.5rem 0 1rem;
    }

    .container {
      padding: 0 1rem;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 1rem;
    }

    .footer-section h4 {
      font-size: 0.9rem;
      margin-bottom: 0.6rem;
    }

    .footer-section p {
      font-size: 0.8rem;
      line-height: 1.5;
    }

    .footer-section ul li {
      margin-bottom: 0.4rem;
    }

    .footer-section a {
      font-size: 0.8rem;
    }

    .footer-bottom {
      padding-top: 1rem;
      font-size: 0.75rem;
    }
  }
</style>
