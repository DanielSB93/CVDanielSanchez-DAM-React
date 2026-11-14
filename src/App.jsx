import { useState } from 'react'

// Imagen del CV importada 
import CVImg from './assets/foto_daniel_sanchez.jpg'

// Importamos la hoja de estilos
import './App.css'

/* ============================================================
AQUI DECLARAMOS LA INFORMACION DEL CV
  HACEMOS EL CV MODULAR, PODEMOS CAMBIAR LA INFO SIN 
  RECORRER TODO EL CODIGO
*/

// Constante user donde guardamos la informacion basica del usuario
const user = {
  name: "Daniel Sanchez Bartolome",
  titulo: "Estudiante de DAM | Técnico de Laboratorio",
  email: "danielsanchezbartolome@gmail.com",
  tlfn: " +34 659-626-105",
  location: "Zaragoza, España",
  aboutMe: "Tras 6 años como Técnico de Laboratorio en I+D (CSIC, Eurofins), transiciono al desarrollo de software (DAM) en busca de mayor creatividad técnica. Ahora aplico mi rigor analítico, metodología y experiencia en resolución de problemas al diseño de soluciones eficientes mediante código."
};

// Array de objetos clave-valor con la informacion de los idiomas que habla (Solo acepta nivel nativo, alto e iniciacion)
const idiomas = [
  { id: 1, nombre: "Español", nivel: "Nativo" },
  { id: 2, nombre: "Inglés", nivel: "Alto" },
  { id: 3, nombre: "Aleman", nivel: "Iniciacion" },
];

// Array de string con las hardskills del usuario
const hardskills = ["Java", ".Net", "SQL", "GLP", "I+D", "SCADA"];

// Array de string con las softskills del usuario
const softskills = ["Coordinacion de equipos", "Rapida capacidad de aprendizaje", "Organizacion y gestion del tiempo"];

// Array de objetos clave-valor con la informacion de los puestros de trabajo 
const experiencia = [
  { id: 1, cargo: "Junior Developer", empresa: "Ibercaja Gestion", ubicacion: "Zaragoza", periodo: "2026 - Presente", descripcion: "Desarollo de apps de uso interno" },
  { id: 2, cargo: "Tecnico Laboratorio", empresa: "Eurofins Agroscience Services", ubicacion: "Hamburgo", periodo: "2023 - 2025", descripcion: "Analisis y validacion de uso de pesticidas" },
  { id: 3, cargo: "Tecnico de I+D", empresa: "CSIC, Nurel, IQE Group", ubicacion: "Zaragoza", periodo: "2018 - 2023", descripcion: "Trabajos varios de laboratorio" },
];

// Array de objetos clave-valor con la informacion de los cursos o titulos 
const formacion = [
  { id: 1, centro: "C.P.I. Los Enlaces", titulo: "Téc. Sup. Desarrollo de Aplicaciones", ubicacion: "Zaragoza", periodo: "2025 - Presente" },
  { id: 2, centro: "C.P.I.F.P. Pirámide", titulo: "Téc. Sup. Análisis y Control de Calidad", ubicacion: "Huesca", periodo: "2015 - 2017" }
];

// Array de objetos clave-valor con la informacion de voluntariados
const voluntariado = [
  { id: 1, titulo: "Director y Monitor de Tiempo Libre", modalidad: " Grupo Scout Albada", periodo: "2012 - 2020", descripcion: "Educacion mediante la accion" }
];

// Array de string con las certificaciones del usuario
const certificaciones = ["Manipulador de Alimentos", "Titulo de Director de tiempo libre", "Titulo de monitor de tiempo libre"]

