


function checkScreenSize(){
    
    let projbox = document.querySelector(".project");
    if(window.innerWidth<520){
        projbox.style.marginTop = "50rem";
    }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

let modebtn = document.querySelector(".modeDiv Button img");

let body = document.querySelector("body");
let navbar = document.querySelector(".navbar");
let navbarLine = document.querySelector(".line");
let proj1 = document.querySelector(".proj1");
let proj2 = document.querySelector(".proj2");
let skillbox1 = document.querySelector(".box1");
let skillbox2 = document.querySelector(".box2");
let skillbox3 = document.querySelector(".box3");
let hambrgr = document.querySelector(".navbar-toggler");
let homebtn = document.querySelector("#homebtn");
let morebtn = document.querySelector("#morebtn");
let projbtn = document.querySelector("#projbtn");
let gallerybtn = document.querySelector("#gallerybtn");
let tagcolor = document.querySelector(".tagcolor");

let isDarkMode = false;


function changeMode() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.style.backgroundColor = "black"; 
    body.style.color = "white";
    navbar.style.backgroundColor = "rgb(18, 18, 17";
    proj1.style.border = "1.5px solid white";
    proj1.style.backgroundColor = "rgb(230 238 175 / 6%)";
    proj2.style.backgroundColor = "rgb(230 238 175 / 6%)";
    proj2.style.border = "1px solid white";
    skillbox1.style.backgroundColor = "rgb(153 26 26 / 98%)";
    skillbox2.style.backgroundColor = "rgb(137 255 78 / 65%)";
    skillbox3.style.backgroundColor = "rgb(255 201 39)";

    skillbox1.style.boxShadow = "3px 3px #df9a9a";
    skillbox2.style.boxShadow = "3px 3px #c6f5c6";
    skillbox3.style.boxShadow = "3px 3px #dadaff";

    hambrgr.style.backgroundColor = "#ffffffde";
    homebtn.style.backgroundColor = "#2faa44";
    homebtn.style.boxShadow = "1px 1px white";
    morebtn.style.boxShadow = "1px 1px white";
    projbtn.style.boxShadow = "1px 1px white";
    gallerybtn.style.boxShadow = "1px 1px white";
    tagcolor.style.backgroundColor = "#ff8711";
    
    } 
    
    else {
        body.style.backgroundColor = "aliceblue";
        body.style.color = "black";
        navbar.style.backgroundColor = "rgba(255, 193, 7, 1)";
        skillbox1.style.backgroundColor = "rgba(255, 0, 0, 0.554)";
        skillbox2.style.backgroundColor = "rgba(85, 255, 0, 0.646)";
        skillbox3.style.backgroundColor = "rgba(0, 166, 255, 0.682)";

        proj1.style.border = "none";
    proj1.style.backgroundColor = "rgba(230, 238, 175, 0.561)";
    proj2.style.backgroundColor = "rgba(175, 228, 238, 0.611)";
    proj2.style.border = "none";
    tagcolor.style.backgroundColor = "#0D6EFD";
        
    }
    changeImg();
}

function changeImg() {
    if (isDarkMode) {
        modebtn.src = "lightbtn.png";
    } else {
        modebtn.src = "blackbtn.png";
    }
}

modebtn.addEventListener("click", changeMode);