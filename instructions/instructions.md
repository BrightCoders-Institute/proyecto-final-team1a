![BrightCoders Logo](../img/logo.png)

# 🏆 Proyecto final

- **Organización.** [Equipo (3-4 integrantes)](https://github.com/BrightCoders-Institute/handbook/wiki/Actividades#actividades-en-equipo-sincr%C3%B3nicas)
- **Modo.** [Síncrono](https://github.com/BrightCoders-Institute/handbook/wiki/Actividades#actividades-en-equipo-sincr%C3%B3nicas)
- **Estrategia.** Pair Programming / Collaborative programming
- **Duración.** 45 días (9 sprints de 5 días)
- **Dedicación.** 2.5 horas diarias (112.5 horas en total)

# Contenido

- [🎯 Objetivos de aprendizaje](#-objetivos-de-aprendizaje)
- [:rocket: Producto Mínimo Viable](#rocket-producto-mínimo-viable)
- [:triangular\_flag\_on\_post: Requisitos técnicos](#triangular_flag_on_post-requisitos-técnicos)
- [:triangular\_ruler: ETAPA 1: Definición del producto (1 semana)](#triangular_ruler-etapa-1-definición-del-producto-1-semana)
  - [Flujo de trabajo sugerido](#flujo-de-trabajo-sugerido)
    - [Día 1: Definición y Descripción del Proyecto (2.5 horas)](#día-1-definición-y-descripción-del-proyecto-25-horas)
    - [Día 2: Requerimientos Funcionales y No Funcionales (2.5 horas)](#día-2-requerimientos-funcionales-y-no-funcionales-25-horas)
    - [Día 3: Diseño de la Interfaz de Usuario (2.5 horas)](#día-3-diseño-de-la-interfaz-de-usuario-25-horas)
    - [Día 4: Modelo de la Base de Datos (2.5 horas)](#día-4-modelo-de-la-base-de-datos-25-horas)
    - [Día 5: Presentación y preparación para la Codificación  (2.5 horas)](#día-5-presentación-y-preparación-para-la-codificación--25-horas)
- [:hammer: ETAPA 2: Codificación (8 semanas)](#hammer-etapa-2-codificación-8-semanas)

# 🎯 Objetivos de aprendizaje

- Adquirir experiencia práctica en el desarrollo de aplicaciones móviles utilizando React Native.
- Mejorar las habilidades de trabajo colaborativo en entornos remotos para el desarrollo de aplicaciones.
- Utilizar herramientas de colaboración remota, como GitHub, de manera efectiva y eficiente.
- Utilizar herramientas de comunicación remota, como Slack, Google Meet y Gather Town, para facilitar la colaboración y la comunicación en el equipo de desarrollo.
- Utilizar herramientas de gestión de proyectos, como GitHub Projects, para planificar y organizar el desarrollo del MVP de la aplicación.
- Utilizar herramientas de gestión de tareas, como GitHub Issues, para asignar y dar seguimiento a las tareas relacionadas con el desarrollo del MVP.

# :rocket: Producto Mínimo Viable

Un MVP (Minimum Viable Product o Producto Mínimo Viable) es una versión inicial y funcional de un producto que contiene las características fundamentales necesarias para cumplir con los objetivos y satisfacer las necesidades básicas de los usuarios. Se trata de un enfoque estratégico que busca lanzar rápidamente al mercado una versión temprana del producto con el fin de obtener retroalimentación real y validar su viabilidad.

El propósito principal del MVP es aprender y validar hipótesis sobre el producto, su mercado y sus usuarios, antes de invertir grandes cantidades de tiempo y recursos en su desarrollo completo. Al enfocarse en las características esenciales, el MVP permite obtener información valiosa sobre la aceptación y demanda del producto, así como identificar oportunidades de mejora y ajustar la dirección del desarrollo de manera ágil.

Un MVP se diferencia de una versión finalizada del producto en que no incluye todas las características planificadas ni los detalles finos de diseño. En lugar de eso, se enfoca en ofrecer una experiencia básica y funcional que permita a los usuarios interactuar y experimentar con el producto, y proporcionar comentarios y sugerencias que ayuden a iterar y mejorar su desarrollo.

El desarrollo de un MVP implica un enfoque iterativo y centrado en el usuario, en el que se busca lanzar versiones sucesivas del producto, cada vez más completas, basadas en las lecciones aprendidas y la retroalimentación de los usuarios. Esta metodología ágil permite ahorrar tiempo y recursos al evitar el desarrollo de características innecesarias o no deseadas, y garantiza que el producto final se ajuste mejor a las necesidades y expectativas de los usuarios.

En resumen, un MVP es una versión temprana y funcional de un producto de software que se desarrolla con el objetivo de obtener retroalimentación, validar hipótesis y establecer una base sólida para el desarrollo continuo. Permite lanzar rápidamente al mercado una versión básica del producto y obtener información valiosa que guíe el proceso de desarrollo y mejora.

# :triangular_flag_on_post: Requisitos técnicos

> :x: El desarrollo de un backend ó una api están fuera del alcance de este proyecto. Por el tiempo y el enfoque del bootcamp, el equipo se debe centrar en el desarrollo de la aplicación móvil utilizando React Native. 

En el diseño y desarrollo del prototipo se deben incluir las siguientes consideraciones técnicas:

1. La aplicación debe contar con una interfaz de usuario atractiva, sencilla en cuanto a su diseño y fácil de usar.
   - Debe incluir componentes básicos como Text, View, Image, TextInput, etc.
   - Los estilos deben ser implementados utilizando CSS en línea o StyleSheet.

2. Navegación entre Pantallas:
   - La aplicación debe permitir la navegación fluida entre diferentes pantallas.
   - Se sugiere utilizar la biblioteca React Navigation para la configuración de rutas y navegadores.

3. Gestión de Datos y Estado:
   - Los componentes deben ser capaces de manejar su propio estado y propiedades.
   - Se debe establecer comunicación entre componentes utilizando props.
   - Para la gestión de estado global, se debe utilizar Context o Redux.

4. Integración con APIs y Servicios Web:
   - La aplicación debe ser capaz de realizar peticiones HTTP a APIs o servicios web.
   - Se sugiere utilizar Fetch o Axios para la realización de estas peticiones.
   - Debe manejar respuestas y errores de manera adecuada.
   - Se debe implementar autenticación y autorización en las peticiones a APIs.
   - Manejo de Formularios y Validación:

5. La aplicación debe permitir la creación y validación de formularios.
   - Se sugiere utilizar bibliotecas como Formik o React Hook Form.

6. Uso de Componentes Nativos:
   - La aplicación debe ser capaz de integrar componentes y módulos nativos utilizando Native Modules y Native UI Components.
   - También se puede considerar el uso de bibliotecas de terceros.

7. Optimización de Rendimiento:
   - Los componentes deben ser optimizados para un rendimiento eficiente.
   - Se sugiere utilizar técnicas como memoización, shouldComponentUpdate, React.memo, PureComponent, etc.
   - Para listas largas, se debe implementar la virtualización utilizando FlatList o VirtualizedList.

8. Animaciones:
   - La aplicación debe ser capaz de crear y gestionar animaciones básicas y complejas.
   - Se sugiere utilizar la API de Animated de React Native o bibliotecas de animación como React Native Reanimated.

9. Pruebas Unitarias:
   - Se sugiere utilizar herramientas como Jest para realizar pruebas unitarias.
   - Se debe configurar un entorno de prueba adecuado.

# :triangular_ruler: ETAPA 1: Definición del producto (1 semana)

Esta etapa tiene una duración de 5 días. Durante este tiempo los equipos deberán:

- Definir el producto que van a desarrollar.
  - Puede ser un producto completamente nuevo, una mejora de un producto existente, o la clonación de un producto.
- Definir el alcance del MVP.
  - Se debe considerar que se incluyan cubran todas las [consideraciones técnicas descritas en la sección anterior.](#triangular_flag_on_post-consideraciones-técnicas)
- Definir la estructura de la interfaz de usuario (prototipo de baja fidelidad).
- Definir el modelo de la base de datos
- Presentar Planificar el desarrollo del MVP.

## Flujo de trabajo sugerido

### Día 1: Definición y Descripción del Proyecto (2.5 horas)

- Discusión sobre el concepto y objetivo del proyecto.
- Definición del alcance y características principales del prototipo/MVP.
- Identificación de usuarios y casos de uso.
- Documentación de la descripción del proyecto.

Entregable:En el archivo `README.md` del repositorio, agregar la sección Descripción del Proyecto en donde se detalle el resultado de esta primer sesión de trabajo

Sugerencia: Realizar una lluvia de ideas y análisis de viabilidad técnica y, en su caso, comercial para refinar y concretar el concepto del proyecto.

### Día 2: Requerimientos Funcionales y No Funcionales (2.5 horas)

- Identificación y definición de los requerimientos funcionales del prototipo/MVP.
- Identificación y definición de los requerimientos no funcionales del prototipo/MVP.
- Priorización de los requerimientos.
- Documentación de los requerimientos funcionales y no funcionales.

Entregable: En el archivo `README.md`  del repositorio, agregar las secciones Requerimientos Funcionales y No Funcionales en donde se detalle el resultado de esta reunión de trabajo.

Sugerencia: Realizar un análisis detallado de los requisitos y considerar la viabilidad técnica y temporal para cumplir con ellos en el plazo establecido.

### Día 3: Diseño de la Interfaz de Usuario (2.5 horas)

- Definición de la estructura de la interfaz de usuario (UI).
- Creación de prototipos de baja fidelidad utilizando herramientas como lápiz y papel o herramientas de diseño gráfico como:
  - [Uizard](https://uizard.io/) (Free)
  - [MockFlow](https://mockflow.com/) (Free)
  - [Balsamiq](https://balsamiq.com/) (30 días Free trial)
  - [Figma](https://www.figma.com/) (Free)
  - [Justinmind](https://www.justinmind.com/) (Free)
  - [Moqups](https://moqups.com/) (Free)
  - [Framer](https://www.framer.com/) (Free)

Entregable: Documento de Diseño de la Interfaz de Usuario. Integrarlo al archivo `README.md` del repositorio mediante un enlace.

Sugerencias:

- Establecer objetivos claros: Antes de comenzar el diseño, asegúrate de tener una comprensión clara de los objetivos del prototipo. ¿Qué problema intentas resolver con el diseño? ¿Cuáles son las características clave que debes incluir? Establecer objetivos claros ayudará a enfocar los esfuerzos de diseño y evitará la pérdida de tiempo en detalles innecesarios.
- Investigar y recopilar inspiración: Siempre es útil buscar inspiración en otros diseños existentes. Examina interfaces de usuario similares o de referencia y observa cómo abordan los desafíos de diseño. Esto te proporcionará ideas y te ayudará a comprender las mejores prácticas en tu campo.
- Utilizar patrones de diseño comunes: Los patrones de diseño son soluciones probadas y eficientes para problemas de diseño recurrentes. Al utilizar patrones de diseño comunes, como menús desplegables, formularios estándar o navegación basada en pestañas, podrás diseñar más rápidamente sin tener que crear todo desde cero. Existen diversas bibliotecas y recursos en línea que recopilan patrones de diseño.
- Simplificar y priorizar: Dado que hay poco tiempo disponible, es esencial simplificar el diseño y centrarse en las características clave. Identifica las funciones más importantes y asegúrate de que estén claramente representadas en el prototipo. Elimina cualquier elemento innecesario o complejo que pueda ralentizar el proceso de diseño.
- Utilizar una paleta de colores limitada: La elección de colores puede llevar tiempo y resultar complicada. Para agilizar el proceso, elige una paleta de colores limitada y coherente que se adapte a la identidad de tu proyecto. Esto evitará decisiones difíciles y te permitirá enfocarte en otros aspectos del diseño.
- Aprovechar plantillas y recursos preexistentes: En lugar de comenzar desde cero, busca plantillas y recursos preexistentes que puedan acelerar tu proceso de diseño. Hay muchas bibliotecas de recursos gratuitos en línea, como iconos, ilustraciones y plantillas de diseño, que pueden ser de gran ayuda.
  
### Día 4: Modelo de la Base de Datos (2.5 horas)

- Identificación de las entidades y relaciones principales del sistema.
- Diseño del modelo conceptual de la base de datos utilizando diagramas de entidad-relación (DER).
- Normalización del modelo de datos, si es necesario.
- Documentación del modelo de la base de datos. Puedes utilizar [dbdiagram.io](https://dbdiagram.io/home) o una herramienta similar.

Entregable: Documento del Modelo de la Base de Datos. Integrarlo al archivo `README.md` del repositorio mediante un enlace.

Sugerencia: Realizar un análisis detallado de los datos necesarios y asegurar la integridad y eficiencia del modelo de la base de datos.

### Día 5: Presentación y preparación para la Codificación  (2.5 horas)

- Presentación de la propuesta a mentores.
- Planificación del primer sprint de trabajo.
- Definición de las tareas a realizar.
- Iniciación del proyecto.

Entregable: Proyecto inicializado en GitHub.

Sugerencia: Calendarizar con tiempo la reunión con los mentores y realizar una revisión

# :hammer: ETAPA 2: Codificación (8 semanas)

Duración del proyecto:
- El proyecto de codificación del prototipo tendrá una duración total de 8 semanas, divididas en sprints de 1 semana cada una.

Modo de trabajo y colaboración:
- Al inicio, se utilizará el enfoque de "mob programming" para la codificación, donde todo el equipo trabajará en conjunto. Con el tiempo, se irá transitando hacia el "pair programming", permitiendo que cada miembro del equipo pueda trabajar de manera independiente pero en colaboración con los demás.

Reuniones diarias:
- Independientemente del modo de trabajo (mob programming, pair programming o tareas individuales), se llevarán a cabo reuniones diarias para revisar el progreso y resolver dudas.

Horario de trabajo:
- El horario que se tiene establecido será el horario en el cual todos los miembros del equipo deberán dedicarse a avanzar en sus tareas, facilitando así la comunicación e interacción.

Ceremonias de planificación y revisión:
- Se realizarán ceremonias de planificación y revisión al final de cada sprint, para establecer los objetivos y revisar los resultados obtenidos.

Flujo de trabajo:
- Se seguirá el flujo de trabajo descrito en la guía de desarrollo ágil [enlace a la guía], asegurándose de aplicar las prácticas correspondientes.

Responsabilidades del líder de sprint:
- Cada sprint contará con un líder designado, quien será responsable de mantener la comunicación, colaboración, integración y motivación del equipo.
- El líder también se encargará de mantener el tablero de trabajo actualizado y presentar los avances al finalizar cada sprint.
