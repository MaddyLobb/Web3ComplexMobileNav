import { gsap } from "gsap";

export function displayWindowSizeMobile(){

    let menu = document.querySelector(".full-mobile-nav");
    let menuHeight = menu.offsetHeight;

    console.log(menuHeight);

    if(document.documentElement.clientWidth <= 768){
        console.log("hide");
        gsap.set(".full-mobile-nav", {y: -menuHeight})
    }else{
        console.log("un-hide");
        gsap.set(".full-mobile-nav",{y:0, alpha:0});
    }

}