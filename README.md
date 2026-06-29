# 🍽️ D'Arlet - Restaurante de Experiencias Gastronómicas del Perú

🔗 Demo en vivo: *(Agregar enlace cuando publiques el proyecto en Vercel o Netlify)*

Aplicación web desarrollada como proyecto del curso de Desarrollo Web. Permite a los usuarios explorar experiencias gastronómicas representativas de las tres regiones del Perú (Costa, Sierra y Selva), visualizar contenido multimedia y realizar reservas mediante un formulario conectado a una base de datos PostgreSQL.

---

# 🌎 Sobre el proyecto

D'Arlet es una plataforma web que busca promover la gastronomía peruana mediante experiencias culinarias únicas. Los usuarios pueden navegar por las distintas regiones del país, conocer sus platos más representativos y reservar una experiencia gastronómica de manera sencilla.

---

# 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Frontend | React 19 + Vite |
| Estilos | CSS3 |
| Routing | React Router DOM |
| Backend | Node.js + Express *(en desarrollo)* |
| Base de Datos | PostgreSQL |
| Comunicación API | Fetch API |
| Gestión de Estado | React Hooks |

---

# 📂 Estructura del proyecto

```text
Proyecto/
│
├── public/
│   └── videos/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ExperienceCard.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Region.jsx
│   │   ├── Reserva.jsx
│   │   └── ...
│   │
│   ├── data/
│   │   └── regiones.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   └── controllers/
│
├── package.json
└── vite.config.js
```

---

# 🗺️ Funcionalidades

- Página principal del restaurante.
- Navegación entre las regiones del Perú.
- Visualización de experiencias gastronómicas.
- Reproducción de videos de cada experiencia.
- Formulario de reservas.
- Almacenamiento de reservas en PostgreSQL.
- Arquitectura cliente-servidor mediante API REST.

---

# 🗃️ Modelo de Base de Datos

La aplicación utiliza PostgreSQL con las siguientes tablas:

### Regiones

```text
id
nombre
descripcion
```

### Experiencias

```text
id
region_id
titulo
descripcion
categoria
precio
video
```

### Reservas

```text
id
nombre
correo
telefono
fecha
comensales
mensaje
region_id
fecha_registro
```

---

# 🔌 API REST

## Regiones

```http
GET /api/regiones
```

Obtiene todas las regiones gastronómicas.

---

## Experiencias

```http
GET /api/experiencias
```

Lista todas las experiencias gastronómicas.

```http
GET /api/experiencias/:id
```

Obtiene una experiencia específica.

---

## Reservas

```http
POST /api/reservas
```

Registra una nueva reserva.

```http
GET /api/reservas
```

Lista todas las reservas registradas.

---

# 🚀 Instalación

## Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## Instalar dependencias del Frontend

```bash
npm install
```

---

## Ejecutar React

```bash
npm run dev
```

---

## Instalar dependencias del Backend

```bash
cd backend

npm install
```

---

## Ejecutar el servidor

```bash
npm run dev
```

---

# ⚙️ Configuración de la Base de Datos

Crear un archivo `.env` dentro de la carpeta **backend**.

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=restaurante
PORT=3001
```

---

# 📌 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Node.js
- Express
- PostgreSQL
- pgAdmin
- CSS3
- JavaScript ES6

---

# 👨‍💻 Autor

**Juan Guillermo Mamani , Lionel Stiven Aragon y Joaquin Andre Gatica**

Proyecto académico desarrollado para el curso de Desarrollo Web.
