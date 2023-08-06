const shop = [
  {
    id: 1,
    img: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_394,y_603,w_2138,h_1423/w_600,h_400,c_fill/auto-client/4e9fe6da66e36aedc416816f4ee4387e/ateca_pa_118_rhd_lowres.jpg',
    name: 'bmw',
    price: 10000,
    description: 'kgvhgvhgvnhgvnh',
  },
  {
    id: 2,
    img: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_600,h_400,q_auto,c_fill,f_auto,fl_lossy/auto-client/4e1e86e58105486d17065ff7a12abc4e/my22_uk_ext_fr_sport.jpg',
    name: 'audi',
    price: 20000,
    description: 'hvkhjhbjhbj',
  },
  {
    id: 3,
    img: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_799,y_238,w_3927,h_2618/w_600,h_400,c_fill/auto-client/44654e7ed8f3957d2ec1326ad74bde05/arona_pa_003_xperience_lux_uk.jpg',
    name: 'volvo',
    price: 30000,
    description: 'ihlkjhbjhb',
  },
  {
    id: 4,
    img: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_2301,y_1477,w_5283,h_3522/w_600,h_400,c_fill/auto-client/4f0f3d1c234e5215545fb02c61d49944/tarraco_186_uk_fr_oryx_white_19_cosmo_grey_alloy_wheels_my20_lifestyle_lr.jpg',
    name: 'mercedes',
    price: 40000,
    description: 'liughhjbljhblj',
  },
];

const container = document.querySelector('.js-products');

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price }) => `
    <li data-id="${id}" class='item js-product-item'>
        <img src="${img}" alt="${name}" width=300/>
        <h2>${name}</h2>
        <p>Price: ${price} hrn</p>
      </li>`
    )
    .join('');
}
container.insertAdjacentHTML('beforeend', createMarkup(shop));
container.addEventListener('click', handlerClick);

function handlerClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }

  const currentProduct = evt.target.closest('.js-product-item');
  console.log(currentProduct);
  const { id } = currentProduct.dataset;
  console.log(id);
}
