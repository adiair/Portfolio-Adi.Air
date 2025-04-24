

const button = document.getElementById("theme-toggle");

        // Function to toggle theme
        function toggleTheme() {
            document.body.classList.toggle("light-mode");

            // Save user preference in localStorage
            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
                // button.textContent = "";
                
            } else {
                localStorage.setItem("theme", "dark");
                // button.textContent = "";
            }
        }

        // Check user preference on page load
        window.onload = () => {
            if (localStorage.getItem("theme") === "light") {
                document.body.classList.add("light-mode");
                // button.textContent = "";
            } else {
                // button.textContent = "";
            }
        };

        // Add event listener to the button
        button.addEventListener("click", toggleTheme);



////.........................................................................................................
document.getElementById("contacttbtn").addEventListener("click", function () {
    var contactBar = document.getElementById("section2");

    // Toggle visibility
    if (contactBar.style.display === "none" || contactBar.style.display === "") {
        contactBar.style.display = "block";
    } else {
        contactBar.style.display = "none";
    }
});