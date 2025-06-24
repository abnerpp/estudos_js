const alunos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const init = 0;
const turma = alunos.reduce((a, b) => a + b, init,
); 
const media = turma / alunos.length;
console.log("Turma:", turma);
console.log("Média:", media);  
const aprovados = alunos.filter(aluno => aluno >= 6);
const reprovados = alunos.filter(aluno => aluno < 6);
console.log("Aprovados:", aprovados);
console.log("Reprovados:", reprovados);