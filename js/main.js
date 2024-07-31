console.log("JavaScript is connected");

// Variables and Selectors
const musicInstruments = document.querySelectorAll('.instrument-image'),
dropZones = document.querySelectorAll('.drop-zone'),
playButton = document.querySelector('#playButton'),
pauseButton = document.querySelector('#pauseButton'),
restartButton = document.querySelector('#restartButton');
const textFade = document.getElementById('text-fade-in');

const audioElements = {
    bassGuitarImg: document.querySelector('#audio1'),
    drumsImg: document.querySelector('#audio2'),
    electricGuitarImg: document.querySelector('#audio3'),
    micImg: document.querySelector('#audio4'),
    pianoImg: document.querySelector('#audio5'),
    synthImg: document.querySelector('#audio6')
};
let draggedInstrument = null;
let blinkID;

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

            
        playAudio(draggedInstrument.id);
    } else {
        console.log('Zone is already occupied');
    }

   
        document.body.classList.add('blinking');
        const fadingText = document.getElementById('text-fade-in');
        fadingText.classList.add('show');

        document.querySelectorAll('.music-move').forEach((element, index) => {
    
            element.classList.remove('animate');

         
            setTimeout(() => {
                element.classList.add('animate');
         
            }, index * 100); 
        }); 

    }

    function preventDrag(e) {
        e.preventDefault();

    }

//Event Listeners

musicInstruments.forEach(instrument => instrument.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
playButton.addEventListener('click', buttonPlay);
pauseButton.addEventListener('click', buttonPause);
restartButton.addEventListener("click", function() {history.go(0);});

playButton.addEventListener('dragstart', preventDrag);
pauseButton.addEventListener('dragstart', preventDrag);
restartButton.addEventListener('dragstart', preventDrag);

