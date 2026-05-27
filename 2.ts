abstract class Empleado {
  nombre: string;
  salarioBase: number;

  constructor(nombre: string, salarioBase: number) {
    this.nombre = nombre;
    this.salarioBase = salarioBase;
  }

  mostrarInformacion(): void {
    console.log("Empleado: " + this.nombre);
  }

  abstract calcularSalario(): number;
}

class Desarrollador extends Empleado {
  calcularSalario(): number {
    return this.salarioBase + 500;
  }
}

class Diseñador extends Empleado {
  calcularSalario(): number {
    return this.salarioBase + 300;
  }
}

class Gerente extends Empleado {
  calcularSalario(): number {
    return this.salarioBase + 1000;
  }
}

const desarrollador = new Desarrollador("Carlos", 1000);

desarrollador.mostrarInformacion();
console.log("Salario total: " + desarrollador.calcularSalario());