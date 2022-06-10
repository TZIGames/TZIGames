// modal variables
var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('card');
var modalImg = document.getElementById("img01");
var images2 = document.getElementsByClassName('model_img');



// modal for the card images
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// modal for the model images
for (var i = 0; i < images2.length; i++) {
  var img = images2[i];
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

// Button clickers for Faction page
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

// document.ready(function(){
//   var ctx = document.getElementById('grid').getContext('2d');
//   ctx.fillStyle = "rgb(200,0,0)";
//   ctx.beginPath();    
//   for (var x = 0, i = 0; i < 5; x+=44, i++) {
//       for (var y = 0, j=0; j < 5; y+=44, j++) {            
//           ctx.rect (x, y, 40, 40);
//       }
//   }
//   ctx.fill();
//   ctx.closePath();
// });

// function HexGrid () {
//   this.canvas         = null;                 // (canvas Context)
//   this.borderColor    = "#FF0000";            // Hex Border Color
//   this.fillColor      = "yellow";             // Hex Fill Color
//   this.hexSize        = 20;                   // Hex Size Default

//   // Draw a hex using Offset Coordinates.
//   // Lets do Offset first, this should be the easiest.
//   // “odd-q” vertical layout
//   this.O_hex = function (x, y) {
//       var width = this.HexSize * 2;
//       var Horz = 3 / 4 * width;
//       var Vert = Math.sqrt (3) / 2 * width;
//       var Hpos = x * (Horz);
//       var Vpos = (y * Vert) + ( (x%2)*(Vert/2) );
//       this.drawHex(Hpos, Vpos);
//   };  

//   // Draw a Hex onto the Canvas.
//   this.drawHex = function (in_x,in_y) {
//     console.log ('Canvas = ' + this.canvas);
//     var ctx = this.canvas.getContext('2d');
//     console.log ('ctx = ' + ctx);
//     ctx.strokeStyle = this.borderColor;
//     console.log ('ctx = ' + ctx);
//     ctx.beginPath();
//     for (var i = 0; i <= 6; i++) {
//         angle = 2 * Math.PI / 6 * i
//         x_i = in_x + size * Math.cos(angle);
//         y_i = in_y + size * Math.sin(angle);
//         if (i === 0) {
//             ctx.moveTo (x_i, y_i);
//         } else {
//             ctx.lineTo (x_i, y_i);
//         }
//     }
//     ctx.fillStyle=this.fillColor;
//     ctx.fill();
//     ctx.stroke();
//   };
// }
// ////  TESTING CODE //////
// // function main () {
// //   Hex = new HexGrid;
// //   Hex.canvas = document.getElementById("mapGrid");

// //   for (var x = 0; x <= 10; x += 1) {
// //       for (var y = 0; y <= 10; y += 1) {
// //           Hex.O_hex (x,y);
// //       }
// //   }
// // }
// // }

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const a = 2 * Math.PI / 6;
const r = 50;
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);
function init() {
  drawGrid(canvas.width, canvas.height);
}
init();

function drawGrid(width, height) {
  for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
    for (let x = r, j = 0; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
      drawHexagon(x, y);
    }
  }
}

function drawHexagon(x, y) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();
}