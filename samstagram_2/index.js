$("#form2").submit(function(e, img) {
        e.preventDefault();
    // logging the user's url input as a variable: url_input
        var url_input = document.getElementById("url_input").value;
        console.log(url_input);
    // logging the user's caption input as a variable:caption_input
        var caption_input = document.getElementById("caption").value;
        console.log(caption_input);
    // call createPost
        createPost(caption_input,url_input);
    // resetting the forms
        document.getElementById("url_input").value = "";
        document.getElementById("caption").value = "";
});

// will take user input and put it on a kinda sticky note on page
function createPost(caption_input,url_input) {
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
        img.src = url_input;
    // caption element
        caption.innerHTML = caption_input;
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
        x.addEventListener("click", function() {
            var post_id = String(Math.random());
            post.id = post_id;
        document.getElementById(post_id).remove();
    });
}
    
