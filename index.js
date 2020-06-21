var i=0;
var txt = 'zoe samuels'; // the text being typed
var speed = 150; // speed of typing

function typewriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML +=charAt(i);
    i++;
    setTimeout(typewriter,speed);
  }
}
