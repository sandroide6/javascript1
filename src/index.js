import "./styles.css";

document.getElementById("app").innerHTML = `
Nuestra primera clase, ¡Que emoción!
`;

class Carro {
  constructor(year,color,estado,combustible) {
    this.year = year;
    this.color = color;
    this.estado = estado;
    this.combustible = combustible;
  
  }

  modelo() {
    console.log(  `El modelo de carro es: ${this.year}`);
    return this;
  }

  apariencia() {
    console.log(`El color del auto es: ${this.color}`);
    
    return this;
  }

  auto() {
   console.log(`El carro es:  ${this.estado}`);
   
    return this;
  }

  motor() {
    console.log(`Tipo de combustible:  ${this.combustible}`);
    
     return this;
   }
}

var chevroletDimax = Carro("2006", "GrizPlata", "Usado", "ACPM");
console.log(chevroletDimax.modelo());
console.log(chevroletDimax.apariencia());
console.log(chevroletDimax.auto());
console.log(chevroletDimax.motor());

var Mazda6 = Carro("2015", "NegroAfricano", "Nuevo", "ACPM");
console.log(chevroletDimax.modelo());
console.log(chevroletDimax.apariencia());
console.log(chevroletDimax.auto());
console.log(chevroletDimax.motor());

var RenaulCaptur = Carro("2020", "ArcoirisInclusivo", "Nuevo", "Diesel");
console.log(chevroletDimax.modelo());
console.log(chevroletDimax.apariencia());
console.log(chevroletDimax.auto());
console.log(chevroletDimax.motor());