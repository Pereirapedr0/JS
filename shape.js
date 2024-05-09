//Escreva um programa JavaScript que crie uma classe chamada 'Shape' com um método para calcular a área.
//Crie duas subclasses, 'Círculo' e 'Triângulo', que herdam da classe 'Forma' e substituem o método de cálculo de área.
//Crie uma instância da classe ‘Círculo’ e calcule sua área. Da mesma forma, faça o mesmo para a classe ‘Triângulo’.

class Shape {
    calculateArea() {

    }
}
class Circle extends Shape {
    contructor(radius) {
    super();
    this.radius = radius
}
calculateArea(radius){
    return Math.PI * this.radius * this.radius;
}
}
class Rectangle extends Shape {
  contructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}
let  circle = new Circle(15);
let  circleArea = circle.calculateArea();
console.log(`Circle Area: ${circleArea}`);

let rectangle = new Rectangle(5, 12);
let rectangleArea = rectangle.calculateArea();
console.log(`Rectangle Area: ${rectangleArea}`);
