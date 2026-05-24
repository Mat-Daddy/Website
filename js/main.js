/**
 * MAT DADDY APPAREL — MAIN JS
 * www.matdaddyapparel.com
 */

// ============================================================
//  NAVBAR SCROLL
// ============================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================================
//  MOBILE MENU
// ============================================================
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ============================================================
//  CART STATE
// ============================================================
let cart = [];

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl  = document.getElementById('cartTotal');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart__empty">Your cart is empty.</p>';
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item__img">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" />` : ''}
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">$${(item.price * item.qty).toFixed(2)} × ${item.qty}</div>
        <span class="cart-item__remove" onclick="removeFromCart(${item.id})">Remove</span>
      </div>
    </div>
  `).join('');

  totalEl.textContent = `$${getCartTotal().toFixed(2)}`;
  footerEl.style.display = 'block';
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartCount();
  renderCart();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartCount();
  renderCart();
}

// ============================================================
//  CART SIDEBAR
// ============================================================
const cartBtn     = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose   = document.getElementById('cartClose');

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// ============================================================
//  RENDER PRODUCTS
// ============================================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!PRODUCTS || PRODUCTS.length === 0) return; // show placeholders

  // Clear placeholders
  grid.innerHTML = '';

  PRODUCTS.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-card__img">
        ${product.image
          ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
          : `<div class="placeholder-img"><span>${product.name}</span></div>`
        }
        ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
      </div>
      <div class="product-card__info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
      <div class="product-card__footer">
        <span class="price">$${product.price.toFixed(2)}</span>
        <button class="btn--add" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Hide developer note once real products exist
  const noteEl = document.querySelector('.shop__cta-note');
  if (noteEl) noteEl.style.display = 'none';

  const comingEl = document.querySelector('.shop__coming');
  if (comingEl) comingEl.style.display = 'none';
}

// Run on load
renderProducts();

// ============================================================
//  EMAIL SIGNUP
// ============================================================
function handleSignup(e) {
  e.preventDefault();
  const form   = document.getElementById('signupForm');
  const thanks = document.getElementById('signupThanks');
  form.style.display  = 'none';
  thanks.style.display = 'block';
  // 👉 Replace this with a real email service like Mailchimp or Formspree
}

// ============================================================
//  SCROLL REVEAL (Intersection Observer)
// ============================================================
const revealEls = document.querySelectorAll('.about__grid, .product-card, .contact__item, .pillar');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  revealObserver.observe(el);
});
