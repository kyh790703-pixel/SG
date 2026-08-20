/**
 * L'ARÔME BLANC - Main Application JavaScript (SG Directory)
 * Handcrafted Plaster Diffuser Atelier E-Commerce Experience
 */

// ==========================================
// 1. Data Store
// ==========================================

const PRODUCTS = [
    {
        id: 'prod-01',
        name: '비너스 실루엣 석고 타블렛',
        subtitle: 'Venus Silhouette Plaster Tablet',
        category: 'object',
        categoryName: '오브제 아트',
        price: 28000,
        originalPrice: 32000,
        rating: 5.0,
        reviewCount: 428,
        intensity: 4,
        tags: ['#침실', '#인테리어소품', '#집들이선물'],
        mainImg: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        subImg: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
        scentNotes: '화이트 튜베로즈 & 소프트 샌달우드',
        description: '고전 조각의 우아한 곡선미를 미니멀하게 재해석한 석고 타블렛입니다. 침대 협탁이나 드레스룸에 걸어두면 공간의 품격과 함께 부드러운 플로럴 우디 향이 은은하게 퍼집니다.',
        badge: 'BEST',
        fragranceOptions: [
            '화이트 튜베로즈 (기본)',
            '프렌치 라벤더 & 바닐라',
            '미스티 로즈 가든'
        ]
    },
    {
        id: 'prod-02',
        name: '포레스트 테디베어 & 우드 트레이 세트',
        subtitle: 'Forest Bear Diffuser with Wood Tray',
        category: 'woody',
        categoryName: '우디',
        price: 32000,
        originalPrice: 38000,
        rating: 4.9,
        reviewCount: 312,
        intensity: 5,
        tags: ['#서재', '#생일선물', '#힐링데스크'],
        mainImg: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
        subImg: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop',
        scentNotes: '시더우드 · 베티버 · 딥 모스',
        description: '섬세한 니트 질감이 살아있는 핸드메이드 곰돌이 석고 오브제입니다. 원목 트레이와 함께 구성되어 서재 데스크나 카페 인테리어에 자연스러운 숲의 정취를 더해줍니다.',
        badge: 'NEW',
        fragranceOptions: [
            '딥 시더우드 & 모스 (기본)',
            '샌달우드 & 무화과',
            '히노끼 포레스트'
        ]
    },
    {
        id: 'prod-03',
        name: '아치 릴리프 행잉 타블렛',
        subtitle: 'Arch Relief Hanging Ornament',
        category: 'floral',
        categoryName: '플로럴',
        price: 24000,
        originalPrice: 28000,
        rating: 5.0,
        reviewCount: 280,
        intensity: 3,
        tags: ['#드레스룸', '#문고리', '#답례품'],
        mainImg: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
        subImg: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
        scentNotes: '프리지아 · 페어 · 퓨어 린넨',
        description: '건축적인 아치 쉐입에 플라워 릴리프를 양각한 행잉용 석고 오너먼트입니다. 천연 가죽 스트랩이 부착되어 옷장, 도어 핸들, 차량 룸미러 등에 감각적으로 연출할 수 있습니다.',
        badge: 'BEST',
        fragranceOptions: [
            '잉글리시 프리지아 & 페어 (기본)',
            '화이트 코튼 & 앰버',
            '매그놀리아 블라썸'
        ]
    },
    {
        id: 'prod-04',
        name: '미니멀 오가닉 페블 스톤 (3ea 세트)',
        subtitle: 'Organic Pebble Stone Diffuser Set',
        category: 'citrus',
        categoryName: '시트러스',
        price: 35000,
        originalPrice: 40000,
        rating: 4.9,
        reviewCount: 195,
        intensity: 4,
        tags: ['#욕실', '#현관', '#미니멀라이프'],
        mainImg: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=800&auto=format&fit=crop',
        subImg: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop',
        scentNotes: '베르가못 · 바질 만다린 · 라임',
        description: '강가에서 주운 조약돌의 자연스러운 텍스처를 구현한 3종 페블 세트입니다. 세라믹 트레이에 자유롭게 배치하여 공간에 상큼하고 활기찬 에너지를 채워줍니다.',
        badge: 'BEST',
        fragranceOptions: [
            '베르가못 & 바질 (기본)',
            '자몽 & 핑크페퍼',
            '유자 & 그린티'
        ]
    },
    {
        id: 'prod-05',
        name: '까멜리아 블라썸 차량용 송풍구 클립',
        subtitle: 'Camellia Blossom Car Vent Clip',
        category: 'floral',
        categoryName: '플로럴',
        price: 19000,
        originalPrice: 22000,
        rating: 5.0,
        reviewCount: 540,
        intensity: 5,
        tags: ['#차량용', '#드라이브', '#새차선물'],
        mainImg: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=800&auto=format&fit=crop',
        subImg: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=800&auto=format&fit=crop',
        scentNotes: '동백꽃 추출물 · 피오니 · 클린 머스크',
        description: '활짝 피어난 입체 까멜리아 꽃잎의 정교한 결을 담은 차량용 클립입니다. 송풍구 바람을 타고 차량 전체에 머리 아프지 않은 은은한 꽃내음이 퍼집니다.',
        badge: 'BEST',
        fragranceOptions: [
            '까멜리아 & 피오니 (기본)',
            '블랙체리 & 프루티',
            '클린 코튼 블라썸'
        ]
    },
    {
        id: 'prod-06',
        name: '앤티크 프렌치 팟 석고 오브제',
        subtitle: 'Antique French Pot Diffuser Object',
        category: 'woody',
        categoryName: '우디',
        price: 36000,
        originalPrice: 42000,
        rating: 4.9,
        reviewCount: 160,
        intensity: 4,
        tags: ['#거실', '#갤러리무드', '#스튜디오'],
        mainImg: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
        subImg: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
        scentNotes: '샌달우드 · 앰버 · 바닐라 빈',
        description: '고대 유럽의 도자기 항아리를 모티브로 한 묵직하고 클래식한 질감의 석고 팟 오브제입니다. 묵직하고 아늑한 바닐라 우디 향으로 넓은 거실 공간에 깊이를 선사합니다.',
        badge: 'NEW',
        fragranceOptions: [
            '샌달우드 & 바닐라 팟 (기본)',
            '파촐리 & 스모키 우드',
            '오크모스 & 앰버'
        ]
    }
];

