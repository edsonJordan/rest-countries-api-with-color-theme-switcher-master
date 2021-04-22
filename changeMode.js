document.getElementById('input__header').addEventListener('change', (e)=>{
    const bgHeader = document.getElementById('header');
    const contBody = document.getElementById('content');
    const iconSearch = document.getElementById('input__content');
    const iconSelect= document.getElementById('select__tittle');
    const contCards= document.getElementById('content-cards');
    /* Details Elements */
    const iconBack= document.getElementById('button-back');
    const elemtBordes= document.getElementById('card_details_border');
    const btnDetails = document.getElementById('footer__content');

    bgHeader?.classList.toggle('header__changemode');
    contBody?.classList.toggle('content__changeMode');
    iconSearch?.classList.toggle('input__content__changeMode');
    iconSelect?.classList.toggle('select__tittle__changeMode');
    contCards?.classList.toggle('content-card__changeMode');
    iconBack?.classList.toggle('button-back__changeMode');
    elemtBordes?.classList.toggle('border_modeChange');
    btnDetails?.classList.toggle('details_footer_changeMode');

})