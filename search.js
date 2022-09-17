const container = document.querySelector(".container")
let output = ""

function queryScryfall(text) {
    fetch(`https://api.scryfall.com/cards/search?q=${text}`)
        .then(response => {
            return response.json();
        })

        .then(resp => {    
            for (let i = 0; i < resp.total_cards; i++) {
                //console.log(resp.data[i].name);
                //console.log(resp.data[i].image_uris.normal);
                //console.log(resp.data[i].prices.usd);
                //console.log(resp.data[i].purchase_uris.tcgplayer);

                    (output += `

                            <div class="card">
                              <h1 class="card--title">${resp.data[i].name}</h1>  
                              <img class="card--art" src=${resp.data[i].image_uris.normal} />
                              <h3 class="card--price">$${resp.data[i].prices.usd}</h3>
                              <a class="card--link" href="${resp.data[i].purchase_uris.tcgplayer}">Buy Now!</a>
                            </div>
                            `)
                container.innerHTML = output
            }
              document.addEventListener("DOMContentLoaded")
        });
    }    

function searchBar() {
    $('form').submit(event => {
        event.preventDefault();
        var text = $('.text').val() || 'Shivan Devastator'//get card name from user.
        queryScryfall(text); //pass to queryScryfall
    });
}

$(function() {
    console.log('Search loaded, Waiting for input!')
    searchBar();
});

