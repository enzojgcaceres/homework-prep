// var listaDeCompras = [];
// listaDeCompras[3] = 'tomates';
// listaDeCompras[1] = 'lechuga';

// console.log(listaDeCompras.length);
// listaDeCompras[1];
// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);
// Lenght
// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

// var colores = ['amarillo', 'azul',];
// colores.push('rojo');
// colores.unshift('verde');
// colores.pop();
// colores.shift();
// console.log(colores);

// var pintores = ["Picasso", "Velazquez","Van Gogh", "Dali"];
// var incluyeDali = pintores.includes('Dali');
// console.log(incluyeDali);

// var numeros = [10, 6, 8, 9];
// var cumpleCondicion = numeros.every((num) =>{
//     return num > 5;
// });
// console.log(cumpleCondicion);

 var palabra = 'Henri';
 var palabraSeparada = palabra.split('');
 console.log(palabraSeparada);
 palabraSeparada.pop();
 palabraSeparada.push('y');
 console.log(palabraSeparada);
 var palabraArreglada = palabraSeparada.join('');
 console.log(palabraArreglada);

// var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => console.log(num));
// numeros.forEach((num) => {
//    if (num === 3) {
//        console.log(num);
//    }
// })
// var masUno = numeros.map(num => {
//     return num + 1
// });
// console.log(masUno);

// var arr =[1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// function encontrarLetraP(string) {
//    var letras = string.split('');

//    for(let i = 0; i < letras.length; i++) {
        
//        if (letras[i] === 'p') {
//         console.log('Si contiene a p');
//        }
//    } 
// }

// encontrarLetraP('javaScript');
// encontrarLetraP('Henry');

//var arr = [];

// while(arr.length < 5) {
//     arr.push('BOOM')
// }

// console.log(arr);

// no usar "bucle infinito" usa muchos recursos de la computadora 
// var arr = [];
// var n = 1;

// while(n < 3) {
//    arr.push(Math.random());
// }