# Bot-Print

Este es un programa diseñado para realizar impresiones de manera eficiente y sin complicaciones. Simplemente mapea la carpeta deseada y utiliza Sumatra PDF para imprimir archivos PDF de forma automática.

## Uso del Bot de Impresión

Para aprovechar al máximo el bot de impresión, sigue estos pasos:

1. **Configura tu Impresora por Defecto:** Asegúrate de tener una impresora configurada como predeterminada en tu sistema.

2. **Descarga y Descomprime el Programa:** Descarga y descomprime el programa en una carpeta a la que tengas acceso.

3. **Edita el Archivo `.env`:** Abre el archivo `.env` en un editor de texto y realiza las siguientes configuraciones:

   - `PDF_FOLDER`: Ingresa la dirección de la carpeta que el bot estará vigilando para imprimir archivos PDF. Por ejemplo: `PDF_FOLDER=c:\CloudPromo\print`.
   - `EXTERNAL_SUMATRA`: Ingresa la dirección del ejecutable de Sumatra PDF que se encuentra dentro de la carpeta. Por ejemplo: `EXTERNAL_SUMATRA=C:\Users\<nombre-de-usuario>\Documents\bot-print-win\SumatraPDF-3.4.6-32.exe`.

4. **Ejecuta el Programa:** Ejecuta el archivo `bot-print-x64.exe`. El programa se ejecutará automáticamente cada 10 segundos.

5. **Impresión Automática:** Cuando el programa detecte un archivo PDF en la carpeta especificada, lo enviará a la cola de impresión de tu impresora predeterminada. Una vez que la impresión sea exitosa, el archivo se eliminará automáticamente de la carpeta para evitar impresiones duplicadas.

Nota: Este programa es simple y actualmente no controla la cantidad de envíos a la cola. En caso de encontrar algún inconveniente, puedes manejarlo fácilmente.

## Dependencias

Este programa utiliza las siguientes dependencias:

- [dotenv](https://www.npmjs.com/package/dotenv)
- [esbuild](https://www.npmjs.com/package/esbuild)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [pdf-to-printer](https://www.npmjs.com/package/pdf-to-printer)

## Agradecimientos

Este programa utiliza [Sumatra PDF](https://github.com/sumatrapdfreader/sumatrapdf) para la visualización y la impresión de archivos PDF.

¡Esperamos que este bot de impresión rápida y sencilla sea de utilidad para ti! Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.

---

*Aviso: Este programa es proporcionado tal cual, sin garantías explícitas o implícitas de ningún tipo. Utilízalo bajo tu propia responsabilidad.*
