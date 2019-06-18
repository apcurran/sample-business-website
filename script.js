const cartSetup = (() => {
    const buyBtns = document.querySelectorAll(".buy-now-btn");
    const cartItemsList = document.querySelector(".cart-items-list");
    let numTotalAmt = parseFloat(document.querySelector(".total-amt").textContent);
    let totalAmtSpan = document.querySelector(".total-amt");

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
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "Remove";

        // Add the item to the shopping cart grid.

        li.appendChild(itemNameSpan);
        li.appendChild(itemPriceSpan);
        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);

        // Add item price to total.
        addToTotal(itemPrice);
    }

    function addToTotal(currentItemAmt) {
        // Remove the $ symbol first.
        const stringItemAmt = currentItemAmt.slice(1);
        const numItemAmt = parseFloat(stringItemAmt);
        numTotalAmt += numItemAmt;
        totalAmtSpan.textContent = numTotalAmt;
    }

    function removeItem(event) {
        if (event.target.className === "remove-btn") {
            const li = event.target.parentElement;
            cartItemsList.removeChild(li);

            const currentDeleteBtn = event.target;
            const currentItemCost = currentDeleteBtn.previousElementSibling.textContent;
            // Remove item amt from total.
            subtractFromTotal(currentItemCost);
        }
    }

    function subtractFromTotal(currentItemAmt) {
        const stringItemAmt = currentItemAmt.slice(1);
        const numItemAmt = parseFloat(stringItemAmt);
        numTotalAmt -= numItemAmt;
        totalAmtSpan.textContent = numTotalAmt;
    }

    buyBtns.forEach((button) => {
        button.addEventListener("click", addToCart);
    });

    cartItemsList.addEventListener("click", removeItem);

})();