/* ============================================================
Componente principal: función que devuelve el JSX que se muestra en pantalla
*/ 
function App() {

  /* ============================================================
  Generamos listas con el metodo map()
  Asignamos en todas una clave para diferenciar los elementos, 
    en los arrays de objetos la clave es el ID y en los arrays de string las claves son el propio elemento.
    Se emplean funciones lambda.
  Cada una de las listas enlaza con la informacion guardada en los arrays superiores
  */

  // En idiomas usamos la propia variable del idioma para asignar el nivel y como afectara al css
  const listarIdiomas = idiomas.map(idioma =>

    <div key={idioma.id} className='idioma'>
      <div className="nombre-idioma">{idioma.nombre}</div>
      <div className={`nivel ${idioma.nivel}`}>{idioma.nivel}</div>  
    </div>
  );

  const listarHardSkills = hardskills.map(skill =>
    <li key={skill} className="habilidad">{skill}</li>
  );

  const listarSoftSkills = softskills.map(skill =>
    <li key={skill} className="habilidad">{skill}</li>
  );

  const listarExperiencia = experiencia.map(trabajo =>
    <div key={trabajo.id} className="item-experiencia">
      <div className='ContenedorDivisor'>
      <div className='ContenedorMayor'>
      <h3>{trabajo.cargo}</h3>
      <p className="empresa">{trabajo.empresa}</p>
    
      </div>
      <div className='ContenedorMenor'>
      <p >{trabajo.ubicacion}</p>
      <p className="periodo">{trabajo.periodo}</p>
      </div>
      </div>
      <p>{trabajo.descripcion}</p>
    </div>
    
  );

  const listarFormacion = formacion.map(estudio =>
    <div key={estudio.id} className="item-experiencia">
            <div className='ContenedorDivisor'>
      <div className='ContenedorMayor'>
      <h3>{estudio.titulo}</h3>
      <p className="empresa">{estudio.centro}</p>
      </div>
      <div className='ContenedorMenor'>
      <p className="periodo">{estudio.periodo}</p>
      </div>
      </div>
    </div>
  );

  const listarVoluntariado = voluntariado.map(causa =>

    <div key={causa.id} className="item-experiencia">
      <div className='ContenedorDivisor'>
      <div className='ContenedorMayor'>
      <h3>{causa.titulo}</h3>
      <p className="empresa">{causa.modalidad}</p>
    
      </div>
      <div className='ContenedorMenor'>
      <p className="periodo">{causa.periodo}</p>
      </div>
      </div>
      <p>{causa.descripcion}</p>
    </div>
  );

  const listarcertificaciones = certificaciones.map(titulo =>
    <div key={titulo} className='certificacion'>
      <p>{titulo}</p>
    </div>
  );

  /* ============================================================
  En el return indicamos lo que devolvemos por pantalla (En este caso concreto).
  */
  return (
    <div className="contenedor-principal">

      {/* Contenderor Header --> Foto de perfil e informacion personal */}
      <div className="header">
        <div className='ContenedorDivisor'>

          {/* Foto de perfil que importamos antes cerrada con {}  */}
          <img
            src= {CVImg}
            alt="Mi foto"
            className="foto-perfil"
          />

          {/* Introsucimos los distintos datos de contact que definimos en la constante user, llamamos a sus elementos con user.variable */}
          <div className='Header-Info'>
            <h1>{user.name}</h1>
            <h2>{user.titulo}</h2>
            <p>📧 {user.email} | 📱 {user.tlfn} | 📍 {user.location}</p>
          </div>
        </div>
      </div>

      {/* Contenedor Cuerpo --> dos columnas con informacion */}
      <div className="ContenedorDivisor">

        {/* Contenedor mas pequeño situado a la izquierda */}
        <div className="ContenedorMenor">

          {/* Habilidades (Hard Skills). Lista no ordenada generada con map() / Llamamos al metodo con {metodo}*/}
          <div className="seccion">
            <h2 className="titulo-seccion">Hard Skills</h2>
            <ul>
              {listarHardSkills}
            </ul>
          </div>

          {/* Habilidades (Soft Skills).*/}
          <div className="seccion">
            <h2 className="titulo-seccion">Soft Skills</h2>
            <ul>
              {listarSoftSkills}
            </ul>
          </div>

          {/* Idiomas */}
          <div className='seccion'>
            <h2 className="titulo-seccion">Idiomas</h2>
            <div className='lista'>
              {listarIdiomas}
            </div>

          </div>

          {/* Certificaciones */}
          <div className='seccion'>
            <h2 className="titulo-seccion">Certificaciones</h2>
            <div className='lista'>
              {listarcertificaciones}
            </div>

          </div>

        </div>

        {/* Contenedor mas grande situado a la izquierda */}
        <div className="ContenedorMayor">

          {/* Sobre Mí. Seccion donde incluimos la informacion guardada sobre mi*/}
          <div className="seccion">
            <h2 className="titulo-seccion">Sobre Mí</h2>
            <p>{user.aboutMe}</p>
          </div>

          {/* Experiencia --> Mantenemos la misma estrutrua, un contenderor div que da el mimso estilo a las secciones, un titulo de la seccion y la informacion generada con la funcion map() */}
          <div className="seccion">
            <h2 className="titulo-seccion">Experiencia</h2>
            {listarExperiencia}
          </div>

          {/* Educación / Formacion */}
          <div className="seccion">
            <h2 className="titulo-seccion">Educación</h2>
            {listarFormacion}
          </div>

          {/* Voluntariado */}
          <div className="seccion">
            <h2 className="titulo-seccion">Voluntariado</h2>
            {listarVoluntariado}
          </div>

        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para que main.jsx pueda importarlo y mostrarlo
export default App
