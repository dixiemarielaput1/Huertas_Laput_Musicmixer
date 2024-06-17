document.addEventListener("DOMContentLoaded", function() {
    const dragArea = document.getElementById("dragArea");
    const dropArea = document.getElementById("dropArea");
    const musicLists = document.querySelectorAll(".music-instrument");
    const draggableImages = document.querySelectorAll(".draggable");

    let dropImage = {}; // Use an object to store dropped images

    // Call Function.
    initializeDragStart();
    initializeDragOver();
    initializeDropOver();

    // Function: Initialize For Dragstart, Dragover, Dropover
    function initializeDragStart() {
        console.log('Initializing drag and drop...');
        draggableImages.forEach(image => {
            image.addEventListener("dragstart", handleStartDrag);
        });
    }

    function initializeDragOver() {
        console.log('Initializing Drag Over');
        dropArea.addEventListener("dragover", handleOver);
    }

    function initializeDropOver() {
        console.log('Initializing Drop Over');
        dropArea.addEventListener("drop", handleDrop);
    }

    // Function: Handle Dragstart, Dragover, Dropover
    function handleStartDrag(e) {
        console.log(`Started Dragging ${this}`);
        const counter = Array.from(draggableImages).indexOf(this);
        if (counter >= 0 && counter < musicLists.length) {
            if (!dropImage[this.src]) { 
                musicLists[counter].play();
                e.dataTransfer.setData("text/plain", this.src);
            }
        }
    }

    function handleOver(e) {
        console.log('Dragged Over');
        e.preventDefault();
    }

    function handleDrop(e) {
        console.log('Dropped Over.');
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
    
        if (!dropImage[data]) {
            const draggedImage = document.createElement("img");
            draggedImage.src = data;
            dropArea.appendChild(draggedImage);
            dropImage[data] = true;
    
            const initialImage = document.querySelector(`.draggable[src='${data}']`);
            if (initialImage) {
                initialImage.style.display = "none";
            }     
        } else {
            console.log('Music is already placed.', data);
        }
    }
});