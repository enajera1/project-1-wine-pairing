var wineButtonsEl = document.querySelector("#wineR");
var wineButtonsE2 = document.querySelector("#wineW");
var repoContainerEl = document.querySelector('#repos-container');
var mealText = document.querySelector(".text");
var mealPairings = document.querySelector(".pairings");
var inputValue = document.querySelector('.inputValue');
var button = document.querySelector('#input-btn');

var buttonClickHandler = function (event) {
    var wine = event.target.getAttribute('wine-type');
  
    if (wine) {
      getFeaturedRepos(wine);
  
      repoContainerEl.textContent = " ";
    }
  };

var getFeaturedRepos = function (wine) {
    var apiUrl = "https://api.spoonacular.com/food/wine/dishes?apiKey=17dacddd3e80476cad2abf4b81232653&wine=" + wine;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var text = data["text"];
      var pairings = data["pairings"];

      mealText.innerHTML = text;
      mealPairings.innerHTML = pairings;
    });
};

button.addEventListener('click',function(){
  fetch("https://api.spoonacular.com/food/wine/dishes?wine="+inputValue.value+"&apiKey=17dacddd3e80476cad2abf4b81232653")
  .then(response => response.json())
  .then(data => {
    var text = data["text"];
    var pairings = data["pairings"];

    mealText.innerHTML = text;
    mealPairings.innerHTML = pairings;

    inputValue.textContent='';
  });
  
});

wineButtonsEl.addEventListener("click",buttonClickHandler);
wineButtonsE2.addEventListener("click",buttonClickHandler);