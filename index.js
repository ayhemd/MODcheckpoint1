const produits = document.querySelectorAll(".card");
const totalPrix = document.querySelector(".total");
let totalPrice = 0;

function updateTotal() {
    totalPrice = 0;
    produits.forEach(produit => {
        const unitPrice = parseFloat(produit.querySelector(".unit-price").textContent);
        const quantity = parseInt(produit.querySelector(".quantity").textContent);
        totalPrice += unitPrice * quantity;
    });
    totalPrix.textContent = totalPrice.toFixed(2); // Update the total price display
}

produits.forEach(produit => {
    const unitPrice = parseFloat(produit.querySelector(".unit-price").textContent);
    const quantityEl = produit.querySelector(".quantity");

    const BoutonPlus = produit.querySelector(".fa-plus-circle");
    const BoutonMoin = produit.querySelector(".fa-minus-circle");
    const suppBouton = produit.querySelector(".fa-trash-alt");

    BoutonPlus.addEventListener("click", () => {
        let quantity = parseInt(quantityEl.textContent);
        quantityEl.textContent = ++quantity;
        updateTotal(); // Update total when quantity changes
    });

    BoutonMoin.addEventListener("click", () => {
        let quantity = parseInt(quantityEl.textContent);
        if (quantity > 0) {
            quantityEl.textContent = --quantity;
            updateTotal(); // Update total when quantity changes
        }
    });

    suppBouton.addEventListener("click", () => {
        produit.remove();
        updateTotal(); // Update total when a product is removed
    });
});

// Initial total price calculation
updateTotal();





