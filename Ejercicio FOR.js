
  //este va imprimir de 1 en 1 numeros impar //
  for (let i = 1; i < 20; i++) {
    if (i % 2 !== 0) {
        consolo.log(i);
    }


  //Escribe un programa que utilice un bucle for para imprimir los números del 1 al 10 en la consola. //

  for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Escribe un programa que utilice un bucle for para imprimir los números del 10 al 1 en orden descendente. en java script//

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Escribe un programa que utilice un bucle for para imprimir todos los números pares entre 2 y 20.//

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//Imprime los números impares del 1 al 19://

for (let i = 1; i < 20; i += 2) {
  console.log(i);
}

//Imprime la tabla de multiplicar del 5:
//Escribe un programa que utilice un bucle for para imprimir la tabla de multiplicar del 5, desde 5x1 hasta 5x10.//

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//Imprime los primeros 10 números cuadrados:
//Escribe un programa que utilice un bucle for para imprimir los primeros 10 números elevados al cuadrado (1², 2², 3², ...).


for (let i = 1; i <= 10; i++) {
  console.log(`${i}² = ${i * i}`);
}