const REVIEWS = [
    {
        id: 'rev-01',
        author: '정*은 님',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: '2026.08.12',
        product: '비너스 실루엣 석고 타블렛',
        text: '친구 집들이 선물로 구매했는데 패키지 박스부터 왁스 실링까지 너무 정성스러워서 주는 사람도 뿌듯했어요! 인테리어 효과도 최고고 백합향이 머리 아프지 않고 고급스러워요.'
    },
    {
        id: 'rev-02',
        author: '강*민 님',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: '2026.08.14',
        product: '포레스트 테디베어 & 우드 트레이',
        text: '서재 책상 위에 올려두니 일할 때마다 숲속 피톤치드 향이 은은하게 퍼져서 힐링됩니다. 곰돌이 석고 퀄리티가 정말 매끄럽고 기포 하나 없이 완벽하네요!'
    },
    {
        id: 'rev-03',
        author: '최*아 님',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        date: '2026.08.15',
        product: '까멜리아 블라썸 차량용 송풍구 클립',
        text: '차 탈 때마다 기분이 너무 좋아요. 인공적인 방향제 냄새 맡으면 멀미 나는데, 라롬 블랑 오일은 천연 에센셜 느낌이라 하루 종일 편안합니다. 재구매 의사 200%입니다.'
    }
];

// App State
let cart = [];
let wishlist = new Set();
let currentFilter = 'all';
let quizAnswers = {};

// ==========================================
// 2. DOM Initialization & Event Listeners
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderProducts(PRODUCTS);
    renderReviews(REVIEWS);
    updateCartUI();
    initLucide();
    initAccordions();
    initMobileNav();
    initCartDrawer();
    initQuizEvents();
    initModals();
});

function initLucide() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// ==========================================
// 3. Products Rendering & Filtering
// ==========================================

