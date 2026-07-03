<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		spotlightColor?: string;
		children?: Snippet;
	};

	let { class: className = '', spotlightColor = 'rgba(255, 255, 255, 0.3)', children }: Props = $props();

	let divRef: HTMLDivElement;
	let isFocused = $state(false);
	let posX = $state(0);
	let posY = $state(0);
	let opacity = $state(0);

	function handleMouseMove(e: MouseEvent) {
		if (!divRef || isFocused) return;
		const rect = divRef.getBoundingClientRect();
		posX = e.clientX - rect.left;
		posY = e.clientY - rect.top;
	}
	function handleFocus() { isFocused = true; opacity = 0.6; }
	function handleBlur() { isFocused = false; opacity = 0; }
	function handleMouseEnter() { opacity = 0.6; }
	function handleMouseLeave() { opacity = 0; }
</script>

<div
		bind:this={divRef}
		role="presentation"
		onmousemove={handleMouseMove}
		onfocus={handleFocus}
		onblur={handleBlur}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
		class={`relative rounded-[25px] border border-neutral-700 bg-neutral-900/50 overflow-hidden p-4 aspect-[4/5] shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${className}`}
>
		<div
				class="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out"
				style="opacity:{opacity};background:radial-gradient(circle at {posX}px {posY}px, {spotlightColor}, transparent 50%);"
		></div>
		<div class="relative z-10 w-full h-full flex flex-col items-center justify-center">
				{@render children?.()}
		</div>
</div>
