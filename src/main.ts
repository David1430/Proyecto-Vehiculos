import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

//Importa los datos de los vehiculos
import { auto } from './gestionVehiculo.ts'
import { vehiculo1 } from './gestionVehiculo.ts'
import { vehiculo2 } from './gestionVehiculo.ts'
import { imprimirVehiculos } from './gestionVehiculo.ts'

//Importa los datos del sistema de empleados y proyectos
import { proyectos } from './empleados.ts'

// Importa los datos de inventario de vehículos
import { empleado, extraerDatosCarros } from './inventarioVehiculos.ts'

// Importa los datos de destructuración e interfaces
import { persona, extraerDatosPersona } from './desestructuracionInterfaces.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Haga clic en los logotipos de Vite y TypeScript para obtener más información
    </p>
  </div>

  <!-- Aquí añadimos el contenedor para el proyecto y los empleados -->
    <h2>Sistema de Gestión de Empleados y Proyectos</h2>
    <div id="proyecto"></div>
    <ul id="empleados-lista"></ul>



     <!-- Contenedor para el inventario de vehículos vendidos -->
    <h2>Inventario de Vehículos Vendidos</h2>
    <ul id="carros-lista"></ul>

    <!-- Contenedor para la persona y su empleo -->
  <h2>Datos de la Persona</h2>
  <p id="persona-info"></p>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

auto.encender();
auto.apagar();

// Imprimir los vehículos
console.table(imprimirVehiculos([auto, vehiculo1, vehiculo2]));

// Sistema de Gestión de Empleados y Proyectos
const [proyecto1] = proyectos;
const proyectoDiv = document.querySelector<HTMLDivElement>('#proyecto');
const empleadosLista = document.querySelector<HTMLUListElement>('#empleados-lista');

// Mostrar los datos del proyecto
if (proyectoDiv) {
  proyectoDiv.innerHTML = `
    <h3>${proyecto1.nombre}</h3>
    <p>${proyecto1.descripcion}</p>
  `;
}

// Mostrar los datos de los empleados
if (empleadosLista) {
  proyecto1.empleados.forEach((empleado) => {
    empleadosLista.innerHTML += `
      <li>
        <strong>${empleado.nombre}</strong> - ${empleado.puesto}
        <ul>
          ${empleado.habilidades.map(habilidad => `<li>${habilidad.nombre} (Nivel: ${habilidad.nivel})</li>`).join('')}
        </ul>
      </li>
    `;
  });
}

// Sistema de Inventario de Vehículos Vendidos
const carrosLista = document.querySelector<HTMLUListElement>('#carros-lista');

// Mostrar los datos de los carros vendidos
if (carrosLista) {
  const carros = extraerDatosCarros(empleado);

  carros.forEach(carro => {
    carrosLista.innerHTML += `
      <li>
        <strong>Marca:</strong> ${carro.marca} <br>
        <strong>Modelo:</strong> ${carro.modelo} <br>
        <strong>Tipo de motor:</strong> ${carro.tipoMotor}
      </li>
      <hr>
    `;
  });
}

// Datos de la Persona
const personaInfo = document.querySelector<HTMLParagraphElement>('#persona-info');

// Mostrar los datos de la persona
if (personaInfo) {
  const { nombre, puesto } = extraerDatosPersona(persona);
  personaInfo.innerHTML = `
    <strong>Nombre:</strong> ${nombre} <br>
    <strong>Puesto:</strong> ${puesto}
  `;
}
