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
    {
      id: 3,
      name: 'Andile Mbambo',
      role: 'Designer'
    },
    {
      id: 4,
      name: 'Gugulethu Shweni',
      role: 'Senior Creative'
    },
    {
      id: 5,
      name: 'Senior Creative & Strategy',
      role: ''
    },
    {
      id: 6,
      name: 'Kgositsile Monamod',
      role: 'Client Relations & New Business'
    },
    {
      id: 7,
      name: 'Rahul Baruah',
      role: 'Branding & Design'
    }
  ]
</script>

<section id="team">
  <div class="container">
    <h2>T H E &nbsp; T E A M</h2>

    <div class="team-leaders">
      {#each teamLeaders as leader}
        <div class="leader-card">
          <div class="leader-info">
            <h3>{leader.name}</h3>
            <p class="role-label">{leader.role}</p>
            <p class="description">{leader.description}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="team-grid">
      {#each teamMembers as member}
        {#if member.role}
          <div class="team-member">
            <h4>{member.name}</h4>
            <p class="member-role">{member.role}</p>
          </div>
        {/if}
      {/each}
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

  #team {
    background: linear-gradient(135deg, #ffffff 0%, var(--crost-soft) 100%);
    width: 100%;
    overflow-x: hidden;
  }

  h2 {
    text-align: center;
    color: var(--crost-dark);
    margin-bottom: 3rem;
    font-size: 2rem;
    letter-spacing: 3px;
  }

  .team-leaders {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    margin-bottom: 4rem;
  }

  .leader-card {
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    border-left: 4px solid var(--crost-primary);
    box-shadow: 0 8px 24px rgba(10, 31, 61, 0.08);
    transition: all 0.3s ease;
  }

  .leader-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(18, 86, 216, 0.15);
  }

  .leader-info h3 {
    font-size: 1.5rem;
    color: var(--crost-dark);
    margin-bottom: 0.5rem;
  }

  .role-label {
    color: var(--crost-primary);
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
    letter-spacing: 0.5px;
  }

  .description {
    color: var(--crost-muted);
    line-height: 1.8;
    font-size: 0.95rem;
    margin: 0;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(18, 86, 216, 0.1);
  }

  .team-member {
    background: white;
    padding: 1.75rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(10, 31, 61, 0.05);
    transition: all 0.3s ease;
  }

  .team-member:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(18, 86, 216, 0.12);
  }

  .team-member h4 {
    color: var(--crost-dark);
    margin-bottom: 0.5rem;
    font-size: 1.05rem;
    line-height: 1.3;
  }

  .member-role {
    color: var(--crost-primary);
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.4;
    letter-spacing: 0.3px;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.8rem;
    }

    .team-leaders {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .team-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }

    h2 {
      font-size: 1.6rem;
      margin-bottom: 2.5rem;
    }

    .leader-card {
      padding: 2rem;
    }

    .leader-info h3 {
      font-size: 1.3rem;
    }

    .description {
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .team-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      padding-top: 1.5rem;
    }

    .team-member {
      padding: 1.5rem;
    }

    .team-member h4 {
      font-size: 0.95rem;
    }

    .member-role {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 2rem 0;
    }

    h2 {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    .leader-card {
      padding: 1.5rem;
    }

    .leader-info h3 {
      font-size: 1.1rem;
    }

    .description {
      font-size: 0.85rem;
    }

    .team-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
      padding-top: 1.25rem;
    }

    .team-member {
      padding: 1.25rem;
    }

    .team-member h4 {
      font-size: 0.9rem;
    }

    .member-role {
      font-size: 0.75rem;
    }
  }
</style>
