document.addEventListener('DOMContentLoaded', function() {
    console.log('hey')
   
    // Disables 'Pair with your ___' buttons on page load
    document.getElementById("meal-btn").disabled = true;
    document.getElementById("wine-btn").disabled = true;
    
    // Modal on page load
    var modalElem = document.querySelector('.modal');
    var instance = M.Modal.init(modalElem);
    instance.open();
  });

 document.getElementById('yes-btn').addEventListener('click', event => {
  console.log('you clicked yes')
 })

 document.getElementById('no-btn').addEventListener('click', event => {
   console.log('you clicked no')
 })

 function redirect() {
  location.replace('https://consumer.ftc.gov/features/we-dont-serve-teens');
 }