const baseURL = "images/";
const nxt = document.querySelector(".nxt");
const prev = document.querySelector(".prev");
const slide = document.querySelector(".pic");
const pic = ["image01.jpg", "image02.jpg", "image03.jpg", "image04.jpg"];
let index = 0;

nxt.onclick = function (e) {
    e.preventDefault();
    index = index + 1;

    // write a conditional so that the images wrap back to the beginning image.
    if (index >= pic.length) {
        index = 0;
    }
    slide.src = baseURL + pic[index];
    console.log(slide.src);
};

//Add a previous button event listener
prev.addEventListener("click", prevImg);
function prevImg(e) {
    e.preventDefault();
    index = index - 1;
    if (index < 0) {
        index = pic.length - 1;
    }
    slide.src = baseURL + pic[index];
    console.log(slide.src);
}
