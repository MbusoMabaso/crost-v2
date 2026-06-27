<script>
  import { onMount } from 'svelte'

  let menuOpen = false
  let lastScrollY = 0
  let headerHidden = false

  function toggleMenu() { menuOpen = !menuOpen }
  function closeMenu() { menuOpen = false }

  function handleScroll() {
    const currentScrollY = window.scrollY
    if (currentScrollY < lastScrollY || currentScrollY <= 50) {
      headerHidden = false
    } else if (currentScrollY > 100) {
      headerHidden = true
    }
    lastScrollY = currentScrollY
  }

  onMount(() => {
    lastScrollY = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  })
</script>

<header class:hidden={headerHidden}>
  <div class="container">
    <div class="logo">
      <div class="logo-main">
        <img src="/Logo.svg" alt="Crost Media Logo" />
      </div>
      <div class="logo-tagline">
        <span>Integrated Strategic Creative Agency</span>
      </div>
    </div>
    <nav class="nav-desktop">
      <a href="#about">About</a>
      <a href="#team">Team</a>
      <a href="#mission">Mission</a>
      <a href="#differentiators">Differentiators</a>
      <a href="#services">Capabilities</a>
      <a href="#contact">Contact</a>
    </nav>
    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
      <div class="hamburger" class:active={menuOpen}>
        <span></span><span></span><span></span>
      </div>
    </button>
  </div>
  {#if menuOpen}
    <nav class="nav-mobile-menu">
      <a href="#about" on:click={closeMenu}>About</a>
      <a href="#team" on:click={closeMenu}>Team</a>
      <a href="#differentiators" on:click={closeMenu}>Differentiators</a>
      <a href="#services" on:click={closeMenu}>Capabilities</a>
      <a href="#contact" on:click={closeMenu}>Contact</a>
    </nav>
  {/if}
</header>

<style>
  header { background: var(--crost-dark); padding: 1rem 0; position: fixed; top: 0; width: 100%; transition: transform 0.3s ease; z-index: 1000; }
  header.hidden { transform: translateY(-100%); }
  .container { max-width: 95%; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 1rem; }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
  }

  .logo-main {
    display: flex;
    align-items: center;
  }

  .logo-main img {
    height: 40px;
    width: auto;
  }

  .logo-tagline {
    display: flex;
    align-items: center;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 1rem;
  }

  .logo-tagline span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 1.3;
    max-width: 90px;
    text-align: left;
  }

  .nav-desktop {
    display: flex;
    align-items: center;
    flex-shrink: 1;
    min-width: 0;
  }
  .nav-desktop a {
    color: #fff;
    font-weight: 600;
    margin-left: 1.2rem;
    white-space: nowrap;
    font-size: 0.9rem;
  }
  .nav-desktop a:hover { color: var(--crost-primary); }

  .menu-toggle { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; margin-right: 0.5rem; }
  .hamburger span { width: 25px; height: 3px; background: #fff; display: block; margin: 5px 0; }

  .nav-mobile-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--crost-dark);
    opacity: 0.95;
    padding: 1rem;
    border-left: 2px solid var(--crost-primary);
    border-bottom: 2px solid var(--crost-primary);
    z-index: 2000;
    width: 200px;
  }
  .nav-mobile-menu a { color: #fff; display: block; padding: 0.5rem; text-align: right; }

  @media (max-width: 1200px) {
    .nav-desktop { display: none; }
    .menu-toggle { display: block; }
  }
</style>