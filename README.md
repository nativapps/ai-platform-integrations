# 🤖 Zona Franca Chat - Asistente Virtual Frankie

Este repositorio contiene dos alternativas de integración del chat interactivo de **Zona Franca Barranquilla** con el asistente virtual **Frankie**. Ambas opciones están diseñadas para proporcionar una experiencia de usuario fluida, interactiva y responsiva.

---

## 📁 Estructura del Repositorio

El proyecto está dividido en carpetas adaptadas para diferentes necesidades de integración:

```text
Efranco /
├── 📁 Simplex Html/ #Efranco 2       
│   └── embed-chat.js       # Script auto-contenido
│   ├── embed-chatQA.js 
│
├── 📁 Embed Chat Floating/ 
│   └── chat.js             # Script auto-contenido 
│
└── 📁 React App/  #Efranco 4    
    ├── 📁 public/
    ├── 📁 src/
    │   ├── 📁 components/
    │   │   └── WelcomeBubble.js # Burbuja flotante de bienvenida 
    │   ├── App.css         # Estilos y animaciones 
    │   ├── App.js          # Componente principal
    │   ├── FloatingChat.js # Contenedor del chat 
    │   └── index.js
```

---

## 🌐 1. Integración Directa (HTML Estático / Script Tag)

Esta es la forma más fácil y rápida de integrar al asistente virtual **Frankie**. Consiste en un script auto-contenido que inyecta dinámicamente todo el HTML, estilos CSS y comportamiento interactivo.

### 📋 ¿Cómo integrarlo en tu proyecto?

Para incorporar el chat en cualquier sitio web (HTML estático, WordPress, Shopify, Webflow, etc.), **solo debes copiar el  script y pegarlo en la última línea, justo antes de que se cierre la etiqueta `</body>`** de tu archivo HTML principal:


> [!NOTE]
> **No requieres configurar ni descargar ninguna imagen para el avatar.** Frankie y el Logo de Zona Franca ya vienen preconfigurados con URLs fijas y públicas en Supabase, por lo que cargarán de forma automática sin necesidad de almacenar recursos adicionales localmente.

---

## ⚛️ 2. React App (Aplicación en React)

Esta carpeta contiene una aplicación web modularizada construida en **React** que encapsula el comportamiento del chat en componentes reutilizables, ideal para integrarse en arquitecturas SPA (Single Page Applications).

### 🛠️ Cómo instalar y arrancar el proyecto

Para ejecutar esta versión en tu entorno local, asegúrate de tener instalado [Node.js](https://nodejs.org/) y sigue estos comandos en tu terminal:

1.  **Entra a la carpeta del proyecto:**
    ```bash
    cd "React App"
    ```
2.  **Instala las dependencias necesarias:**
    ```bash
    npm install
    ```
3.  **Inicia el servidor de desarrollo local:**
    ```bash
    npm start
    ```
    *Esto abrirá la aplicación en tu navegador web en la dirección [http://localhost:3000](http://localhost:3000).*

4.  **Genera la compilación para producción (Build):**
    ```bash
    npm run build
    ```

---

### 📂 Estructura interna y Funcionamiento del código

La aplicación está diseñada de forma modular bajo las mejores prácticas de React. Aquí te explicamos lo que hay por dentro:

*   **`src/index.js`**: Punto de entrada principal de la aplicación. Se encarga de inicializar el árbol de componentes de React y montar el componente `<App />` en el DOM de la página HTML.
*   **`src/App.js`**: Componente contenedor base que renderiza el componente `<FloatingChat />` y le asigna una altura de viewport del 100% y un fondo blanco limpio para contener la interfaz.
*   **`src/FloatingChat.js`**: **Es el cerebro del Chat en React.**
    *   Gestiona el estado local `isOpen` (booleano) utilizando el hook `useState` de React para controlar cuándo se debe visualizar o esconder la ventana de conversación y el fondo atenuador (overlay).
    *   Renderiza un Iframe flotante que conecta directamente con la URL de producción o de desarrollo del bot (`https://staging-app.clona.co/chat/...`).
    *   Maneja eventos de clic tanto en la burbuja como en el fondo invisible para alternar de forma segura entre los estados abierto/cerrado.
*   **`src/components/WelcomeBubble.js`**: Componente de presentación para la burbuja flotante del asistente.
    *   Recibe una prop `onClick` que se dispara al pulsar la burbuja para activar el chat.
    *   Utiliza directamente la URL pública fija del avatar de Frankie en Supabase para mostrarla en formato redondo, eliminando la necesidad de almacenar o configurar una imagen local.
    *   Renderiza el título animado `"¡Hola! Soy Frankie"` y el subtítulo `"Tu asistente Virtual 24/7"`.
*   **`src/App.css`**: Contiene todo el sistema de diseño visual de la interfaz. Esto incluye:
    *   El diseño degradado azul degradado de la burbuja flotante (`#0076b6` a `#00a1e4`).
    *   La sombra difuminada y bordes redondeados modernos para una apariencia premium.
    *   Las animaciones CSS fluidas de entrada (`slideIn`) y de balanceo constante (`bounce`) para captar de forma sutil la atención de los usuarios.
    *   Media queries responsivas para optimizar las dimensiones del chat y del avatar Frankie en smartphones de pantallas angostas.
*   **`.env`**: Archivo que define las variables de entorno de la aplicación, como la URL del chatbot, permitiendo cambiar el enlace del chat según el ambiente sin necesidad de modificar el código fuente.

---

¡Listo! Con estas opciones puedes integrar de forma rápida y profesional al asistente virtual Frankie en cualquier plataforma web. Si tienes dudas o quieres ajustar la estructura o las animaciones, revisa el archivo de script `embed-chat.js` / `chat.js` en la versión de integración directa, o el archivo `App.css` en la versión de React.

