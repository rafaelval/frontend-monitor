# Monitoring Dashboard

Panel de monitoreo en tiempo real para gestionar y acceder remotamente a equipos via RustDesk.

## Demo
[▶ Ver demo en video](https://loom.com/tu-link)

## Stack
- **Frontend:** React + Tailwind CSS + Vite
- **Backend:** Node.js + Express + Socket.io
- **Base de datos y auth:** Supabase
- **Conexión remota:** RustDesk 

## Arquitectura
```
Agente (register.js) → heartbeat cada 10s
        ↓
Backend (Express + Socket.io)
        ↓ tiempo real
Frontend (React) → deep link rustdesk://
        ↓
RustDesk (PC del técnico)
```

## Features
- Autenticación segura con Supabase
- Dispositivos en tiempo real con Socket.io
- Conexión remota con un click via deep link
- Agente que se registra y reporta estado automáticamente
- El panel detecta cuando un equipo se desconecta en menos de 15s
- Eliminación de dispositivos con confirmación desde el agente

## Correr el proyecto localmente

### Requisitos
- Node.js 18+
- Cuenta en Supabase
- RustDesk instalado

### Backend
```bash
cd backend
npm install
# crea un .env con:
# SUPABASE_URL=...
# SUPABASE_KEY=...
node index.js
```

### Frontend
```bash
cd frontend
npm install
# crea un .env con:
# VITE_API_URL=http://localhost:3000
npm run dev
```

### Agente (en cada PC cliente)
```bash
cd agent
npm install
node register.js
```

## Estructura
```
├── frontend/         # React app
│   ├── src/
│   │   ├── hooks/        # useAuth, useDevices
│   │   └── components/   # Navbar, DeviceCard, LoginForm
├── backend/          # Express + Socket.io
└── agent/            # register.js para PCs clientes
```