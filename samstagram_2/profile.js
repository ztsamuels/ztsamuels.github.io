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

$("#form1").submit(function(e) {
    e.preventDefault();
 // what the user inputs is saved in a variable: name_change
 var name_change = document.getElementById("name_input").value; 
// what the user inputs is saved in a variable: new_url
var new_url = document.getElementById("url_input").value;
// what the user inputs is saved in a variable: new_bio
var new_bio = document.getElementById("bio_input").value;
// call saveItemToDatabase
    saveItemToDatabase(name_change,new_url,new_bio);
});

// saveItemToDatabase function
function saveItemToDatabase(name_change,new_url,new_bio){
    doc = db.collection("users").doc("profile").set({
        name: name_change,
        pfp: new_url,
        bio: new_bio
    })
    .then(function(doc){
        db.collection("users").doc("profile").get().then(function(doc){
            changeProfile(doc);
        })
    })
}

// changeProfile function
function changeProfile(doc) {
// NAME CHANGE CODE
    // changes the html of ANDREW CARNEGIE to name_change so it shows up
        document.getElementById("name_default").innerHTML = doc.data().name
    // resetting the forms
        document.getElementById("name_input").value = "";
// IMAGE CHANGE CODE
    // replace image src with the link user submitted
        document.getElementById("pfp").src = doc.data().pfp;
    // resetting the forms
        document.getElementById("url_input").value = "";
// BIO CHANGE CODE
    // changes the html of the original bio to new_bio so it shows
        document.getElementById("bio_default").innerHTML = doc.data().bio;
    // resetting the forms
        document.getElementById("bio_input").value= "";
};

// creating loadProfile function that brings back the post info and calls createPost
function loadProfile() {
    db.collection("users").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){
            changeProfile(doc);
        });
    });
};
// calling the function above when the page comes back
$(document).ready(function(){
    loadProfile()
});