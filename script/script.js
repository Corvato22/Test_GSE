const URL_COCKTAILS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

//* Cocktail cards
let fragment = document.createDocumentFragment();
let items = document.getElementById('items');
let templateCard = document.getElementById('template-card').content;


//* Search data
const getSearch = async (search) => {
    let response = await fetch(URL_COCKTAILS + search);
    let data = await response.json();
    console.log(data)
    return data;
}


//* Searcher
let btn = document.getElementById('btnSearch');
btn.addEventListener('click', async (e) => {
    let text = document.getElementById('inputSearch').value;
    let dataBase = await getSearch(text);
    console.log(text)
    e.preventDefault();
    document.querySelector('.card-results').textContent = 'Search results for ' + (text)
    console.log(dataBase)
    dataBase.drinks.forEach(cocktail => {
        assignAtribute(cocktail)
    })
    insertAttributes();
});

//* Assign attributes to cocktail cards
function assignAtribute(cocktail) {
    templateCard.querySelector('.card').setAttribute("id", cocktail.id)
    console.log(cocktail.strDrink)
    templateCard.querySelector('.cocktail-name').textContent = cocktail.strDrink
    templateCard.querySelector('.cocktail-name').textContent = "Hola"

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
}

//* Insert attributes
function insertAttributes() {
    items.innerHTML = "";
    items.appendChild(fragment);
}