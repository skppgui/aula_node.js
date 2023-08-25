/* let meuArray = ['Guilherme', 'Gabryela', 'Juan', 23,49];

console.table(meuArray);
meuArray.push("Senai", "SPFC Campeão Mundial");
console.table(meuArray)
console.log(meuArray[4])
meuArray.unshift(123456)
console.table(meuArray)

let frutas = ["Banana", "Laranja", "Maçã", "Manga",];

console.table(frutas);

frutas.splice(2,1);   

console.table(frutas);  */

/* let fruta = ["Banana", "Laranja", "Maçã", "Pera", "Melancia", "Morango", "Uva", "Kiwi"];

console.table(fruta);

fruta.splice(0,1);

console.table(fruta);

fruta.splice(1,1, "Banana");

console.table(fruta);

let posicao = fruta.indexOf("Maçã");

console.log("Posição da fruta: "+posicao);

fruta.splice(1,1);

console.table(fruta);

fruta.sort();
console.table(fruta);
console.log("tamanho da matriz : " + fruta.length)
 */

/* Somando valores de uma matriz */

/* Criando a função com o nome SOMA */
/* function somaArray(val1, val2, val3){
    let resp = val1+val2+val3;
    return resp;
}
let x = somaArray(65,3,236)
console.log("Resposta da soma :" + x) */

/* function somaArray(val1, val2, val3, val4) {
  let resp = val1 + val2 + val3 + val4;
  return resp;
}
let x = somaArray(6.3, 9.2, 4.6, 5.1);
console.log(
  "Resposta da soma :" + x.toFixed(2)
); */ /* toFixed, serve para arredondar o valor */

/* function mediaNota(x1,x2,x3,x4){
    r = (x1+x2+x3+x4)/4
    return r.toFixed(2);
}

console.log("Media :" + mediaNota(5.5,6.5,9.0,8.5)) */

/* Calcular a soma soa números de um array[] */
function somarArray(x) {
  let soma = 0;
  let z = 0;

  while (z <=x.length-1) {
    soma += x[z];
    z++;
  }

  return soma;
}

/* Passando os valores para array [] */
let pezinho = [23, 23, 25, 23, 2, 5, 6, 9, 8, 1, 2, 6];

let resultado = somarArray(pezinho);
console.log("Resultado da soma : " + resultado);
