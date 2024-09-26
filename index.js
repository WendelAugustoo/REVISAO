//let, const, var

//function nome_da_funcao(parametro1, parametro2){
    // codigo   "codigo": Unknown word.
//}

//const nome_da_funcao = (parametro1, parametro2) => {

//}

//nome_da_funcao("", "")  "funcao": Unknown word.

const department = {
    id: 1,
    name: "vendas",
}

const person_a = {
    id:1, //number
    name: "João", //string
    age : 17,
    salary: 2100,
    department: department,
}

const person_b = {
    id: 2,
    name: "Pedro",
    age: "25",
    salary : 3200,
    department: department,
};

console.log(person_a, person_b);

const people = [person_a, person_b];

//console .log(people);
// Date

//const printPerson = (pPerson) => console.log(pPerson);
const printPerson = (pPerson) => {
    const { name, age, salary, department } = pPerson;
    
    console.log(
        `Nome: ${name}, Idade: ${age}, Salário: ${salary},
         Departamento: ${department.name}`
    );
};

const printPeople = (pPeople) => {
    for(let n = 0; n < pPeople.lenght; n++){
        printPerson(pPeople[n]);
    }
};

printPeople(people);

