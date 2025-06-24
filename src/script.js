const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("src"));
app.get("/", (req, res) => {
  const alunos = [
    { nome: "Breno", nota: 8 },
    { nome: "Abner", nota: 10 },
    { nome: "Paulo", nota: 9 },
    { nome: "Victor", nota: 7 },
    { nome: "Gustavo", nota: 6 },
    { nome: "Ana", nota: 5 },
    { nome: "João", nota: 4 },
    { nome: "Maria", nota: 3 },
    { nome: "Pedro", nota: 2 },
    { nome: "Carla", nota: 1 },
  ];

const turma = alunos.reduce((a, b) => a + b.nota, 0) / alunos.length;
console.log("A média geral da turma é:", turma);
console.log("Quantidade de alunos:", alunos.length);
const aprovados = alunos.filter(aluno => aluno.nota >= 6);
const reprovados = alunos.filter(aluno => aluno.nota < 6);
console.log("Aprovados:", aprovados);
console.log("Reprovados:", reprovados);

    return res.send(`
      <h1>Alunos e Notas</h1>
      <p>Média Geral: ${turma.toFixed(2)}</p>
      <p>Total de Alunos: ${alunos.length}</p>
      <h2>Aprovados</h2>
      <ul>
        ${aprovados.map(aluno => `<li>${aluno.nome} - Nota: ${aluno.nota}</li>`).join('')}
      </ul>
      <h2>Reprovados</h2>
      <ul>
        ${reprovados.map(aluno => `<li>${aluno.nome} - Nota: ${aluno.nota}</li>`).join('')}
      </ul>
    `); 
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
