const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? 'Tutup' : 'Menu';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
  if (toggle) toggle.textContent = 'Menu';
}));

const productRail = document.querySelector('.product-rail');
const firstProductPrice = productRail?.querySelector('.product-price');

if (firstProductPrice) firstProductPrice.textContent = 'Rp1.500.000';

if (productRail) {
  const additionalProducts = [
    {
      name: 'Compressor Sikelan GQR-16 GQR16KMD CU',
      description: 'Kompresor freezer R404A.',
      price: 'Rp2.500.000',
      image: 'assets/sikelan-gqr16k.png',
      url: 'https://www.tokopedia.com/berkatteknikjakarta/compressor-sikelan-gqr-16-gqr16kmd-cu-kompresor-freezer-r404a?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
    },
    {
      name: 'Compressor Sikelan GQR-14',
      description: 'Kompresor R404A.',
      price: 'Rp2.260.000',
      image: 'assets/sikelan-gqr14k.png',
      url: 'https://www.tokopedia.com/berkatteknikjakarta/compressor-sikelan-gqr14-gqr-14-r404a?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
    },
  ];

  productRail.insertAdjacentHTML('beforeend', additionalProducts.map((product) => `
    <article class="store-product">
      <img src="${product.image}" alt="${product.name}" />
      <div class="store-product-content">
        <p class="product-type">Sikelan</p>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="product-price">${product.price}</p>
        <a class="button" href="${product.url}" target="_blank" rel="noreferrer">Lihat produk →</a>
      </div>
    </article>
  `).join(''));
}
