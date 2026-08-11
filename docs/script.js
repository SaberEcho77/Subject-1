const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

document.querySelectorAll('a[href="about.html"]').forEach((link) => {
  link.textContent = 'Contact';
});

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
        image: 'assets/dei-625e.png',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/thermostat-digital-dei-625e-untuk-chiller-1731535433525790623?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
      },
      {
        name: 'Thermostat DEI 617 SE Digital',
        description: 'Digital thermostat chiller body besar.',
        price: 'Rp1.100.000',
        image: 'assets/dei-617se.png',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/thermostat-dei-617-se-digital-thermostat-chiller-body-besar?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
      },
      {
        name: 'Thermostat Digital DEI 104JE',
        description: 'Pengganti tipe lama 105, made in Taiwan.',
        price: 'Rp900.000',
        image: 'assets/dei-104je.png',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/thermostat-digital-dei-104je-pengganti-tipe-lama-105-made-in-taiwan-1731435834120832927?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
      },
    ];

    fanMotorShowcase.querySelector('.container')?.insertAdjacentHTML('beforeend', `
      <div class="product-rail" aria-label="Produk DEI">
        ${deiProducts.map((product) => `
          <article class="store-product dei-product-card">
            <img src="${product.image}" alt="${product.name}" />
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

  const tecumsehShowcase = fanMotorShowcase?.nextElementSibling;
  const tecumsehEyebrow = tecumsehShowcase?.querySelector('.showcase-heading .eyebrow');
  const tecumsehHeading = tecumsehShowcase?.querySelector('.showcase-heading h2');
  const tecumsehDescription = tecumsehShowcase?.querySelector('.showcase-heading > p');
  if (tecumsehEyebrow) tecumsehEyebrow.textContent = '03 / Tecumseh';
  if (tecumsehHeading) {
    tecumsehHeading.innerHTML = '<img class="category-logo tecumseh-category-logo" src="assets/tecumseh-logo-transparent.png" alt="Tecumseh" />';
  }
  if (tecumsehDescription) {
    tecumsehDescription.textContent = 'Pilihan kompresor Tecumseh untuk kebutuhan chiller dan freezer.';
  }

  if (tecumsehShowcase && !tecumsehShowcase.querySelector('.product-rail')) {
    const tecumsehProducts = [
      {
        name: 'Kompresor Tecumseh AE4460Y 1/2 PK',
        description: 'Untuk chiller high temperature.',
        price: 'Rp3.350.000',
        image: 'assets/tecumseh-ae4460y.png',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/kompresor-tecumseh-ae4460y-1-2pk-chiller-high-temp-tecumseh-4460y?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
      },
      {
        name: 'Compressor Tecumseh AE2413Y 1/3 PK',
        description: 'Untuk kulkas freezer R134.',
        price: 'Rp2.500.000',
        image: 'assets/tecumseh-ae2413y.png',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/compressor-tecumseh-ae-2413y-1-3-pk-utk-kulkas-freezer-r134-1732792893022832543?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
      },
      {
        name: 'Compressor Tecumseh AE2410Y 1/4 PK',
        description: 'Untuk aplikasi freezer R134A.',
        price: 'Rp2.350.000',
        image: 'assets/tecumseh-ae2410y.png',
        url: 'https://www.tokopedia.com/berkatteknikjakarta/compresso-tecumseh-ae2410y-ae-2410y-aplikasi-freezer-1-4-pk-r134a?extParam=src%3Dshop%26whid%3D11333537&aff_unique_id=&channel=others&chain_key=',
      },
    ];

    tecumsehShowcase.querySelector('.container')?.insertAdjacentHTML('beforeend', `
      <div class="product-rail" aria-label="Produk Tecumseh">
        ${tecumsehProducts.map((product) => `
          <article class="store-product tecumseh-product-card">
            <img src="${product.image}" alt="${product.name}" />
            <div class="store-product-content">
              <p class="product-type">Tecumseh</p>
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
