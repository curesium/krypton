const interface = new AudioContext();

function synth() {
  // Creating the oscillator
  oscillator = interface.createOscillator();

  // Defining the type of oscillator
  oscillator.type = 'sine';
  oscillator.frequency.value = 440;
    

}


// For the play button
let play = document.getElementById('playButton');
play.addEventListener('click', synth)
