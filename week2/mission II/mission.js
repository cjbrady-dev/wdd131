const themeSelector = document.getElementById("theme-select");

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === "dark") {
        document.body.classList.add("Dark");
        // Change logo from white to black
        document.querySelector("img").src = "images/byui-logo_black.png";
    } else {
        document.body.classList.remove("Dark");
        // Change logo image src to blue
        document.querySelector("img").src = "images/byui-logo_blue.jpg";
    }
}

themeSelector.addEventListener('change', changeTheme);