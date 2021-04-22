const readStorAll = () =>{
   return JSON.parse(localStorage.getItem('all')); 
}
window.addEventListener('load',  (e)=>{
   let keyStorage =Object.keys(localStorage);
   let exisAll =keyStorage.includes('all');
   exisAll ?  painCards(consulStor('all')): getApiAll();
})
let getApiAll =  async(e) =>{
   await fetch(`https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;alpha3Code;nativeName`)
   .then(results => results.json() )
   .then(results =>{
      painCards(results);
      saveRegion('all',results);
  }) 
}
const consulStor = (data) =>{
  return JSON.parse(localStorage.getItem(data));   
}
let painCards = (dataReg)=>{
   let contCard= document.getElementById('content-cards');
   contCard.innerHTML= '';
   for (const key in dataReg) {
      contCard.innerHTML+=`<div class="card" id="${dataReg[key].alpha3Code}">
      <img src="${dataReg[key].flag}" class="img img__card" alt="">
      <p class="label label__country">${dataReg[key].name}</p>
      <ul>
      <li class="li data__li" >Population: ${dataReg[key].population}</li>
      <li class="li data__li" >Region: ${dataReg[key].region}</li>
      <li class="li data__li" >Capital: ${dataReg[key].capital}</li>
      </ul>
      </div>`;
   }
}
const saveRegion= (key,data) => {
   localStorage.setItem(key, JSON.stringify(data));
}
let getApiReg = async (pickRegion)=>{
    await fetch(`https://restcountries.eu/rest/v2/region/${pickRegion}?fields=name;population;region;capital;flag;alpha3Code`)
    .then(results => results.json() )
    .then(results =>{
      painCards(results);
      saveRegion(pickRegion,results);
   })   
}
document.getElementById('select__tittle').addEventListener('click', (e)=>{
   document.getElementById('select__items').classList.toggle('toggle');  
})
document.getElementById('select__items').addEventListener('click', (e)=>{
   if(e.target.className == 'item--option'){
      let pickRegion =e.target.textContent;
      let keyStorage =Object.keys(localStorage);
      let exisReg =keyStorage.includes(pickRegion);
      exisReg ?  painCards(consulStor(pickRegion))  : 
      [getApiReg(pickRegion) ];
   }
});
document.getElementById('input__content').addEventListener('keyup', (e)=>{
   let keySearch = new String(e.target.value.toLowerCase().trim().replace(/ /g, ""));
      let contCard = document.getElementById('content-cards');
      contCard.innerHTML= '';
         for (const iterator of readStorAll()) {
            if(e.target.value === ''){
               break;
               painCards(readStorAll());
            } 
            let result = new String(iterator.name.toLowerCase().trim().replace(/ /g, ""));
            if(result.indexOf(keySearch) !== -1){
               contCard.innerHTML+=`<div class="card" id="${iterator.alpha3Code}">
               <img src="${iterator.flag}" class="img img__card" alt="">
               <p  class="label label__country">${iterator.name}</p>
               <ul>
               <li class="li data__li">Population: ${iterator.population} </li>
               <li class="li data__li">Region: ${iterator.region}</li>
               <li class="li data__li">Capital: ${iterator.capital}</li>
               </ul>
               
               </div>`;
            }
         }
})
document.getElementById('content-cards').addEventListener('click', (e)=>{
   //console.log(e.target.parentNode.className);
   if(e.target.parentNode.className === 'card'){
      let codCountr=e.target.parentNode.id;
      location.href =`details.html?country=${codCountr}`;
   }
})
