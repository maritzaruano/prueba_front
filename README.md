# Proyecto Angular Skandia

Este proyecto se realizó con Angular en su versión estable más reciente (17). 

## Metodología BEM
Se utilizó la metodología BEM para nombrar clases CSS, facilitando la creación de interfaces web mantenibles y reutilizables. Al usar BEM con SCSS, se organizan y estructuran las clases de manera que reflejan la relación entre componentes (bloques), sus partes (elementos) y sus variaciones (modificadores).


## Estructura de Carpetas

- **core**: 
  - `interfaces/`: Contiene las interfaces del proyecto.
  - `services/`: Contiene los servicios del proyecto.

- **shared**: 
  - `components/`: Contiene los componentes compartidos.
    - `button/`: Componente de botón.
    - `card/`: Componente de tarjeta.
    - `header/`: Componente de encabezado.
    - `footer/`: Componente de pie de página.
  - `pipes/`: Contiene los pipes personalizados.

- **assets**: 
  - `fonts/`: Fuentes para el texto.
  - `images/`: Imágenes e íconos.

- **environments**: 
  - `environment.ts`: Variables para el consumo de la API.

## Variables de Entorno

En la carpeta `environments`, se crean las variables necesarias para el consumo de la API. Asegúrate de configurar correctamente estas variables según el entorno (desarrollo, producción, etc.).

---
1. Instalar las dependencias:

    ```bash
    npm install
    ```

2. Ejecutar el servidor de desarrollo:

    ```bash
    ng serve -o
    ```



¡Gracias por usar este proyecto!
