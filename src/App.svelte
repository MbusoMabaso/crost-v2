<script>
  import './global.css'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Router from 'svelte-spa-router'
  import { fade } from 'svelte/transition'
  import { fly } from 'svelte/transition'
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Differentiators from './pages/Differentiators.svelte'
  import Services from './pages/Services.svelte'
  import Contact from './pages/Contact.svelte'

  let currentRoute = '/'

  const routes = {
    '/': Home,
    '/about': About,
    '/differentiators': Differentiators,
    '/services': Services,
    '/contact': Contact,
  }
  
  function handleRouteLoaded(event) {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        currentRoute = event.detail.location
      })
    } else {
      currentRoute = event.detail.location
    }
    console.log('Route loaded:', currentRoute);
  }
</script>

<Header />

<main class="page-container">
  {#key currentRoute}
    <div 
      in:fade={{ duration: 400 }}
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
    overflow: hidden;
  }

  .route-wrapper {
    width: 100%;
  }

  /* View Transition API Styles */
  :global(::view-transition-old(root)),
  :global(::view-transition-new(root)) {
    animation-duration: 0.4s;
  }
</style>
