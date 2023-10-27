//DECLARAÇÃO/criação da função tocaSomPom
function tocaSomPom(idElementoAudio){                   
    document.querySelector(idElementoAudio).play();
}
//criando a referêcia comstante listaDeteclas e buscando a classe coletive .tecla
const listaDeTeclas = document.querySelector('.tecla');
let contador = 0;
white(contador < 9){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_" + efeito;
    listaDeTeclas[contador].onclick = function() {
        tocasom(idAudio);
    }
    contador = contador + 1;
    console.log(contador)
}