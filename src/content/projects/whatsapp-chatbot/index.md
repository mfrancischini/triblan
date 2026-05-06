---
title: "WhatsApp Appointment Chatbot"
description: "Conversational AI chatbot for appointment scheduling via WhatsApp, built with Node.js, TypeScript, Express, PostgreSQL, and Twilio."
date: 2026-05-04
technologies: ["Twilio", "WhatsApp", "Node.js", "TypeScript", "Express", "PostgreSQL", "SequelizeORM", "Docker"]
image: "./cover.webp"
githubUrl: "https://github.com/Chencho34/whatsapp-chatbot-twilio"
type: "backend"
featured: true
---

## Acerca de este proyecto

Un chatbot conversacional de nivel productivo que permite a los clientes reservar citas mediante WhatsApp sin necesidad de una aplicación móvil o sitio web. El sistema gestiona el flujo completo de reservación: selección de servicio, elección de fecha/hora y confirmación, todo mediante conversación natural.

Construido con una arquitectura basada en **Máquina de Estados Finitos (FSM)**, administra conversaciones complejas de múltiples pasos manteniendo el estado de la sesión y enviando recordatorios automáticos 24 horas antes de cada cita.

El chatbot se integra directamente con la API de WhatsApp de Twilio, transformando un canal de mensajería simple en un sistema completo de agendamiento.

---

## Problema de Negocio

Las barberías tradicionalmente dependen de llamadas telefónicas o visitas presenciales para agendar citas, lo cual genera fricción para los clientes y carga administrativa para los dueños.

Desarrollar una aplicación móvil personalizada suele ser costoso y difícil de adoptar. Sin embargo, **WhatsApp ya está instalado en el teléfono de casi todos los clientes**.

Este proyecto resuelve el problema haciendo que reservar una cita sea tan fácil como enviar un mensaje, mientras automatiza recordatorios que normalmente requerirían seguimiento manual del personal.

---

## Solución

El chatbot recibe mensajes entrantes de WhatsApp mediante un webhook de Twilio, los enruta hacia una API en Express y los procesa a través de un **Conversation Manager** que implementa una FSM.

Cada sesión de usuario mantiene:

- Estado actual (ver servicios, seleccionar fecha, confirmar cita)
- Datos contextuales (servicio elegido, hora preferida, nombre del cliente)

Una vez confirmada la cita:

- Se guarda en PostgreSQL
- Un cron job se ejecuta cada hora
- Detecta citas confirmadas para el día siguiente
- Envía recordatorios automáticos por WhatsApp

---

## Funcionalidades Principales

- Reservación conversacional de citas por WhatsApp (sin instalar apps)
- Menú interactivo con servicios, horarios e información del negocio
- Recordatorios automáticos 24 horas antes vía WhatsApp
- Registro de clientes y persistencia de datos
- Gestión de conversaciones multi-paso con FSM
- Envío y recepción de mensajes en tiempo real
- Disponibilidad dinámica de múltiples días
- Generación automática de horarios
- Base de datos PostgreSQL persistente

---

## Arquitectura

## Estructura de Carpetas

```bash
src/
├── config/
│   └── database.ts
├── models/
│   ├── Barbershop.ts
│   ├── Service.ts
│   ├── Client.ts
│   ├── Appointment.ts
│   └── index.ts
├── services/
│   ├── database.service.ts
│   ├── twilio.service.ts
│   └── reminder.service.ts
├── managers/
│   └── conversation.manager.ts
├── controllers/
│   └── whatsapp.controller.ts
├── types/
│   └── conversation.ts
├── utils/
│   └── helpers.ts
├── routes/
│   └── whatsapp.route.ts
└── index.ts
```

Flujo de Datos

```bash
Webhook Twilio WhatsApp
        ↓
API Express
        ↓
Controller WhatsApp
        ↓
Conversation Manager (FSM)
        ├── Gestión de Sesiones
        ├── Servicios DB
        └── Servicio Twilio
        ↓
PostgreSQL
        ↓
Cron Job → Reminder Service → Twilio
```