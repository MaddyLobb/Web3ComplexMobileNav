import { burgerTL } from "./burgerAnimation"
import { displayWindowSizeMobile } from "./mobileNavResize";
import { mobileMenuEnter } from "./mobileNavAnimation";
//import { mobileNavAnimationTL } from "./mobileNavClickAnimation";


var burgerButton = document.querySelector("#burger");

//part of my attemt to make nav element grow when clicked//
// var mobileAboutButton = document.querySelector("#mobile-about-box");
// var mobileCommunityButton = document.querySelector("#mobile-community-box");
// var mobileShopButton = document.querySelector("#mobile-shop-box");
// var mobileFoodButton = document.querySelector("#mobile-food-box");
var canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        mobileMenuEnter.play();
        //mobileNavAnimationTL.reverse();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        mobileMenuEnter.reverse();
        //mobileNavAnimationTL.play();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);


//part of my attemt to make nav element grow when clicked//
//mobileAboutButton.addEventListener("click", openCloseMenu);
//mobileCommunityButton.addEventListener("click", openCloseMenu);
//mobileShopButton.addEventListener("click", openCloseMenu);
//mobileFoodButton.addEventListener("click", openCloseMenu);

// window.addEventListener('load', function () {
//     console.log("load");
//     mobileTopicAnimation();
// });

window.addEventListener('resize', displayWindowSizeMobile);

window.addEventListener('load', displayWindowSizeMobile);