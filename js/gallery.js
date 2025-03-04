/*Name this external file gallery.js*/

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