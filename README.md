# Kombucha by Brielas — Sitio web

Página de una sola pantalla, inspirada en el diseño editorial de Esterházy (Klimt Wines) y adaptada a Kombucha by Brielas: fermentación artesanal, sabores tropicales y pedidos directos por WhatsApp.

## Estructura

```
kombucha-brielas/
├── index.html         Estructura de la página
├── css/styles.css     Paleta, tipografía, layout y animaciones
├── js/script.js       Datos de sabores, loader, modal, FAQ y enlaces de WhatsApp
├── assets/            Fotos de las botellas y etiquetas
└── README.md
```

## Antes de publicar — 1 cambio obligatorio

Abrí `js/script.js` y editá la primera línea:

```js
const WHATSAPP_NUMBER = "50499999999"; // tu número real: código de país + número, sin + ni espacios
```

Todos los botones de pedido (nav, footer, botón flotante, cada tarjeta de sabor y cada ficha de detalle) usan ese número y abren WhatsApp con el mensaje ya escrito, incluyendo el sabor elegido.

## Editar los sabores

Todo el contenido de sabores vive en el arreglo `FLAVORS` dentro de `js/script.js`. Cada sabor tiene:

| Campo | Qué controla |
|---|---|
| `name` | Nombre completo que se muestra |
| `shortName` | Nombre corto para el menú y el mensaje de WhatsApp (opcional) |
| `color` | Color de la tarjeta, las barras y los botones |
| `img` | Foto de la etiqueta en `assets/` |
| `kicker` | Etiqueta corta arriba del título en la ficha |
| `tagline` | Frase de una línea en la tarjeta |
| `chips` | Las tres palabras clave |
| `desc` | Texto largo de la ficha de detalle |
| `ingredients` | Lista de ingredientes |
| `meters` | Acidez, dulzor y burbuja del 1 al 5 |
| `serve` / `pairing` / `ferment` | Cómo tomarla, con qué acompañarla, tiempo de fermentación |

Agregar o quitar un sabor ahí actualiza automáticamente el menú del hero, la grilla y las fichas — no hay que tocar el HTML.

Las preguntas frecuentes están en el arreglo `FAQ`, en el mismo archivo.

## Sobre las fotos

Las imágenes en `assets/` salieron del collage que compartiste, así que son de baja resolución. Si tenés las fotos originales, reemplazá los archivos con el mismo nombre y la página se ve mucho más nítida:

- `bottle_green_label.jpg`, `bottle_amber.jpg`, `bottle_yellow.jpg` — botellas del hero
- `label_*.jpg` — etiquetas de cada sabor
- `green_crate_1.jpg`, `green_crate_2.jpg`, `person_bottle.jpg` — sección de historia

## Publicarlo gratis

1. Subí esta carpeta a un repositorio en GitHub.
2. Settings → Pages → Deploy from branch → `main` → `/root`.
3. Queda en `https://tu-usuario.github.io/nombre-repo/`.

También funciona arrastrando la carpeta a Netlify o Vercel.

## Notas de diseño

- **Paleta**: verde fermentación (`#14201A`) y crema (`#F4EFE4`) como base, con un color propio por sabor.
- **Tipografía**: Fraunces (títulos), Space Grotesk (texto), JetBrains Mono (etiquetas y números).
- **Animación**: loader que llena una botella, títulos que suben línea por línea, burbujas ascendiendo en el hero, rotación de fotos, marquesina de texto, galería en movimiento, revelados al hacer scroll y fichas de sabor en modal.
- Todo respeta `prefers-reduced-motion` para quien tenga las animaciones desactivadas en su sistema.
