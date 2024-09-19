// Defino una interfaz llamada 'Habilidad' 
export interface Habilidad {
  nombre: string;
  nivel: string;
}

// Aquí creo una interfaz llamada 'Empleado' que describe la estructura que deben seguir los objetos
// que representen a un empleado, tiene un 'nombre' y un 'puesto' como cadenas de texto,
// además de un array de 'habilidades', que siguen la estructura definida por la interfaz 'Habilidad'.
export interface Empleado {
  nombre: string;
  puesto: string;
  habilidades: Habilidad[];
}

// Ahora, defino una interfaz llamada 'Proyecto' que describe la estructura que deben seguir los objetos
// que representen un proyecto, tiene un 'nombre' y una 'descripción' como cadenas de texto,
// array de 'empleados', que siguen la estructura definida por la interfaz 'Empleado'.
export interface Proyecto {
  nombre: string;
  descripcion: string;
  empleados: Empleado[];
}

// Aquí declaro un array constante llamado 'empleados' que contiene objetos que siguen la estructura
// definida por la interfaz 'Empleado'. Cada empleado tiene un 'nombre', un 'puesto', y un array de 
// 'habilidades' con sus respectivos nombres y niveles.
export const empleados: Empleado[] = [
  {
    nombre: 'Roberto Carlos',
    puesto: 'Arquitecto de Software',
    habilidades: [
      { nombre: 'Seguridad de Software', nivel: 'Avanzado' },
      { nombre: 'Gestiòn de proyectos', nivel: 'Intermedio' },
    ]
  },
  {
    nombre: 'Carlos Alberto',
    puesto: 'Ingeniero de pruebas',
    habilidades: [
      { nombre: 'Pruebas automatizadas', nivel: 'Avanzado' },
      { nombre: 'Pruebas de carga', nivel: 'Intermedio' },
    ]
  }
];

// Aquí creo un array constante llamado 'proyectos' que contiene objetos que siguen la estructura
// definida por la interfaz 'Proyecto'. En este caso, defino un proyecto llamado 'Sistema de Gestión',
// que tiene una descripción y un equipo conformado por los empleados previamente definidos.
export const proyectos: Proyecto[] = [
  {
    nombre: 'Sistema de Gestión',
    descripcion: 'Un sistema para gestionar empleados y proyectos.',
    empleados: [empleados[0], empleados[1]]
  }
];

// Ahora, utilizo la destructuración para extraer el primer proyecto del array 'proyectos'
// y lo guardo en una constante llamada 'proyecto1'. Luego, extraigo las propiedades 'nombre', 
// 'descripcion' y 'empleados' de 'proyecto1' y las renombro como 'nombreProyecto', 'descripcion', 
// y 'equipo', respectivamente.
const [proyecto1] = proyectos;
const { nombre: nombreProyecto, descripcion, empleados: equipo } = proyecto1;

// Imprimo en la consola el nombre y la descripción del proyecto.
console.log(`Proyecto: ${nombreProyecto}`);
console.log(`Descripción: ${descripcion}`);

// Recorro cada empleado en el equipo, imprimiendo su nombre y puesto en la consola.
// Luego, para cada empleado, recorro sus habilidades e imprimo el nombre de la habilidad
// y su nivel de competencia.
equipo.forEach(({ nombre, puesto, habilidades }) => {
  console.log(`Empleado: ${nombre}, Puesto: ${puesto}`);
  habilidades.forEach(({ nombre: habilidad, nivel }) => {
    console.log(`  Habilidad: ${habilidad} (Nivel: ${nivel})`);
  });
});
