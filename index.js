// name typewriter code
console.log("java ready");
var i=0;
var txt = 'zoe samuels'; // the text being typed
var speed = 160; // speed of typing

function typewriter() {
  if (i < txt.length) {
    document.getElementById("zoe").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter,speed);
  }
  console.log("name printed");
}
typewriter();
