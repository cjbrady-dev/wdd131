// form-demo.js
function validateForm(event) {
  // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
  const theForm = event.target;
  // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
  // To keep it from happening we can can call e.preventDefault()
  e.preventDefault()
  // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
  const errors = [];

  let isValid = true;
  //validations here
  if (theForm.paymentMethod.value === "creditCard") {
    // normally we would need contact the credit card company to verify the number...we are only going to allow one number as valid to keep things simple.
    if (theForm.creditCardNumber.value !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid Credit Card Number");
    }
  }
  if (theForm.fullName.value !== "Bob") {
    isValid = false;
    errors.push("Your name is not Bob");
  }
  // if we ran into any problems above valid will be false.
  if (!isValid) {
    //stop the form from being submitted
    event.preventDefault();
    // show the errors
    showErrors(errors);
    // return false to let the browser know the form was not submitted.
    return false;
  }
}
// attach a submit event handler to the form
document
  .querySelector("#checkoutForm")
  .addEventListener("submit", validateForm);
  
  function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.getElementById('checkoutForm');
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.getElementById('creditCardSec');
    const paypalContainer = document.getElementById('payPalSec');
    // Hide all containers by adding the '.hide' class to each of them+
    creditCardContainer.classList.remove("hide");
    paypalContainer.classList.remove("hide");
  
    // Disable required for all fields...if we hide a required field the browser will throw an error when we try to submit!
    theForm.creditCardContainer.required = false;
    theForm.paypalContainer.required = false;
    
    
    // Show the container based on the selected payment method, and add the required attribute back.
    if (theForm.paymentMethod.value === "creditCard") {
      creditCardContainer.classList.add("hide");
      theForm.creditCardNumber.required = true;
    } else if (theForm.paymentMethod.value === "paypal") {
      paypalContainer.classList.add("hide");
      theForm.paypalUsername.required = true;
    }
  }
  // attach a change event handler to the paymentMethod input
  document
    .querySelector("#payMethod")
    .addEventListener("change", togglePaymentDetails);

  
  // helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  
  // selectElement.addEventListener('change', function(event)
  
  // attach a submit event handler to the form



//   If you try submitting the form you will see that it prompts us to fill in all of the required elements before it will proceed. If you fill it all out and submit we get an error however. We currently have 2 hidden required fields. The browser considers this an error...as it should. We need to add some Javascript to first hide and show the appropriate fields, and remove the required attribute from the one that stays hidden.

// Open the form-demo.js file. It contains several incomplete functions. Start with the togglePaymentDetails function. Follow the comments to complete it.

// Here are a few tips:

// You can add and remove classes to elements through element.classList.add("classname") and element.classList.remove("classname")
// required is a bit of a funny attribute since it doesn't have a value. You can actually remove it by doing element.required = false OR by using element.removeAttribute("required"). You can add it back with either element.required = true OR element.setAttribute("required", "")
// Remember that when working with form inputs the stuff typed into the input can be found in element.value
// One you have finished writing the function, add a change event listener to the paymentMethod form input that will call our togglePaymentDetails function on change.