
document.addEventListener('DOMContentLoaded', loadModal)

function loadModal(){
  console.log('pair buttons disabled and modal loaded')
 
  // Disables 'Pair with your ___' buttons on page load
  document.getElementById("meal-btn").disabled = true;
  document.getElementById("wine-btn").disabled = true;
  
  // Modal on page load
  var modalElem = document.querySelector('.modal');
  var instance = M.Modal.init(modalElem);
  instance.open();
}

document.addEventListener('click', event => {
  console.log(event.target)
  var elId = event.target.getAttribute('id')
  console.log(elId)

  if (elId !== 'yes-btn') {
    loadModal();
  }
  
document.getElementById("meal-btn").disabled = false;
document.getElementById("wine-btn").disabled = false;
console.log('you clicked yes. pair buttons enabled');
})

document.getElementById('no-btn').addEventListener('click', event => {
 console.log('you clicked no. redirected to third party website');
 function redirect() {
  window.location.href="https://consumer.ftc.gov/features/we-dont-serve-teens";
}

redirect();

})