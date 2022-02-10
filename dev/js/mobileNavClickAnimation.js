// import { gsap } from "gsap";

// //this is my shotty attempt to have each sction of content take over the screen when clicked on
// //but sadly it isnt 

// gsap.set("#mobile-about-box",{scaleX:0, scaleY:0});
// gsap.set("#mobile-community-box",{scaleX:0, scaleY:0});
// gsap.set("#mobile-shop-box",{scaleX:0, scaleY:0});
// gsap.set("#mobile-food-box",{scaleX:0, scaleY:0});

// const aboutNavTL = new gsap.timeline();
// aboutNavTL.from("#mobile-about-box", {duration:0.5, scaleX:0, scaleY:0})
//           .to("#mobile-about-box", {duration:0.5, scaleX:2, scaleY:3});  

// const communityNavTL = new gsap.timeline();
// communityNavTL.from("#mobile-community-box", {duration:0.5, scaleX:0, ScaleY:0})
//               .to("#mobile-community-box", {duration:0.5, scaleX:2, ScaleY:3});

// const shopNavTL = new gsap.timeline();
// shopNavTL.from("#mobile-shop-box", {duration:0.5, scaleX:0, scaleY:0})
//          .to("#mobile-shop-box", {duration:0.5, scaleX:2, scaleY:3});

// const foodNavTL = new gsap.timeline();
// foodNavTL.from("#mobile-food-box", {duration:0.5, scaleX:0, scaleY:0})
//          .to("#mobile-food-box", {duration:0.5, scaleX:2, scaleY:3});



// export const mobileNavAnimationTL = new gsap.timeline({paused: true});

// mobileNavAnimationTL.add(aboutNavTL,"burger")
//                     .add(communityNavTL,"burger")
//                     .add(shopNavTL,"burger")
//                     .add(foodNavTL,"burger")