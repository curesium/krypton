// Creating the "connection"
const interface = new AudioContext();

// Calculating the frequency
  // Making the base frequency variable
//var baseInput = document.querySelector('frequencyInput');
//var base = parseInt(baseInput);
let base = 440

  // Finding the selected harmonic
var harmonic = 1;

document.querySelector('#harmonic1').addEventListener("mousedown", function() {
 harmonic = 1;
});

document.querySelector('#harmonic2').addEventListener("mousedown", function() {
 harmonic = 2;
});


  // Calculating the frequency for the selected harmonic
var inputFrequency = (base * harmonic);


function synth() {

  // Creating the oscillator
  oscillator = interface.createOscillator();

  // Defining the type of oscillator
  oscillator.type = "sine";
  oscillator.frequency.value = inputFrequency;

  // Create volume
  const gainNode = interface.createGain();

  // Set the attack
  gainNode.gain.exponentialRampToValueAtTime(0.0001, interface.currentTime + 1);

  // Connenct the elements
  oscillator.connect(gainNode);
  gainNode.connect(interface.destination);

  // Start the oscillator
  oscillator.start(0);

  document.querySelector('#outputText').innerHTML = baseInput
}


// For the play button
let play = document.querySelector('.playButton');
play.addEventListener('click', synth);
