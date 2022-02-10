import { gsap } from "gsap";

export const barTL = new gsap.timeline();
barTL.from(".large-nav-container", {duration:.5, y:-920, stagger:-0.25 });