<script>
  import './global.css'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Router from 'svelte-spa-router'
  import { fade } from 'svelte/transition'

  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Culture from './pages/Culture.svelte'
  import Services from './pages/Services.svelte'
  import Contact from './pages/Contact.svelte'

  const routes = {
    '/': Home,
    '/about': About,
    '/culture': Culture,
    '/services': Services,
    '/contact': Contact,
  }

  let currentRoute = '/'

  function handleRouteLoaded(event) {
    currentRoute = event.detail.location
    // Force a scroll to top on every route change to prevent "stuck" scroll states
    window.scrollTo(0, 0)
  }
</script>

<Header />

<main class="page-container">
  {#key currentRoute}
    <div 
      in:fade={{ duration: 300 }}
      class="route-wrapper"
    >
      <Router {routes} on:routeLoaded={handleRouteLoaded} />
    </div>
  {/key}
</main>

<Footer />

<style>
  .page-container {
    min-height: 80vh;
    position: relative;
    /* We must ensure overflow is visible for sticky components to work */
    overflow: visible;
  }

  .route-wrapper {
    width: 100%;
  }
</style>
