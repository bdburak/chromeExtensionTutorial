console.log("content_script.js");

var currentdate = new Date(); 

// modifying the dom
// var clock = document.createElement("div");
// clock.style.color = "red";
// clock.style.fontSize = "5rem";
// clock.style.zIndex = "1000";
// clock.style.position = "fixed";
// clock.style.top = "10px";
// clock.style.left = "10px";
// clock.innerText = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
// document.body.appendChild(clock);
// document.body.style.backgroundColor = "blue";

// modifying the dom
let body = document.body;

let allPsInPage = document.querySelectorAll(".pw-post-body-paragraph");
console.log(allPsInPage);

allPsInPage.forEach(element => {
    element.innerHTML = "burak";
    console.log(element.innerHTML)
});

function selectRandomWord(stringArray) {
    
}