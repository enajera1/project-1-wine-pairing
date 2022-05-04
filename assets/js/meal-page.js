var mealButtons = document.querySelector('.ingredients-list');
var button = document.querySelector('.btn');
var inputValue = document.querySelector('.inputValue');
var wineName = document.querySelector('.name');
var wineText = document.querySelector('.text');
var wineRating = document.querySelector('.rate');
var winePic = document.querySelector('.pic');
var winePrice = document.querySelector('.price');
var wineLink = document.querySelector('.link');
var wineDesc = document.querySelector('.desc');



// var apiFoodUrl = 
// "https://api.spoonacular.com/food/wine/pairing?food=" "&apiKey=73623e9fe2b24472a4be5b28e95a5a71"
  
//eriknajera013@gmail.com key = cdfdf950f30c4861be31311f604a1491
//erik.najera@innuvis.com key = 73623e9fe2b24472a4be5b28e95a5a71

// "https://api.spoonacular.com/food/wine/dishes?apiKey=cdfdf950f30c4861be31311f604a1491?wine=merlot"

button.addEventListener('click',function(){
  fetch("https://api.spoonacular.com/food/wine/pairing?food="+inputValue.value+"&apiKey=73623e9fe2b24472a4be5b28e95a5a71")
  .then(response => response.json())
  .then(data => {
    var pairValue = data['pairedWines'][0];
    var pairRating = data['productMatches'][0]['averageRating'];
    var pairText = data['pairingText'];
    var pairPic = data['productMatches'][0]['imageUrl'];
    var pairPrice = data['productMatches'][0]['price'];
    var pairLink = data['productMatches'][0]['link'];
    var pairDesc = data['productMatches'][0]['description'];


    //wineName.innerHTML = pairValue;
    wineRating.innerHTML= "Rating: " +pairRating;
    wineText.innerHTML = "Pairs: " +pairText;
    winePic.innerHTML = pairPic;
    winePrice.innerHTML = pairPrice;
    wineLink.innerHTML = pairLink;
    wineDesc.innerHTML = pairDesc;

    inputValue.textContent='';
  })
  
});

var getPair = function(wine) {
  fetch(apiFoodUrl)
  .then(response => response.json())
  .then(data => {

    //var pairValue = data['pairedWines'][0];
    var pairRating = data['productMatches'][0]['averageRating'];
    var pairText = data['pairingText'];
    var pairPic = data['productMatches'][0]['imageUrl'];
    var pairPrice = data['productMatches'][0]['price'];
    var pairLink = data['productMatches'][0]['link'];
    var pairDesc = data['productMatches'][0]['description'];


    //wineName.innerHTML = pairValue;
    wineRating.innerHTML= "Rating: " +pairRating;
    wineText.innerHTML = "Pairs: " +pairText;
    winePic.innerHTML = pairPic;
    winePrice.innerHTML = pairPrice;
    wineLink.innerHTML = pairLink;
    wineDesc.innerHTML = pairDesc;
    
    console.log(data);
  })
};

buttonClickHandler = function(event) {
  var buttonValue = event.target.getAttribute('id');

  if(buttonValue) {
    getButtonPair(buttonValue);
  }
}
var getButtonPair = function(buttonValue) {
  fetch("https://api.spoonacular.com/food/wine/pairing?food="+buttonValue+"&apiKey=73623e9fe2b24472a4be5b28e95a5a71")
  .then(response => response.json())
  .then(data => {
        //var pairValue = data['pairedWines'][0];
        var pairRating = data['productMatches'][0]['averageRating'];
        var pairText = data['pairingText'];
        var pairPic = data['productMatches'][0]['imageUrl'];
        var pairPrice = data['productMatches'][0]['price'];
        var pairLink = data['productMatches'][0]['link'];
        var pairDesc = data['productMatches'][0]['description'];
    
    
        //wineName.innerHTML = pairValue;
        wineRating.innerHTML= "Rating: " +pairRating;
        wineText.innerHTML = "Pairs: " +pairText;
        winePic.innerHTML = pairPic;
        winePrice.innerHTML = pairPrice;
        wineLink.innerHTML = pairLink;
        wineDesc.innerHTML = pairDesc;
        
  })
}

mealButtons.addEventListener('click',buttonClickHandler)


