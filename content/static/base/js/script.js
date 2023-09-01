document.addEventListener('DOMContentLoaded', function () {
    loadRestantContent();
});


function loadRestantContent() {
    const cartItemsJSON = localStorage.getItem('cartItems');
    const cartItems = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
    const cartItemsLength = cartItems.length;
    const restantCart2 = document.querySelector('.restant-cart-2');
    const restantCart = document.querySelector('.restant-cart');
    const contadorCart = document.querySelector('.contador-cart');
    const btnClear = document.querySelector("#clear-cart")

    contadorCart.textContent = cartItems.length;

    if (cartItemsLength > 0) {
        restantCart.style.display = 'block';
        restantCart2.style.display = 'none';
        btnClear.style.display = 'block';

    } else {
        restantCart2.style.display = 'block';
        restantCart.style.display = 'none';
        btnClear.style.display = 'none';
    }

}

function addCart() {

    totalPurchase += parseFloat(product.price) + 1;

    // Atualiza o conteúdo do elemento no HTML
    totalAmountElement.innerHTML = `<strong>R$ ${totalPurchase.toFixed(2)}</strong>`;

}

function removerCart() {

    totalPurchase += parseFloat(product.price) - 1;

    // Atualiza o conteúdo do elemento no HTML
    totalAmountElement.innerHTML = `<strong>R$ ${totalPurchase.toFixed(2)}</strong>`;

}

function removerProduct() {

    console.log('removendo')
}



