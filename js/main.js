

draggedInstruments = document.querySelectorAll(".draggedInstruments");

dropArea = document.querySelectorAll(".dropArea");

dropToPlay = document.querySelectorAll(".dropToPlay")

let draggedMusic = document.querySelectorAll(".draggedInstruments img");

draggedInstruments.forEach(elem => {
elem.addEventListener("dragstart", dragStart);

});