# Instrucciones para las Fuentes

## ✅ Configuración Actual

Actualmente el proyecto está configurado para usar:
- **Inter** (de Google Fonts) como fuente para títulos (sustituta de Alias)
- **Montserrat** (de Google Fonts) para textos

No necesitas hacer nada adicional, las fuentes se cargan automáticamente.

## Opción 1: Usar la fuente Alias original (Futuro)

Si en el futuro quieres usar la fuente Alias original:

1. Obtén los archivos de fuente Alias en formato `.woff2`:
   - `Alias-Regular.woff2`
   - `Alias-Bold.woff2`

2. Colócalos en la carpeta: `public/fonts/`

3. Modifica `app/layout.tsx` para usar `localFont` en lugar de `Inter`

## Opción 2: Usar otra fuente de Google Fonts

Si no tienes acceso a la fuente Alias, puedes usar una fuente alternativa como **Inter** o **Poppins**:

### Cambiar a Inter (similar a Alias):

1. Edita `app/layout.tsx`
2. Reemplaza la configuración de `alias` con:

```typescript
import { Inter } from "next/font/google"

const alias = Inter({
  subsets: ["latin"],
  variable: "--font-alias",
  weight: ["400", "700"],
})
```

### Cambiar a Poppins:

```typescript
import { Poppins } from "next/font/google"

const alias = Poppins({
  subsets: ["latin"],
  variable: "--font-alias",
  weight: ["400", "700"],
})
```

## Opción 3: Usar una fuente del sistema

Si prefieres usar una fuente del sistema, puedes usar:

```typescript
const alias = localFont({
  src: [],
  variable: "--font-alias",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
})
```

Y actualizar `tailwind.config.ts` para que use la fuente del sistema como fallback.

