<script lang="ts">
	import Marquee from "$lib/components/marquee.svelte";
	import PartnerCard from "./PartnerCard.svelte";

	let { partners, class: className = "" } = $props<{ partners: string[], class?: string }>();

	let firstRow = $derived(partners.slice(0, Math.ceil(partners.length / 2)));
	let secondRow = $derived(partners.slice(Math.ceil(partners.length / 2)));
	let thirdRow = $derived(partners.slice(0, Math.ceil(partners.length / 2)));
	let fourthRow = $derived(partners.slice(Math.ceil(partners.length / 2)));
</script>

<div class="relative flex h-[450px] w-full flex-row items-center justify-center gap-4 overflow-hidden perspective-container {className}">
	<div class="flex flex-row items-center gap-4 marquee-3d-group">
		<Marquee pauseOnHover vertical class="[--duration:30s]">
			{#each firstRow as partner}
				<div class="marquee-item">
					<PartnerCard img={partner} />
				</div>
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:35s]" vertical>
			{#each secondRow as partner}
				<div class="marquee-item">
					<PartnerCard img={partner} />
				</div>
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:32s]" vertical>
			{#each thirdRow as partner}
				<div class="marquee-item">
					<PartnerCard img={partner} />
				</div>
			{/each}
		</Marquee>
		<Marquee pauseOnHover class="[--duration:38s]" vertical>
			{#each fourthRow as partner}
				<div class="marquee-item">
					<PartnerCard img={partner} />
				</div>
			{/each}
		</Marquee>
	</div>
    
	<div class="fade-edge fade-top"></div>
	<div class="fade-edge fade-bottom"></div>
	<div class="fade-edge fade-left"></div>
	<div class="fade-edge fade-right"></div>
</div>

<style>
    .perspective-container {
        perspective: 1000px;
    }

    .marquee-3d-group {
        transform: translateX(-50px) translateY(0px) translateZ(-150px) rotateX(15deg) rotateY(-10deg) rotateZ(5deg);
    }

    .marquee-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        width: 220px; /* Fixed width for the cards */
        height: 140px;
    }

    /* Fading edges to blend with background */
	.fade-edge {
		pointer-events: none;
		position: absolute;
		z-index: 10;
	}

	.fade-top {
		top: 0;
		left: 0;
		width: 100%;
		height: 25%;
		background: linear-gradient(to bottom, var(--crost-dark), transparent);
	}

	.fade-bottom {
		bottom: 0;
		left: 0;
		width: 100%;
		height: 25%;
		background: linear-gradient(to top, var(--crost-dark), transparent);
	}

	.fade-left {
		top: 0;
		left: 0;
		height: 100%;
		width: 20%;
		background: linear-gradient(to right, var(--crost-dark), transparent);
	}

	.fade-right {
		top: 0;
		right: 0;
		height: 100%;
		width: 20%;
		background: linear-gradient(to left, var(--crost-dark), transparent);
	}
</style>
