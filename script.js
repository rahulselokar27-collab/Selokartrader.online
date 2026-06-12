// ===============================
// SELLOKAR TRADERS WEBSITE JS
// ===============================

// Fade In Animation on Scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

});

sections.forEach((section) => {

section.style.opacity = "0";
section.style.transform = "translateY(50px)";
section.style.transition = "all 1s ease";

observer.observe(section);

});

// ===============================
// Gallery Auto Highlight
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");

let currentImage = 0;

function highlightImage() {

galleryImages.forEach((img) => {

img.style.border = "none";

});

galleryImages[currentImage].style.border =
"5px solid #ff9800";

currentImage++;

if (currentImage >= galleryImages.length) {

currentImage = 0;

}

}

setInterval(highlightImage, 3000);

// ===============================
// Navbar Active Link
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

link.addEventListener("click", () => {

navLinks.forEach((item) => {

item.style.color = "white";

});

link.style.color = "#ffd54f";

});

});

// ===============================
// Welcome Message
// ===============================

window.onload = function () {

console.log(
"🌾 सेलोकर ट्रेडर्स एवं कृषि सेवा केंद्र वेबसाइट सफलतापूर्वक लोड हो गई।"
);

};

// ===============================
// WhatsApp Floating Animation
// ===============================

const whatsappBtn =
document.querySelector(".whatsapp-float");

setInterval(() => {

whatsappBtn.style.transform = "scale(1.1)";

setTimeout(() => {

whatsappBtn.style.transform = "scale(1)";

}, 500);

}, 2000);

// ===============================
// Hero Text Animation
// ===============================

const heroTitle =
document.querySelector(".hero h1");

let glow = true;

setInterval(() => {

if (glow) {

heroTitle.style.textShadow =
"0 0 20px yellow";

} else {

heroTitle.style.textShadow =
"none";

}

glow = !glow;

}, 1000);

// ===============================
// End Script
// ===============================
