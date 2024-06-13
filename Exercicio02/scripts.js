const students = [
  {
    name: "Sarah",
    grade1: 7,
    grade2: 8,
  },
  {
    name: "Alex",
    grade1: 0,
    grade2: 5,
  },
  {
    name: "Carlos",
    grade1: 10,
    grade2: 10,
  },
  {
    name: "Beth",
    grade1: 9,
    grade2: 9,
  }
]

function calculateGrade() {
  for(let i = 0; i < students.length; i++) {
    let student = students[i].name
    let finalGrade = (students[i].grade1 + students[i].grade2) / 2
  

  if(finalGrade < 7) {
    alert(`A média do(a) aluno(a) ${student} é: ${finalGrade}
    Não foi dessa vez ${student}! Tente novamente!`)
  } else {
    alert(`A média do(a) aluno(a) ${student} é: ${finalGrade}
    Parabéns ${student}! Você foi aprovado(a) no concurso!`)
  }
}
}


calculateGrade()
