function showAbout() {
    document.getElementById("about").style.display = "block";
}

function showEduction() {
    document.getElementById("education").style.display = "block";
}

function showProjects() {
    document.getElementById("projects").style.display = "block";
}

function showContacts() {
    document.getElementById("contacts").style.display = "block";
}

function moveLeft() {
    const section = document.getElementById("bio");
    // section.style.transform = "translate(-400px, -100px)";
}

// Animate About Section
let moved = false;
function animateAbout() {
    const hero = document.getElementById("bio");
    const about = document.getElementById("about");

    if (!moved) {
        hero.style.transform = "translate(-390px, -60px)";
        about.style.transform = "translate(420px, -480px)";
        about.style.opacity = "1";
        about.style.display = "block";
        education.style.display = "none";
        contacts.style.display = "none";
        projects.style.display = "none";
        moved = true;
    } 
    moved = !moved;
}

// Animate Education Section
let moved1 = false;
function animateEducation() {
    const hero = document.getElementById("bio");
    const education = document.getElementById("education");

    if (!moved1) {
        hero.style.transform = "translate(340px, -60px)";
        education.style.transform = "translate(-70px, -480px)";
        education.style.opacity = "1";
        education.style.display = "block";
        about.style.display = "none";
        contacts.style.display = "none";
        projects.style.display = "none";
        moved1 = true;
    } 
    moved1 = !moved1;
}

// Animate Projects Section
let moved2 = false;
function animateProjects() {
    const hero = document.getElementById("bio");
    const projects = document.getElementById("projects");

    if (!moved2) {
        hero.style.transform = "translate(-390px, -60px)";
        projects.style.transform = "translate(430px, -560px)";
        projects.style.opacity = "1";
        projects.style.display = "block";
        about.style.display = "none";
        education.style.display = "none";
        contacts.style.display = "none";
        moved2 = true;
    }
    moved2 = !moved2;
}

// Animate Contacts Section
let moved3 = false;
function animateContacts() {
    const hero = document.getElementById("bio");
    const contacts = document.getElementById("contacts");

    if (!moved3) {
        hero.style.transform = "translate(340px, -60px)";
        contacts.style.transform = "translate(250px, -550px)";
        contacts.style.opacity = "1";
        contacts.style.display = "block";
        about.style.display = "none";
        education.style.display = "none";
        projects.style.display = "none";
        moved3 = true;
    }
    moved3 = !moved3;
}

// Theme Toggle
const button = document.getElementById("theme-toggle");

function toggleTheme() {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}

window.onload = () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }
};

button.addEventListener("click", toggleTheme);

// Contact Button Toggle
document.getElementById("contacttbtn").addEventListener("click", function () {
    const contactBar = document.getElementById("section2");
    contactBar.style.display = (contactBar.style.display === "none" || contactBar.style.display === "") ? "block" : "none";
});


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const hero = document.getElementById("bio");
let activeSection = null;

function animateSection(sectionId, translateX, translateY) {
    const section = document.getElementById(sectionId);

    // Close any other open section
    if (activeSection && activeSection !== sectionId) {
        const prev = document.getElementById(activeSection);
        prev.style.transform = "translateY(100px)";
        prev.style.opacity = "0";
        prev.style.display = "none";
    }

    // Toggle the selected section
    if (activeSection === sectionId) {
        section.style.transform = "translateY(100px)";
        section.style.opacity = "0";
        section.style.display = "none";
        hero.style.transform = "translate(0, 0)";
        activeSection = null;
    } else {
        section.style.transform = `translate(${translateX}, ${translateY})`;
        section.style.opacity = "1";
        section.style.display = "block";
        hero.style.transform = "translate(-450px, -60px)";
        activeSection = sectionId;
    }
}

// Attach event listeners to <a> tags
document.getElementById("aboutLink").addEventListener("click", function (e) {
    e.preventDefault();
    animateSection("about", "320px", "-540px");
});

document.getElementById("educationLink").addEventListener("click", function (e) {
    e.preventDefault();
    animateSection("education", "320px", "-580px");
});

document.getElementById("projectsLink").addEventListener("click", function (e) {
    e.preventDefault();
    animateSection("projects", "320px", "-720px");
});

document.getElementById("contactsLink").addEventListener("click", function (e) {
    e.preventDefault();
    animateSection("contacts", "320px", "-720px");
});

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
