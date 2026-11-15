/**
 * Sawariya Royal Luxury Jewellery - Main Application Script
 * Features:
 * - Dynamic Product Rendering & Live Filtering
 * - Cart Management with LocalStorage Persistence
 * - Automated Pre-Filled WhatsApp Order Engine (ID, Type, Name, Price, Qty)
 * - Single-Click Instant WhatsApp Product Booking
 * - Quick View Modal & Wishlist
 * - Toast Notifications & Smooth UI Interactions
 * (Custom Fashion & Designer Luxury Jewellery by Om Mishra)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  let cart = [];
  let wishlist = [];
  let currentCategory = 'all';
  let searchQuery = '';
  let sortBy = 'featured';
  let priceRange = 'all';

  // Load Persisted Data
  try {
    const savedCart = localStorage.getItem('srlj_cart');
    if (savedCart) cart = JSON.parse(savedCart);

    const savedWishlist = localStorage.getItem('srlj_wishlist');
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
  } catch (e) {
    console.warn('Storage access restricted', e);
  }

  // Save Cart
  function saveCart() {
    try {
      localStorage.setItem('srlj_cart', JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  // Save Wishlist
  function saveWishlist() {
    try {
      localStorage.setItem('srlj_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
    updateWishlistUI();
  }

  // DOM Elements
  const productsGrid = document.getElementById('productsGrid');
  const productsCountEl = document.getElementById('productsCount');
  const categoryTabsContainer = document.getElementById('categoryTabs');
  const searchInput = document.getElementById('productSearchInput');
  const sortSelect = document.getElementById('sortSelect');
  const priceFilterSelect = document.getElementById('priceFilterSelect');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');

  // Cart Drawer Elements
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartEmptyState = document.getElementById('cartEmptyState');
  const cartFooter = document.getElementById('cartFooter');
  const cartBadgeCount = document.querySelectorAll('.cart-badge-count');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartTotalEl = document.getElementById('cartTotal');
  const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

  // Customer Form Elements in Cart
  const custNameInput = document.getElementById('custName');
  const custPhoneInput = document.getElementById('custPhone');
  const custCityInput = document.getElementById('custCity');
  const custNoteInput = document.getElementById('custNote');

  // Modal Elements
  const productModal = document.getElementById('productModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContentEl = document.getElementById('modalProductDetails');

  // Mobile Menu Elements
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  // Floating Hero Badges
  setupFloatingHero();

  // Initialize Category Tabs
  renderCategoryTabs();

  // Initial Product Render
  filterAndRenderProducts();

  // Update UI Counters
  updateCartUI();
  updateWishlistUI();

  // ===================== EVENT LISTENERS =====================

  // Search input live filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterAndRenderProducts();
    });
  }

  // Sort dropdown change
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      filterAndRenderProducts();
    });
  }

  // Price filter change
  if (priceFilterSelect) {
    priceFilterSelect.addEventListener('change', (e) => {
      priceRange = e.target.value;
      filterAndRenderProducts();
    });
  }

  // Clear filters
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      currentCategory = 'all';
      searchQuery = '';
      sortBy = 'featured';
      priceRange = 'all';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      if (priceFilterSelect) priceFilterSelect.value = 'all';
      renderCategoryTabs();
      filterAndRenderProducts();
    });
  }

  // Cart Drawer open/close
  cartToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  // Modal close
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProductModal);

  // Mobile Menu
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileNavClose && mobileNav) {
    mobileNavClose.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // WhatsApp Checkout Button Click
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener('click', handleWhatsAppCheckout);
  }

  // Contact Page Form Submission
  const contactForm = document.getElementById('royalContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || 'Guest';
      const phone = document.getElementById('contactPhone')?.value || '';
      const email = document.getElementById('contactEmail')?.value || '';
      const category = document.getElementById('contactCategory')?.value || 'General Inquiry';
      const message = document.getElementById('contactMessage')?.value || '';

      const waMsg = 
        `👑 *SAWARIYA ROYAL LUXURY JEWELLERY - INQUIRY* 👑\n` +
        `-----------------------------------------\n` +
        `Hello Om Mishra ji,\n` +
        `I would like to inquire regarding Sawariya Royal Luxury Jewellery.\n\n` +
        `👤 *My Details:*\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Email: ${email}\n` +
        `• Category Interested: ${category}\n\n` +
        `💬 *Message:*\n` +
        `${message}\n` +
        `-----------------------------------------\n` +
        `Kindly assist me with availability & pricing. Thank you!`;

      const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank');
      showToast('Opening WhatsApp with your inquiry...', 'success');
      contactForm.reset();
    });
  }

  // ===================== PRODUCT RENDERING & FILTERING =====================

  function renderCategoryTabs() {
    if (!categoryTabsContainer) return;
    categoryTabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button 
        class="category-tab-btn ${currentCategory === cat.id ? 'active' : ''}" 
        data-cat-id="${cat.id}"
      >
        <span>${cat.name}</span>
        <span class="cat-count">(${cat.count})</span>
      </button>
    `).join('');

    categoryTabsContainer.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.dataset.catId;
        renderCategoryTabs();
        filterAndRenderProducts();
      });
    });
  }

  function filterAndRenderProducts() {
    let filtered = [...PRODUCTS_DATA];

    // Filter by Category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.categorySlug === currentCategory);
    }

    // Filter by Search Query
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery) ||
        p.id.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery) ||
        (p.badge && p.badge.toLowerCase().includes(searchQuery))
      );
    }

    // Filter by Price Range
    if (priceRange !== 'all') {
      if (priceRange === 'under1000') {
        filtered = filtered.filter(p => p.price < 1000);
      } else if (priceRange === '1000to2000') {
        filtered = filtered.filter(p => p.price >= 1000 && p.price <= 2000);
      } else if (priceRange === '2000to3500') {
        filtered = filtered.filter(p => p.price > 2000 && p.price <= 3500);
      } else if (priceRange === 'above3500') {
        filtered = filtered.filter(p => p.price > 3500);
      }
    }

    // Sorting
    if (sortBy === 'priceLow') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      // Featured / Bestsellers first
      filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    // Update Counter
    if (productsCountEl) {
      productsCountEl.textContent = `${filtered.length} ${filtered.length === 1 ? 'Design' : 'Designs'} Found`;
    }

    // Render Grid
    if (!productsGrid) return;

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-products-found">
          <div class="empty-icon">👑</div>
          <h3>No Exquisite Pieces Matched Your Filter</h3>
          <p>Try searching with another keyword or resetting the category filter.</p>
          <button class="btn btn-primary" onclick="document.getElementById('clearFiltersBtn').click()">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(p => {
      const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
      const isWishlisted = wishlist.includes(p.id);

      return `
        <div class="product-card" data-product-id="${p.id}">
          <div class="product-card-image-wrap">
            <img 
              src="${p.image}" 
              alt="${p.name}" 
              class="product-card-img"
              loading="lazy"
              onerror="this.onerror=null; this.src='${p.fallbackImage || 'images/logo.jpeg'}';"
            />
            
            ${p.badge ? `<span class="product-card-badge">${p.badge}</span>` : ''}
            
            <button 
              class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
              title="Add to Royal Wishlist"
              onclick="window.toggleWishlist('${p.id}', event)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? '#D4AF37' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            <div class="product-card-quick-actions">
              <button class="quick-view-btn" onclick="window.openQuickView('${p.id}', event)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                Quick View
              </button>
            </div>
          </div>

          <div class="product-card-info">
            <div class="product-sku-row">
              <span class="product-sku">${p.id}</span>
              <span class="product-cat-label">${p.category}</span>
            </div>

            <h3 class="product-title" title="${p.name}" onclick="window.openQuickView('${p.id}', event)">
              ${p.name}
            </h3>

            <div class="product-rating-row">
              <span class="stars">★★★★★</span>
              <span class="rating-text">${p.rating.toFixed(1)} (${p.reviewsCount})</span>
            </div>

            <p class="product-snippet">${p.description.substring(0, 75)}...</p>

            <div class="product-price-row">
              <div class="price-box">
                <span class="current-price">₹${p.price.toLocaleString('en-IN')}</span>
                <span class="original-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>
              </div>
              <span class="discount-pill">${discount}% OFF</span>
            </div>

            <div class="product-card-btn-group">
              <button class="btn btn-outline-gold add-to-cart-btn" onclick="window.handleAddToCart('${p.id}', 1, event)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                Add to Cart
              </button>

              <button class="btn btn-wa-direct" onclick="window.handleDirectWhatsAppOrder('${p.id}', 1, event)" title="Instant WhatsApp Booking">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ===================== CART FUNCTIONS =====================

  function openCartDrawer() {
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartBackdrop) cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateCartUI();
  }

  function closeCartDrawer() {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartBackdrop) cartBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Update Badges
    cartBadgeCount.forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      if (cartEmptyState) cartEmptyState.style.display = 'block';
      if (cartItemsContainer) cartItemsContainer.style.display = 'none';
      if (cartFooter) cartFooter.style.display = 'none';
      return;
    }

    if (cartEmptyState) cartEmptyState.style.display = 'none';
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'block';

    let subtotal = 0;

    cartItemsContainer.innerHTML = cart.map(item => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      return `
        <div class="cart-item-row" data-id="${item.id}">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="cart-item-thumb"
            onerror="this.onerror=null; this.src='${item.fallbackImage || 'images/logo.jpeg'}';"
          />
          <div class="cart-item-details">
            <div class="cart-item-sku-row">
              <span class="cart-item-sku">${item.id}</span>
              <span class="cart-item-type">${item.category}</span>
            </div>
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price-line">
              <span class="unit-price">₹${item.price.toLocaleString('en-IN')}</span>
              <span class="item-calc">× ${item.quantity} = <strong>₹${itemTotal.toLocaleString('en-IN')}</strong></span>
            </div>
            <div class="cart-item-actions-row">
              <div class="qty-stepper">
                <button type="button" onclick="window.changeCartQty('${item.id}', -1)" title="Decrease">−</button>
                <span class="qty-val">${item.quantity}</span>
                <button type="button" onclick="window.changeCartQty('${item.id}', 1)" title="Increase">+</button>
              </div>
              <button class="remove-item-btn" onclick="window.removeCartItem('${item.id}')" title="Remove Item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                Remove
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (cartTotalEl) cartTotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }

  window.handleAddToCart = function(productId, qty = 1, e) {
    if (e) e.stopPropagation();
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        fallbackImage: product.fallbackImage,
        quantity: qty
      });
    }

    saveCart();
    showToast(`Added "${product.name.substring(0, 28)}..." to cart!`, 'success');
  };

  window.changeCartQty = function(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    saveCart();
  };

  window.removeCartItem = function(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    showToast('Item removed from cart', 'info');
  };

  // ===================== THE CORE WHATSAPP ORDER ENGINE =====================

  /**
   * Generates the structured WhatsApp order message:
   * product id, type, name, price and quantity of each, plus customer details.
   */
  function handleWhatsAppCheckout() {
    if (cart.length === 0) {
      showToast('Your cart is empty! Please add royal jewels first.', 'warning');
      return;
    }

    const name = custNameInput?.value.trim() || 'Valued Queen';
    const phone = custPhoneInput?.value.trim() || 'Not Provided';
    const city = custCityInput?.value.trim() || 'Jaipur / India';
    const note = custNoteInput?.value.trim() || '';

    let totalAmount = 0;
    let totalItems = 0;

    let itemsListText = cart.map((item, index) => {
      const lineTotal = item.price * item.quantity;
      totalAmount += lineTotal;
      totalItems += item.quantity;

      return (
        `${index + 1}. *${item.name}*\n` +
        `   • Product ID: ${item.id}\n` +
        `   • Type: ${item.category}\n` +
        `   • Unit Price: ₹${item.price.toLocaleString('en-IN')}\n` +
        `   • Quantity: ${item.quantity}\n` +
        `   • Item Total: ₹${lineTotal.toLocaleString('en-IN')}`
      );
    }).join('\n\n');

    const message = 
      `👑 *NEW ORDER - SAWARIYA ROYAL LUXURY JEWELLERY* 👑\n` +
      `---------------------------------------------\n` +
      `Hello Om Mishra ji,\n` +
      `I would like to place an order from your website.\n\n` +
      `👤 *Customer Information:*\n` +
      `• Name: ${name}\n` +
      `• Contact Phone: ${phone}\n` +
      `• City / Location: ${city}\n` +
      (note ? `• Special Instructions: ${note}\n` : '') +
      `\n` +
      `🛍️ *Order Items (${totalItems} items):*\n` +
      `---------------------------------------------\n` +
      `${itemsListText}\n` +
      `---------------------------------------------\n` +
      `💰 *Total Amount:* ₹${totalAmount.toLocaleString('en-IN')}\n` +
      `🎁 *Packaging:* Velvet Royal Keepsake Box Included\n` +
      `---------------------------------------------\n` +
      `Please confirm item availability and share payment details (UPI / Bank Transfer / COD). Looking forward to receiving this royal package! ✨`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    showToast('Redirecting to WhatsApp with your pre-filled royal order! 👑', 'success');
  }

  /**
   * Instant 1-Click WhatsApp Booking for an individual product
   */
  window.handleDirectWhatsAppOrder = function(productId, qty = 1, e) {
    if (e) e.stopPropagation();
    const p = PRODUCTS_DATA.find(item => item.id === productId);
    if (!p) return;

    const total = p.price * qty;

    const message = 
      `👑 *SAWARIYA ROYAL LUXURY JEWELLERY - ORDER INQUIRY* 👑\n` +
      `---------------------------------------------\n` +
      `Hello Om Mishra ji,\n` +
      `I would like to book this exquisite jewellery piece from your collection:\n\n` +
      `✨ *Product Details:*\n` +
      `• Product ID: ${p.id}\n` +
      `• Type: ${p.category}\n` +
      `• Name: ${p.name}\n` +
      `• Price: ₹${p.price.toLocaleString('en-IN')}\n` +
      `• Quantity: ${qty}\n` +
      `• Total Amount: ₹${total.toLocaleString('en-IN')}\n` +
      `---------------------------------------------\n` +
      `Please share availability and payment details (UPI/COD). Thank you!`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    showToast(`Opening WhatsApp to order ${p.name.substring(0, 22)}...`, 'success');
  };

  // ===================== QUICK VIEW MODAL =====================

  window.openQuickView = function(productId, e) {
    if (e) e.stopPropagation();
    const p = PRODUCTS_DATA.find(item => item.id === productId);
    if (!p || !modalContentEl || !productModal) return;

    const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

    modalContentEl.innerHTML = `
      <div class="modal-grid">
        <div class="modal-media-col">
          <div class="modal-main-img-box">
            <img 
              src="${p.image}" 
              alt="${p.name}" 
              id="modalMainImg" 
              onerror="this.onerror=null; this.src='${p.fallbackImage || 'images/logo.jpeg'}';"
            />
            ${p.badge ? `<span class="modal-badge">${p.badge}</span>` : ''}
          </div>
          <div class="modal-trust-bar">
            <span>✨ Anti-Tarnish Finish</span>
            <span>👑 Jaipur Artistry</span>
            <span>💎 Custom Luxury</span>
          </div>
        </div>

        <div class="modal-info-col">
          <div class="modal-sku-row">
            <span class="modal-sku">SKU: ${p.id}</span>
            <span class="modal-cat">Category: <strong>${p.category}</strong></span>
          </div>

          <h2 class="modal-title">${p.name}</h2>

          <div class="modal-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-val">${p.rating.toFixed(1)}</span>
            <span class="reviews-count">(${p.reviewsCount} Royal Reviews)</span>
          </div>

          <div class="modal-price-box">
            <span class="modal-cur-price">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="modal-orig-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>
            <span class="modal-discount">${discount}% OFF</span>
          </div>

          <p class="modal-desc">${p.description}</p>

          <div class="modal-specs">
            <h4>Royal Craftsmanship & Specifications:</h4>
            <ul>
              ${p.features.map(f => `<li>✓ ${f}</li>`).join('')}
              <li><strong>Material:</strong> ${p.material}</li>
              <li><strong>Finish:</strong> ${p.finish}</li>
              <li><strong>Dimensions:</strong> ${p.dimensions}</li>
              <li><strong>Care Guide:</strong> ${p.care}</li>
            </ul>
          </div>

          <div class="modal-qty-row">
            <label>Select Quantity:</label>
            <div class="modal-qty-stepper">
              <button type="button" id="modalQtyMinus">−</button>
              <span id="modalQtyVal">1</span>
              <button type="button" id="modalQtyPlus">+</button>
            </div>
          </div>

          <div class="modal-actions-row">
            <button class="btn btn-primary btn-large" id="modalAddToCartBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Add to Royal Cart
            </button>
            <button class="btn btn-wa-direct btn-large" id="modalDirectWaBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;

    // Modal Qty Logic
    let modalQty = 1;
    const modalQtyVal = document.getElementById('modalQtyVal');
    const modalQtyMinus = document.getElementById('modalQtyMinus');
    const modalQtyPlus = document.getElementById('modalQtyPlus');
    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    const modalDirectWaBtn = document.getElementById('modalDirectWaBtn');

    if (modalQtyMinus) {
      modalQtyMinus.addEventListener('click', () => {
        if (modalQty > 1) {
          modalQty--;
          if (modalQtyVal) modalQtyVal.textContent = modalQty;
        }
      });
    }

    if (modalQtyPlus) {
      modalQtyPlus.addEventListener('click', () => {
        modalQty++;
        if (modalQtyVal) modalQtyVal.textContent = modalQty;
      });
    }

    if (modalAddToCartBtn) {
      modalAddToCartBtn.addEventListener('click', () => {
        window.handleAddToCart(p.id, modalQty);
        closeProductModal();
      });
    }

    if (modalDirectWaBtn) {
      modalDirectWaBtn.addEventListener('click', () => {
        window.handleDirectWhatsAppOrder(p.id, modalQty);
      });
    }

    productModal.classList.add('open');
    if (modalBackdrop) modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeProductModal() {
    if (productModal) productModal.classList.remove('open');
    if (modalBackdrop) modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ===================== WISHLIST FUNCTIONS =====================

  window.toggleWishlist = function(productId, e) {
    if (e) e.stopPropagation();
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast('Removed from royal wishlist', 'info');
    } else {
      wishlist.push(productId);
      showToast('Saved to your royal wishlist! ❤️', 'success');
    }
    saveWishlist();
    filterAndRenderProducts();
  };

  function updateWishlistUI() {
    const wishlistBadges = document.querySelectorAll('.wishlist-badge-count');
    wishlistBadges.forEach(el => {
      el.textContent = wishlist.length;
      el.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';
    });
  }

  // ===================== FLOATING HERO INTERACTIONS =====================

  function setupFloatingHero() {
    const heroImageArch = document.querySelector('.hero-arch-container');
    const floatingCircle = document.querySelector('.hero-floating-circle');

    if (heroImageArch && floatingCircle && window.innerWidth > 992) {
      document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;
        floatingCircle.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
      });
    }
  }

  // ===================== TOAST NOTIFICATIONS =====================

  function showToast(message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `royal-toast ${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon">${type === 'success' ? '👑' : type === 'warning' ? '⚠️' : '✨'}</span>
        <span class="toast-msg">${message}</span>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }

  window.showToast = showToast;

  // Category jump from hero
  window.filterCategoryFromHero = function(catId) {
    currentCategory = catId;
    renderCategoryTabs();
    filterAndRenderProducts();
    const targetSection = document.getElementById('shopSection');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
});
