//Escreva um programa JavaScript que crie uma classe `Livro` com propriedades para título, autor e ano de publicação.
//Inclua um método para exibir detalhes do livro. Crie uma subclasse chamada 'Ebook' que herde da classe 'Book'
//e inclua uma propriedade adicional para o preço do livro. Substitua o método de exibição para incluir o preço do livro. Crie uma instância da classe ‘Ebook’ e exiba seus detalhes.

class Livro {
    title;
    author;
    year;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    bookDetail() {
        this.title = title;
        this.author = author;
        this.year = year;
    }


    livro() {
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Year: ${this.year}`)
    }
}

class Book extends Livro {
    constructor(title, author, year, price) {
        super(title, author, year)
        this.price = price
        console.log(`Price is $ ${this.price}`)
    }

    bookDetail(title, author, year, price) {
        super.bookDetail(title, author, year, price);
        console.log(`Price is $ ${this.price}`)
    }
}

let livro1 = new Livro('Um amor para recordar', 'Nicholas Sparks', 2002, 35)

console.log('Book details:')
livro1.livro()