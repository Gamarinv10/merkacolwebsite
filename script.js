// Formato en pesos colombianos
const COP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0
});

// Elementos del DOM
const cartPanel = document.getElementById('cartPanel');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartShipping = document.getElementById('cartShipping');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCart');

// Estado del carrito
let cart = JSON.parse(localStorage.getItem('merkacol-cart')) || [];

// Mostrar/Ocultar carrito
document.getElementById('openCart')?.addEventListener('click', () => {
  cartPanel.classList.add('open');
  cartBackdrop.classList.add('show');
});

document.getElementById('closeCart')?.addEventListener('click', () => {
  cartPanel.classList.remove('open');
  cartBackdrop.classList.remove('show');
});

cartBackdrop?.addEventListener('click', () => {
  cartPanel.classList.remove('open');
  cartBackdrop.classList.remove('show');
});

// Añadir productos
document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const card = button.closest('.card');
    const title = card.querySelector('.card__title').textContent;
    const priceText = card.querySelector('.price').textContent;
    const price = parseInt(priceText.replace(/[^\d]/g, ''));

    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id, title, price, qty: 1 });
    }

    saveCart();
    updateCart();
  });
});

// Vaciar carrito
clearCartBtn?.addEventListener('click', () => {
  cart = [];
  saveCart();
  updateCart();
});

// Guardar en localStorage
function saveCart() {
  localStorage.setItem('merkacol-cart', JSON.stringify(cart));
}

// Actualizar interfaz del carrito
function updateCart() {
  cartItems.innerHTML = '';
  let subtotal = 0;

  cart.forEach(item => {
    const itemSubtotal = item.price * item.qty;
    subtotal += itemSubtotal;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div style="flex:1;">
        <strong>${item.title}</strong><br>
        <small>Valor unitario: ${COP.format(item.price)}</small><br>
        <div style="display:flex; align-items:center; gap:0.5rem; margin:0.4rem 0;">
          <button class="qty-btn" data-id="${item.id}" data-action="decrease">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
        </div>
        <small>Subtotal: ${COP.format(itemSubtotal)}</small>
      </div>
      <div style="text-align:right;">
        <button class="remove-item" data-id="${item.id}" style="color:#c00; background:none; border:none; cursor:pointer;">Eliminar</button>
      </div>
    `;
    cartItems.appendChild(div);
  });

  const shipping = subtotal > 0 ? 5000 : 0;
  cartSubtotal.textContent = COP.format(subtotal);
  cartShipping.textContent = COP.format(shipping);
  cartTotal.textContent = COP.format(subtotal + shipping);
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  // Botones de eliminar
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      cart = cart.filter(item => item.id !== id);
      saveCart();
      updateCart();
    });
  });

  // Botones de cantidad
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      const item = cart.find(i => i.id === id);
      if (!item) return;

      if (action === 'increase') {
        item.qty++;
      } else if (action === 'decrease' && item.qty > 1) {
        item.qty--;
      }

      saveCart();
      updateCart();
    });
  });
}

// Inicializar
updateCart();



const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');
let productos = [];

fetch('productos.json')
  .then(res => res.json())
  .then(data => productos = data);

searchInput?.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = '';

  if (query.length < 2) return;

  const resultados = productos.filter(p =>
    p.nombre.toLowerCase().includes(query)
  );

  resultados.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.nombre;
    li.className = 'suggestion-item';
    li.addEventListener('click', () => {
      window.location.href = p.pagina;
    });
    suggestionsList.appendChild(li);
  });
});




const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

// Crear indicadores
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = slides.length - 1;
  showSlide(newIndex);
});

nextBtn.addEventListener('click', () => {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
});


// Auto-play opcional
setInterval(() => {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}, 5000);

