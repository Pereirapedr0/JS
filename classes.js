// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming

// PARADIGMAS DE PROGRAMAÇÃO

// programação procedural
//let professor;
//professor = "Claúdio";
//console.log(`Olá, professor ${professor}`);

// progamação orientada a objetos

// Classe: conceito abstrato do mundo real
// Pode parecer um preset
// Parece um certificado da escola, onde tudo é igual, mas muda o nome

class Professor {
    // propriedade da classe -> tipo variáveis
    name;
    age;
    course;
    gender;

    constructor(name, age, course, gender) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.gender = gender;


    }
    // metódos da classe -> tipo funções
    ensinar() {
        if (this.gender === 'Masculino') {
            console.log(`O professsor ${this.name} está ensinando ${this.course}`)
        } else {
            console.log(`A professsora ${this.name} está ensinando ${this.course}`)
        };
    };
}

// Herança e Encapsulamento em OOP em JS

// criar uma instância da classe, ou objeto da classe
let professor1 = new Professor('Claúdio', 20, 'História', 'Masculino');
let professor2 = new Professor('Roberto', 25, 'Matemática', 'Masculino');
let teacher = new Professor('Renata', 35, 'Português', 'Feminino');

console.log(professor1);
console.log(professor2);
console.log(teacher);

console.log(teacher.ensinar());
console.log(professor1.ensinar());