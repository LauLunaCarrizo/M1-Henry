// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//    var x = 10;
//    console.log(x); //imprime 10
//    console.log(a); //imprime 8 porque declaramos los valores de los parametros al final de la funcion donde a es igual a 8
//    var f = function (a, b, c) { 
//       b = a;
//       console.log(b); //imrpime 8 por asociatividad segun los valores declarados al final de la funcion
//       b = c;
//       var x = 5;
//    };
//    f(a, b, c); //no hace nada ya que no retorna
//    console.log(b); //imprime 9 porque solo devuelve por consola el valor dado al final de la funcion sin cambiar nada
// };
// c(8, 9, 10);
// console.log(b); // imprime 10 por llamar a una variable global creada al inicio
// console.log(x); //imprime 1 por llamar a la variable global creada al inicio 

const { cleanMessage } = require("@11ty/eleventy/src/EleventyErrorUtil");
const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger");


// console.log(bar); //imprime undefined ya que no tiene valor declarado
// console.log(baz); //imprime not defined ya que no existe aun una variable con ese nombre
// foo(); //imprime Hola! por hoisting
// function foo() {
//    console.log('Hola!');
// }
// var bar = 1;
// baz = 2;


// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor); //imprime el valor Franco porque la instruccion del if no tiene una condicion en sí para que cambie el valor original de Tony


// var instructor = 'Tony';
// console.log(instructor); //imprime Tony
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor); //imprime Franco porque la funcion ya esta entra parentesis siendo ejecutada
//    }
// })();
// console.log(instructor); //imprime Tony por llamar a la var global


// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor); //imprime The Flash 
//    console.log(pm); //imprime Reverse Flash creando una nueva variable
// }
// console.log(instructor);//imprime The Flash por ser una variable que cambio en el if
// console.log(pm); //imprime Franco por var global


// console.log(6 / "3") //2
// console.log("2" * "3")//6 
// console.log(4 + 5 + "px")//9px porque si la suma empieza con numeros, toma toda la suma como numeros
// console.log("$" + 4 + 5)//$45 porque si la suma empieza con string, toma toda la suma como concadenacion de string
// console.log("4" - 2)//2 porque lo toma al 4 como numero
// console.log("4px" - 2)//4px no se puede tomar como numero para la resta por lo que devuelve NaN (Not a Number)
// console.log(7 / 0)//infinito
// console.log({}[0])//al estar el objeto vacio por delante del array no imprime nada, de no ser asi mostraria el 0 del array
// console.log(parseInt("09")) //09 como numero entero (9)
// console.log(5 && 2)//se evalua como true && true devuelve el ultimo valor
// console.log(2 && 5)//se evalua como true && true devuelve el ultimo valor
// console.log(5 || 0) //evalua el valor true distinto de cero
// console.log(0 || 5)//evalua el valor true distinto de cero
// console.log([3]+[3]-[10])//en teoria puede realizar la primer suma dando como resultado un array con dos numeros contenidos [3,3] pero no es capaz de realizar la resta siguiente por lo que deberia hacer una conversion
// //                         a numeros, tal operacion no esta definida en js por lo que devuelve un valor incorrecto.
// console.log(3>2>1)// la declaracion 3>2 da true y luego la convierte en 1 y ahi vuelve a comparar con el ultimo numero. 1 no es mayor que 1 por lo que devuelve false
// console.log([] == ![])//true porque son dos arrays distintos. ambos estan vacios pero son dos arrays unicos


// function test() {
//     console.log(a); //a aun no esta definido
//     console.log(foo()); //por hoisting imprime 2
 
//     var a = 1;
//     function foo() {
//        return 2;
//     }
//  }
 
//  test();


// var snack = 'Meow Mix';

// function getFood(food) {
//    if (food) {
//       var snack = 'Friskies';
//       return snack; 
//    }
//    return snack;
// }

// getFood(false); //retorna undefined porque el valor false invalida todo lo que esta dentro del if


// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname; //aurelio de rosa por el contexto
//       },
//    },
// };

// console.log(obj.prop.getFullname()); //aurelio de rosa por el mismo contexto----Primer salida

// var test = obj.prop.getFullname;

// console.log(test()); //el parentesis esta vacio y no termina de determinar que elemento del test debe imprimir----Segunda salida


// function printing() {
//     console.log(1);
//     setTimeout(function () {
//        console.log(2);
//     }, 1000);
//     setTimeout(function () {
//        console.log(3);
//     }, 0);
//     console.log(4);
//  }
 
//  printing();

//  //primero imprime 1 por el console.log, luego el 4 y por ultimo los dos setTimeOut (3 y 2 respectivamente por su tiempo de espera)