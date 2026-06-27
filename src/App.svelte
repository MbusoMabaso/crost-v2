<script>
  import './global.css'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Router from 'svelte-spa-router'
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Mission from './pages/Mission.svelte'
  import Services from './pages/Services.svelte'
  import Contact from './pages/Contact.svelte'

  const routes = {
    '/': Home,
    '/about': About,
    '/mission': Mission,
    '/services': Services,
    '/contact': Contact,
  }
  
  console.log("App initialized with routes:", routes);
</script>

<Header />
<Router {routes} on:routeLoaded={(event) => console.log('Route loaded:', event.detail.location)} />
<Footer />
