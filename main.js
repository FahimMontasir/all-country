
const getAllCountry = async() => {
    const inputValue = document.getElementById('input-field').value;
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`
        const res =await fetch(url);
        const data =await res.json();
        getCard(data);
    
}
const getCard = dataArray => {
    const countryItems = document.getElementById('country-items-area');
    countryItems.innerHTML = "";
    dataArray.forEach(country => {
        const div = document.createElement('div');
        div.className = 'card shadow m-1';
        div.innerHTML = `
    <img src="${country.flag}" class="card-img-top">
    <div class="card-body">
      <p class="card-title">${country.name}</p>
      <a onclick="showDetails('${country.name}')" href="#country-details-area" class="stretched-link"></a>
    </div>
        `
    countryItems.appendChild(div);
    });
}
const showDetails = countryName =>{
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(url)
    .then(res => res.json())
    .then(data => getCountryDetails(data))
}
const getCountryDetails = data => {
    const countryDetail = document.getElementById('country-details-area');
    countryDetail.innerHTML = "";
     const div = document.createElement('div');
     div.innerHTML = `
    <img src="${data[0].flag}" class="card-img-top">
    <div class="card-body">
      <h6 class="card-title text-center text-info">${data[0].name}</h6>
    <ul>
        <li>Currency name: ${data[0].currencies[0].name}</li>
        <li>Currency symbol: ${data[0].currencies[0].symbol}</li>
        <li>Capital: ${data[0].capital}</li>
        <li>Population: ${data[0].population}</li>
        <li>Area: ${data[0].area}km²</li>
        <li class ="text-danger">Region: ${data[0].region}</li>
    </ul>
    </div>
        `
    countryDetail.appendChild(div);
    ;
}