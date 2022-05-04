// var instance = M.Parallax.getInstance(elem);
var wineButtonsEl = document.querySelector("#wineR");
var repoContainerEl = document.querySelector('#repos-container')
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
    .then(data => console.log((data)));
};
// $(document).ready(function(){
//   $('.parallax').parallax();
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.parallax');
//   var instances = M.Parallax.init(elems, options);
// });

wineButtonsEl.addEventListener("click",buttonClickHandler);
