// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('card');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function displayFaction(element){
  document.getElementById(element).style.display = "block";
    if((element=="BAC")){
      document.getElementById("UAT").style.display = "none";
      document.getElementById("MRC").style.display = "none";
      document.getElementById("LOD").style.display = "none";
      document.getElementById("EOC").style.display = "none";
      document.getElementById("ROC").style.display = "none";
    }
    if((element=="UAT")){
      document.getElementById("BAC").style.display = "none";
      document.getElementById("MRC").style.display = "none";
      document.getElementById("LOD").style.display = "none";
      document.getElementById("EOC").style.display = "none";
      document.getElementById("ROC").style.display = "none";
    }
    if((element=="MRC")){
      document.getElementById("UAT").style.display = "none";
      document.getElementById("BAC").style.display = "none";
      document.getElementById("LOD").style.display = "none";
      document.getElementById("EOC").style.display = "none";
      document.getElementById("ROC").style.display = "none";
    }
    if((element=="LOD")){
      document.getElementById("UAT").style.display = "none";
      document.getElementById("MRC").style.display = "none";
      document.getElementById("BAC").style.display = "none";
      document.getElementById("EOC").style.display = "none";
      document.getElementById("ROC").style.display = "none";
    }
    if((element=="EOC")){
      document.getElementById("UAT").style.display = "none";
      document.getElementById("MRC").style.display = "none";
      document.getElementById("LOD").style.display = "none";
      document.getElementById("BAC").style.display = "none";
      document.getElementById("ROC").style.display = "none";
    }
    if((element=="ROC")){
      document.getElementById("UAT").style.display = "none";
      document.getElementById("MRC").style.display = "none";
      document.getElementById("LOD").style.display = "none";
      document.getElementById("EOC").style.display = "none";
      document.getElementById("BAC").style.display = "none";
    }
}

