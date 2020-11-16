const interface = new AudioContext();

function synth() {
  // Creating the oscillator
  oscillator = interface.createOscillator();

  // Defining the type of oscillator
  oscillator.type = "sine";
  oscillator.frequency.value = 440;

  // Create volume
  const gainNode = interface.createGain();

  // Set the attack
  gainNode.gain.exponentialRampToValueAtTime(0.00001, interface.currentTime + 1);

  // Connent the elements
  oscillator.connect(gainNode);
  gainNode.connect(interface.destination);

  // Start the oscillator
  oscillator.start(0);
}


// For the play button
let play = document.getElementById('playButton');
play.addEventListener('mousedown', synth);
