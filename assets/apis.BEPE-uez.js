import{O as a,B as t,M as r}from"./index-Dwkfn6N4.js";const e="https://tea.qingnian8.com/api/bizhi";function n(n={}){let{url:u,method:s="GET",data:o={},header:i={}}=n;return u=e+u,i["access-key"]="future",new Promise(((e,n)=>{a({url:u,method:s,data:o,header:i,success:a=>{0===a.data.errCode?e(a.data):400===a.data.errCode?t({title:"错误",content:a.data.errMsg,showCancel:!1}):(r({title:a.data.errMsg,icon:"none"}),n(a.data))},fail:a=>{n(a)}})}))}function u(){return n({url:"/homeBanner"})}function s(){return n({url:"/randomWall"})}function o(a={}){return n({url:"/classify",data:a})}function i(a={}){return n({url:"/wallList",data:a})}function l(a={}){return n({url:"/setupScore",data:a})}function d(a={}){return n({url:"/userInfo",data:a})}function c(a={}){return n({url:"/userWallList",data:a})}function f(a={}){return n({url:"/searchWall",data:a})}export{s as a,o as b,d as c,i as d,c as e,l as f,f as g,u as r};
