var btn = document.querySelector("button")

function buttonColor(){
    btn.style.background = "green";
}

function hoverColor(){
    btn.style.background = "pink"
}

btn.addEventListener('click', buttonColor)
btn.addEventListener('mouseover', hoverColor);

var img = document.querySelector("#king")

function newImage(){
    img.src="/img/king1.jpg"
}

img.addEventListener('click',newImage);
