abstract class CuentaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(cantidad: number): void {
    this.saldo += cantidad;
    console.log("Depósito realizado");
  }

  retirar(cantidad: number): void {
    if (cantidad > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= cantidad;
      console.log("Retiro realizado");
    }
  }

  abstract calcularInteres(): number;
}

class CuentaAhorros extends CuentaBancaria {
  calcularInteres(): number {
    return this.saldo * 0.05;
  }
}

const cuenta = new CuentaAhorros("Erick", 1000);

cuenta.depositar(500);
cuenta.retirar(200);

console.log("Interés: " + cuenta.calcularInteres());