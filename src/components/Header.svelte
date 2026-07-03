<script>
  import { onMount } from 'svelte'
  import Grainient from './lib/Grainient.svelte'

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
  <div class="grainient-container">
    <Grainient 
      color1="#0a0a0a" 
      color2="#0a1a3a" 
      color3="#1a0a1a" 
      class="absolute inset-0 w-full h-full"
    />
  </div>
  <div class="container relative z-10">
    <div class="logo">
      <a href="#/" class="logo-main">
        <img src="/Logo.svg" alt="Crost Media Logo" />
      </a>
      <div class="logo-tagline">
        <span>Integrated Strategic Creative Agency</span>
      </div>
    </div>
    <nav class="nav-desktop">
      <a href="#/" class="nav-link-animated">Home</a>
      <a href="#/about" class="nav-link-animated">About</a>
      <a href="#/culture" class="nav-link-animated">Culture</a>
      <a href="#/services" class="nav-link-animated">Capabilities</a>
      <a href="#/contact" class="nav-link-animated">Contact</a>
    </nav>
    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
      <div class="hamburger" class:active={menuOpen}>
        <span></span><span></span><span></span>
      </div>
    </button>
  </div>
  {#if menuOpen}
    <nav class="nav-mobile-menu">
      <a href="#/" on:click={closeMenu}>Home</a>
      <a href="#/about" on:click={closeMenu}>About</a>
      <a href="#/culture" on:click={closeMenu}>Culture</a>
      <a href="#/services" on:click={closeMenu}>Capabilities</a>
      <a href="#/contact" on:click={closeMenu}>Contact</a>
    </nav>
  {/if}
</header>

<style>
  header { 
    background: rgba(10, 31, 61, 0.85); 
    padding: 1rem 0; 
    position: fixed; 
    top: 0; 
    width: 100%; 
    transition: transform 0.3s ease; 
    z-index: 1000; 
    overflow: hidden;
  }
  header.hidden { transform: translateY(-100%); }
  
  .grainient-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

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
    text-decoration: none;
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