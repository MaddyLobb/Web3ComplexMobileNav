import{gsap}from"gsap";import{ScrollToPlugin}from"gsap/ScrollToPlugin";gsap.registerPlugin(ScrollToPlugin);let idArray=["#mobile-about","#mobile-community","#mobile-shop","#mobile-food"];export function mobileScrollPage(o){gsap.to(window,{duration:3,scrollTo:idArray[o]})}