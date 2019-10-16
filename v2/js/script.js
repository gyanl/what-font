/**
* @Author: gyanl
* @Date:   2017-10-01T09:56:56+05:30
* @Last modified by:   saxten2011
* @Last modified time: 2017-10-01T20:00:14+05:30
*/

var titleFont = "";
var titleFontLink ="";
var bodyFont = "";
var bodyFontLink = "";
var bgColor = "";

var mybody = document.getElementById("body-text");
var fonts = [
  "Lato",
  "Montserrat",
  "Rubik",
  "Merriweather",
  "DM Sans",
  "Space Mono",
  "Barlow",
  "Work Sans",
  "Fira Sans",
  "Libre Baskerville",
  "Libre Franklin",
  "Quicksand",
  "Karla",
  "Grenze",
  "EB Garamond",
  "IBM Plex Serif",
  "Ultra",
  "Gentium Book Basic",
  "IBM Plex Mono",
  "Chivo"
];
var numFonts = fonts.length;

var fontHistory = [];
//Reading json from https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("http://gyanl.com/what-font/v2/js/fontAttributes.json", function(text){
    var fontData = JSON.parse(text);
});

function setDirections() {
  console.log("This works.");
  for (x in fontData) {
    console.log("x.name[0]");
  }
  //(fontdata.name[1]);
}

function genColor() {
    var a = "";
    for (var i = 0; i < 3; i++)
        a = a.concat(Math.floor(Math.random() * 255).toString(16));

    if (a.length < 6) {
        for (var i = 0; i < (6 - a.length); i++)
            a = "0" + a;
    }
    return "#" + a;
}

function randomiseBackground() {
  bgColor = genColor();
  document.body.style.background = bgColor;
}

function updateDescription() {
  document.getElementById("info").innerHTML = "You are using <a id='bodyfontlink' target='_blank' rel='noopener noreferrer'>" + bodyFont + "</a>. <br>Double click text to randomize.";

  bodyFontLink = "https://fonts.google.com/specimen/" + bodyFont;

  document.getElementById('bodyfontlink').setAttribute('href', bodyFontLink);

}

function randomiseFont() {
  var numba = Math.floor(Math.random()*numFonts);
  var randomFont = fonts[numba];
  return randomFont;
}


function setBodyFont() {
  bodyFont = randomiseFont();
  document.getElementById("body-text").style.fontFamily = bodyFont;
  updateDescription();
}

function setBodyFontandBackground() {
  setBodyFont();
  randomiseBackground();
}

function alignLeft() {
  document.getElementById("body-text").style.textAlign = "left";
}

function alignCenter() {
  document.getElementById("body-text").style.textAlign = "center";
}

function alignRight() {
  document.getElementById("body-text").style.textAlign = "right";
}

function textBigger() {
  document.getElementById("body-text").style.fontSize = "20px";
}

function textSmaller() {
  document.getElementById("body-text").style.fontSize = "12px";
}

function init() {
  setBodyFont();
  setDirections();
  randomiseBackground();
  updateDescription();

  if (screen.width<540) {
    document.getElementById("body-text").contentEditable = "false";
  }

}
