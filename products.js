
const ebookProducts = {
  hiit: {
    title: "15-Minute At-Home HIIT Workout",
    category: "FITNESS & WELLNESS",
    description: "A practical digital guide for people who want to explore short home workouts without making gym visits a requirement.",
    emoji: "💪",
    cover: "cover-fitness",
    features: [
      "A practical home-workout guide",
      "A simple routine-planning approach",
      "Tips for building a consistent habit",
      "A convenient digital reading format"
    ],
    includes: "Workout guide and practical exercise-planning tips.",
    checkoutUrl: ""
  },
  kids: {
    title: "200 Kids Worksheets Bundle",
    category: "KIDS & EDUCATION",
    description: "A printable activity bundle designed to support children's practice through engaging educational worksheets.",
    emoji: "✏️",
    cover: "cover-kids",
    features: [
      "Alphabet and letter practice",
      "Number learning activities",
      "Shapes, tracing and matching",
      "Colouring and activity sheets"
    ],
    includes: "A digital worksheet bundle. Confirm the final PDF contains all 200 worksheets before publishing.",
    checkoutUrl: ""
  },
  detox: {
    title: "30-Day Phone Detox Challenge",
    category: "HABITS & PRODUCTIVITY",
    description: "A structured digital challenge to help you reflect on your screen habits and build a more intentional daily routine.",
    emoji: "📵",
    cover: "cover-detox",
    features: [
      "A 30-day habit-building framework",
      "Ideas for reducing unnecessary scrolling",
      "Daily reflection and progress tracking",
      "Practical alternatives to screen time"
    ],
    includes: "The 30-day challenge guide and any worksheets included in your final PDF.",
    checkoutUrl: ""
  }
};

const root = document.getElementById("product-page");

if (root) {
  const product = ebookProducts[root.dataset.product];

  if (!product) {
    root.innerHTML = `
      <main class="product-page">
        <h1>Product not found</h1>
        <a class="button" href="../index.html">Back to store</a>
      </main>`;
  } else {
    document.title = `${product.title} | Ebook Matrix`;

    root.innerHTML = `
      <main class="product-page">
        <div class="breadcrumb">
          <a href="../index.html">Home</a> / ${product.title}
        </div>

        <div class="detail-grid">
          <div class="detail-cover cover ${product.cover}">
            <span class="cover-label">${product.category}</span>
            <span class="cover-icon">${product.emoji}</span>
            <strong>${product.title}</strong>
            <span class="cover-bottom">EBOOK MATRIX DIGITAL GUIDE</span>
          </div>

          <section class="detail-copy">
            <span class="eyebrow">${product.category}</span>
            <h1>${product.title}</h1>
            <p>${product.description}</p>

            <div class="detail-price">₹99</div>

            <button class="button buy-button" id="buy-button" type="button">
              Buy Now — ₹99
            </button>

            <p class="payment-note" id="payment-note">
              Digital product. Payment checkout will be enabled after setup.
            </p>

            <h2>What you'll find inside</h2>
            <ul>
              ${product.features.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        </div>

        <section class="detail-section">
          <h2>What's included?</h2>
          <p>${product.includes}</p>
          <p>Check the product description before purchasing to confirm the exact contents and file format.</p>
        </section>

        <section class="detail-section">
          <h2>Frequently asked questions</h2>
          <h3>How much does this ebook cost?</h3>
          <p>The listed price is ₹99.</p>
          <h3>How will I receive my ebook?</h3>
          <p>Digital delivery will be provided through the delivery method specified at checkout after it has been configured.</p>
          <h3>Can I read it on my phone?</h3>
          <p>PDF ebooks can generally be opened on phones, tablets and computers.</p>
        </section>

        <p style="margin-top:36px">
          <a class="text-link" href="../index.html">← Back to all ebooks</a>
        </p>
      </main>`;

    const buyButton = document.getElementById("buy-button");
    const paymentNote = document.getElementById("payment-note");

    buyButton.addEventListener("click", () => {
      if (product.checkoutUrl.startsWith("https://")) {
        window.location.href = product.checkoutUrl;
      } else {
        paymentNote.textContent =
          "Payment is not connected yet. Add this ebook's verified checkout URL in products.js before accepting orders.";
        paymentNote.style.color = "#9b3b00";
      }
    });
  }
}

