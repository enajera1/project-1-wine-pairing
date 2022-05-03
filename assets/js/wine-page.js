var cabernetSauvignon = document.getElementById("cabernet_sauvignon");
var merlot = document.getElementById("merlot");
var zinfandel = document.getElementById("zinfandel");
var malbec = document.getElementById("malbec");
var shiraz = document.getElementById("shiraz");
var pinotNoir = document.getElementById("pinot_noir");
var port = document.getElementById("port");


var search = "https://api.spoonacular.com/food/wine/dishes?apiKey=e29f13492bd14f8bb491da8f76f9d4fe&wine=";

cabernetSauvignon.addEventListener("click", function() {
    fetch(search+"cabernet_sauvignon")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});

merlot.addEventListener("click",function() {
    fetch(search+"merlot")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});

zinfandel.addEventListener("click",function() {
    fetch(search+"zinfandel")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});
shiraz.addEventListener("click",function() {
    fetch(search+"shiraz")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});
malbec.addEventListener("click",function() {
    fetch(search+"malbec")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});
pinotNoir.addEventListener("click",function() {
  fetch(search+"pinot_noir")
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)));
  console.log("this works");
});
port.addEventListener("click",function() {
  fetch(search+"port")
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)));
  console.log("this works");
});




 

