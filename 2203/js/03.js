consola.log ( "03.js enlazado" ) ;
consola.log ("Ejercicio 03");
consola.log ("la matriz contiene los valores del 1 al 15");
numero=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
resultado=[];
console.log(numero);
for (var z=0; z< numero.length;z++){
    var numeros=numero[z];
    if(numeros % 2===0){
        resultado.push(numeros);
    }
}
consola.log ("en la siguiente matriz se obtienen los numeros de la primera matriz");
consola.log (resultado);