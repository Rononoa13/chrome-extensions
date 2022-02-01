fetch('https://corona.lmao.ninja/v3/covid-19/countries')
.then(response => {
    return response.json()
})
.then(data => {
   data = data.find(findCountry)
//    console.log(data)
   document.getElementById('country').textContent += " " + data.country
   document.getElementById('total_cases').textContent += " " + data.cases 
   document.getElementById('today_death').textContent += " " + data.deaths 
})
// Function that search countries in array list
// where country name is Nepal
findCountry = (data) => {
    return data.country === 'Nepal'
}

