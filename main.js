//DECLARAÇÃO/criação da função tocaSomPom
function tocaSomPom(){                             
    document.querySelector('#som_tecla_bem-te-vi').play();
}
//criando a referêcia comstante listaDeteclas e buscando a cla
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
white(contador < 9){
     listaDeTeclas[contador].onclick = tocaSomPom;
     contador = contador + 1;
     console.log(contador);

}