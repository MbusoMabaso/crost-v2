<script>
  import Hero from "../components/Hero.svelte";
  import AboutTabs from "../components/AboutTabs.svelte";
  import ValuesInfo from "../components/ValuesInfo.svelte";
  import Marquee from "../components/lib/Marquee.svelte";

  const partners = [
    { src: "/partners/400w--f2O5ake5-Y.jpg", alt: "Partner 1" },
    { src: "/partners/400w-edvvn3RMOZ8.jpg", alt: "Partner 2" },
    { src: "/partners/400w-gN307Fjb3LQ.jpg", alt: "Partner 3" },
    { src: "/partners/400w-gTTQh2Bpzd8.jpg", alt: "Partner 4" },
    { src: "/partners/400w-ifbAoIgzASU.jpg", alt: "Partner 5" },
    { src: "/partners/400w-M-1yR80WbYU.jpg", alt: "Partner 6" },
    { src: "/partners/400w-nkZ1ogcN8So.jpg", alt: "Partner 7" },
    { src: "/partners/400w-RHpbbmbmu0A.jpg", alt: "Partner 8" },
  ];
</script>

<Hero />
<section class="container">
  <AboutTabs />
</section>

<section class="container values-section">
  <ValuesInfo />
</section>

<section class="marquee-section-wrapper relative overflow-hidden">
  <div class="marquee-container container relative z-10">
    <Marquee class="flex py-4" duration={40}>
      {#each partners as partner}
        <img
          src={partner.src}
          alt={partner.alt}
          width={96}
          height={96}
          class="pointer-events-none mx-8 h-24 w-24 object-contain opacity-70 select-none"
        />
      {/each}
    </Marquee>
  </div>
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

  .marquee-section-wrapper {
    position: relative;
    padding: 2rem 0 4rem;
    background: linear-gradient(135deg, var(--crost-soft) 0%, #ffffff 100%);
  }

  .marquee-container {
    width: 50%;
    margin: 0 auto;
  }
</style>
