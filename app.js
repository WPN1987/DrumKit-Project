
const clap = document.getElementById('clap');
const hihat = document.getElementById('hihat');
const kick = document.getElementById('kick');
const openhat = document.getElementById('openhat');
const boom = document.getElementById('boom');
const ride = document.getElementById('ride');
const snare = document.getElementById('snare');
const tom = document.getElementById('tom');
const tink = document.getElementById('tink');



document.addEventListener('keypress',() => {
    if (event.key.toUpperCase() == 'A'){  
        clap.play();
    } else if (event.key.toUpperCase() == 'S'){
        hihat.play();
    } else if (event.key.toUpperCase() == 'D'){
        kick.play();
    } else if (event.key.toUpperCase() == 'F'){
        openhat.play();
    } else if (event.key.toUpperCase() == 'G'){
        boom.play();
    } else if (event.key.toUpperCase() == 'H'){
        ride.play(); 
    } else if (event.key.toUpperCase() == 'J'){
        snare.play(); 
    } else if (event.key.toUpperCase() == 'K'){
        tom.play(); 
    } else if (event.key.toUpperCase() == 'L'){
        tink.play(); 
    }
}) 