document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const addProductBtn = document.getElementById('add-product-btn');

    let productCount = 1;

    const createProductCard = (name, description, price) => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${name}">
            <div class="content">
                <h2>${name}</h2>
                <p>${description}</p>
                <p><strong>$${price}</strong></p>
            </div>
            <div class="actions">
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const deleteBtn = card.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            card.remove();
        });

        return card;
    };

    const addProduct = () => {
        const productName = `Product ${productCount}`;
        const productDescription = `Description for Product ${productCount}`;
        const productPrice = (Math.random() * 100).toFixed(2);

        const newProductCard = createProductCard(productName, productDescription, productPrice);
        productList.appendChild(newProductCard);

        productCount++;
    };

    addProductBtn.addEventListener('click', addProduct);

    // Add initial products
    for (let i = 0; i < 3; i++) {
        addProduct();
    }
});
