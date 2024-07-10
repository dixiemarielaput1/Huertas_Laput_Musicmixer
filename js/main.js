console.log("JavaScript is connected");

// Variables and Selectors
const musicInstruments = document.querySelectorAll('.instrument-image'),
dropZones = document.querySelectorAll('.drop-zone'),
playButton = document.querySelector('#playButton'),
pauseButton = document.querySelector('#pauseButton'),
restartButton = document.querySelector('#restartButton');
const audioElements = {
    bassGuitarImg: document.querySelector('#audio1'),
    drumsImg: document.querySelector('#audio2'),
    electricGuitarImg: document.querySelector('#audio3'),
    micImg: document.querySelector('#audio4'),
    pianoImg: document.querySelector('#audio5'),
    synthImg: document.querySelector('#audio6')
};
let draggedInstrument = null;

function buttonPlay(){
    playAudio('bassGuitarImg');
}

function buttonPause(){
    pauseAudio('bassGuitarImg');
    pauseAudio('drumsImg');
    pauseAudio('electricGuitarImg');
    pauseAudio('micImg');
    pauseAudio('pianoImg');
    pauseAudio('synthImg');
}
// Function to play audio based on instrument ID
function playAudio(instrumentId) {
    if (audioElements[instrumentId]) {
        const audio = audioElements[instrumentId];
        audio.currentTime = 0;
        audio.play();
    }
}

function pauseAudio(instrumentId) {
    if (audioElements[instrumentId]) {
        const audio = audioElements[instrumentId];
        audio.currentTime = 0;
        audio.pause();
}}

//Functions

function handleStartDrag(){
    draggedInstrument = this;
    console.log(`Started dragging ${draggedInstrument.alt}`);
}

function handleOver(e){
    e.preventDefault();
    console.log("Dragged Over");
}

function handleDrop(e) {
    e.preventDefault();
    if (!this.querySelector('img')) {
        this.appendChild(draggedInstrument);
        console.log(`Instrument '${draggedInstrument.alt}' dropped into '${this.id}'`);
        
        // Play audio corresponding to the dropped instrument
        playAudio(draggedInstrument.id);
    } else {
        console.log('Zone is already occupied');
    }
    }

//Event Listeners

musicInstruments.forEach(instrument => instrument.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
playButton.addEventListener('click', buttonPlay);
pauseButton.addEventListener('click', buttonPause);
restartButton.addEventListener("click", function() {history.go(0);});

