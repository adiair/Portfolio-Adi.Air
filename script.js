

document.getElementById("contacttbtn").addEventListener("click", function () {
    var contactBar = document.getElementById("section2");

    // Toggle visibility
    if (contactBar.style.display === "none" || contactBar.style.display === "") {
        contactBar.style.display = "block";
    } else {
        contactBar.style.display = "none";
    }
});