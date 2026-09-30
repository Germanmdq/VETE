# 🐾 Vida de Perros

**Veterinaria · Peluquería canina · Pet shop** — *Amor, cuidado y bienestar para ellos.*

Plataforma digital del negocio: tienda online, turnos, clientes, mascotas, promociones, fidelización, stock, estadísticas y un panel de administración pensado para usar desde el celular. Es una PWA: se instala en iPhone, Android, Windows y Mac.

- **Tienda:** `/`
- **Panel de administración:** `/admin`

## Empezar

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev        # http://localhost:3000  (panel en /admin)
```

En Windows también podés hacer doble clic en `abrir-vida-de-perros.bat`.

Sin configurar nada, la app arranca en **modo de prueba**. El catálogo y los precios son los reales; los pedidos, clientes y reseñas son de ejemplo, y los datos se guardan en el navegador. Para operar con datos reales, configurá Supabase siguiendo `.env.example` y la guía.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Desarrollo |
| `npm run build && npm start` | Producción (activa el service worker) |
| `npm test` | Pruebas de reglas de negocio |
| `npm run typecheck` / `npm run lint` | Verificaciones |
| `npm run vet:import -- catalogo.xlsx` | Importar el catálogo desde Excel |
| `npm run vet:pwa-assets -- logo.png` | Regenerar íconos y splash de la app |

## Documentación

La guía completa está en [`docs/GUIA.md`](docs/GUIA.md). Incluye la arquitectura, cómo cargar productos, precios, stock, pedidos, turnos, promociones, WhatsApp, ubicación y logo, qué necesita backend, las integraciones futuras y qué datos reales faltan.
