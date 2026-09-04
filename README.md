# Casa Brielas — Sitio web

Un solo sitio para las dos marcas, con **la misma jerarquía** para cada una:

- **Kombucha by Brielas** — fermentación artesanal, seis sabores.
- **Briela's Bakery** — repostería horneada por encargo: 51 productos en 7 categorías.

Ninguna de las dos es "sección de" la otra. El sitio abre en un **portal** con dos puertas del mismo tamaño, y desde adentro hay un **conmutador** en la barra superior que siempre muestra ambas. Las dos marcas usan exactamente el mismo código: mismo hero, mismo proceso, mismo catálogo, misma ficha de detalle, mismo flujo de pedido. Lo único que cambia son los datos y la paleta.

## Estructura

```
kombucha-brielas/
├── index.html         Cascarón: portal, secciones vacías y modal
├── 404.html           Página de error, va sola (no depende del resto)
├── css/styles.css     Paleta por marca, layout y animaciones
├── js/data.js         ← EL CONTENIDO: las dos marcas, productos y recetas
├── js/script.js       El motor que lo dibuja (no hace falta tocarlo)
├── assets/            Fotos de botellas, etiquetas y repostería
└── README.md
```

## Antes de publicar

El número de WhatsApp ya está puesto: **+504 8959-0153**. Si alguna vez cambia, se edita en un solo lugar — la primera línea de `js/data.js`:

```js
const WHATSAPP_NUMBER = "50489590153"; // código de país + número, sin + ni espacios
```

De ahí salen todos los botones de pedido de las dos marcas: nav, footer, botón flotante, cada tarjeta y cada ficha de detalle. Cada botón abre WhatsApp con el mensaje ya escrito, incluyendo el producto elegido.

## Cómo editar el contenido

Todo vive en el objeto `BRANDS` de **`js/data.js`**, que tiene dos entradas con **los mismos campos**: `kombucha` y `bakery`. Editar una no afecta a la otra. `js/script.js` es solo el motor: no necesitás abrirlo.

| Campo | Qué controla |
|---|---|
| `nameHTML` / `shortName` | Nombre de la marca en el nav, el portal y el conmutador |
| `door` / `craft` | Texto de la puerta en el portal de entrada |
| `hero` | Título en tres líneas, párrafo, etiquetas y fotos rotativas |
| `marquee` | Palabras de la cinta que se desplaza |
| `process` | Los cuatro pasos de "cómo se hace" |
| `catalog` | El catálogo completo (ver abajo) |
| `story` | Sección de historia y sus fotos |
| `gallery` | Fotos de la galería en movimiento |
| `extra` | Beneficios (kombucha) / Tipos y tamaños (repostería) + la nota al pie |
| `order` | Los tres pasos para pedir y la nota de entrega |
| `faq` | Preguntas frecuentes |

### Cada producto del catálogo

| Campo | Qué controla |
|---|---|
| `name` | Nombre completo que se muestra |
| `shortName` | Nombre corto para el menú y el mensaje de WhatsApp (opcional) |
| `color` | Color de la tarjeta, las barras y los botones |
| `img` | Foto en `assets/` |
| `cat` | Categoría del filtro (debe existir en `catalog.categories`) |
| `shape` | Dibujo de respaldo si la foto todavía no existe: `cake`, `tiered`, `heart`, `cupcake`, `round`, `square`, `cookie`, `alfajor`, `bread`, `croissant`, `rosca`, `flan`, `cup`, `burger`, `box`, `watermelon`, `icecream`, `kit`, `bottle` |
| `kicker` | Etiqueta corta arriba del título en la ficha |
| `tagline` | Frase de una línea en la tarjeta |
| `chips` | Las tres palabras clave |
| `desc` | Texto largo de la ficha de detalle |
| `list` | Ingredientes (kombucha) o sabores y variantes (repostería) |
| `meters` | Tres barras del 1 al 5 |
| `receta` | Los pasos de "Cómo se hace" que salen en la ficha |
| `specs` | Los bloques de abajo de la ficha: pares `{k, v}` (tamaños, cobertura, anticipación, cómo tomarla…) |

Agregar o quitar un producto ahí actualiza el menú del hero, la grilla, la galería y las fichas — no hay que tocar el HTML.

## El catálogo de repostería

51 productos en 7 categorías, con **buscador** y **filtro** en la página:

| Categoría | Cuántos |
|---|---|
| Pasteles | 14 |
| Temáticos | 4 |
| Postres individuales | 17 |
| Panadería | 6 |
| Cajas para regalo | 5 |
| Salados | 4 |
| Experiencias | 1 |

Cada producto trae su descripción, sus variantes, un perfil de tres barras, **cómo se hace** paso a paso, tamaños y días de anticipación.

**Repetidos que se quitaron** (los que marcaste): Pastel Helado de Frutas, Brownie de Chocolate, Flan con Base de Chocolate (dos veces) y Alfajores de Dulce de Leche (dos veces).
**Unificados por ser el mismo producto con otro nombre**: "Brownie" + "Brownies" → uno solo (el *Brownie Box* quedó aparte porque es la caja); "Velo de Ángel" + "Pastel Velo de Ángel" → uno solo.
**Quedaron separados** porque los listaste distinto y no los marcaste: los dos Tres Leches, los dos Red Velvet y las dos cajas de galletas.

Revisá y corregí los tiempos de anticipación, los tamaños y las variantes de cada uno — están puestos con criterio de repostería, pero los tuyos mandan. Si manejás precios, se agregan como un `spec` más.

## Sobre las fotos

