import { defineStore } from 'pinia'

interface MyConstValue {
  msg: string;
}

export const myConstStore = defineStore('myConst', {
	state() {
		return {
			msg:'hello'
		}
	},
	getters: {},
	actions: {
		changeState(params:MyConstValue) {
			console.log('接收到的参数===>', params)
			this.msg = params.msg
		}
	},
	persist: {
    enabled: true , // 这个配置代表存储生效，而且是整个store都存储
  }
})
