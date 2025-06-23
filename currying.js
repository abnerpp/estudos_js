const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobra = n => n * 2;
const dobro = numeros.map(dobra);
const triplo = numeros.map(n => n * 3);
const exponencial = triplo.map(n => n ** 2);

console.log(numeros);
console.log(dobro);
console.log(triplo);
console.log(exponencial);
