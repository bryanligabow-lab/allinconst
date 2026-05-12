# ALL-IN-CONSTRUCTIONS S.A.S. — Sitio Web Premium

Sitio web corporativo premium para **ALL-IN-CONSTRUCTIONS S.A.S.**, empresa constructora ecuatoriana especializada en obras civiles, edificaciones, mantenimiento e infraestructura.

Construido con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

---

## ✨ Características

- 🎨 Diseño premium moderno inspirado en 21st.dev
- 🚀 Next.js 14 (App Router) + TypeScript + Tailwind
- 🎭 Animaciones fluidas con Framer Motion
- 🤖 **Chatbot inteligente integrado** con flujo de cotización
- 💬 Botón flotante de WhatsApp
- 🎬 Hero con video de fondo + fallback
- ⏳ Preloader profesional animado
- 📱 100% responsive (móvil / tablet / desktop)
- 🌐 Optimizado para SEO
- ⚡ Listo para deploy en Vercel

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz con fuentes y metadata
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y utilidades Tailwind
├── components/
│   ├── Navbar.tsx          # Navbar fijo con glassmorphism
│   ├── Hero.tsx            # Hero con video y stats premium
│   ├── About.tsx           # Sección sobre nosotros
│   ├── Services.tsx        # Servicios de la empresa
│   ├── Projects.tsx        # Portfolio con filtros
│   ├── WhyChooseUs.tsx     # Razones para elegirnos
│   ├── Stats.tsx           # Estadísticas con contadores
│   ├── Testimonials.tsx    # Testimonios con carrusel
│   ├── Contact.tsx         # Formulario y mapa
│   ├── Footer.tsx          # Footer corporativo
│   ├── Chatbot.tsx         # Chatbot con quick replies
│   ├── Preloader.tsx       # Preloader animado
│   ├── FloatingWhatsApp.tsx# Botón flotante WhatsApp
│   └── ui/
│       ├── Button.tsx      # Botón con variantes
│       ├── Card.tsx        # Card premium con spotlight
│       └── SectionTitle.tsx# Título de sección reutilizable
├── data/
│   ├── services.ts         # Datos de servicios
│   ├── projects.ts         # Portfolio de proyectos
│   ├── testimonials.ts     # Testimonios
│   └── chatbotKnowledge.ts # Respuestas y flujo del chatbot
└── lib/
    └── utils.ts            # Utilidades + config del sitio (SITE)
```

## 🚀 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Ejecutar producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## ⚙️ Configuración

Toda la información de contacto, redes sociales y nombre del sitio se gestiona en un único archivo:

**`src/lib/utils.ts`** → constante `SITE`

```ts
export const SITE = {
  name: "ALL-IN-CONSTRUCTIONS S.A.S.",
  tagline: "...",
  location: "Velasco Ibarra, El Empalme - Guayas, Ecuador",
  phone: "+593 99 000 0000",
  whatsapp: "593990000000", // sin +, espacios ni guiones
  email: "contacto@allinconstructions.com",
  // ...
};
```

### Personalización de contenido

- **Servicios** → `src/data/services.ts`
- **Proyectos** → `src/data/projects.ts`
- **Testimonios** → `src/data/testimonials.ts`
- **Chatbot** → `src/data/chatbotKnowledge.ts`

## 🖼️ Recursos multimedia

El sitio utiliza imágenes de Unsplash y video de Pixabay por defecto. Para personalizar:

1. Coloca tus assets en `public/images/`
2. Actualiza las rutas en los componentes correspondientes:
   - Hero video → `src/components/Hero.tsx`
   - Proyectos → `src/data/projects.ts`
   - Imagen "About" → `src/components/About.tsx`

## 📦 Subir a GitHub

```bash
git init
git add .
git commit -m "Initial premium website for ALL-IN-CONSTRUCTIONS"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/all-in-constructions.git
git push -u origin main
```

## 🚢 Deploy en Vercel

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Importa el repositorio de GitHub
3. Vercel detecta automáticamente Next.js
4. Click en **Deploy** ✅

## 🎨 Paleta de Colores

- **Brand (Azul)**: `#2f57f5` (500) → `#1a2ea8` (700)
- **Ink (Negro)**: `#0f1018` (900) → `#06060d` (950)
- **Blanco / grises elegantes** para texto

## 📝 Stack Técnico

| Tecnología       | Versión |
| ---------------- | ------- |
| Next.js          | 14.2.5  |
| React            | 18.3.1  |
| TypeScript       | 5.5.3   |
| Tailwind CSS     | 3.4.6   |
| Framer Motion    | 11.3.8  |
| Lucide React     | 0.408.0 |

## 📄 Licencia

Proyecto privado © ALL-IN-CONSTRUCTIONS S.A.S. — Todos los derechos reservados.

---

**¿Necesitas ayuda?** Conversemos por WhatsApp 📲
