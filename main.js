const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const imgNames = ['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png'];
/* Declaring the array of image filenames */

const alt = {'b1.png':'eye','b2.png':'nose', 'b3.png':'ear','b4.png':'throat','b5.png':'head' };
/* Declaring the alternative text for each image file */



/* Looping through images */




 for(let i = 0; i < imgNames.length; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', imgNames[i]);
newImage.setAttribute('alt', alt[imgNames[i]]);
thumbBar.appendChild(newImage);
} 




/* Wiring up the Darken/Lighten button */

btn.addEventListener('click' , () =>  {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark)");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});

