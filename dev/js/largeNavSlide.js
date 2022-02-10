let rightSide = document.querySelectorAll("large-nav-container .large-nav-content-element");
let buttons = document.querySelectorAll(".large-nav-container aside");
let currentIndex =  -1;

export function setUpMenu(){
    buttons.forEach((button , i) => {
        button.addEventListener("click", () => {

            console.log(currentIndex + " this is current index");

            if(currentIndex != -1){
                console.log("shrink");
                rightSide[currentIndex].classList.remove("active");
            }

            currentIndex = i;
            rightSide[i].classList.add("active");
        })
    })


    // add a listener to the content section
    let main = document.querySelector("#hero");

    main.addEventListener("click", () => {
        rightSide[currentIndex].classList.remove("active");

        currentIndex = -1;
    })

}