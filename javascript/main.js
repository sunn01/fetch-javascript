// /*const ulList = document.querySelector('ul')
// fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log('Data', data);

//         const pokemons = data.results;

//         for (let i = 0; i < pokemons.length; i++) {
//             const pokemon = pokemons[i];
//             ulList.innerHTML += '<li>' + pokemon.name + '</li>'

//         }
//     });*/
// const list = document.querySelector('ul')
// const container = document.querySelector('.container');
// fetch('https://dummyjson.com/products')
//     .then((response) => response.json())
//     .then((dta) => {
//         console.log('Dta', dta);

//         const allProducts = dta.products;

//         for (let i = 0; i < allProducts.length; i++) {
//             const product = allProducts[i];
//             console.log(product);
//             // list.innerHTML += '<li>' + product.id + '\n' + product.title + '<br>' + product.description + '</li> <br>'
//             container.innerHTML += createCard(product)

//         }
//     });

// function createCard(prod) {
//     const card = `
//     <div class="card">
//         <h3>${prod.title}</h3>
//         <div class="img-wrapper">
//             <img src="${prod.thumbnail}" alt="">
//         </div>
//         <div class="bottom">${prod.price}</div>
//     </div>
//     `;

//     return card;
// }


const box = document.querySelector('.box');
const btn = document.querySelector('.run');

let toggle = true;
btn.addEventListener('click', function () {
    if (toggle) {
        box.classList.add('error');
    } else {
    box.classList.remove('error')
    }
    toggle = !toggle;
});
