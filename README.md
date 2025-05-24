# Realdooh — Auntenticación de usuarios con JWT y seguridad


# 📄 Descripción
Este proyecto implementa el frontend de una plataforma de autenticación desarrollada en Angular 16. Contiene dos formas de inicio de sesión: login tradicional con email y contraseña, y login mediante SSO simulado. El formulario está maquetado de forma fiel al diseño original en Figma e incluye validación de campos, feedback visual de errores y confirmación tras éxito

![Frontend](https://img.shields.io/badge/frontend-Angular%2016-dd0031?style=flat-square)
![Estilos](https://img.shields.io/badge/estilos-Angular%20Material-ff4081?style=flat-square)
![Forms](https://img.shields.io/badge/formulario-Reactive%20Forms-blue?style=flat-square)


---


## ✨ Funcionalidades
- Maquetación precisa del login según diseño en Figma.
- Inputs estilizados con Angular Material, borde personalizado.
- Validación de campos obligatorios y formato de email.
- Feedback visual para login exitoso o erróneo.
- Almacenamiento del token JWT en localStorage.
- Redirección al backend en flujo SSO.
- Captura del code desde la URL y obtención del token.
- Separación modular clara de servicios, modelos y componentes.

---

## 🧱 Estructura del Proyecto
```bash
src/app/
├── auth/
│   ├── login/               # Componente de login visual
│   ├── sso-callback/        # Componente para capturar el código SSO
│   ├── models/              # LoginRequest, LoginResponse
│   ├── services/            # AuthService: login y callback
├── core/constants/          # api.ts: rutas centralizadas al backend
├── app-routing.module.ts    # Definición de rutas
└── app.module.ts            # Módulo raíz

```
---

## 💻 Tecnologías Utilizadas
- **Angular 16**
- **Angular Material**
- **TypeScript**
- **SCSS (estilos por componente)**
- **Reactive Forms (formulario reactivo)**
- **HttpClient para llamadas al backend**

---

## 📋 Requisitos

- **Node.js 18+** 
- **Angular CLI 16.2.0**
- **Backend corriendo en http://localhost:8080**

---

## 🧪 Testing
Se ha probado el flujo completo de forma manual:

- Login tradicional con credenciales válidas → recibe y guarda token.
- Login con credenciales inválidas → muestra error.
- Click en "ENTRAR CON SSO" → redirige correctamente al backend.
- Captura de code desde /sso/callback → obtiene token y lo guarda.
- Feedback visual en ambos casos.

---

## 🛠️ Instalación
```bash
git clone https://github.com/tu-usuario/auth-frontend.git

```

#### Instalar dependencias 
```bash
npm install
ng serve (Local con CLI instalado)
npm run start (No requiere de Angular CLI global)
```

---

© 2025. Proyecto desarrollado por Ezequiel Macchi Seoane