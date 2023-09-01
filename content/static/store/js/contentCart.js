function loadContent() {
    const cartItemsJSON = localStorage.getItem('cartItems');
    const cartItems = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
    const totalAmountElement = document.getElementById('totalAmount');
    const productTemplate = document.querySelector('#product-template');
    window.totalPurchase = 0;

    // Limpar o conteúdo existente da barra lateral do carrinho
    productTemplate.innerHTML = '';

    cartItems.forEach((product) => {
        const newProductDiv = document.createElement('div');
        newProductDiv.classList.add('product');
        newProductDiv.innerHTML = `
                <div class="pre-content">
                    <hr style="
                    margin-bottom: 10px;
                    margin-top: 10px;
                ">
                        <h5>${product.name}</h5>
                </div>
                <div class="side-by-side">
                    <div class="content">
                        <img src="/static/${product.imageUrl}" alt="img-teste">
                    </div>
                </div>
                <div class="side-by-side">
                    <div class="content">
                        <p style="color: #979797;">${product.size}</p>
                        <p style="color: black;">R$ ${product.price}</p>
                        <div class="number-input-container">
                            <button class="control-button" onclick="decrement(this)">-</button>
                            <input type="number" class="number-input input-cart" value="${product.qtd}" disabled>
                            <button class="control-button" onclick="increment(this)">+</button>
                        </div>
                        <a onclick="remove(this)"id="btn-remover" href="#">REMOVER</a>
                        
                    </div>
                </div>
            `;
        productTemplate.appendChild(newProductDiv);
        totalPurchase += parseFloat(product.price) * product.qtd;

        // Atualiza o conteúdo do elemento no HTML
        totalAmountElement.innerHTML = `<strong>R$ ${totalPurchase.toFixed(2)}</strong>`;
    });

}