function renderProducts(items) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: #888;">해당 카테고리의 상품이 준비 중입니다.</div>`;
        return;
    }

    grid.innerHTML = items.map(product => {
        const isWished = wishlist.has(product.id);
        const dots = Array.from({ length: 5 }, (_, i) => 
            `<span class="dot ${i < product.intensity ? 'filled' : ''}"></span>`
        ).join('');

        return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-thumb-wrapper" onclick="openProductModal('${product.id}')">
                    <img src="${product.mainImg}" alt="${product.name}" class="thumb-main" loading="lazy">
                    <img src="${product.subImg}" alt="${product.name} 연출샷" class="thumb-secondary" loading="lazy">
                    
                    <div class="product-badges">
                        <span class="badge-tag ${product.badge.toLowerCase()}">${product.badge}</span>
                    </div>

                    <button class="btn-wishlist ${isWished ? 'active' : ''}" 
                            onclick="toggleWishlist(event, '${product.id}')" 
                            aria-label="위시리스트 추가">
                        <i data-lucide="heart" class="${isWished ? 'fill' : ''}"></i>
                    </button>

                    <div class="quick-view-overlay">
                        <button class="btn-quick-view" onclick="openProductModal('${product.id}')">
                            <i data-lucide="eye"></i> 퀵뷰 상세보기
                        </button>
                    </div>
                </div>

                <div class="product-body">
                    <div class="product-tags">
                        ${product.tags.map(t => `<span>${t}</span>`).join('')}
                    </div>

                    <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.name}</h3>
                    <p class="product-scent-desc">${product.scentNotes}</p>

                    <div class="scent-intensity-bar" title="발향 강도: ${product.intensity}/5">
                        <span>발향 강도</span>
                        <div class="intensity-dots">${dots}</div>
                    </div>

                    <div class="product-footer">
                        <div class="product-price">
                            ${product.price.toLocaleString()}원
                            <small><del>${product.originalPrice.toLocaleString()}원</del></small>
                        </div>
                        <button class="btn-add-cart" onclick="addToCart('${product.id}')" title="장바구니 담기">
                            <i data-lucide="plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    initLucide();
}

function filterProducts(category) {
    currentFilter = category;
    
    // Update active tab buttons
    document.querySelectorAll('.filter-tab').forEach(tab => {
        if (tab.dataset.filter === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const filtered = category === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === category);
    
    renderProducts(filtered);

    // Smooth scroll to bestsellers section if clicked from categories
    const bestSection = document.getElementById('bestsellers');
    if (bestSection) {
        bestSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Bind filter tabs click
document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterProducts(filter);
    });
});

// ==========================================
// 4. Reviews Rendering
// ==========================================

function renderReviews(reviews) {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;

    grid.innerHTML = reviews.map(rev => `
        <div class="review-card">
            <div class="review-header">
                <img src="${rev.avatar}" alt="${rev.author}" class="reviewer-avatar">
                <div class="reviewer-meta">
                    <h5>${rev.author}</h5>
                    <span>구매일자: ${rev.date}</span>
                </div>
            </div>
            <div class="review-stars">
                ${'<i data-lucide="star" class="fill"></i>'.repeat(rev.rating)}
            </div>
            <p class="review-text">"${rev.text}"</p>
            <span class="review-product-tag">선택 옵션: ${rev.product}</span>
        </div>
    `).join('');

    initLucide();
}

// ==========================================
// 5. Cart Management & Drawer
// ==========================================

function addToCart(productId, selectedOption = null, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const opt = selectedOption || product.fragranceOptions[0];
    const cartItemId = `${productId}-${opt}`;
    
    const existingIndex = cart.findIndex(item => item.id === cartItemId);
    
    if (existingIndex > -1) {
        cart[existingIndex].qty += quantity;
    } else {
        cart.push({
            id: cartItemId,
            productId: product.id,
            name: product.name,
            price: product.price,
            img: product.mainImg,
            option: opt,
            qty: quantity
        });
    }

    updateCartUI();
    showToast(`🛍️ '${product.name}' 장바구니에 담겼습니다.`);
    openCartDrawer();
}

