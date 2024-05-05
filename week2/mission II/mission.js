const themeSelector = document.getElementById("theme-select");


function changeTheme() {

    if (themeSelector === "Dark") {
        document.body.classList.add("Dark");
        // Change logo from white to black
        document.querySelector("img").src = "images/byui-logo_black.png";

    } else {
        document.body.classList.remove("Dark");
        // Change logo image src to white
        document.querySelector("img").src = "images/byui-logo_blue.jpg";
    }
}
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!


// if the value is dark then:
// add the dark class to the body
// change the source of the logo to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);