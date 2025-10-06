const products = {
  frutas: {
    acidas: [
      { name: 'Limón', desc: 'Rico en vitamina C', img: 'https://via.placeholder.com/200', pricePerKg: 3000 },
      { name: 'Naranja', desc: 'Dulce y jugosa', img: 'https://via.placeholder.com/200', pricePerKg: 2500 },
      { name: 'Piña', desc: 'Tropical y refrescante', img: 'https://via.placeholder.com/200', pricePerKg: 3500 },
      { name: 'Maracuyá', desc: 'Aromática y deliciosa', img: 'https://via.placeholder.com/200', pricePerKg: 4000 },
      { name: 'Mango biche', desc: 'Sabor ácido', img: 'https://via.placeholder.com/200', pricePerKg: 3200 }
    ],
    semiacidas: [
      { name: 'Manzana', desc: 'Crujiente y sabrosa', img: 'https://via.placeholder.com/200', pricePerKg: 4500 },
      { name: 'Pera', desc: 'Suave y jugosa', img: 'https://via.placeholder.com/200', pricePerKg: 4200 },
      { name: 'Uva', desc: 'Ideal para postres', img: 'https://via.placeholder.com/200', pricePerKg: 6000 },
      { name: 'Ciruela', desc: 'Refrescante y dulce', img: 'https://via.placeholder.com/200', pricePerKg: 5000 },
      { name: 'Durazno', desc: 'Suave y jugoso', img: 'https://via.placeholder.com/200', pricePerKg: 4800 }
    ]
  }
};

const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const unitSelect = document.getElementById('unit-select');

function renderProducts() {
  Object.entries(products).forEach(([cat, subcats]) => {
    const container = document.getElementById(`${cat}-container`);
    if (!container) return;
    Object.entries(subcats).forEach(([subcat, items]) => {
      const subTitle = document.createElement('h3');
      subTitle.textContent = subcat.charAt(0).toUpperCase() + subcat.slice(1);
      container.appendChild(subTitle);
      const grid = document.createElement('div');
      grid.className = 'product-grid';
      items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <p><strong>$${item.pricePerKg} / kg</strong></p>
          <input type="number" min="0.1" step="0.1" value="1" class="weight-input">
          <select class="unit-select">
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
          <button>Agregar</button>
        `;
        div.querySelector('button').addEventListener('click', () => {
          const weight = parseFloat(div.querySelector('.weight-input').value);
          const unit = div.querySelector('.unit-select').value;
          addToCart(item, weight, unit);
        });
        grid.appendChild(div);
      });
      container.appendChild(grid);
    });
  });
}

function addToCart(product, weight, unit) {
  const weightKg = unit === 'lb' ? weight * 0.453592 : weight;
  cart.push({ ...product, weightKg });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  const unit = unitSelect.value;
  cart.forEach(item => {
    const weightDisplay = unit === 'lb' ? (item.weightKg / 0.453592).toFixed(2) : item.weightKg.toFixed(2);
    const price = item.pricePerKg * item.weightKg;
    total += price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<span>${item.name} (${weightDisplay} ${unit})</span><strong>$${price.toFixed(0)}</strong>`;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = '$' + total.toFixed(0);
  cartCount.textContent = cart.length;
}

document.getElementById('clear-cart').addEventListener('click', () => {
  localStorage.removeItem('cart');
  cart.length = 0;
  updateCart();
});

unitSelect.addEventListener('change', updateCart);

renderProducts();
updateCart();