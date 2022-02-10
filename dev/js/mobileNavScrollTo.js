import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#hero","#mobile-community","#mobile-shop", "#mobile-food"];

export function mobileScrollPage(index){
    gsap.to(window, {duration: 2, scrollTo:idArray[index]});
}