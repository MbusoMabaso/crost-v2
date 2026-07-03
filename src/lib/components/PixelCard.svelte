<script module lang="ts">
	type PixelMethod = 'appear' | 'disappear';

	class Pixel {
		width: number; height: number; ctx: CanvasRenderingContext2D;
		x: number; y: number; color: string; speed: number;
		size = 0; sizeStep: number; minSize = 0.5; maxSizeInteger = 2; maxSize: number;
		delay: number; counter = 0; counterStep: number;
		isIdle = false; isReverse = false; isShimmer = false;

		constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, x: number, y: number, color: string, speed: number, delay: number, distance: number) {
			this.width = canvas.width; this.height = canvas.height; this.ctx = ctx;
			this.x = x; this.y = y; this.color = color;
			this.speed = (Math.random() * 0.8 + 0.1) * speed;
			this.sizeStep = Math.random() * 0.4;
			// 3D Depth effect: pixels further from center are smaller
			const maxDistance = Math.sqrt(Math.pow(this.width/2, 2) + Math.pow(this.height/2, 2));
			const scale = 1 - (distance / maxDistance) * 0.5;
			this.maxSize = (Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize) * scale;
			this.delay = delay;
			this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
		}
		draw() {
			const o = this.maxSizeInteger * 0.5 - this.size * 0.5;
			// Add subtle depth: opacity based on size
			const opacity = 0.5 + (this.size / this.maxSize) * 0.5;
			this.ctx.globalAlpha = opacity;
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.x + o, this.y + o, this.size, this.size);
			this.ctx.globalAlpha = 1.0; // Reset
		}
		appear() {
			this.isIdle = false;
			if (this.counter <= this.delay) { this.counter += this.counterStep; return; }
			if (this.size >= this.maxSize) this.isShimmer = true;
			if (this.isShimmer) this.shimmer(); else this.size += this.sizeStep;
			this.draw();
		}
		disappear() {
			this.isShimmer = false; this.counter = 0;
			if (this.size <= 0) { this.isIdle = true; return; }
			this.size -= 0.1;
			this.draw();
		}
		shimmer() {
			if (this.size >= this.maxSize) this.isReverse = true;
			else if (this.size <= this.minSize) this.isReverse = false;
			if (this.isReverse) this.size -= this.speed; else this.size += this.speed;
		}
	}

	function getEffectiveSpeed(value: number, reducedMotion: boolean) {
		const min = 0, max = 100, throttle = 0.001;
		if (value <= min || reducedMotion) return min;
		if (value >= max) return max * throttle;
		return value * throttle;
	}

	const VARIANTS = {
		default: { activeColor: null, gap: 1, speed: 200, colors: '#f0f0f0,#e0e0e0,#ffffff', noFocus: false },
		blue: { activeColor: '#85d4f8', gap: 1, speed: 200, colors: '#85d4f8,#5bbef5,#b3e6ff', noFocus: false },
		yellow: { activeColor: '#85d4f8', gap: 1, speed: 200, colors: '#85d4f8,#5bbef5,#b3e6ff', noFocus: false },
		pink: { activeColor: '#85d4f8', gap: 1, speed: 200, colors: '#85d4f8,#5bbef5,#b3e6ff', noFocus: true }
	} as const;

	export type PixelVariant = keyof typeof VARIANTS;
	export { VARIANTS as PIXEL_VARIANTS };
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		variant?: PixelVariant;
		gap?: number;
		speed?: number;
		colors?: string;
		noFocus?: boolean;
		class?: string;
		children?: Snippet;
	};
	let { variant = 'default', gap, speed, colors, noFocus, class: className = '', children }: Props = $props();

	let containerRef: HTMLDivElement;
	let canvasRef: HTMLCanvasElement;
	let pixels: Pixel[] = [];
	let rafId: number | null = null;
	let timePrev = 0;
	let reducedMotion = false;

	const cfg = $derived(VARIANTS[variant] || VARIANTS.default);
	const finalGap = $derived(gap ?? cfg.gap);
	const finalSpeed = $derived(speed ?? cfg.speed);
	const finalColors = $derived(colors ?? cfg.colors);
	const finalNoFocus = $derived(noFocus ?? cfg.noFocus);

	function initPixels() {
		if (!containerRef || !canvasRef) return;
		const rect = containerRef.getBoundingClientRect();
		const width = Math.floor(rect.width);
		const height = Math.floor(rect.height);
		const ctx = canvasRef.getContext('2d');
		if (!ctx) return;
		canvasRef.width = width;
		canvasRef.height = height;
		canvasRef.style.width = `${width}px`;
		canvasRef.style.height = `${height}px`;
		const colorsArray = finalColors.split(',');
		const px: Pixel[] = [];
		const g = parseInt(String(finalGap), 10);
		for (let x = 0; x < width; x += g) {
			for (let y = 0; y < height; y += g) {
				const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
				const dx = x - width / 2, dy = y - height / 2;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const delay = reducedMotion ? 0 : distance;
				px.push(new Pixel(canvasRef, ctx, x, y, color, getEffectiveSpeed(finalSpeed, reducedMotion), delay, distance));
			}
		}
		pixels = px;
	}

	function doAnimate(name: PixelMethod) {
		rafId = requestAnimationFrame(() => doAnimate(name));
		const now = performance.now();
		const passed = now - timePrev;
		const interval = 1000 / 60;
		if (passed < interval) return;
		timePrev = now - (passed % interval);
		const ctx = canvasRef?.getContext('2d');
		if (!ctx || !canvasRef) return;
		ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
		let allIdle = true;
		for (const p of pixels) {
			p[name]();
			if (!p.isIdle) allIdle = false;
		}
		if (allIdle && rafId !== null) cancelAnimationFrame(rafId);
	}

	function handle(name: PixelMethod) {
		if (rafId !== null) cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(() => doAnimate(name));
	}

	function onEnter() { handle('appear'); }
	function onLeave() { handle('disappear'); }
	function onFocus(e: FocusEvent) {
		if ((e.currentTarget as HTMLElement).contains(e.relatedTarget as Node | null)) return;
		handle('appear');
	}
	function onBlur(e: FocusEvent) {
		if ((e.currentTarget as HTMLElement).contains(e.relatedTarget as Node | null)) return;
		handle('disappear');
	}

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		timePrev = performance.now();
		initPixels();
		const ro = new ResizeObserver(() => initPixels());
		if (containerRef) ro.observe(containerRef);
		return () => {
			ro.disconnect();
			if (rafId !== null) cancelAnimationFrame(rafId);
		};
	});

	$effect(() => {
		void finalGap; void finalSpeed; void finalColors;
		if (containerRef && canvasRef) initPixels();
	});
</script>

<div
	bind:this={containerRef}
	class={`h-[300px] w-[300px] bg-gray-300 relative overflow-hidden grid place-items-center aspect-[4/5] border border-[#27272a] rounded-[25px] isolate transition-colors duration-200 ease-[cubic-bezier(0.5,1,0.89,1)] select-none ${className}`}
	onmouseenter={onEnter}
	onmouseleave={onLeave}
	onfocus={finalNoFocus ? undefined : onFocus}
	onblur={finalNoFocus ? undefined : onBlur}
	tabindex={finalNoFocus ? -1 : 0}
	role="group"
	aria-label="Interactive Pixel Card"
>
	<canvas class="absolute inset-0 w-full h-full block" bind:this={canvasRef}></canvas>
	<div class="relative z-10 w-full h-full">
		{@render children?.()}
	</div>
</div>