<template>
	<div
		v-for="itemT in mokuai"
		:key="itemT.typeName"
		class="p-4 mx-auto w-300 mt-4 bg-light-50"
	>
		<div class="headline">
			<strong class="before">{{ itemT.typeName }}</strong>
		</div>
		<div class="pt-4">
			<ul class="justify-start flex-wrap">
				<li
					v-for="item in itemT.apps"
					:key="item.name"
					class="w-36 inline-flex"
				>
					<a class="font-thin inline" :href="item.href" target="_blank">
						<img class="inline w-4 h-4" :src="item.imgSrc" />
						<span class="text-xs p-1">{{ item.name }}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts" setup>
interface appDaohang {
	href: string
	imgSrc: string
	name: string
}
interface appT {
	typeName: string
	apps: appDaohang[]
}
const biancheng: appDaohang[] = [
	{
		href: 'https://www.aliyun.com/minisite/goods',
		imgSrc: 'https://www.aliyun.com/favicon.ico',
		name: '服务器购买',
	},
	{
		href: 'https://gitee.com/fangtianq',
		imgSrc: 'https://gitee.com/favicon.ico',
		name: '码云',
	},
]
const jinrong: appDaohang[] = [
	{
		href: 'https://www.taoguba.com.cn/',
		imgSrc: 'https://www.taoguba.com.cn/favicon.ico',
		name: '淘股吧',
	},
	{
		href: 'https://xueqiu.com/',
		imgSrc: 'https://xqdoc.imedao.com/17aebcfb84a145d33fc18679.ico',
		name: '雪球',
	},
]
const mokuai: appT[] = [
	{
		typeName: '编程',
		apps: biancheng,
	},
	{
		typeName: '金融',
		apps: jinrong,
	},
]
</script>
<style>
.before::before {
	position: absolute;
	width: 6px;
	height: 16px;
	margin-top: -8px;
	background: #2777f8;
	border-radius: 0 2px 2px 0;
	content: '';
	margin-left: -16px;
	margin-top: 3px;
}
</style>
