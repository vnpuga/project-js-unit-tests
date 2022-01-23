/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.
  Atenção: não remova os `for`s da função e sim corrija os erros presentes.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let index = 2; index <= 3; index += 1) {
      myArray.push(index);
    }
  }
  return myArray;
};
console.log(myCounter());
// alterei p/ const a variável myArray (var vaza escopo)
// dentro do for, troquei var por let (pq o var vaza escopo e let não, e let permite reatribuir o valor), e corrigi o nome da variável no 2o for, q estava igual ao 1o.
module.exports = myCounter;
