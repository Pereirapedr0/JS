//Escreva um programa JavaScript que crie uma classe chamada 'Veículo' com propriedades de marca, modelo e ano.
//Inclui um método para exibir detalhes do veículo. Crie uma subclasse chamada 'Carro' que herda da classe 'Veículo'
//e inclui uma propriedade adicional para o número de portas. Substitua o método de exibição para incluir o número de portas.

class Vehicle {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetail() {
        console.log(`Make: ${this.make}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)

    }

}
class car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year)
        this.doors = doors;

    }
    displayDetail() {
        super.displayDetail();
        console.log(`Doors: ${this.doors}`)
    }
}

let vehicle1 = new Vehicle('volkswagen', 'Voyage', 2014)
console.log('Vehicel details:')
vehicle1.displayDetail()



let car1 = new car('volksvagen', 'voyage', 2014, 4)
console.log('\nVehicel details:')
car1.displayDetail()