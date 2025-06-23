export const alunos = [
  { nome: "Breno", nota: 8 },
  { nome: "Abner", nota: 10 },
  { nome: "Paulo", nota: 9 },
  { nome: "Victor", nota: 7 },
];

const media = alunos.reduce((acc, valor) => acc + valor.nota, 0) / alunos.length;
console.log(media);

alunos.push({ nome: "Gustavo", nota: 6 });
console.log(alunos);
console.log(alunos);

