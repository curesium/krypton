const interface = new AudioContext();

function synth() {
  // Introducing variables
  let inputFrequency = 440

  // Creating the oscillator
  oscillator = interface.createOscillator();

  // Defining the type of oscillator
  oscillator.type = "sine";
  oscillator.frequency.value = inputFrequency;

  // Create volume
  const gainNode = interface.createGain();

  // Set the attack
  gainNode.gain.exponentialRampToValueAtTime(0.0001, interface.currentTime + 1);

  // Connent the elements
  oscillator.connect(gainNode);
  gainNode.connect(interface.destination);

  // Start the oscillator
  oscillator.start(0);
}


// For the play button
let play = document.getElementById('playButton');
play.addEventListener('click', synth);
