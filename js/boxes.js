//start by making the "make boxes" button active
let myButton = document.querySelector(".make-boxes");
myButton.addEventListener("click", renderBoxes);

//get the number of boxes to make from user
function getNumBoxes() {
    var numBoxes = Number(prompt("how many boxes?"));

    if (numBoxes <= 0 || Number.isNaN(numBoxes)) {
        return 0;
    }
    return numBoxes;
}

//Makes boxes based on user input.
//We use tempHolder to build the boxes in memory only.
function makeBoxes() {
    const numBoxes = getNumBoxes();
    const tempHolder = document.createDocumentFragment();

    // Repeat Loop
    for (let i = 1, j = numBoxes; i <= j; i++) {
        let box = document.createElement("DIV");
        let txt = document.createTextNode(i);

        box.className = "box";

        /* write event listener here */
        function spin(e) {
            e.target.classList.add("box-rotate", "clicked");
            console.log(e);
        }
        box.addEventListener("click", spin);

        box.appendChild(txt);
        tempHolder.appendChild(box);
    } //end loop

    return tempHolder;
}

//
function renderBoxes(e) {
    const containerName = e.target.dataset.holder;
    const container = document.querySelector(containerName);
    const boxes = makeBoxes();

    if (boxes.children.length === 0) {
        container.innerHTML = "Try Again. Please type a positive whole number";
    } else {
        // clearout previous stuff before adding new boxes
        container.innerHTML = "";
        container.appendChild(boxes);
    }
}
