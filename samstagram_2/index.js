var firebaseConfig = {
    apiKey: "AIzaSyA5ms3ql2AekVlf5I5E7ZxEaJQXLja54r4",
    authDomain: "neat-encoder-247613.firebaseapp.com",
    databaseURL: "https://neat-encoder-247613.firebaseio.com",
    projectId: "neat-encoder-247613",
    storageBucket: "",
    messagingSenderId: "1081026454890",
    appId: "1:1081026454890:web:a3ee1376ec176743"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();  



$("#form2").submit(function(e, img) {
        e.preventDefault();
    // logging the user's url input as a variable: url_input
        var url_input = document.getElementById("url_input").value;
        console.log(url_input);
    // logging the user's caption input as a variable:caption_input
        var caption_input = document.getElementById("caption").value;
        console.log(caption_input);
    // calling saveItemToDatabase
        saveItemToDatabase(url_input,caption_input);
    // call createPost
        createPost(caption_input,url_input);
    // resetting the forms
        document.getElementById("url_input").value = "";
        document.getElementById("caption").value = "";
});

function saveItemToDatabase(url_input,caption_input){
    doc = db.collection("posts").add({
        caption: caption_input,
        image: url_input
    })
    .then(function(docRef){
        docRef.get().then(function(doc){
            createPost(doc);
        })
    }) 
}


// will take user input and put it on a kinda sticky note on page
function createPost(doc) {
// creates the elements 
    // creates a new div for the container aka. creates the post box
        var post = document.createElement("div");
    // create an img element
        var img = document.createElement("img");
    // create a p element for the caption
        var caption = document.createElement("p");
    // create a p element for the x 
        var x = document.createElement("p");
// set the inputs into the elements
    // img element
        img.src = doc.data().image;
    // caption element
        caption.innerHTML = doc.data().caption;
    // x element
        x.innerHTML = "x";
// connect caption and img to post and then post to container
        post.appendChild(x);
        post.appendChild(img);
        post.appendChild(caption);
        document.getElementById("container").appendChild(post);
// adding classes to elements
        post.classList.add("post");
        img.classList.add("image");
        caption.classList.add("caption");
        x.classList.add("x");
// remove the post when clicked
        var post_id = doc.id;
        post.id = post_id;

        x.addEventListener("click", function() {    
        document.getElementById(post_id).remove();
        db.collection("posts").doc(post.id).delete();
    });
}
    
// creating loadPosts function that brings back the post info and calls createPost
function loadPosts() {
    db.collection("posts").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){
            createPost(doc);
        });
    });
};
// calling the function above when the page comes back
$(document).ready(function(){
    loadPosts()
});