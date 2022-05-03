var Chardonnay = document.getElementById("Chardonnay");
var Pinot = document.getElementById("Pinot");
var Riesling = document.getElementById("Riesling");
var Sauvignon = document.getElementById("Sauvignon");
var Semillon = document.getElementById("Semillon");
var Chenin = document.getElementById("Chenin");

var search = "https://api.spoonacular.com/food/wine/dishes?apiKey=17dacddd3e80476cad2abf4b81232653&wine=";

Chardonnay.addEventListener("click", function() {
    fetch(search+"chardonnay")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
}
);
Pinot.addEventListener("click",function() {
    fetch(search+"pinot_grigio")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});
Riesling.addEventListener("click",function() {
    fetch(search+"riesling")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});
Sauvignon.addEventListener("click",function() {
    fetch(search+"sauvignon_blanc")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});
Chenin.addEventListener("click",function() {
    fetch(search+"chenin")
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
    console.log("this works");
});
