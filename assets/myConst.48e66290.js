import{af as t}from"./index.2be39f57.js";const a=t("myConst",{state(){return{msg:"hello"}},getters:{},actions:{changeState(e){this.msg=e.msg}},persist:{enabled:!0}});t("token",{state(){return{ajaxTimes:0}},getters:{},actions:{ajaxTimesJia(e=1){this.ajaxTimes=this.ajaxTimes+e}},persist:{enabled:!0}});export{a as m};