function updateCartQty(cartItemId, delta) {
    const item = cart.find(i => i.id === cartItemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(cartItemId);
        return;
    }
    updateCartUI();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(i => i.id !== cartItemId);
    updateCartUI();
    showToast('장바구니에서 상품을 삭제했습니다.');
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Badges
    const badgeEl = document.getElementById('cartCount');
    const drawerBadgeEl = document.getElementById('drawerCartCount');
    if (badgeEl) badgeEl.textContent = totalCount;
    if (drawerBadgeEl) drawerBadgeEl.textContent = totalCount;

    // Free Shipping Bar Progress (50,000 KRW goal)
    const freeGoal = 50000;
    const progress = Math.min(100, Math.round((totalPrice / freeGoal) * 100));
    const progressBar = document.getElementById('shippingProgress');
    const noticeEl = document.getElementById('freeShippingNotice');

    if (progressBar) progressBar.style.width = `${progress}%`;
    if (noticeEl) {
        if (totalPrice >= freeGoal) {
            noticeEl.innerHTML = `🎉 축하합니다! <strong>무료배송</strong> 혜택이 적용되었습니다.`;
        } else {
            const remain = (freeGoal - totalPrice).toLocaleString();
            noticeEl.innerHTML = `<strong>${remain}원</strong> 추가 주문 시 <strong>무료배송</strong>`;
        }
    }

    // Cart Items List
    const itemsContainer = document.getElementById('cartDrawerItems');
    if (itemsContainer) {
        if (cart.length === 0) {
            itemsContainer.innerHTML = `
                <div class="empty-cart-view">
                    <i data-lucide="shopping-bag"></i>
                    <p>장바구니가 비어 있습니다.<br>마음에 드는 석고방향제를 담아보세요.</p>
                </div>
            `;
        } else {
            itemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <p class="cart-item-scent">향: ${item.option}</p>
                        <div class="cart-item-bottom">
                            <div class="cart-qty-ctrl">
                                <button onclick="updateCartQty('${item.id}', -1)">-</button>
                                <span>${item.qty}</span>
                                <button onclick="updateCartQty('${item.id}', 1)">+</button>
                            </div>
                            <span class="cart-item-price">${(item.price * item.qty).toLocaleString()}원</span>
                            <button class="btn-remove-item" onclick="removeFromCart('${item.id}')">삭제</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Total Price & Shipping
    const totalEl = document.getElementById('cartTotalPrice');
    const shippingEl = document.getElementById('shippingFeeText');
    const finalFee = (totalPrice >= freeGoal || totalPrice === 0) ? 0 : 3000;

    if (totalEl) {
        totalEl.textContent = `${(totalPrice + finalFee).toLocaleString()}원`;
    }
    if (shippingEl) {
        shippingEl.textContent = finalFee === 0 
            ? '배송비: 무료배송 적용' 
            : `배송비: 3,000원 (총 상품 ${(50000 - totalPrice).toLocaleString()}원 추가 시 무료)`;
    }

    initLucide();
}

function initCartDrawer() {
    const cartBtn = document.getElementById('cartBtn');
    const closeBtn = document.getElementById('closeCartBtn');
    const overlay = document.getElementById('cartOverlay');

    if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
    if (overlay) overlay.addEventListener('click', closeCartDrawer);
}

function openCartDrawer() {
    document.getElementById('cartDrawer')?.classList.add('open');
    document.getElementById('cartOverlay')?.classList.add('open');
}

function closeCartDrawer() {
    document.getElementById('cartDrawer')?.classList.remove('open');
    document.getElementById('cartOverlay')?.classList.remove('open');
}

function checkout() {
    if (cart.length === 0) {
        showToast('장바구니에 상품을 먼저 담아주세요.');
        return;
    }
    alert(`[결제 데모]\n총 ${cart.length}개 품목의 주문 페이지로 안전하게 이동합니다.\n(라롬 블랑 안심 결제 시스템)`);
}

// ==========================================
// 6. Wishlist Toggle
// ==========================================

function toggleWishlist(e, productId) {
    e.stopPropagation();
    if (wishlist.has(productId)) {
        wishlist.delete(productId);
        showToast('위시리스트에서 제외되었습니다.');
    } else {
        wishlist.add(productId);
        showToast('❤️ 위시리스트에 저장되었습니다.');
    }

    const badge = document.getElementById('wishlistCount');
    if (badge) badge.textContent = wishlist.size;

    renderProducts(currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === currentFilter));
}

// ==========================================
// 7. Quick View Product Modal
// ==========================================

function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalProductContent');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-product-grid">
            <div class="modal-product-img">
                <img src="${product.mainImg}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
                <span class="m-tag">${product.categoryName} 컬렉션</span>
                <h2>${product.name}</h2>
                <div class="m-price">${product.price.toLocaleString()}원 <small><del>${product.originalPrice.toLocaleString()}원</del></small></div>
                <p class="m-desc">${product.description}</p>
                
                <label class="m-option-title">시그니처 프래그런스 오일 선택</label>
                <select class="modal-scent-select" id="modalScentSelect">
                    ${product.fragranceOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>

                <div style="display: flex; gap: 12px; margin-top: auto;">
                    <button class="btn btn-primary btn-block" onclick="submitModalCart('${product.id}')">
                        <i data-lucide="shopping-bag"></i> 장바구니 담기
                    </button>
                    <button class="btn btn-outline" onclick="toggleWishlist(event, '${product.id}')">
                        <i data-lucide="heart" class="${wishlist.has(product.id) ? 'fill' : ''}"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('productModal')?.classList.add('open');
    initLucide();
}

function submitModalCart(productId) {
    const select = document.getElementById('modalScentSelect');
    const selectedOption = select ? select.value : null;
    addToCart(productId, selectedOption, 1);
    closeProductModal();
}

function closeProductModal() {
    document.getElementById('productModal')?.classList.remove('open');
}

function initModals() {
    document.getElementById('closeProductModal')?.addEventListener('click', closeProductModal);
    document.getElementById('productModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'productModal') closeProductModal();
    });
}

