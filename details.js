window.addEventListener('load', (e)=>{
    let loc = document.location.href;
    let getString = loc.split('?')[1].substr(-3);
    getCountr(getString);
})
let getCountr = async (codeCountr)=>{
    await fetch(`https://restcountries.eu/rest/v2/alpha/${codeCountr}?fields=name;flag;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;`)
    .then(results => results.json() )
    .then(results =>{
            paintDetails(results);
    })   
    }
const paintDetails = (dataCountry) =>{


    let contCard= document.getElementById('content-cards');
    contCard.innerHTML= '';
    for (const key in dataCountry) {
        /*  */
       contCard.innerHTML =
       `
       <div class="card card__details" >
                        <div class="card__details__img" >
                            <img src="${dataCountry.flag}" class="img img__card img_card__details" alt="">                        
                        </div>
                        <div class="card__details__content">
                            <div class="card__details__country">
                                <label for="${dataCountry.name}" class="label label__country label__country__details">${dataCountry.name}</label>
                            </div>
                            <div class="card_details__info">
                                <lu>
                                <li class="li data__li data__li__details" id="${dataCountry.nativeName}">Native Name: </li>
                                <li class="li data__li data__li__details" id="${dataCountry.topLevelDomain[0]}">Top Level Domain: </li>
                                <li class="li data__li data__li__details" id="${dataCountry.population}">Population: </li>                                
                                <li class="li data__li data__li__details" id="${dataCountry.languages[0].iso639_2 +', '+ dataCountry.languages[0].name +', '+ dataCountry.languages[0].nativeName}">Lenguages: </li>                                
                                <li class="li data__li data__li__details" id="${dataCountry.capital}">Capital: </li>
                                <li class="li data__li data__li__details" id="${dataCountry.region}">Region: </li>
                                <li class="li data__li data__li__details" id="${dataCountry.subregion}">Sub Region: </li>
                                <li class="li data__li data__li__details" id="${dataCountry.currencies[0].name}">Currencies: </li>    
                                </lu>                            
                            </div>                        
                            <div class="card__details__footer">
                                <div class="card__details__footer__tittle">
                                    <label class="label data__li data__li__details" >Border Countries:  </label>
                                </div>
                                <div class="card__details__footer__content " id="footer__content">                                
                                </div>       
                            </div>
        </div>
       
       
       
       
       
       
       
     
        `};
        const dataAll = JSON.parse(localStorage.getItem('all'));
        let codeAll = [];
        for (const manyCountry of dataAll) {
            //iterator.alpha3Code
            for(const iterator of dataCountry.borders) {
                if(manyCountry.alpha3Code.indexOf(iterator) !== -1){
                    document.getElementById('footer__content').innerHTML += `
                    <a href="details.html?country=${manyCountry.alpha3Code}" class="button button__details">${manyCountry.nativeName}</a>
                    `
                    break;
                   }
            }
        }
        /* dataCountry.borders */ 
        let countrys = [];  
       /*  for (const iterator of dataAll.alpha3Code) {
            if(dataCountry.borders.indexOf(iterator) !== -1){
             console.log(codeAll);
            }
            //countrys.push(codeAll.filter(x=> codeAll == iterator));
        } */
        
       
}