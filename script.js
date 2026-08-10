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
  const compressorHeading = productRail.closest('.product-showcase')?.querySelector('.showcase-heading h2');
  if (compressorHeading) {
    compressorHeading.textContent = 'SIKELAN';
  }

  const fanMotorShowcase = productRail.closest('.product-showcase')?.nextElementSibling;
  const fanMotorEyebrow = fanMotorShowcase?.querySelector('.showcase-heading .eyebrow');
  const fanMotorHeading = fanMotorShowcase?.querySelector('.showcase-heading h2');
  const fanMotorDescription = fanMotorShowcase?.querySelector('.showcase-heading > p');
  if (fanMotorEyebrow) fanMotorEyebrow.textContent = '02 / DEI';
  if (fanMotorHeading) {
    fanMotorHeading.innerHTML = '<img class="category-logo dei-category-logo" src="assets/dei-logo-transparent.png" alt="DEI" />';
  }
  if (fanMotorDescription) {
    fanMotorDescription.textContent = 'Pilihan thermostat DEI untuk kebutuhan chiller dan kontrol temperatur.';
  }

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

  if (fanMotorShowcase && !fanMotorShowcase.querySelector('.product-rail')) {
    const deiProducts = [
      {
        name: 'Thermostat Digital DEI 625E untuk Chiller',
        description: 'Digital thermostat untuk kebutuhan chiller.',
        price: 'Rp750.000',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/thermostat-digital-dei-625e-untuk-chiller-1731535433525790623?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
      },
      {
        name: 'Thermostat DEI 617 SE Digital',
        description: 'Digital thermostat chiller body besar.',
        price: 'Rp1.100.000',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/thermostat-dei-617-se-digital-thermostat-chiller-body-besar?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
      },
      {
        name: 'Thermostat DEI 106 DEI106H',
        description: 'Thermostat untuk kontrol temperatur tinggi.',
        price: 'Rp820.000',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/thermostat-dei-106-dei106h-for-high-temperature-control?extParam=whid%3D11333537%26src%3Dshop&aff_unique_id=&channel=others',
      },
    ];

    fanMotorShowcase.querySelector('.container')?.insertAdjacentHTML('beforeend', `
      <div class="product-rail" aria-label="Produk DEI">
        ${deiProducts.map((product) => `
          <article class="store-product dei-product-card">
            <img src="assets/dei-logo-transparent.png" alt="DEI thermostat" />
            <div class="store-product-content">
              <p class="product-type">DEI</p>
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p class="product-price">${product.price}</p>
              <a class="button" href="${product.url}" target="_blank" rel="noreferrer">Lihat produk →</a>
            </div>
          </article>
        `).join('')}
      </div>
    `);
  }
}
