<script>
  const teamLeaders = [
    {
      id: 1,
      name: 'Nwabisa Jennings',
      role: 'CEO & Creative Director',
      description: 'Nwabisa leads the agency\'s strategic and creative direction, holding both to the same standard. She has a rare ability to translate complex commercial problems into clear, compelling creative strategy, and to hold both to the same measure of success.'
    },
    {
      id: 2,
      name: 'Noxolo Tshabalala',
      role: 'Co-Founder',
      description: 'Noxolo shapes the strategic thinking behind Crost\'s creative output. She ensures every brief is grounded in genuine insight and every idea is built to deliver against a real commercial objective.'
    }
  ]

  const teamMembers = [
    { id: 3, name: 'Andile Mbambo', role: 'Designer' },
    { id: 4, name: 'Gugulethu Shweni', role: 'Senior Creative' },
    { id: 6, name: 'Kgositsile Monamod', role: 'Client Relations & New Business' },
    { id: 7, name: 'Rahul Baruah', role: 'Branding & Design' }
  ]
</script>

<section id="team">
  <div class="container">
    <div class="values-section">
      <h2 class="editorial-heading">THE <span class="italic">TEAM</span></h2>

      <div class="values-grid">
        {#each teamLeaders as leader}
          <div class="value-card leader-card">
            <div class="value-header">
              <span class="value-marker">■</span>
              <h4>{leader.name}</h4>
            </div>
            <p class="role-subtitle">{leader.role}</p>
            <p class="description">{leader.description}</p>
          </div>
        {/each}
      </div>

      <div class="team-grid">
        {#each teamMembers as member}
          <div class="member-item">
            <div class="member-header">
              <span class="value-marker">■</span>
              <h5>{member.name}</h5>
            </div>
            <p class="member-role">{member.role}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

  section {
    padding: 8rem 0;
    background: #ffffff;
    font-family: 'Inter', sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .editorial-heading {
    color: #000;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.04em;
    margin-bottom: 5rem;
    text-transform: uppercase;
    text-align: center;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    margin-bottom: 6rem;
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
    margin-bottom: 0.5rem;
  }

  .value-marker {
    color: #1256d8;
    font-size: 0.7rem;
  }

  .value-card h4 {
    color: #000;
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .role-subtitle {
    color: #1256d8;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    padding-left: 1.95rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .description {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.7;
    margin: 0;
    padding-left: 1.95rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding-top: 4rem;
    border-top: 1px solid #eee;
  }

  .member-item {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f9f9f9;
  }

  .member-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.25rem;
  }

  .member-item h5 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
    color: #000;
  }

  .member-role {
    color: #666;
    font-size: 0.95rem;
    padding-left: 1.6rem;
  }

  @media (max-width: 1024px) {
    .values-grid, .team-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 5rem 0;
    }
    .container {
      padding: 0 1.5rem;
    }
    .value-card p, .role-subtitle, .member-role {
      padding-left: 0;
    }
    .editorial-heading {
      font-size: 2.75rem;
    }
  }
</style>