<script setup lang="ts">
let html = '点击切换pinia的值'
let html1 = '点击重置pinia的值'
let store = myConstStore()
let { msg } = storeToRefs(myConstStore())
let divclick = () => {
	store.changeState({ msg: 'ssss' })
}
let resetpinia = () => {
	store.$reset()
}
</script>

<template>
	<div
		class="flex flex-col text-red-500 sm:(py-4 flex items-center space-y-0 space-x-6)"
	>
		<div :id="msg" @click="divclick">
			{{ html }}
		</div>
		<div @click="resetpinia">
			{{ html1 }}
		</div>
		<div>pinia数据:{{ msg }}</div>
	</div>
</template>
<route> { meta: { layout: 'home' } } </route>
<style></style>
