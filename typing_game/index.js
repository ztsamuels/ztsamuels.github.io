/*******************************************************************************
Part 1: Make random words appear at random locations on the screen.
*******************************************************************************/

/*
  When we program, we're going to use an approach called "top-down design." You
  can read about it online, but its basically a problem-solving methodology
  that involves starting by solving the largest problems first. As we're doing
  that, we assume that the smaller problems are already solved for us.

  For example, take a look at the putWordOnPage() function below. It starts
  by picking a random word, then it picks a random X and Y, then it inserts the
  random word to the page. Part 1 is to make random words appear, and that's
  solved for us! Now, we just have to solve the smaller problems!
*/

function putWordOnPage() {
  console.log("Executing putWordOnPage()...")
  var randomWord = pickRandomWord();
  console.log(randomWord);
  var randomX = getRandomX();
  console.log(randomX);
  var randomY = getRandomY();
  console.log(randomY);
  insertWordOnPage(randomWord, randomX, randomY);
}

/*
  First, let's take a step back. We want to add a word to the page every 3
  seconds. To do so, we need to call the "putWordOnPage" function every 3
  seconds. Write code to do that where it says "// Put your code here!"
*/

$(document).ready(function() {
  setInterval(putWordOnPage,3000);
});

/*
  Now, let' solve the smaller problems. Let's start by picking a random word
  from "randomWordList." Once you've picked a random word, return it!
*/

var randomWordList = [
  "import",
  "dump",
  "factory",
  "cell phone",
  "brand",
  "eagle",
  "leadership",
  "cycle",
  "happen",
  "childish",
  "fair",
  "divide",
  "forecast",
  "college",
  "exaggerate",
  "graduate",
  "rhythm",
  "moment",
  "heart",
  "stunning",
]

function pickRandomWord(){
  return randomWordList[Math.floor(Math.random() * randomWordList.length)];

}

/*
  Next, we have to pick a random X and Y location for our word to be placed at.
  Below, write the code to pick an X between 0 and the width of the window and
  a Y between 0 and the height of the window.
*/

function getRandomX() {
    return Math.floor(Math.random() * window.innerWidth);
}

function getRandomY() {
    return Math.floor(Math.random() * window.innerHeight);
}

/*
  Now, we need to actually insert the element to the screen. To do so, follow
  the steps below.
*/
  // 1) Create an H1 element and set its text to be "word"
  // 2) Edit the element's css to position it at x, y
  // Hint: read about "position: absolute;" online.
  // 3) append the element to the "container" div

function insertWordOnPage(word, randomX, randomY){
    var h1 = document.createElement("h1");
    var word = document.createTextNode(word);
    h1.appendChild(word);
    h1.style.position = "absolute";
    h1.style.left = randomX + "px";
    h1.style.top = randomY + "px";
    document.getElementById("container").appendChild(h1);
}

/*******************************************************************************
End of part 1 -- congrats!!!
*******************************************************************************/


/*******************************************************************************
Part 2: On form submition, check for a match and remove one if it's present.
*******************************************************************************/

/*
  Below, I've given you code that is executed, or called, when the form in the
  HTML is submitted. It's using a tool called JQuery. Read more about that
  online if you're interested -- it's a super useful tool!

  Now, we need to read the form's inputs and find/remove any matching words. See
  the code below for a walk-through.
*/
$("#form_id").submit(function(e) { // This entire function is given to you.
    e.preventDefault();

    // First, we get the text input element
    var text_input = document.getElementById('text_input');

    // Then, we get the text input element's value (what the user typed)
    var input_value = text_input.value;

    // After that, we check for any matches
    var elem = findMatchingWord(input_value);

    // If there are any, we remove them
    if (elem !== -1) elem.remove();

    // Finally, we reset the text input's value
    text_input.value="";
});

/*
This is the last problem for the typing game. For this, we'll be writing a
function called "findMatchingWord." This function takes in text_input, which
is the string that the user input.

Your job is to
1) Given the div with id "container," get a list of all of it's child nodes.
2) Loop over the nodes
3) For each node, check if its innerHTML is equal to the text input
4) if it is, you found a match! return the node.
5) if you get to the end of the loop and you haven't found anything,
   return -1, indicating that you haven't found anything.
*/


function findMatchingWord(text_input) {
    var nodeslist = document.getElementById("container").childNodes;
    for (var i = 0; i < nodeslist.length; i++) {
        var item = nodeslist[i];

        if (item.innerHTML == text_input) {
            return item;
        }  
    }
return -1;
}