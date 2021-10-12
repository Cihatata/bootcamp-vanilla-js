const state = {
  search: "aksjdhakj",
  basket: "",
}
var rootEl = document.getElementById('root');

// Fetch Request 
const fetchApi = async (path) => {
  const response = await fetch(`http://localhost:3000${path}`);
  const data = await response.json();
  return data;
}

const ProductCardWrapper = (children) => {
  return `
    <div class="product-card-wrapper">
      ${children}
    </div>
  `
}

//Layout
const MainLayout = (children) => {

  return `
   <section class="section">
      <div class="container">
        ${ProductCardWrapper(children)}
      </div>
    </section>
  `
}

// Components
const HeaderEl = () => {
  return `
    <header id="header" class="header">
      <span  class="logo" ></span>
      <input type="text" placeholder=${state.search} value=${state.search} class="search">
      <button class="basket-btn">
        Sepetim
      </button>
    </header>
  `
}

const ProductCard = (product) => {

  return `
    <div class="product-card">
      <img src="${product.imageUrl}" alt="product-item">
      <div class="product-card-alt">
        <div class="product-card-name">
            ${product.name}
        </div>
        <div class="product-card-price">
          ${product.price} $
        </div>
        <button>Sepete Ekle</button>
        
      </div>
    </div>
      
  `
}

const renderProductCard = (products) => {
  // console.log(products);               <ProductCard item={item} />
  const productEl = products.map((item) => ProductCard(item))
  return productEl.join(' ')
  // console.log(productEl);
}

const firstRender = async () => {
  rootEl.insertAdjacentHTML('afterbegin', HeaderEl());
  const products = await fetchApi('/products');
  const headerEl = document.getElementById('header');
  headerEl.insertAdjacentHTML('afterend', MainLayout(renderProductCard(products)));
}

window.addEventListener('load', firstRender);