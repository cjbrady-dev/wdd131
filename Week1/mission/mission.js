var selectElement = document.createElement("select");
//select element

var lightOption = document.createElement("option");
lightOption.text = "Light";
lightOption.value = "Light";
selectElement.appendChild(lightOption);
//light option

var darkOption = document.createElement("option");
darkOption.text = "Dark";
darkOption.value = "Dark";
selectElement.appendChild(darkOption);
//dark option

lightOption.selected = true;
// set light as default

var container = document.querySelector("Dark");

document.body.appendChild(selectElement);

selectElement.addEventListener("change", changeTheme);
//listener for event

function changeTheme() {
    var selectedOption = selectElement.value;

    if (selectedOption === "Dark") {
        document.body.classList.add("Dark");
        // Change logo from white to black
        document.querySelector("img").src = "images/byui-logo_black.png";
    } else {
        document.body.classList.remove("Dark");
        // Change logo image src to white
        document.querySelector("img").src = "images/byui-logo_blue.jpg";
    }
}
