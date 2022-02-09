 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
     Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
(Não gaste tempo pensando no texto e sim realizando o exercício)
    Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
    Crie uma função que mude a cor do quadrado vermelho para branco.
    Crie uma função que corrija o texto da tag <h1>.
    Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

    //1
        let texto = document.getElementsByTagName("p") ;
    texto[0].innerText = "Bonde dos 3."

    //2
        let cor = document.getElementsByClassName("main-content")
    // console.log(cor); 
    cor[0].style.background = 'rgb(76,164,109)'

    //3
        let corMeio = document.getElementsByClassName("center-content")
    console.log(corMeio);
    corMeio[0].style.background = "white"

    //4
        let corrige = document.getElementsByClassName("title")[0].innerHTML = "Teste"
    console.log(corrige);

    //5  
        function funcaoAumentar() {      
    let textoGrande = document.getElementsByTagName("p")[0]
  
    textoGrande.innerHTML = textoGrande.innerHTML.toUpperCase();
} funcaoAumentar()

    //6
        let todoCont = document.getElementsByTagName("p");
    for (index = 0 ; index < todoCont.length; index += 1) {
        console.log(todoCont[index].innerHTML)
    }
   