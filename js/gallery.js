/*Name this external file gallery.js*/

window.onload = function() {
    let images = document.querySelectorAll(".preview");

    images.forEach((img) => {
        img.setAttribute("tabindex", "0"); // Add tabindex dynamically
        img.addEventListener("mouseover", function() { upDate(this); });
        img.addEventListener("mouseout", function() { unDo(); });
        img.addEventListener("focus", function() { upDate(this); });
        img.addEventListener("blur", function() { unDo(); });
    });

    console.log("Event listeners added to all images");
};

function upDate(previewPic){
    let mainDiv = document.getElementById("image");
    mainDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    mainDiv.innerHTML = previewPic.alt;
     
       }
   
       function unDo(){
        let mainDiv = document.getElementById("image");
        mainDiv.style.backgroundImage = "";
        mainDiv.innerHTML = "Hover over an image below to display here.";
       }