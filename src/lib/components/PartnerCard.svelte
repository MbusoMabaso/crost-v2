<script lang="ts">
	import { cn } from "../../../lib/utils.js";

	let {
		img,
		className = ""
	} = $props<{
		img: string;
		className?: string;
	}>();
</script>

<figure
	class={cn(
		"relative h-full w-full cursor-pointer overflow-hidden rounded-xl border p-4 flex items-center justify-center",
		// light styles
		"border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
		// dark styles
		"dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
		className
	)}
>
	<img 
		class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" 
		alt="Partner Logo" 
		src={img} 
	/>
</figure>
