(function(){
  const bidAmount = document.getElementById('bidAmount');
  const submitBid =  document.getElementById('submitBid');
  
  function bidAmount() {
    bidAmount = bidAmount.value;
  }

  submitBid.addEventListener('click', bidAmount());
})(); 