// ==========================================
// 8. Scent Finder Quiz Logic
// ==========================================

function initQuizEvents() {
    const triggers = ['scentFinderBtn', 'heroQuizBtn', 'openQuizBtn', 'drawerQuizBtn'];
    triggers.forEach(id => {
        document.getElementById(id)?.addEventListener('click', openQuizModal);
    });

    document.getElementById('closeQuizModal')?.addEventListener('click', closeQuizModal);
    document.getElementById('quizModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'quizModal') closeQuizModal();
    });
}

function openQuizModal() {
    quizAnswers = {};
    showQuizStep(1);
    document.getElementById('quizModal')?.classList.add('open');
    document.getElementById('quizResult').style.display = 'none';
}

function closeQuizModal() {
    document.getElementById('quizModal')?.classList.remove('open');
}

function selectQuizOption(step, key, label) {
    quizAnswers[`step${step}`] = { key, label };

    if (step < 3) {
        showQuizStep(step + 1);
    } else {
        renderQuizResult();
    }
}

function showQuizStep(stepNum) {
    document.querySelectorAll('.quiz-step').forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.dataset.step) === stepNum) {
            step.classList.add('active');
        }
    });
    document.getElementById('quizResult').style.display = 'none';
}

function renderQuizResult() {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    const resultBox = document.getElementById('quizResult');
    if (!resultBox) return;

    // Pick best match based on quiz answers
    let matchedProduct = PRODUCTS[0];
    if (quizAnswers.step2?.key === 'woody') matchedProduct = PRODUCTS[1];
    else if (quizAnswers.step2?.key === 'citrus') matchedProduct = PRODUCTS[3];
    else if (quizAnswers.step3?.key === 'carclip' || quizAnswers.step1?.key === 'car') matchedProduct = PRODUCTS[4];
    else if (quizAnswers.step3?.key === 'sculpture') matchedProduct = PRODUCTS[0];
    else if (quizAnswers.step3?.key === 'minimal') matchedProduct = PRODUCTS[3];

    resultBox.style.display = 'block';
    resultBox.innerHTML = `
        <span class="res-badge">✨ YOUR SIGNATURE SCENT</span>
        <h3>당신의 공간을 위한 맞춤 추천</h3>
        <p style="color: #6E6B65; font-size: 0.95rem; margin-bottom: 20px;">
            [${quizAnswers.step1?.label}]에서 피어나는 [${quizAnswers.step2?.label}]의 무드
        </p>

        <div class="result-card">
            <img src="${matchedProduct.mainImg}" alt="${matchedProduct.name}">
            <div class="result-info">
                <span style="font-size: 0.75rem; color: #8C624E; font-weight: 600;">추천 매칭 아이템</span>
                <h4>${matchedProduct.name}</h4>
                <p>${matchedProduct.scentNotes}</p>
                <div class="price">${matchedProduct.price.toLocaleString()}원</div>
            </div>
        </div>

        <div style="display: flex; gap: 12px; justify-content: center;">
            <button class="btn btn-primary" onclick="addToCart('${matchedProduct.id}'); closeQuizModal();">
                <i data-lucide="shopping-bag"></i> 추천 상품 장바구니 담기
            </button>
            <button class="btn btn-outline" onclick="showQuizStep(1)">다시 테스트하기</button>
        </div>
    `;

    initLucide();
}

// ==========================================
// 9. Mobile Navigation & Accordion
// ==========================================

function initMobileNav() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');

    const toggle = (open) => {
        if (open) {
            drawer?.classList.add('open');
            overlay?.classList.add('open');
        } else {
            drawer?.classList.remove('open');
            overlay?.classList.remove('open');
        }
    };

    if (mobileBtn) mobileBtn.addEventListener('click', () => toggle(true));
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', () => toggle(false));
    if (overlay) overlay.addEventListener('click', () => toggle(false));

    // Close on navigation click
    document.querySelectorAll('.drawer-link').forEach(link => {
        link.addEventListener('click', () => toggle(false));
    });
}

function initAccordions() {
    document.querySelectorAll('.acc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.acc-item').forEach(el => el.classList.remove('active'));

            // Toggle clicked
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
}

// ==========================================
// 10. Newsletter & Toast Notification
// ==========================================

function handleNewsletter(e) {
    e.preventDefault();
    const input = document.getElementById('newsEmail');
    if (!input || !input.value) return;

    showToast(`💌 ${input.value} 로 10% 웰컴 시크릿 쿠폰이 발송되었습니다!`);
    input.value = '';
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="check-circle" style="color: #7D8570;"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    initLucide();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}
