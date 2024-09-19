// Defino una interfaz llamada Vehiculo propiedades: marca, modelo y año, y también dos métodos: encender y apagar.
export interface Vehiculo {
  marca: string;
  modelo: string;
  año: number;

  // Defino un método que enciende el vehículo.
  encender(): void;

  // Defino un método que apaga el vehículo.
  apagar(): void;
}

// Creo un objeto llamado auto que sigue la estructura de la interfaz Vehiculo.
export const auto: Vehiculo = {
  marca: 'Toyota',
  modelo: 'Corolla',
  año: 2021,

  // Implemento el método encender para que imprima un mensaje en la consola cuando el vehículo se enciende.
  encender() { console.log(`${this.marca} ${this.modelo} ${this.año} ha sido encendido.`); },

  // Implemento el método apagar para que imprima un mensaje en la consola cuando el vehículo se apaga.
  apagar() { console.log(`${this.marca} ${this.modelo} ${this.año} ha sido apagado.`); }
};

// Llamo al método encender del objeto auto.
auto.encender();

// Llamo al método apagar del objeto auto.
auto.apagar();

// Creo otro objeto llamado vehiculo1 que también sigue la estructura de la interfaz Vehiculo.
export const vehiculo1: Vehiculo = {
  marca: 'Nissan',
  modelo: 'Tucson',
  año: 2021,

  // Implemento el método encender para vehiculo1.
  encender() { console.log('Nissan Altima encendido'); },

  // Implemento el método apagar para vehiculo1.
  apagar() { console.log('Nissan Altima apagado'); }
};

// Llamo al método encender del objeto vehiculo1.
vehiculo1.encender();

// Llamo al método apagar del objeto vehiculo1.
vehiculo1.apagar();

// Creo otro objeto llamado vehiculo2 que sigue la estructura de la interfaz Vehiculo.
export const vehiculo2: Vehiculo = {
  marca: 'Kia',
  modelo: 'Sorento',
  año: 2023,

  // Implemento el método encender para vehiculo2.
  encender() { console.log('Kia Sorento encendido'); },

  // Implemento el método apagar para vehiculo2.
  apagar() { console.log('Kia Sorento apagado'); }
};

// Llamo al método encender del objeto vehiculo2.
vehiculo2.encender();

// Llamo al método apagar del objeto vehiculo2.
vehiculo2.apagar();

// Defino una función llamada imprimirVehiculos que recibe un array de objetos de tipo Vehiculo
// y retorna un nuevo array con objetos que contienen las propiedades Marca, Modelo y Año.
export function imprimirVehiculos(vehiculos: Vehiculo[]) {
  return vehiculos.map(vehiculo => ({
    Marca: vehiculo.marca,
    Modelo: vehiculo.modelo,
    Año: vehiculo.año
  }));
}

// Llamo a la función imprimirVehiculos con un array de los vehículos auto, vehiculo1, y vehiculo2,
// y muestro el resultado en la consola en forma de tabla.
console.table(imprimirVehiculos([auto, vehiculo1, vehiculo2]));
