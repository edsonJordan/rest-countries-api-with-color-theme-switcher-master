//localStorage.setItem('darkMode', false);
if(localStorage.getItem('darkMode') == null){
    localStorage.setItem('darkMode', false);
}
let LocalDarkMode = localStorage.getItem('darkMode');


const bgHeader = document.getElementById('header');
    const contBody = document.getElementById('content');
    const iconSearch = document.getElementById('input__content');
    const iconSelect= document.getElementById('select__tittle');
    const contCards= document.getElementById('content-cards');
    /* Details Elements */
    const iconBack= document.getElementById('button-back');
    const elemtBordes= document.getElementById('card_details_border');
    let btnDetails = document.getElementById('footer__content');
    console.log(btnDetails);

if(LocalDarkMode === "true" ){
    darkModeButton = document.getElementById('input__header').checked = true;
    bgHeader?.classList.add('header__changemode');
    contBody?.classList.add('content__changeMode');
    iconSearch?.classList.add('input__content__changeMode');
    iconSelect?.classList.add('select__tittle__changeMode');
    contCards?.classList.add('content-card__changeMode');
    iconBack?.classList.add('button-back__changeMode');
    elemtBordes?.classList.add('border_modeChange');
    btnDetails?.classList.add('details_footer_changeMode');
}else{
    bgHeader?.classList.remove('header__changemode');
    contBody?.classList.remove('content__changeMode');
    iconSearch?.classList.remove('input__content__changeMode');
    iconSelect?.classList.remove('select__tittle__changeMode');
    contCards?.classList.remove('content-card__changeMode');
    iconBack?.classList.remove('button-back__changeMode');
    elemtBordes?.classList.remove('border_modeChange');
    btnDetails?.classList.remove('details_footer_changeMode');
}


document.getElementById('input__header').addEventListener('change', (e)=>{
    
    //let darkMode = document.getElementById('input__header').checked;
    let LocalMode = localStorage.getItem('darkMode');
    const bgHeader = document.getElementById('header');
    const contBody = document.getElementById('content');
    const iconSearch = document.getElementById('input__content');
    const iconSelect= document.getElementById('select__tittle');
    const contCards= document.getElementById('content-cards');
    /* Details Elements */
    const iconBack= document.getElementById('button-back');
    const elemtBordes= document.getElementById('card_details_border');
    const btnDetails = document.getElementById('footer__content');


    if(LocalMode === "true") {
       localStorage.setItem('darkMode', false) 
        bgHeader?.classList.remove('header__changemode');
        contBody?.classList.remove('content__changeMode');
        iconSearch?.classList.remove('input__content__changeMode');
        iconSelect?.classList.remove('select__tittle__changeMode');
        contCards?.classList.remove('content-card__changeMode');
        iconBack?.classList.remove('button-back__changeMode');
        elemtBordes?.classList.remove('border_modeChange');
        btnDetails?.classList.remove('details_footer_changeMode');
    } else{
        localStorage.setItem('darkMode', true)
        bgHeader?.classList.add('header__changemode');
        contBody?.classList.add('content__changeMode');
        iconSearch?.classList.add('input__content__changeMode');
        iconSelect?.classList.add('select__tittle__changeMode');
        contCards?.classList.add('content-card__changeMode');
        iconBack?.classList.add('button-back__changeMode');
        elemtBordes?.classList.add('border_modeChange');
        btnDetails?.classList.add('details_footer_changeMode');
    } ;


    

    

})