# SolAI Landing Page

Landing page profesional y futurista para la agencia SolAI, construida con Next.js, React, TypeScript, TailwindCSS, shadcn/ui y Framer Motion.

## 🚀 Características

- **Diseño futurista y premium**: Estilo SaaS B2B de alto ticket
- **Paleta de colores**: Azules oscuros y eléctricos (#020617, #0F172A, #1D4ED8, #3B82F6)
- **Tipografías**: Alias para títulos, Montserrat para textos
- **Animaciones**: Framer Motion para transiciones suaves
- **Efectos parallax**: Fondo animado y efectos de luz siguiendo el mouse
- **Componentes shadcn/ui**: Button, Card, Badge, Accordion, Avatar
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **SEO optimizado**: Metadata y estructura semántica

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:

```bash
npm install
```

2. **Fuentes configuradas**:

   Las fuentes ya están configuradas y se cargan automáticamente desde Google Fonts:
   - **Inter**: Para títulos (sustituta de Alias)
   - **Montserrat**: Para textos y párrafos
   
   No necesitas configurar nada adicional. Si en el futuro quieres usar la fuente Alias original, simplemente reemplaza Inter por localFont en `app/layout.tsx`.

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
NEWSOLAI2/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   ├── hero.tsx            # Sección hero
│   ├── levels-section.tsx  # Sección de niveles
│   ├── consulting-section.tsx
│   ├── solvers-grid.tsx
│   ├── process-section.tsx
│   ├── testimonials-section.tsx
│   ├── faq-section.tsx
│   ├── final-cta.tsx
│   ├── footer.tsx
│   ├── parallax-background.tsx
│   └── mouse-light-effect.tsx
├── lib/
│   └── utils.ts            # Utilidades (cn function)
└── public/
    └── fonts/              # Fuentes locales
```

## 🎨 Secciones de la Landing

1. **Hero**: Título principal, CTAs y microcopys de confianza
2. **Niveles**: Diagnóstico de nivel de madurez en IA
3. **Consultoría**: Oferta de consultoría estratégica (3 pasos)
4. **Solvers**: Grid de productos/solvers disponibles
5. **Proceso**: Cómo trabajamos (4 pasos)
6. **Testimonios**: Casos de éxito y social proof
7. **FAQ**: Preguntas frecuentes con acordeón
8. **CTA Final**: Llamada a la acción principal
9. **Footer**: Enlaces y información legal

## 🔧 Configuración

### Colores

Los colores están definidos en `tailwind.config.ts` y `app/globals.css`. Paleta principal:

- Fondo oscuro: `#020617`, `#0F172A`
- Azul primario: `#1D4ED8`
- Azul secundario: `#3B82F6`
- Acento suave: `#e5f0ff`

### Fuentes

- **Inter**: Para títulos (h1, h2, h3, etc.) - actualmente usando Inter como sustituta de Alias
- **Montserrat**: Para párrafos y textos generales

## 📦 Build para Producción

```bash
npm run build
npm start
```

## 🎯 Próximos Pasos

- [ ] Integrar formulario de contacto real para "Agendar Consultoría"
- [ ] Añadir página de demo de Solvers
- [ ] Implementar analytics
- [ ] Optimizar imágenes si se añaden
- [ ] Añadir más casos de éxito reales

## 📝 Notas

- El botón "Agendar Consultoría Gratuita" actualmente hace scroll a la sección de CTA final. Debes integrar tu sistema de reservas/formulario.
- Los testimonios son ejemplos. Reemplázalos con casos reales.
- Las métricas y números son ejemplos. Actualízalos con datos reales.

## 📄 Licencia

Este proyecto es privado y propiedad de SolAI.

