document.addEventListener("DOMContentLoaded", () => {
  const addCartBtns = document.querySelectorAll(".addCartBtn");
  const cartCount = document.querySelector("#cartCount");
  const cartItemsContainer = document.querySelector("#cartItems");
  const cartTotal = document.querySelector("#cartTotal");
  const navLink = document.querySelectorAll(".nav-link");
  const collapse = document.querySelector(".navbar-collapse");

  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      const navCollpse = new bootstrap.Collapse(collapse, { toggle: "false" });
      navCollpse.hide();
    });
  });

  let cart = [];

  addCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      const name = card.querySelector(".card-title").textContent;
      const price = parseInt(
        card.querySelector(".price").textContent.replace("₹", "")
      );
      const existingItem = cart.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCart();
    });
  });

  function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        "<p class='text-muted text-center'>Your cart is empty.</p>";
      cartTotal.textContent = "0";
      return;
    }

    cartItemsContainer.innerHTML = cart
      .map(
        (item, index) => `
        <div class="d-flex justify-content-between align-items-center border-bottom py-2">
          <div>
            <strong>${item.name}</strong><br>
            <small>₹${item.price}</small>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-sm btn-outline-secondary me-2 minusBtn" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary ms-2 plusBtn" data-index="${index}">+</button>
          </div>
        </div>
      `
      )
      .join("");

    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    cartTotal.textContent = totalPrice;

    document.querySelectorAll(".plusBtn").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        cart[index].quantity++;
        updateCart();
      })
    );

    document.querySelectorAll(".minusBtn").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        cart[index].quantity--;
        if (cart[index].quantity <= 0) {
          cart.splice(index, 1);
        }
        updateCart();
      })
    );
  }
});
