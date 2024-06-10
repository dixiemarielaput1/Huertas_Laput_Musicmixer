

const dragBox = document.getElementById("dragBox");
const dropBox = document.getElementById("dropBox");
const audioElements = document.querySelectorAll(".sound");
const draggableImages = document.querySelectorAll(".draggable");

const droppedImages = [];


initializeDragAndDrop();
function initializeDragAndDrop() {
    draggableImages.forEach(image => {
        image.addEventListener("dragstart", dragStart);
    });

    dropBox.addEventListener("dragover", dragOver);
    dropBox.addEventListener("drop", drop);
}

function dragStart(event) {
    const index = Array.from(draggableImages).indexOf(this);
    if (index >= 0 && index < audioElements.length) {
        if (droppedImages.indexOf(this.src) === -1) {
            audioElements[index].play();
            event.dataTransfer.setData("text/plain", this.src);
        }
    }
}

function dragOver(event) {
    event.preventDefault();

    console.log('Dragging the mouse'); 
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    console.log('Dropped the icon!');
    if (droppedImages.indexOf(data) === -1) {
        console.log('Dropped an item'); 
        const draggedImage = document.createElement("img");
        draggedImage.src = data;
        event.target.appendChild(draggedImage);
        droppedImages.push(data);
        const originalImage = document.querySelector(".draggable[src='" + data + "']");
        if (originalImage) {
            originalImage.style.display = "none";
        }
    }
}
