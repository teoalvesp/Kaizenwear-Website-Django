const buyBtn = document.querySelector('#btnBuy');

buyBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Acessar os dados do produto
    const productId = productData.id;
    const productName = productData.name;
    const productPrice = productData.price;
    const productImageUrl = productData.imageUrl;
    const quantity = document.querySelector('#qtd_items').value;
    const sizeSelect = document.querySelector('.form-control');
    const selectedSize = sizeSelect.options[sizeSelect.selectedIndex].text;

    // Criar um objeto com as informações do produto
    const productInfo = {
        id: productId,
        name: productName,
        price: productPrice,
        imageUrl: productImageUrl,
        size: selectedSize,
        qtd: quantity
    };

    // Obter o carrinho atual do localStorage ou criar um novo array vazio
    const cartItemsJSON = localStorage.getItem('cartItems');
    const cartItems = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];

    // Adicionar o novo item ao carrinho
    cartItems.push(productInfo);

    // Converter o carrinho atualizado em uma string JSON
    const updatedCartItemsJSON = JSON.stringify(cartItems);

    // Armazenar o carrinho atualizado de volta no localStorage
    localStorage.setItem('cartItems', updatedCartItemsJSON);

    // Verificar se a barra lateral não possui a classe 'open' antes de adicioná-la
    if (!cartSidebar.classList.contains('open')) {
        cartSidebar.classList.add('open');
        document.body.classList.add('no-scroll');
    }

    loadRestantContent();
    loadContent();

});



