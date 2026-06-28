<script>
  import Hero from "../components/Hero.svelte";
  import AboutTabs from "../components/AboutTabs.svelte";
  import ValuesInfo from "../components/ValuesInfo.svelte";
</script>

<Hero />
...
<section class="container">
  <AboutTabs />
</section>

<section class="container">
  <ValuesInfo />
</section>

<style>
  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }
</style>
