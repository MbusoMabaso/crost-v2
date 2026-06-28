<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		reverse?: boolean;
		pauseOnHover?: boolean;
		vertical?: boolean;
		repeat?: number;
	}

	let { 
		children, 
		class: className = '', 
		reverse = false, 
		pauseOnHover = false, 
		vertical = false, 
		repeat = 4 
	}: Props = $props();

	let container: HTMLElement;

	onMount(() => {
		const items = container.querySelectorAll('.marquee-item');
		const clone = () => {
			const content = container.innerHTML;
			for (let i = 0; i < repeat; i++) {
				const div = document.createElement('div');
				div.innerHTML = content;
				container.appendChild(div);
			}
		};
		clone();
	});
</script>

<div 
	bind:this={container}
	class="marquee-container {className} {vertical ? 'marquee-vertical' : 'marquee-horizontal'} {reverse ? 'marquee-reverse' : ''}"
	on:mouseenter={() => pauseOnHover && (container.style.animationPlayState = 'paused')}
	on:mouseleave={() => pauseOnHover && (container.style.animationPlayState = 'running')}
>
	<div class="marquee-content">
		{@render children?.()}
	</div>
</div>

<style>
	.marquee-container {
		display: flex;
		overflow: hidden;
		user-select: none;
		width: 100%;
	}

	.marquee-horizontal {
		flex-direction: row;
	}

	.marquee-vertical {
		flex-direction: column;
		height: 100%;
	}

	.marquee-content {
		display: flex;
		flex-shrink: 0;
		gap: 2rem;
		padding: 1rem 0;
		min-width: 100%;
		animation: scroll var(--duration, 20s) linear infinite;
	}

	.marquee-horizontal .marquee-content {
		flex-direction: row;
	}

	.marquee-vertical .marquee-content {
		flex-direction: column;
	}

	.marquee-reverse .marquee-content {
		animation-direction: reverse;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 2rem));
		}
	}

	.marquee-vertical .marquee-content {
		animation: scroll-vertical var(--duration, 20s) linear infinite;
	}

	@keyframes scroll-vertical {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(calc(-100% - 2rem));
		}
	}
</style>
