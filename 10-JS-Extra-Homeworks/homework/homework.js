// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = Object.entries(objeto);
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let result = {};
  for (let i = 0; i < string.length; i++){
    if (result[string[i]]){
        result[string[i]]++;
      } else{
        result[string[i]]=1;
      }
    }
    return result;
}

console.log(numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda'))




function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = ''; 
  var minuscula = '';
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayuscula = mayuscula + s[i];
    } else if(s[i] === s[i].toLowerCase()){
      minuscula = minuscula + s[i];
    }
  }
  return (mayuscula + minuscula)
}
console.log(capToFront('soyHENRY'))

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strProv = str.split('').reverse().join('');
  return strProv.split(' ').reverse().join(' ');
}
console.log(asAmirror('The Henry Challenge is close!'))


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var ReverseNumber = numero.toString().split('').reverse().join('');
  ReverseNumber = parseInt(ReverseNumber);
  if(numero === ReverseNumber){
    return `Es capicua`;
  } else {
    return `No es capicua`;
  }
}
console.log(capicua(343))



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.split('a').join('').split('b').join('').split('c').join('');
}

const cadenas = [
  'Hola',
  'mañana',
  'manzana',
  'abc123',
  'temprano',
  '',
];

cadenas.forEach(c => {
  console.log(`${c} -> ${deleteAbc(c)}`);
});


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a,b) => a.length - b.length);
}
console.log(sortArray(["You", "are", "beautiful", "looking"]));



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arreglo1 = new Set(arreglo1);
  arreglo2 = new Set(arreglo2);
  return [...arreglo1].filter(item => arreglo2.has(item));
}

var arreglo1 = [ 1, 2, 3 ];
var arreglo2 = [ 2, 3, 4, 5 ];

var common = buscoInterseccion(arreglo1, arreglo2);
console.log("Common elements are: " + common);  




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

