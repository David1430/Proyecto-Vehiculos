// Defino una interfaz llamada 'Empleado' que describe la estructura que deben seguir los objetos
// que representen a un empleado, especificando que deben tener un 'puesto' como cadena de texto
// y un 'salario' 
export interface Empleado {
  puesto: string;
  salario: number;
}

// Aquí creo otra interfaz llamada 'Persona' que describe la estructura que deben seguir los objetos
// que representen a una persona. Deben tener un 'nombre' como cadena de texto, una 'edad' como número,
// una 'dirección' como cadena de texto, y un 'empleo' que sigue la estructura definida en la interfaz 'Empleado'.
export interface Persona {
  nombre: string;
  edad: number;
  direccion: string;
  empleo: Empleado;
}

// Ahora, declaro un objeto constante llamado 'persona' que sigue la estructura definida por la interfaz 'Persona'.
// Le asigno valores específicos, indicando que esta persona se llama 
//Su nombre, edad, direcciòn, puesto y salario
export const persona: Persona = {
  nombre: 'Natalia Villa',
  edad: 29,
  direccion: 'Cra 123 Bello Horizonte',
  empleo: {
    puesto: 'Gerente de proyecto',
    salario: 9000000
  }
};

// Finalmente, defino una función llamada 'extraerDatosPersona' que toma un objeto del tipo 'Persona' como parámetro.
// En esta función, utilizo la desestructuración para extraer el 'nombre' de la persona y el 'puesto' de su empleo.
// Luego, retorno un objeto que contiene solamente estos dos datos.
export const extraerDatosPersona = (persona: Persona) => {
  const { nombre, empleo: { puesto } } = persona;
  return { nombre, puesto };
};
