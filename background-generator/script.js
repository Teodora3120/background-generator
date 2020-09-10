var _ = require('lodash');
console.log(_);

var css = document.querySelector("#copiedText");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("background");
var button = document.querySelector("#generator");
var copied = document.querySelector("h3");

function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.value = body.style.background + ";";
}

window.addEventListener("load", function () {
    color1.value = "#EE82EE";
    color2.value = "#0000FF";
    if(css.value === ''){
        css.style.opacity = 0;
    }
})

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const random = () => Math.ceil((Math.random() * 255));

const rgb = () => "rgb(" + random() + "," + random() + "," + random() + ")";

button.addEventListener("click", function () {
    body.style.background = "linear-gradient(to right," + rgb() + "," + rgb() + ")";
    css.value = body.style.background + ";";
    css.style.opacity = 1;
    css.style.transition = '0.2s all';
})

css.addEventListener("click",function () {
    if (css.value !== ''){
        css.select();
        document.execCommand("copy");
        copied.style.opacity = 1;
        setTimeout(() => {
            copied.style.opacity = 0;
        },2000);
    }  
})



