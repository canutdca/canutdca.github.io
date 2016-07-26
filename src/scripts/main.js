(function(){
    var btnMenu = document.getElementById('header--button');
    var navbarMenu = document.getElementById('header--nav');
    var fondoMenu = document.getElementById('fondo-menu');

    btnMenu.addEventListener('click', onClickMenu);
    function onClickMenu(){
        navbarMenu.classList.toggle('nav__show');
        fondoMenu.classList.toggle('fondo-menu__show');
    }
    window.addEventListener("scroll", function(){
        console.log('asd');
        console.log(window.pageYOffset);
        if(window.pageYOffset >= 52){
            $(".cabecera").addClass("cabecera__fix");
        }
        if(window.pageYOffset < 52){
            $(".cabecera").removeClass("cabecera__fix");
        }
        if(window.pageYOffset >= 108){
            $(".header").addClass("header__fix");
            $(".container").addClass("container__fix");
        }
        if(window.pageYOffset < 108){
            $(".header").removeClass("header__fix");
            $(".container").removeClass("container__fix");
        }
    });

}());