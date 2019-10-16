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

var mytitle = document.getElementById("title-text");
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

readTextFile("js/fontAttributes.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});

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
  document.getElementById("info").innerHTML = "You are using <a id='titlefontlink' target='_blank' rel='noopener noreferrer'>" + titleFont + "</a> with <a id='bodyfontlink' target='_blank' rel='noopener noreferrer'>" + bodyFont + "</a>. <br>Double click text to change font.";

  titleFontLink = "https://fonts.google.com/specimen/" + titleFont;
  bodyFontLink = "https://fonts.google.com/specimen/" + bodyFont;

  document.getElementById('titlefontlink').setAttribute('href', titleFontLink);
  document.getElementById('bodyfontlink').setAttribute('href', bodyFontLink);

}

function randomiseFont() {
  var numba = Math.floor(Math.random()*numFonts);
  var randomFont = fonts[numba];
  return randomFont;
}


function setTitleFont() {
  titleFont = randomiseFont();
  document.getElementById("title-text").style.fontFamily = titleFont;
  randomiseBackground();
  updateDescription();
}

function setBodyFont() {
  bodyFont = randomiseFont();
  document.getElementById("body-text").style.fontFamily = bodyFont;
  randomiseBackground();
  updateDescription();
}

function switchFonts() {
  var temp = bodyFont;
  bodyFont = titleFont;
  titleFont = temp;
  document.getElementById("body-text").style.fontFamily = bodyFont;
  document.getElementById("title-text").style.fontFamily = titleFont;
  updateDescription();
}

function setTitleAndBody() {
  titleFont = randomiseFont();
  document.getElementById("title-text").style.fontFamily = titleFont;

  bodyFont = randomiseFont();
  document.getElementById("body-text").style.fontFamily = bodyFont;

  updateDescription();
}

function alignLeft() {
  document.getElementById("title-text").style.textAlign = "left";
  document.getElementById("body-text").style.textAlign = "left";
}

function alignCenter() {
  document.getElementById("title-text").style.textAlign = "center";
  document.getElementById("body-text").style.textAlign = "center";
}

function alignRight() {
  document.getElementById("title-text").style.textAlign = "right";
  document.getElementById("body-text").style.textAlign = "right";
}

function textBigger() {
  document.getElementById("title-text").style.fontSize = "2.6em";
  document.getElementById("title-text").style.lineHeight = "1em";
  document.getElementById("body-text").style.fontSize = "1.2em";
  document.getElementById("body-text").style.lineHight = "2.6em";
}

function textSmaller() {
  document.getElementById("title-text").style.fontSize = "1.5em";
  document.getElementById("title-text").style.lineHeight = ".8em";
  document.getElementById("body-text").style.fontSize = ".8em";
  document.getElementById("body-text").style.lineHight = "1em";
}

function init() {
  setTitleFont();
  setBodyFont();
  document.body.style.background = "black";
  updateDescription();

  if (screen.width<540) {
    document.getElementById("body-text").contentEditable = "false";
    document.getElementById("title-text").contentEditable = "false";
  }

}
