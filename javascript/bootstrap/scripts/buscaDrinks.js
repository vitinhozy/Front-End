fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').then((response) =>
{
    return response.json()
}).then((data) => {
    console.log(data)
    listaDrinks = data.drinks

    listaDrinks.forEach(drink => {
    document.querySelector('#resultados').innerHTML += `
    <imd src= "${drink.strDrinkThumb }">
    <h3>${data.strDrink}</h3>
    `
    });

})