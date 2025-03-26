document.addEventListener("DOMContentLoaded", () => {
    // Create Pixelated Background Effect
    const backgroundSec = document.querySelector('.backgroundSec');

    for (let i = 1; i <= 10000; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        backgroundSec.appendChild(box);
    }

    function animateBx() {
        let boxes = document.querySelectorAll('.box');
        let num = Math.floor(Math.random() * boxes.length);
        boxes[num].classList.toggle('animate');
    }

    setInterval(animateBx, 20);

    // Navbar Toggle for Mobile with Hamburger Animation
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Section Highlighting in Navbar
    const sections = document.querySelectorAll("section");
    const navLinksArray = document.querySelectorAll(".nav-links a");

    function setActiveSection() {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 70;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", setActiveSection);
    setActiveSection();

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });
});