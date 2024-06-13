// When the page loads set the current number of participants equal to 1
let participantsNum = 0;
// Add an event listener to the button. When it is clicked the following should happen:
// Add one to the count of participants.
const button = document.getElementById('add');
button.addEventListener("click", function() {
    alert('Button was clicked!');
    participantsNum += 1;
});
// Create a copy of the HTML that makes up the participant section of the form. (<section class="participant1">)
const copy = document.getElementsByClassName(participant1);
copy.
// Note that id attributes are supposed to be unique. If we create an exact copy of that section then we will have duplicate ids. So the next step would be to update the ids of each element with something to make it unique.
// Insert the new HTML into the participants fieldset. Ideally we would want to insert the new participant after the last participant and before the Add button.

// ----------


// Since we will be adding a pretty complex set of HTML, let's create a function called participantTemplate(count) where count is the current number of participants shown.
// To make the ids unique in our template remember that we can do something like this: <section class="participant${count}"> You should add the count to each id in the template.
// When it is time to insert the new HTML into the form, take a look at insertAdjacentHTML(). Notice that we can insert something beforebegin. In other words if we select the add button element, and insert beforebegin it will place our new participant right where we want it.
// On a wide screen there is enough room to show two participants per row. Add some CSS (grid) to make it so that this will happen. When you create the two column grid you will need, you will need to fix the button so that it always shows up in the bottom row. (HINT: if you make it take up both columns it will always stay on the bottom row!)