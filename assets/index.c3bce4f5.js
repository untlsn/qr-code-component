import{d as i,o as u,c as d,a as c,t as a,r as f,b as _,u as m,e as v}from"./vendor.c6efaa36.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};y();var p=(r,o)=>{const n=r.__vccOpts||r;for(const[s,e]of o)n[s]=e;return n};const g=["src"],h=i({props:{qrSrc:null,title:null,text:null},setup(r){return(o,n)=>(u(),d("article",null,[c("img",{src:r.qrSrc,alt:"qr code"},null,8,g),c("h1",null,a(r.title),1),c("p",null,a(r.text),1)]))}});var q=p(h,[["__scopeId","data-v-a3f059fe"]]),x="/qr-code-component/assets/image-qr-code.c38c08d5.png";const b=i({setup(r){return f("Hello World!"),(o,n)=>(u(),d("main",null,[_(q,{"qr-src":m(x),title:"Improve your front-end skills by building projects",text:"Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"},null,8,["qr-src"])]))}});var k=p(b,[["__scopeId","data-v-24d7a27b"]]);v(k).mount("#app");