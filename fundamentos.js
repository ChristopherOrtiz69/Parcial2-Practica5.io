// Clase base Polígono
class Poligono {
    constructor(lados) {
      this.lados = lados;
    }
  
    // Método para calcular el perímetro
    calcularPerimetro() {
      return this.lados.reduce((suma, lado) => suma + lado, 0);
    }
  
    // Método para calcular el área (a implementar en las clases hijas)
    calcularArea() {
      console.log("El método calcularArea debe ser implementado en las clases hijas.");
    }
  }
  
  // Clase hija Triángulo
  class Triangulo extends Poligono {
    constructor(lado1, lado2, lado3) {
      super([lado1, lado2, lado3]);
    }
  
    // Implementación del cálculo del área para un triángulo
    calcularArea() {
      const semiPerimetro = this.calcularPerimetro() / 2;
      const area = Math.sqrt(semiPerimetro * (semiPerimetro - this.lados[0]) * (semiPerimetro - this.lados[1]) * (semiPerimetro - this.lados[2]));
      return area;
    }
  }
  
  // Clase hija Cuadrado
  class Cuadrado extends Poligono {
    constructor(lado) {
      super([lado, lado, lado, lado]);
    }
  
    // Implementación del cálculo del área para un cuadrado
    calcularArea() {
      const area = this.lados[0] ** 2;
      return area;
    }
  }
  
  // Clase hija Pentágono
  class Pentagono extends Poligono {
    constructor(lado) {
      super([lado, lado, lado, lado, lado]);
    }
  
    // Implementación del cálculo del área para un pentágono
    calcularArea() {
      const apotema = (this.lados[0] / 2) / Math.tan(Math.PI / 5);
      const area = (5 * this.lados[0] * apotema) / 2;
      return area;
    }
  }
  
  // Ejemplo de uso
  const triangulo = new Triangulo(5, 7, 8);
  const cuadrado = new Cuadrado(6);
  const pentagono = new Pentagono(10);
  
  console.log("Perímetro del triángulo:", triangulo.calcularPerimetro());
  console.log("Área del triángulo:", triangulo.calcularArea());
  
  console.log("Perímetro del cuadrado:", cuadrado.calcularPerimetro());
  console.log("Área del cuadrado:", cuadrado.calcularArea());
  
  console.log("Perímetro del pentágono:", pentagono.calcularPerimetro());
  console.log("Área del pentágono:", pentagono.calcularArea());
  

  const triangulo2 = new Triangulo(5, 5, 5);
  console.log("Perímetro del triángulo:", triangulo2.calcularPerimetro());

  const triangulo3 = new Triangulo(5,5,5);
  console.log("Área del triángulo:", triangulo3.calcularArea());