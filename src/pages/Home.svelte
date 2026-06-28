<script>
  import Hero from "../components/Hero.svelte";
  import AboutTabs from "../components/AboutTabs.svelte";
  import ValuesInfo from "../components/ValuesInfo.svelte";
  import PartnerMarquee3D from "../lib/components/PartnerMarquee3D.svelte";

  const partners = [
    "/partners/400w--f2O5ake5-Y.jpg",
    "/partners/400w-edvvn3RMOZ8.jpg",
    "/partners/400w-gN307Fjb3LQ.jpg",
    "/partners/400w-gTTQh2Bpzd8.jpg",
    "/partners/400w-ifbAoIgzASU.jpg",
    "/partners/400w-M-1yR80WbYU.jpg",
    "/partners/400w-nkZ1ogcN8So.jpg",
    "/partners/400w-RHpbbmbmu0A.jpg",
  ];
</script>

<Hero />
<section class="container">
  <AboutTabs />
</section>

<section class="container values-section">
  <ValuesInfo />
</section>

<section class="partners-section">
  <PartnerMarquee3D {partners} />
</section>

<style>
  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .values-section {
    padding: 4rem 0;
  }

  .partners-section {
    padding: 2rem 0 4rem;
    background: var(--crost-dark);
    overflow: hidden;
  }
</style>
