// - **Type**: API key
// - **API key parameter name**: apiKey
// - **Location**: URL query string


// import SpoonacularApi from 'spoonacular_api';
// let defaultClient = SpoonacularApi.ApiClient.instance;
// // Configure API key authorization: apiKeyScheme
// let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
// apiKeyScheme.apiKey = 'e29f13492bd14f8bb491da8f76f9d4fe';
// // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// apiKeyScheme.apiKeyPrefix = 'Token';

// let apiInstance = new SpoonacularApi.WineApi();
// let wine = malbec; // String | The type of wine that should be paired, e.g. \"merlot\", \"riesling\", or \"malbec\".
// apiInstance.getDishPairingForWine(wine, (error, data, response) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// });

var getWineData = function() {
  fetch("https://api.spoonacular.com/food/wine/pairing?api_key=e29f13492bd14f8bb491da8f76f9d4fe");
};
getWineData();
