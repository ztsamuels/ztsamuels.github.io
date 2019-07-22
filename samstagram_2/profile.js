// logging ANDREW CARNEGIE as a varibale
    var original_name = document.getElementById("name_default").innerHTML;
// logging original bio as a variable
    var original_bio = document.getElementById("bio_default").innerHTML;

$("#form1").submit(function(e) {
    e.preventDefault();
// NAME CHANGE CODE
    // what the user inputs is saved in a variable: name_change
        var name_change = document.getElementById("name_input").value; 
    // ANDREW CARNEGIE is replaced by name_change
        original_name = name_change;
    // changes the html of ANDREW CARNEGIE to name_change so it shows up
        document.getElementById("name_default").innerHTML = name_change;
    // resetting the forms
        document.getElementById("name_input").value = "";

// PICTURE CHANGE CODE
    // what the user inputs is saved in a variable: new_url
        var new_url = document.getElementById("url_input").value;
    // replace image src with the link user submitted
        document.getElementById("pfp").src = new_url;
    // resetting the forms
        document.getElementById("url_input").value = "";

// BIO CHANGE CODE
    // what the user inputs is saved in a variable: new_bio
        var new_bio = document.getElementById("bio_input").value;
    // original bio is replaced by new bio
        original_bio = new_bio;
    // changes the html of the original bio to new_bio so it shows
        document.getElementById("bio_default").innerHTML = new_bio;
    // resetting the forms
        document.getElementById("bio_input").value= "";
});

