"use strict";

// Replace this with your actual Razorpay Payment Page URL.
// Example format: https://rzp.io/l/your-payment-page
const PAYMENT_LINK = "PASTE_YOUR_RAZORPAY_PAYMENT_LINK_HERE";

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Footer year
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Razorpay checkout link
document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (
      !PAYMENT_LINK.startsWith("https://") ||
      PAYMENT_LINK === "PASTE_YOUR_RAZORPAY_PAYMENT_LINK_HERE"
    ) {
      event.preventDefault();
      alert(
        "Payment abhi configure nahi hai. Seller ko apna Razorpay Payment Page URL add karna hoga."
      );
      return;
    }

    // Open the real hosted payment page.
    // Payment verification and PDF delivery must happen separately.
    button.setAttribute("href", PAYMENT_LINK);
    button.setAttribute("target", "_blank");
    button.setAttribute("rel", "noopener noreferrer");
  });
});
