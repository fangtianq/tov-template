<template>
	<div class="bg-red-500 text-white">我是首页sda1</div>
	<div>x坐标 {{ x }}</div>
	<div>y坐标 {{ y }}</div>
	<div>fps {{ fps }}</div>
</template>
<script setup lang="ts">
console.log(foo.number) // 输出 1000
console.log(api_testRequest()) // 输出 1000
console.log(foo.getFirstWord('ff')) // 输出 1000
const { x, y } = useMouse()
const fps = useFps()
</script>
