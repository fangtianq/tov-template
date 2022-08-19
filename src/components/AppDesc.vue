<template>
	<div>
		<div v-html="descHtml"></div>
		<img v-directive-image-previewer class="w-200 h-85" :src="descImgSrc" />
	</div>
</template>
<script setup lang="ts">
defineProps({
	descHtml: String,
	descImgSrc: String,
})
</script>
