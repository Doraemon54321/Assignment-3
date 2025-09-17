var products = [
  { id: 1, name: "T-Shirt", code: "001", price: "200.000 VND", image: "img/t-shirt.jpg", category: "male" },
  { id: 2, name: "Polo", code: "002", price: "500.000 VND", image: "img/polo.jpg", category: "male" },
  { id: 3, name: "Shirt", code: "003", price: "700.000 VND", image: "img/shirt.jpg", category: "male" },
  { id: 4, name: "Dress", code: "004", price: "1.000.000 VND", image: "img/dress.jpg", category: "female" },
  { id: 5, name: "Pants", code: "005", price: "700.000 VND", image: "img/pants.jpg", category: "female" },
  { id: 6, name: "Shirt", code: "006", price: "1.000.000 VND", image: "img/wshirt.jpg", category: "female" }
];

function showHome() {
  let container = document.getElementById("content");
  container.innerHTML = `
    <h2>Tất cả sản phẩm</h2>
    <div class="products">
      ${renderProducts(products)}
    </div>
  `;
}

function listProduct(sex) {
  let container = document.getElementById("content");
  let filteredProducts = products.filter(item => item.category === sex);
  
  container.innerHTML = `
    <h2>${sex === "male" ? "Thời trang nam" : "Thời trang nữ"}</h2>
    <div class="products">
      ${renderProducts(filteredProducts)}
    </div>
  `;
}

function renderProducts(productList) {
  return productList.map(item => `
    <div class="product-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <div class="price-container">
        <span class="price">${item.price}</span>
        <span class="old-price">${calculateOldPrice(item.price)}</span>
      </div>
      <button class="btn" onclick="addToCart(${item.id})">
        <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
      </button>
    </div>
  `).join('');
}

function calculateOldPrice(price) {
  // Tạo giá cũ bằng cách tăng giá hiện tại lên 20%
  const currentPrice = parseInt(price.replace(/\D/g, ''));
  const oldPrice = Math.round(currentPrice * 1.2);
  return oldPrice.toLocaleString() + ' VND';
}

function addToCart(productId) {
  // Sẽ implement chức năng giỏ hàng sau
  alert('Đã thêm sản phẩm vào giỏ hàng!');
}