Cada `<img>` cae automáticamente a una ilustración dibujada en SVG —con la forma del producto: pastel, cupcake, galleta, pan, croissant, flan, caja, hamburguesa…— si el archivo todavía no existe. Así la página nunca se ve rota mientras juntás las fotos.

Cuando tengas cada foto, subila a `assets/` **con el nombre exacto** y aparece sola, sin tocar nada más.

**La lista completa, con casillas de lo que ya está y lo que falta, vive en [FOTOS.md](FOTOS.md)** — se genera desde `js/data.js`, así que siempre está al día. Hoy van 49 de 54.

Si preferís otro nombre de archivo para algún producto, cambialo en su campo `img` dentro de `js/data.js`.

**Kombucha** (ya están, en baja resolución — si tenés las originales, reemplazá con el mismo nombre):
`bottle_green_label.jpg` · `bottle_amber.jpg` · `bottle_yellow.jpg` · `label_*.jpg` · `green_crate_1.jpg` · `green_crate_2.jpg` · `person_bottle.jpg`

## Enlaces directos

- `tusitio.com/#kombucha` abre directo en Kombucha by Brielas.
- `tusitio.com/#reposteria` abre directo en Brielas Bakery.
- Sin hash, abre el portal con las dos.

Sirve para mandar cada marca por separado en Instagram o WhatsApp sin dividir el sitio.

Los enlaces del menú (Cómo se hace, Catálogo, etc.) se desplazan por JavaScript **sin tocar la URL**, así que el `#kombucha` / `#reposteria` sigue ahí mientras el visitante navega. Además, la marca elegida se recuerda en el navegador: si alguien recarga la página después de moverse por las secciones, vuelve a la marca donde estaba y no al portal.

## Si algo falla

- Si el visitante tiene JavaScript desactivado, o si `js/data.js` o `js/script.js` no llegan a cargar, a los 8 segundos aparece una pantalla de respaldo con el nombre, el botón de WhatsApp y el Instagram. Nadie se queda viendo el cargador para siempre.
- Si una foto todavía no existe en `assets/`, se dibuja una ilustración en su lugar. La página nunca se ve rota.

## Cuando edites el catálogo

Los navegadores guardan `styles.css`, `data.js` y `script.js` en caché unos minutos. Para que tus cambios se vean al instante, subí el número de versión en las tres líneas de `index.html`:

```html
<link rel="stylesheet" href="css/styles.css?v=1">
<script src="js/data.js?v=1"></script>
<script src="js/script.js?v=1"></script>
```

`?v=1` → `?v=2`, y así. Si se te olvida no pasa nada grave: el cambio se ve igual, solo que unos minutos después.

## Publicarlo en GitHub Pages

1. Subí esta carpeta a un repositorio en GitHub.
2. Settings → Pages → Source: **Deploy from a branch** → rama `main` → carpeta `/ (root)` → Save.
3. En un par de minutos queda en `https://tu-usuario.github.io/nombre-repo/`.

Ya está preparado para eso:

- **Todas las rutas son relativas**, así que funciona igual en la raíz de un dominio o dentro de un subdirectorio `/nombre-repo/`. Probado en las dos formas.
- **`.nojekyll`** evita que GitHub procese los archivos con Jekyll.
- **`404.html`** se muestra sola cuando alguien entra a una dirección que no existe. Averigua sola dónde está el inicio del sitio (raíz o subdirectorio) preguntando dónde responde el `index.html`, así que el botón "Volver al inicio" cae bien en los dos casos. Netlify y Vercel usan el mismo archivo.
- **`.gitignore`** deja fuera `graphify-out/` y `.claude/`, que no son parte del sitio.
- **No hay build ni dependencias**: son cuatro archivos y una carpeta de imágenes.
- Los nombres de archivo están todos en minúscula, porque el servidor de GitHub distingue mayúsculas de minúsculas (tu computadora con Windows no). Si agregás fotos, usá minúsculas.

Los enlaces `#kombucha` y `#reposteria` también funcionan dentro del subdirectorio: `https://tu-usuario.github.io/nombre-repo/#reposteria`.

También funciona arrastrando la carpeta a Netlify o Vercel.

Para verlo en tu computadora hace falta un servidor local (abriendo el `index.html` directo, el navegador bloquea parte de lo que carga la página):

```bash
python -m http.server 8899
```

Después abrí `http://localhost:8899`.

## Notas de diseño

- **Paleta kombucha**: verde fermentación (`#14201A`) y crema (`#F4EFE4`), acento ámbar (`#C89B3C`).
- **Paleta repostería**: cacao (`#2A1A14`) y crema cálida (`#FBF3E9`), acento frambuesa (`#C4566E`).
- Cada producto además tiene su propio color, y el texto de los botones se calcula solo (oscuro sobre colores claros, blanco sobre oscuros) para que siempre se lea.
- **Tipografía**: Fraunces (títulos), Space Grotesk (texto), JetBrains Mono (etiquetas y números) — compartidas por las dos marcas, es lo que las hace familia.
- **Animación de carga**: hay tres, y se elige según por dónde entrás. A la casa (sin marca elegida) le corresponde el arco con los tres puntos; a kombucha, la botella que se llena con burbujas subiendo; a repostería, el pastel de dos pisos que se arma y termina encendiendo la vela. Cada una lleva su propio mensaje y ya viste los colores de la marca a la que vas.
- **Resto de la animación**: portal de dos puertas que se expanden, títulos que suben línea por línea, burbujas en el hero, rotación de fotos, marquesina, galería en movimiento, revelados al hacer scroll y fichas en modal.
- Todo respeta `prefers-reduced-motion`.

> `.claude/launch.json` es solo para levantar el servidor de prueba desde el editor. Podés borrarlo sin afectar el sitio.
