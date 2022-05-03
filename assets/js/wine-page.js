var wineButtonsEl = document.querySelector("#winer");
var repoContainerEl = document.querySelector('#repos-container')
var buttonClickHandler = function (event) {
    var wine = event.target.getAttribute('wine-type');
  
    if (wine) {
      getFeaturedRepos(wine);
  
      repoContainerEl.textContent = '';
    }
  };

  var getFeaturedRepos = function (wine) {
    var apiUrl = "https://api.spoonacular.com/food/wine/dishes?apiKey=17dacddd3e80476cad2abf4b81232653&wine=" + wine;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
};

wineButtonsEl.addEventListener("click",buttonClickHandler);