
function validateForm(event) {

  const theForm = event.target;
  
  e.preventDefault()
 
  const errors = [];

  let isValid = true;
  
  if (theForm.paymentMethod.value === "creditCard") {
    
    if (theForm.creditCardNumber.value !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid Credit Card Number");
    }
  }
  if (theForm.fullName.value !== "Bob") {
    isValid = false;
    errors.push("Your name is not Bob");
  }
 
  if (!isValid) {
  
    event.preventDefault();
   
    showErrors(errors);
   
    return false;
  }
}

document
  .querySelector("#checkoutForm")
  .addEventListener("submit", validateForm);
  
  function togglePaymentDetails(e) {
   
    const theForm = document.getElementById('checkoutForm');
   
    const creditCardContainer = document.getElementById('creditCardSec');
    const paypalContainer = document.getElementById('payPalSec');
    
    creditCardContainer.classList.remove("hide");
    paypalContainer.classList.remove("hide");
  
   
    theForm.creditCardContainer.required = false;
    theForm.paypalContainer.required = false;
    
    
    
    if (theForm.paymentMethod.value === "creditCard") {
      creditCardContainer.classList.add("hide");
      theForm.creditCardNumber.required = true;
    } else if (theForm.paymentMethod.value === "paypal") {
      paypalContainer.classList.add("hide");
      theForm.paypalUsername.required = true;
    }
  }
 
  document
    .querySelector("#payMethod")
    .addEventListener("change", togglePaymentDetails);

  

  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  
 



