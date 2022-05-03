var redWineSubmitButtonsEl = document.querySelector('#red-submit');
var wine = document.querySelector('#wine-input');

var merlotPair = "https://api.spoonacular.com/food/wine/dishes?apiKey=e29f13492bd14f8bb491da8f76f9d4fe&wine=Merlot";
var pairContainerEl = document.querySelector('#pair-container');


console.log(Response);


//button handler
var submitHandler = function (event) {
  event.preventDefault();

  var redWine = text.value.trim();

  if (redWine) {
    getWinePair(redWine);

    pairContainerEl.textContent = '';
    wine.value = '';
  } else {
    alert('Please enter a Wine to pair');
  }
  console.log(submitHandler);
};

//make request
var getWinePair = function (wine) {
  var winePairUrl = "https://api.spoonacular.com/food/wine/dishes?apiKey=e29f13492bd14f8bb491da8f76f9d4fe&wine=" + wine + '"';

  fetch(winePairUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data, wine);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to spoonacular');
    });
};
// //display results
// var displayPair = function () {
//   if ( === 0) {
//     pairContainerEl.textContent = '';
//     return;
//   }




 
//   }
// };
redWineSubmitButtonsEl.addEventListener('click', submitHandler);