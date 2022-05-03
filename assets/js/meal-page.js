var button = document.querySelector('.btn');
var inputValue = document.querySelector('.inputValue');
var wineName = document.querySelector('.name');
var wineRating = document.querySelector('.rate');
var winePic = document.querySelector('.pic');
var winePrice = document.querySelector('.price');


var apiFoodUrl = 
"https://api.spoonacular.com/food/wine/pairing?food=beef&apiKey=cdfdf950f30c4861be31311f604a1491"
  

// "https://api.spoonacular.com/food/wine/dishes?apiKey=cdfdf950f30c4861be31311f604a1491?wine=merlot"

button.addEventListener('click',function(){
  fetch("https://api.spoonacular.com/food/wine/pairing?food="+inputValue.value+"&apiKey=cdfdf950f30c4861be31311f604a1491")
  .then(response => response.json())
  .then(data => {
    var pairValue = data['pairedWines'][0];
    var pairRating = data['productMatches'][0]['averageRating'];
    var pairPic = data['productMatches'][0]['imageUrl'];
    var pairPrice = data['productMatches'][0]['price'];


    wineName.innerHTML = pairValue;
    wineRating.innerHTML = pairRating;
    winePic.innerHTML = pairPic;
    winePrice.innerHTML = pairPrice;
    console.log('hello')
  })
  
});

var APIKey = "cdfdf950f30c4861be31311f604a1491"

var getFoodList = function (ingredients) {
var requestFoodUrl = 
"https://api.spoonacular.com/food/search?apiKey=cdfdf950f30c4861be31311f604a1491"

//make request
fetch(apiFoodUrl)
.then(function(response){
  if(response.status !==200) {
    console.log(response.status);
  }
  return response.json();
})
.then(function(data) {
  console.log(data);
});
};

getFoodList (); 