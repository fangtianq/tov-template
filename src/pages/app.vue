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
					<el-popover
						placement="right"
						:width="800"
						trigger="hover"
						:disabled="!(item.descHtml || item.descImgSrc)"
					>
						<AppDesc
							:desc-html="item.descHtml"
							:desc-img-src="item.descImgSrc"
						></AppDesc>
						<template #reference>
							<a class="font-thin inline" :href="item.href" target="_blank">
								<img
									class="inline w-4 h-4"
									:src="
										item.imgSrc ||
										`${parseURL(item.href).protocolHostAndPort}/favicon.ico`
									"
								/>
								<span class="text-xs p-1">{{ item.name }}</span>
							</a>
						</template>
					</el-popover>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts" setup>
import AppDesc from '~/components/AppDesc.vue'

const parseURL = foo.parseURL
interface appDaohang {
	href: string
	imgSrc?: string
	name: string
	descHtml?: string
	descImgSrc?: string
}
interface appT {
	typeName: string
	apps: appDaohang[]
}
const biancheng: appDaohang[] = [
	{
		href: 'https://www.aliyun.com/minisite/goods',
		name: '服务器购买',
	},
	{
		href: 'https://gitee.com/fangtianq',
		name: '码云',
	},
]
const jinrong: appDaohang[] = [
	{
		href: 'https://www.taoguba.com.cn/',
		name: '淘股吧',
	},
	{
		href: 'https://xueqiu.com/',
		name: '雪球',
	},
]
const sheji: appDaohang[] = [
	{
		href: 'https://pixso.cn/community/home/',
		name: 'Pixso资源社区',
		descHtml: `
			<p class="indent-md">Pixso资源社区，是国内优秀的开源设计社区，内置来自阿里、字节、腾讯、京东、谷歌、华为等设计系统，超3000+UI组件库，每月更新上百个精品模板，分类涵盖移动设计、网页设计、插画、线框图、矢量图标等丰富的设计资源。</p>
			<p class="indent-md">在这里，新手可以直接搜索关键词，快速学习优秀设计师的排版和配色，了解新潮的设计趋势。Pixso社区支持一键复用所有设计资源，且不限文件数，不限团队和项目数，个人免费使用！</p>
			<p class='indent-md'>Pixso资源社区的开源特性是独特的，与传统的设计社区有很大区别。通过最简单的一键分享和复制，我们降低了资源共享的成本，让每一位设计师都可以更容易地向所有人展示自己的知识成果，也可以更直接地享受到他人知识成果带来的便利。</p>
		`,
		descImgSrc:
			'https://pic1.zhimg.com/80/v2-f920346b7269e801ab93dc87e0e18ba4_720w.jpg?source=1940ef5c',
	},
	{
		href: 'https://xueqiu.com/',
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
	{
		typeName: '设计',
		apps: sheji,
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
