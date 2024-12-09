  function buscaAlfabetica(letra) {
    document.querySelector('#resultados').innerHTML = "";
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        listaDrinks = data.drinks;

        listaDrinks.forEach(drink => {
            document.querySelector('#resultados').innerHTML += `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${drink.strDrinkThumb}" class="img-fluid rounded-start" alt="${drink.strDrink}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${drink.strDrink}</h5>
                                <p class="card-text">${drink.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    });
}

function drinkAleatorio() {
    document.querySelector('#resultados').innerHTML = "";
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        listaDrinks = data.drinks;

        listaDrinks.forEach(drink => {
            document.querySelector('#resultados').innerHTML += `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${drink.strDrinkThumb}" class="img-fluid rounded-start" alt="${drink.strDrink}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${drink.strDrink}</h5>
                                <p class="card-text">${drink.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    });
}

document.querySelector('#buscarBtn').addEventListener('click', buscaEspecifica);
function buscaEspecifica() {
    const termo = document.querySelector('#pesquisar').value;

    document.querySelector('#resultados').innerHTML = "";
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${termo}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if (data.drinks) {
            listaDrinks = data.drinks;

            listaDrinks.forEach(drink => {
                document.querySelector('#resultados').innerHTML += `
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${drink.strDrinkThumb}" class="img-fluid rounded-start" alt="${drink.strDrink}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${drink.strDrink}</h5>
                                    <p class="card-text">${drink.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        } else {
            document.querySelector('#resultados').innerHTML = "<p>Nenhum drink encontrado.</p>";
        }
    });
}