//DECLARAÇÃO/criação da função tocaSomPom
function tocaSomPom(){                             
    document.querySelector('#som_tecla_bem-te-vi').play();
}
//chamada ou invocação da função tocaSomPom ao clicar no botão
document.querySelector('tecla_pom').onclick = tocaSomPom;

//DECLARAÇÃO/criação da função tocaSomPom
function tocaSomPom(){                             
    document.querySelector('#som_tecla_olha-msg').play();
}
//chamada ou invocação da função tocaSomPom ao clicar no botão
document.querySelector('tecla_pom').onclick = tocaSomPom;


const listaDeTeclas = document.querySelectorAll('.tecla');
//chamando a constante listaDeTeclas e busando
listaDeTeclas[0].onlick = tocaSomPom