async function fetchProducts() {
    const response = await fetch('products.json');
    const data = await response.json();
    return data;
  }
  
  async function createProductCards() {
    const productList = document.getElementById('productList');
    const products = await fetchProducts();
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
  
      const image = document.createElement('img');
      image.src = product.image;
      card.appendChild(image);
  
      const name = document.createElement('div');
      name.classList.add('product-name');
      name.textContent = product.name;
      card.appendChild(name);
  
      const price = document.createElement('div');
      price.classList.add('product-price');
      price.textContent = product.price;
      card.appendChild(price);
  
      const description = document.createElement('div');
      description.classList.add('product-description');
      description.textContent = product.description;
      card.appendChild(description);
  
      productList.appendChild(card);
    });
  }
  
  createProductCards();
  