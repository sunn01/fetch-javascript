/*const ulList = document.querySelector('ul')
fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then((response) => response.json())
    .then((data) => {
        console.log('Data', data);
        
        const pokemons = data.results;
        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            ulList.innerHTML += '<li>' + pokemon.name + '</li>'
            
        }
    });*/
const list = document.querySelector('ul')
fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((dta) => {
        console.log('Dta', dta);

        const allProducts = dta.products;

        for (let i = 0; i < allProducts.length; i++) {
            const product = allProducts[i];
            list.innerHTML += '<li>' + product.id + '\n' + product.title + '<br>' + product.description + '</li> <br>'
            
        }
    });

