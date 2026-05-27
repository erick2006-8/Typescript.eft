class Curso {
  titulo: string;
  instructor: string;
  duracion: number;

  constructor(titulo: string, instructor: string, duracion: number) {
    this.titulo = titulo;
    this.instructor = instructor;
    this.duracion = duracion;
  }

  mostrarCurso(): void {
    console.log("Curso: " + this.titulo);
  }
}

class CursoGratis extends Curso {
  obtenerAcceso(): void {
    console.log("Acceso gratuito");
  }
}

class CursoPago extends Curso {
  precio: number;

  constructor(
    titulo: string,
    instructor: string,
    duracion: number,
    precio: number
  ) {
    super(titulo, instructor, duracion);
    this.precio = precio;
  }

  obtenerAcceso(): void {
    console.log("Acceso con pago de $" + this.precio);
  }
}

const curso = new CursoPago("TypeScript", "María", 10, 50);

curso.mostrarCurso();
curso.obtenerAcceso();