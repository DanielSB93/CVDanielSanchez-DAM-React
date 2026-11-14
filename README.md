# CV de Daniel Sánchez Bartolomé

Este es mi currículum online, hecho con **React** y **Vite** como práctica para el ciclo de **Desarrollo de Aplicaciones Multiplataforma (DAM)**. Es mi primer proyecto en React, así que lo he usado sobre todo para aprender cómo funcionan los componentes, las listas y el CSS con Flexbox.

**Puedes verlo aquí:** [cvdanielsanchezdamreact.vercel.app](https://cvdanielsanchezdamreact.vercel.app/)


## Qué incluye

El CV tiene una cabecera con mi foto y datos de contacto, y debajo dos columnas:

- **A la izquierda:** hard skills, soft skills, idiomas y certificaciones.
- **A la derecha:** sobre mí, experiencia, educación y voluntariado.

Vengo de trabajar varios años como técnico de laboratorio en I+D, y ahora estoy dando el salto al desarrollo de software. El CV refleja un poco esa mezcla.

---

## Cómo está hecho

Intenté que el código fuera fácil de mantener, así que **separé los datos de la parte visual**. Toda la información (experiencia, idiomas, habilidades...) está en arrays y objetos al principio de `App.jsx`:

```jsx
const idiomas = [
  { id: 1, nombre: "Español", nivel: "Nativo" },
  { id: 2, nombre: "Inglés", nivel: "Alto" },
];
```

Luego cada sección se genera con `map()`, así que si quiero añadir un trabajo nuevo o un idioma, solo tengo que añadir una línea en los datos, sin tocar el resto del código.

Algunas cosas que aprendí por el camino:

- **Listas con `map()` y `key`**: cada elemento necesita una clave única para que React lo identifique.
- **Clases dinámicas**: el color del nivel de cada idioma depende del propio dato. Con `` className={`nivel ${idioma.nivel}`} `` le aplico dos clases a la vez: una con la forma común y otra con el color.
- **Flexbox**: para las dos columnas, alinear la ubicación y las fechas a la derecha, y conseguir que las dos columnas terminen a la misma altura.
- **Despliegue**: subirlo a GitHub y publicarlo en Vercel, que se actualiza solo con cada `git push`.

---

## Tecnologías

- React
- Vite
- JavaScript
- CSS (sin librerías de estilos)
- Vercel para el despliegue

---

## Estructura

```
src/
├── assets/
│   └── foto_daniel_sanchez.jpg   # Foto de perfil
├── App.jsx                       # Datos del CV y estructura de la página
├── App.css                       # Estilos
├── index.css                     # Estilos globales
└── main.jsx                      # Punto de entrada de React
```

---

## Probarlo en local

Necesitas tener [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/DanielSB93/CVDanielSanchez-DAM-React.git
cd CVDanielSanchez-DAM-React
npm install
npm run dev
```

Y abre en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

Si quieres usarlo como plantilla para tu propio CV, solo tienes que cambiar los datos del principio de `App.jsx` y la foto de `src/assets/`.

---

## Autor

**Daniel Sánchez Bartolomé**, estudiante de DAM en el CPIFP Los Enlaces (Zaragoza).
GitHub: [@DanielSB93](https://github.com/DanielSB93)
