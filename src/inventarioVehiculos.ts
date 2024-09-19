// Defino una interfaz llamada Motor, que describe la estructura de un motor. Propiedades: tipo y potencia.
export interface Motor {
  tipo: string;
  potencia: number;
}

// Defino una interfaz llamada Carro. Propiedades: marca, modelo, año y un objeto motor de tipo Motor.
export interface Carro {
  marca: string;
  modelo: string;
  año: number;
  motor: Motor;
}

// Defino una interfaz llamada Empleado. Propiedades: nombre y un array de carros vendidos de tipo Carro.
export interface Empleado {
  nombre: string;
  carrosVendidos: Carro[];
}

// Creo un objeto llamado empleado que sigue la estructura de la interfaz Empleado.
export const empleado: Empleado = {
  nombre: 'Pedro Perdomo',
  carrosVendidos: [
    // Defino el primer carro vendido, un Toyota Corolla del año 2022 con un motor de gasolina.
    {
      marca: 'Ford',
      modelo: 'Mustang',
      año: 2018,
      motor: {
        tipo: 'Gasolina',
        potencia: 115,
      }
    },
    // Defino el segundo carro vendido, un Honda Civic del año 2021 con un motor híbrido.
    {
      marca: 'Nissan',
      modelo: 'Sentra',
      año: 2014,
      motor: {
        tipo: 'Gasolina',
        potencia: 132,
      }
    },
    // Defino el tercer carro vendido, un Ford Mustang del año 2020 con un motor de gasolina.
    {
      marca: 'Volkswagen',
      modelo: 'Golf',
      año: 2012,
      motor: {
        tipo: 'Diesel',
        potencia: 210,
      }
    }
  ]
};

// Defino una función llamada extraerDatosCarros, que toma un objeto de tipo Empleado
// y retorna un array de objetos con las propiedades marca, modelo y tipoMotor extraídas de los carros vendidos.
export const extraerDatosCarros = (empleado: Empleado) => {
  return empleado.carrosVendidos.map(({ marca, modelo, motor }) => ({
    marca,
    modelo,
    tipoMotor: motor.tipo
  }));
};
