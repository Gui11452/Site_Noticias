const menuOcultado1 = document.querySelector('.menu-ocultado');
const cabecalho = document.querySelector('.cabecalho');
const cabecalhoMobile = document.querySelector('.cabecalho-mobile');
const botao1 = document.querySelector('.botao');
const botao1Span = document.querySelectorAll('.botao span');
const [span1, span2, span3] = botao1Span;

const cabecalhoOculto = document.querySelector('.cabecalho-oculto');
const botao2 = document.querySelector('.botao-oculto');
const botao2Span = document.querySelectorAll('.botao-oculto span');
const menuOcultado2 = document.querySelector('.cabecalho-menu-oculto');

const [span4, span5, span6] = botao2Span;

document.addEventListener('click', e => {

    const el = e.target;

    if(el == botao1 || el == span1 || el == span2 || el == span3){
        e.preventDefault();
        menuOcultado1.classList.toggle('menu-ocultado-mostrar');
    }

    if(el == botao2 || el == span4 || el == span5 || el == span6){
        e.preventDefault();
        menuOcultado2.classList.toggle('cabecalho-menu-oculto-mostrar');
    }

})

setInterval(function(){
    if(Math.round(window.pageYOffset) >= 90){
        cabecalho.classList.add('cabecalho-ocultar');
        cabecalhoMobile.classList.add('cabecalho-mobile-mostrar');
        cabecalhoOculto.classList.remove('cabecalho-oculto-mostrar');
    } else{
        cabecalho.classList.remove('cabecalho-ocultar');
        cabecalhoMobile.classList.remove('cabecalho-mobile-mostrar');
        cabecalhoOculto.classList.add('cabecalho-oculto-mostrar');
    }
    console.log(Math.round(window.pageYOffset))
}, 100)