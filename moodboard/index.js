$("#form_id").submit(function(e) {
    e.preventDefault();
    var text_input = document.getElementById("link_input").value;
    var img = document.createElement("img");
    img.src = text_input;
    var j = document.getElementById("container");
    j.appendChild(img);
});
