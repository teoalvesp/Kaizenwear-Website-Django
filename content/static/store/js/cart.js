const cartSidebar = document.getElementById('cart-sidebar');
const myNavbar = document.querySelector('.mynavbar');
const cartIcon = myNavbar.querySelector('.bag');
const continueButtons = document.querySelectorAll('.btn-continue');
const fecharBar = document.querySelector('.btn-fechar');
const clearCartLink = document.querySelector('#clear-cart');
const inputCart = document.querySelector('.input-cart');
const totalAmountElement = document.getElementById('totalAmount');


continueButtons.forEach(continueButton => {
    continueButton.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        document.body.classList.remove('no-scroll');
    });
});

fecharBar.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    document.body.classList.remove('no-scroll');
});

cartIcon.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
    // Limpar o conteúdo existente da barra lateral do carrinhos
    loadContent();

});

clearCartLink.addEventListener('click', (event) => {
    event.preventDefault();

    const productTemplate = document.querySelector('#product-template');
    const restantCart2 = document.querySelector('.restant-cart-2');
    const restantCart = document.querySelector('.restant-cart');

    // Remover a chave 'cartItems' do localStorage para limpar o carrinho
    localStorage.removeItem('cartItems');
    productTemplate.innerHTML = '';
    restantCart2.style.display = 'block';
    restantCart.style.display = 'none';
    console.log(inputCart);

});


function increment(button) {
    var inputElement = button.parentNode.querySelector(".number-input");
    var currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue + 1;

    addCart();
}

function decrement(button) {
    var inputElement = button.parentNode.querySelector(".number-input");
    var currentValue = parseInt(inputElement.value);

    if (currentValue > 1) {
        inputElement.value = currentValue - 1;
    }
    removerCart();
}

function remove(button) {

    removerProduct();
}
