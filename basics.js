//Entorno: Node.js
//Lenguaje: Javascript

//Declaración de variable: crear una variable
//tipo de variable - nombre de la variable;

//var -> Variable en entorno legacy
var name;

//let -> Variable en entorno moderno
let petName;

//const -> Constante en entorno moderno
const schoolName = "CRESP";

//-----

//Asignación de valores: dar un valor a una variable

//Variables existentes
//nombre de variable - signo de igual - valor a asignar
name = "John";

//Declarar y asignar en una misma línea
var color = "Purple";

//Valores de una variable se pueden actualizar
color = "Blue";



//-----


//Tipos de valor que puede tener una variable

//Strings
var greeting = "Hello World!";

//Number

//Number con entero
var zero = 0;

//Number con decimales
var zeroPointFive = 0.5;

//Number con signo negativo

var minusFive = -5;


//Boolean
var isHomeworkFinished = false;
isHomeworkFinished = true;


//Undefined: No existe
var thisValueDoesntExist = undefined;

//Null: No tiene ningún valor
var thisHasNoValue = null;


//Objetos: Un conjunto de propiedades
//Objeto vacio
var person = {};

var bestSchool = "CRESP";

//Objeto con elementos
var school = {
    name: "CRESP",
    address: "Calle X col Y #Z",
    director: {
        name: "Luis Macías"
    }
};

//Imprimir valores
console.log(school);

//Para acceder a propiedades de objetos
//usar el operador .
console.log(school.name);

console.log(school.director.name);

//Acceder a propiedades mediante otra sintaxis
//Equivalente a console.log(school.name);
console.log(school["name"]);

//Equivalente a school.director
var schoolProperty = "director";
console.log(school[schoolProperty]);




//Funciones


//Función con nombre
var sayHi = function() {

    //Hacer referencia a una función con this
    this.color = "red";
    console.log(this.color);
}

//Para mandar a llamar el código de una función
sayHi();


//Función anónima
console.log(function() {});

//Función moderna
var sayBye = () => {
    //this no hace referencia a esta función
}


//Las funciones pueden tener parámetros

var sayHelloToSomeone = (name) => {
    console.log("Hello " + name);
};

//Al llamar funciones con parámetros, se deben
//enviar los parámetros
sayHelloToSomeone("Raul");


//Arreglos / conjuntos de valores
//Valores se separan por coma en el arreglo
var mascotas = [
    "Perro",
    "Gato",
    "Perico"
];

//Acceder a valores en específico por su posición
console.log(mascotas[1]);//Gato

//Indices son base 0


//Manejo de arreglos y objetos

//Imprimir todos los elementos de arreglos

//Imprimir todos los valores de un objeto

//Agregar valores a un arreglo

//Agregar valores a un objeto

//Quitar valores de un arreglo

//Quitar valores de un objeto


//Clases en javascript


