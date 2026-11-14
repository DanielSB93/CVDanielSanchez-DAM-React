# CV Daniel Sánchez Bartolomé — React + Vite

Currículum vitae interactivo desarrollado con **React** como práctica del ciclo de **Desarrollo de Aplicaciones Multiplataforma (DAM)**.

🔗 **Ver online:** [cvdanielsanchezdamreact.vercel.app](https://cvdanielsanchezdamreact.vercel.app/)

---

## Descripción

Aplicación de una sola página que muestra mi CV con:

- Cabecera con foto de perfil y datos de contacto
- Hard Skills y Soft Skills
- Idiomas con indicador de nivel por colores
- Certificaciones
- Sobre mí
- Experiencia profesional, Educación y Voluntariado

Toda la información está separada en **arrays y objetos de datos** al principio de `App.jsx`, y se pinta en pantalla con el método `map()`. Así el CV se puede modificar cambiando solo los datos, sin tocar la estructura.

## Tecnologías

- React
- Vite
- JavaScript (JSX)
- CSS (Flexbox)
- Despliegue en Vercel

## Estructura del proyecto

```
src/
├── assets/
│   └── foto_daniel_sanchez.jpg   # Foto de perfil
├── App.jsx                       # Componente principal: datos del CV y renderizado
├── App.css                       # Estilos del CV
└── main.jsx                      # Punto de entrada de la aplicación
```

## Ejecutar en local

Requisitos: tener instalado [Node.js](https://nodejs.org/).

```bash
# Clonar el repositorio
git clone https://github.com/DanielSB93/CVDanielSanchez-DAM-React.git
cd CVDanielSanchez-DAM-React

# Instalar dependencias
npm install

# Arrancar el servidor de desarrollo
npm run dev
```

Después abre en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Autor

**Daniel Sánchez Bartolomé** — Estudiante de DAM
