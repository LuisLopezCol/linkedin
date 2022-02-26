/* Parte 2

En esta parte evaluaremos la lógica en implementación de funciones para resolver problemas específicos. Por favor intentar resolver los problemas en la menor cantidad de líneas de código posible y con la mayor eficiencia en ejecución.

Los problemas se deben resolver en Javascript, no se aceptarán soluciones en otros lenguajes. Para la entrega de esta parte, por favor entregar un archivo llamado ‘parte2’ en el archivo .zip de la entrega general. 

4.	Explique qué significa en sus propias palabras: Function.prototype.bind
5.	¿Qué es la coerción en Javascript?
6.	¿Qué es una IIFE (Immediately Invoked Function Execution)? Escribe un ejemplo.
7.	¿Cuál es la diferencia entre una variable que es: null, undefined o undeclared? ¿Cómo se verifica cada uno de estos estados?
11.	¿Qué son los Lifecycle hooks en Angular?
*/

//1.	Escribir una función que recibe un arreglo de strings y retornar un arreglo con la longitud de cada string.
let arr = ["Lorem,", "ipsum", "dolor", "sit", "amet", "consectetur"];
console.log(arr);
console.log(arr.map(({ length }) => length));

//2.	Escribir una función que encuentre un número en un arreglo de números de la forma más eficiente posible. El arreglo de números de entrada puede estar desordenado.
//Datos en desorden -> Usamos Busqueda con dos indices -> en el peor de los casos el time complexity serà de O(n/2)
let arrSorted = [1, -15, 40, -5, 2, 63, 8, 11, 15];
let query = 11;
function search(arr, query) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    if (arr[start] == query || arr[end] == query) return true;
    start++;
    end--;
  }
  return false;
}
console.log(search(arrSorted, query));

//Si son datos en orden usar Binary Search:
let arrUnsorted = [-21, -15, 0, 5, 9, 13, 18, 29, 40];
let query2 = 9;

let binarySearch = function (arr, query, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === query) return true;
  // Busca en la izquierda
  if (arr[mid] > query) return recursiveFunction(arr, query, start, mid - 1);
  // Busca en la derecha
  else return recursiveFunction(arr, query, mid + 1, end);
};

if (binarySearch(arr, query, 0, arr.length - 1))
  console.log("Se encontró  el elemento");
else console.log("No se encontró");

//3.	Escribir una función que al ser llamada saludo(‘Hola’)(‘Mundo’) imprima el texto ‘Hola Mundo’. Ojo, la función se debe ejecutar tal cual saludo(‘Hola’)(‘Mundo’), no hay error al escribir este enunciado.
let saludo = (x) => (y) => `${x} ${y}`;
console.log(saludo("Hola")("Mundo"));

//8.	¿Qué es Angular?
/*
Angular es un framework basado en TypeScript, desarrollado y mantenido por Google para el desarrollo de aplicaciones web SPA.  Es un framework con una implementación simplista el cual cuenta con una completa documentación, posee paquetes que pueden ser agregados a cada proyecto para simplificar la implementación de funcionalidades en una forma eficiente y efectiva, además, al estar a cargo de Google es un framework que desde sus inicio ha estado en constante desarrollo y mejoramiento, donde con cada nuevo versionamiento se incluyen herramientas y la solución de inconvenientes, en adición a esto, existen herramientas y componentes de terceras partes que permiten una amplia gama de funcionalidades que se pueden agregar a los proyectos.
*/
//9.	¿Qué es un componente en Angular?
/*

*/

//10.	¿Qué es un servicio en Angular? ¿En qué se diferencia de un Pipe?
/*

*/

//12.	¿Por defecto, Angular hace el render de sus aplicaciones en el frontend o en el backend? ¿Cuál es la diferencia entre hacer el render en el front o back?
/*
Angluar realiza su renderizado en el front y se va renderizando en funcion de acciones que se realicen desde el front todo esto para garantizar una mejor experiencia al usuario desde que angular es un SPA

Sin embargo tenemos una tecnologìa llamda Angular Universal que harà lo que se llama un Server Side Rendering o un renderizado desde el servidor
*/
