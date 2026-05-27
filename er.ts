abstract class Vehiculo {
  marca: string;
  modelo: string;
  año: number;

  constructor(marca: string, modelo: string, año: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  encender(): void {
    console.log("El vehículo está encendido");
  }

  abstract mover(): void;
}

class Auto extends Vehiculo {
  mover(): void {
    console.log("El auto se mueve por la carretera");
  }
}

class Moto extends Vehiculo {
  mover(): void {
    console.log("La moto avanza rápidamente");
  }
}

class Camion extends Vehiculo {
  mover(): void {
    console.log("El camión transporta carga pesada");
  }
}

const auto = new Auto("Toyota", "Corolla", 2020);
auto.encender();
auto.mover();