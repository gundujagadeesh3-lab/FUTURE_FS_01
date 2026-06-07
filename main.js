// TYPED JS

var typed = new Typed(".text", {
    strings: [
        "Frontend Developer",
        "React Developer",
        "Java Developer",
        "Python Programmer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});


// ACTIVE NAVBAR LINK

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(
                `header nav a[href*="${id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

    });

});


// STICKY HEADER

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (header) {
        header.classList.toggle(
            "sticky",
            window.scrollY > 100
        );
    }

});


// SCROLL REVEAL EFFECT

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(
    ".education-box, .skill-card, .profile-card, .project-card, .contact-card"
);

hiddenElements.forEach((el) => observer.observe(el));


// SMOOTH SCROLL FOR NAVBAR

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });

        }

    });

});