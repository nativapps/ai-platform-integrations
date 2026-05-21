# 🤖 Zona Franca Chat - Asistente Virtual Frankie

Este repositorio contiene dos alternativas de integración del chat interactivo de **Zona Franca Barranquilla** con el asistente virtual **Frankie**. Ambas opciones están diseñadas para proporcionar una experiencia de usuario fluida, interactiva y responsiva.

---

## 📁 Estructura del Repositorio

El proyecto está dividido en dos carpetas principales, adaptadas para diferentes necesidades de desarrollo:

```text
Efranco 4/
├── 📁 Simplex Html/        # Solución rápida para sitios web estáticos (HTML puro)
│   ├── 📁 assets/
│   │   └── Chatbot.png     # Imagen del avatar de Frankie
│   └── index.html          # Código de referencia con la integración
│
└── 📁 React App/           # Proyecto basado en React (CRA) para aplicaciones modernas
    ├── 📁 public/
    ├── 📁 src/
    │   ├── 📁 assets/
    │   │   └── Chatbot.png  # Avatar de Frankie utilizado en la app
    │   ├── 📁 components/
    │   │   └── WelcomeBubble.js # Burbuja flotante de bienvenida
    │   ├── App.css         # Estilos y animaciones (slideIn, bounce)
    │   ├── App.js          # Componente principal
    │   ├── FloatingChat.js # Contenedor del chat con Iframe y overlay
    │   └── index.js
    ├── .env                # Configuración de variables de entorno
    └── package.json        # Dependencias y scripts de ejecución
```

---

## 🌐 1. Simplex Html (Integración en HTML Estático)

Esta carpeta contiene una implementación directa mediante un bloque de código estructurado en CSS, HTML y JavaScript.
### 📋 ¿Qué contiene?
*   **`index.html`**: Un archivo de ejemplo donde se incluye toda la estructura visual del chat, las animaciones fluidas de la burbuja y la lógica de apertura/cierre.
*   **`assets/Chatbot.png`**: La imagen que representa al asistente virtual Frankie dentro del círculo flotante.

### 🛠️ ¿Cómo integrarlo en tu proyecto?

Sigue estos tres sencillos pasos para incorporar el chat en tu propio sitio web:

#### **Paso 1: Descargar y configurar la imagen del Avatar**
1. Copia o descarga la imagen `Chatbot.png` ubicada en la carpeta `Simplex Html/assets/`.
2. Colócala en la carpeta de recursos o assets de tu propio proyecto web (por ejemplo, `assets/images/` o `img/`).

#### **Paso 2: Copiar el bloque de código HTML, CSS y JS**
Copia el bloque de código completo y pégalo **justo antes del cierre de la etiqueta `</body>`** en tu archivo HTML principal:




#### **Paso 3: Apuntar la ruta de la imagen directamente**
Asegúrate de editar la línea de la etiqueta `<img>` en el código copiado:
```html
<img src="LA_RUTA_DE_TU_IMAGEN/Chatbot.png" alt="Frankie Avatar" class="frankie-avatar">
```
Reemplaza `assets/Chatbot.png` por la ruta absoluta o relativa correcta de tu servidor (por ejemplo, `/assets/images/Chatbot.png` o `https://tudominio.com/assets/Chatbot.png`), para asegurar que el avatar de Frankie cargue correctamente en todas las páginas.

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
    *   Importa de manera nativa la imagen de Frankie (`Chatbot.png`) para mostrarla en formato redondo.
    *   Renderiza el título animado `"¡Hola! Soy Frankie"` y el subtítulo `"Tu asistente Virtual 24/7"`.
*   **`src/assets/Chatbot.png`**: Archivo de imagen del avatar Frankie, optimizado para uso digital e importado directamente en el componente `WelcomeBubble.js`.
*   **`src/App.css`**: Contiene todo el sistema de diseño visual de la interfaz. Esto incluye:
    *   El diseño degradado azul degradado de la burbuja flotante (`#0076b6` a `#00a1e4`).
    *   La sombra difuminada y bordes redondeados modernos para una apariencia premium.
    *   Las animaciones CSS fluidas de entrada (`slideIn`) y de balanceo constante (`bounce`) para captar de forma sutil la atención de los usuarios.
    *   Media queries responsivas para optimizar las dimensiones del chat y del avatar Frankie en smartphones de pantallas angostas.
*   **`.env`**: Archivo que define las variables de entorno de la aplicación, como la URL del chatbot, permitiendo cambiar el enlace del chat según el ambiente sin necesidad de modificar el código fuente.

---

¡Listo! Con estas dos opciones puedes integrar rápida y profesionalmente al asistente virtual Frankie en cualquier plataforma web. Si tienes dudas o quieres ajustar las animaciones, revisa los archivos de estilo `index.html` en la versión HTML estática o `App.css` en la versión de React.

