// =========================
// MOBILE NAV MENU
// =========================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// auto close on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});


// =========================
// NAVBAR SHADOW ON SCROLL
// =========================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});


// =========================
// FAQ TOGGLE
// =========================
document.querySelectorAll(".faq-box").forEach((box) => {
  const btn = box.querySelector(".faq-q");
  btn.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});


// =========================
// CONTACT FORM VALIDATION
// =========================
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMsg.textContent = "❌ Please fill all fields.";
    formMsg.style.color = "tomato";
    return;
  }

  if (!emailCheck.test(email)) {
    formMsg.textContent = "❌ Please enter a valid email.";
    formMsg.style.color = "tomato";
    return;
  }

  formMsg.textContent = "✅ Message sent successfully! We will contact you soon.";
  formMsg.style.color = "#f6c453";

  contactForm.reset();
});


// =========================
// SCROLL REVEAL ANIMATION
// =========================
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 80) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
