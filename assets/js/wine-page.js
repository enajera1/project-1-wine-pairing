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
      
      var apiFoodUrl= "https://api.edamam.com/api/recipes/v2?type=public&q="+data["pairings"][3]+"&app_id=76f5639d&app_key=330f06ac0a98ece7a92cb8b9f5929685"
      fetch(apiFoodUrl)
      .then(response => response.json())
      .then(data => {
        var recipe = data.hits[1].recipe.url;
        mealPairings.innerHTML = "Here's a fun recipe:" + recipe.link(recipe);
    });
})};

button.addEventListener('click',function(){
  fetch("https://api.spoonacular.com/food/wine/dishes?wine="+inputValue.value+"&apiKey=17dacddd3e80476cad2abf4b81232653")
  .then(response => {
    if (!response.ok) {
      mealText.innerHTML='Your wine type was not valid please try searching something else!';
      mealPairings.innerHTML=" ";
    }
    else 
    response.json()
    .then(data => {
    var text = data["text"];
    var pairings = data["pairings"];
    console.log(data);
    mealText.innerHTML = text;
    mealPairings.innerHTML = pairings;

    inputValue.innerHTML='';

    var apiFoodUrl= "https://api.edamam.com/api/recipes/v2?type=public&q="+data["pairings"][3]+"&app_id=76f5639d&app_key=330f06ac0a98ece7a92cb8b9f5929685"
      fetch(apiFoodUrl)
      .then(response => response.json())
      .then(data => {
        var recipe = data.hits[1].recipe.url;
        mealPairings.innerHTML = "Here's a fun recipe:" + recipe.link(recipe);
    });
  });
  
})});

wineButtonsEl.addEventListener("click",buttonClickHandler);
wineButtonsE2.addEventListener("click",buttonClickHandler);