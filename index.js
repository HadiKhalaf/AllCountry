fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
            json.forEach(element => {

                var _current_Card = `
                <div class="card h" >
            
                            <img class="card-img-top" src="${element.flags.png}" alt="...">
                            
                            <div class="card-body">
                            <h5 class="card-title">${element.name.common}</h5>
                            <p class="card-text">
                            Region: ${element.region}<br> 
                            Area: ${element.area}<br>
                            Population: ${element.population}<br>
                            Timezone: ${element.timezones}
                            </p>
                            <a href="${element.maps.googleMaps}" class="btn btn-success">Go somewhere</a>
                            </div>
                        </div> `
                var div = document.createElement('div')
                div.className='col-lg-3 col-sm-5'
                div.innerHTML = _current_Card;
                var div1 = document.createElement('div')
                div1.className='col-lg-1 col-sm-1'
                document.getElementById('allCountries').appendChild(div1);
                document.getElementById('allCountries').appendChild(div);
            });

      })
