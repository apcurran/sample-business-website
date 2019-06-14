const cartSetup = (() => {
    const buyBtns = document.querySelectorAll(".buy-now-btn");
    const cartItemsList = document.querySelector(".cart-items-list");

    function addToCart(event) {
        const currentBuyBtn = event.target;
        const itemPrice = currentBuyBtn.previousElementSibling.textContent;
        const itemName = currentBuyBtn.previousElementSibling.previousElementSibling.textContent;
        
        // Create li to add the row to the shopping cart area.
        const li = document.createElement("li");
        const itemNameSpan = document.createElement("span");
        const itemPriceSpan = document.createElement("span");
        const removeBtn = document.createElement("button");

        itemNameSpan.textContent = itemName;
        itemPriceSpan.textContent = itemPrice;
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "Remove";

        li.appendChild(itemNameSpan);
        li.appendChild(itemPriceSpan);
        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
    }

    buyBtns.forEach((button) => {
        button.addEventListener("click", addToCart);
    });


})();