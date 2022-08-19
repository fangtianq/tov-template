<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		:ellipsis="false"
		:router="true"
	>
		<el-menu-item index="/">首页</el-menu-item>
		<div class="flex-grow" />
		<el-sub-menu index="2">
			<template #title>Workspace</template>
			<el-menu-item index="/demo/user/pinia">pinia</el-menu-item>
			<el-menu-item index="/about">about</el-menu-item>
			<el-menu-item index="/test">test</el-menu-item>
			<el-sub-menu index="2-4">
				<template #title>item four</template>
				<el-menu-item index="2-4-1">item one</el-menu-item>
				<el-menu-item index="2-4-2">item two</el-menu-item>
				<el-menu-item index="2-4-3">item three</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-menu-item index="3" disabled>Info</el-menu-item>
		<el-menu-item index="/app">导航</el-menu-item>
	</el-menu>
	<router-view />
</template>

<script lang="ts" setup>
import { Ref } from 'vue'
const activeIndex: Ref<string> = ref<string>(useRoute().path)
</script>

<style>
.flex-grow {
	flex-grow: 1;
}
</style>
