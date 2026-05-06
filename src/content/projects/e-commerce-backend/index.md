---
title: "E-Commerce REST API Backend"
description: "API de comercio electrónico desarrollada con Node.js y TypeScript, que implementa autenticación JWT, gestión de productos y carrito de compras, utilizando PostgreSQL, Sequelize y una arquitectura modular escalable."
image: "./cover.webp"
technologies: ["Node", "Postgres", "Sequelize", "Express", "TypeScript", "Docker", "Jwt"]
githubUrl: "https://github.com/Chencho34/shopping-cart-backend/tree/user-endpoints"
featured: true
date: 2025-06-10
type: "backend"
---

## Acerca de este proyecto

Cart Shopping es una API de comercio electrónico desarrollada con **Node.js** y **TypeScript**, diseñada para proporcionar una solución backend completa para una aplicación de carrito de compras. La arquitectura está basada en **Express** y organizada de forma **modular**, facilitando la escalabilidad y el mantenimiento del sistema.

La API incluye **autenticación** de usuarios mediante **JWT**, permitiendo registro e inicio de sesión seguros, así como control de acceso basado en roles. Además, gestiona la creación, actualización y consulta de productos, junto con la funcionalidad de carrito de compras.

Para la persistencia de datos se utiliza **PostgreSQL** junto con **Sequelize** como ORM, permitiendo definir modelos y relaciones de manera estructurada. El proyecto también integra **validación de datos** con **Joi**, manejo centralizado de errores y una estructura clara basada en capas (controladores, servicios y rutas).

Adicionalmente, el entorno de desarrollo está configurado con **Docker**, lo que facilita la ejecución y despliegue del proyecto de forma consistente.

---

## Arquitectura & Stack Tecnológico

**Tecnologías Principales:**
*  **Runtime:** Node.js con TypeScript
*  **Framework:** Express.js v5.1.0
*  **Base de Datos:** PostgreSQL con Sequelize ORM
*  **Autenticación:** JWT (JSON Web Tokens) con bcryptjs
*  **Validación:** Joi para validación de requests
*  **Desarrollo:** Docker Compose para containerización

**Dependencias Clave:**

```json
"bcryptjs": "^3.0.2",        // Password hashing
"cors": "^2.8.5",            // Cross-origin requests
"express": "^5.1.0",         // Web framework
"joi": "^17.13.3",           // Schema validation
"jsonwebtoken": "^9.0.2",    // JWT authentication
"sequelize": "^6.37.7",      // ORM for PostgreSQL
"pg": "^8.16.0"              // PostgreSQL driver
```

## Estructura del Proyecto

```bash
src/
├── config/         # Database configuration
├── controllers/    # Business logic handlers
├── dtos/           # Data Transfer Objects
├── middlewares/    # Custom middleware (auth, validation, error handling)
├── models/         # Sequelize database models
├── routes/         # API route definitions
├── schemas/        # Joi validation schemas
├── services/       # Business logic services
└── utils/          # Utility functions
```

## Esquema de Base de Datos

**Modelo User:**
Campos: id, username (único), email (único), password (hasheado), role (user/admin). Características: Control de acceso basado en roles, constraints únicos.

**Modelo Product:**
Campos: id, name, description, category, price, discount, stock, imageUrl. Categorías: electronics, gaming, audio, video, smartphones, smart home. Características: Precio con decimales, gestión de stock, validación de URL.

**Modelo Cart:**
Campos: id, userId, productId, quantity. Relaciones: Muchos-a-muchos entre Users y Products. Características: Validación de cantidad (mín: 1).

## API Endpoints

**Rutas de Autenticación (/api/auth):**

```ts
POST /auth/register  # User registration
POST /auth/login     # User login (returns JWT)
```

**Archivos de Rutas Adicionales:**
* `user.routes.ts` - User management
* `products.routes.ts` - Product CRUD operations  
* `cart.routes.ts` - Shopping cart functionality

## Configuración Docker

El proyecto incluye una **configuración Docker completa:**
* Contenedor PostgreSQL 17 Alpine para base de datos
* Servicio backend con hot-reload para desarrollo
* **Redes:** backend aisladas
* **Volúmenes:** Almacenamiento persistente de base de datos
* **Puertos:** 3000 para (backend) y 5433 para (PostgreSQL).

## Características de Desarrollo

* **Hot Reload:** ts-node-dev para desarrollo
* **Linting:** Configuración TypeScript Standard
* **Type Safety:** Implementación completa TypeScript con tipos estrictos
* **Manejo de Errores:** Middleware centralizado de manejo de errores
* **Validación:** Validación de requests usando esquemas Joi
* **Logging:** Morgan para logging de requests HTTP

## Getting Started

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start

# With Docker
docker-compose up
```

## Estado Actual

* ✅ Sistema de autenticación principal implementado
* ✅ Modelos de base de datos y relaciones definidas
* ✅ Containerización con Docker lista
* ✅ Configuración TypeScript completa
* ✅ Estructura básica de API establecida
* 🔄  Conexión a base de datos con lógica de reintento implementada
