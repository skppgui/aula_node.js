const caixa = document.querySelector("#caixa");
let cursos = [];
let resposta = "";

/* Incluindo curso na Matriz */
while (resposta != "N") {
  let curso = prompt("Digite o nome do curso");
  cursos.push(curso.toUpperCase());
  resposta = prompt("Cadastrar outro Curso S/N");

  if (resposta.toUpperCase() == "N") {
    cursos.forEach((aula) => {
      let p = document.createElement("p");
      p.innerHTML = aula + "<br>--------------------</br>";
      caixa.appendChild(p);
    });
    break;
  }
}


//Excluir 

let excluir = "";

resposta = prompt("deseja excluir? S/n")
if(resposta.toUpperCase()=="S"){
    let curso = prompt("Digite o nome do curso para excluir")
    /* Pegando a posição do Elemento da Matriz */
    alert("posicao do curso dentro da matriz" + cursos.indexOf(curso.toUpperCase(), 1));
    let posicao = cursos.indexOf(curso.toUpperCase(),1);
    /* Apagando o curso com o método .splice */
    cursos.splice(posicao);

    cursos.forEach((aula)=>{
        let p = document.createElement("p");
        p.innerHTML = aula + "<br>--------------------------</br>";
        caixa.appendChild(p);
    })
}


  
   
  
  
  
  
  
  