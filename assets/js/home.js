document.addEventListener('DOMContentLoaded', function() {
    console.log('hey')
   
    document.getElementById("meal-btn").disabled = true;
    document.getElementById("wine-btn").disabled = true;
    
    var elems = document.getElementById('modal1');
    var instances = M.Modal.getInstance(elems);
    var instance = M.Modal.getInstance(elems);
   
    $('.modal').modal()
  });


 document.getElementById('yes-btn').addEventListener('click', event => {

 })