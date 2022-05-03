var apiFoodUrl = 
"https://api.spoonacular.com/food/search?apiKey=cdfdf950f30c4861be31311f604a1491"
  
// "https://api.spoonacular.com/food/wine/dishes?apiKey=cdfdf950f30c4861be31311f604a1491?wine=merlot"
//"https://randomuser.me/api/?results=5";

var APIKey = "cdfdf950f30c4861be31311f604a1491"

var getFoodList = function (ingredients) {

var requestFoodUrl = 
"https://api.spoonacular.com/food/" + ingredients + "/search?apiKey=cdfdf950f30c4861be31311f604a1491"

//make request
fetch(requestFoodUrl)
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

getFoodList ("Chicken");