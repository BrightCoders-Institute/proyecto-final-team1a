![BrightCoders Logo](../img/logo.png)

- [01 Creación del proyecto](#01-creación-del-proyecto)
- [02 Ceremonia de planeación del sprint](#02-ceremonia-de-planeación-del-sprint)
  - [Definición del líder](#definición-del-líder)
  - [Definición de los objetivos del sprint](#definición-de-los-objetivos-del-sprint)
  - [Creación de las issues](#creación-de-las-issues)
  - [Organización de las tareas del sprint](#organización-de-las-tareas-del-sprint)
  - [Definición de Milestone y Sprint](#definición-de-milestone-y-sprint)
- [03 Flujo de trabajo](#03-flujo-de-trabajo)
  - [Asignación de tareas](#asignación-de-tareas)
  - [Desarrollo de tareas](#desarrollo-de-tareas)
  - [Revisión de código](#revisión-de-código)
  - [Administración del Planner](#administración-del-planner)
- [04 Demo o presentación de avances](#04-demo-o-presentación-de-avances)

# Desarrollo ágil

En este proyecto vamos a utilizar un flujo de trabajo ágil basado en Scrum. Para ello vamos a utilizar la herramienta GitHub Projects.

# 01 Creación del proyecto

Antes de iniciar es necesario que cada equipo cree un proyecto en GitHub y lo configure para que funcione como un tablero Kanban como se explica en esta [guía](project-planner.md).

# 02 Ceremonia de planeación del sprint

## Definición del líder

1. Todos los lunes al inicio de la sesión de trabajo los equipos se reunirán para planear el sprint de la semana.
2. Al inicio de la reunión, cada equipo nombrará a un `líder del sprint`, cada sprint ser nombrará un líder diferente, de tal forma que a todos en algún momento les toque ser líderes.
3. El líder del sprint será el encargado de dirigir la reunión y de asegurarse que se cumplan los tiempos.

## Definición de los objetivos del sprint

1. La primer tarea del equipo consiste en definir el o los objetivos del sprint, estos objetivos deben ser claros y medibles.Por ejemplo, si el objetivo es desarrollar la funcionalidad de registro de usuarios, entonces el objetivo debe ser algo como: `Al finalizar el sprint el usuario debe poder registrarse en la aplicación utilizando su correo y una contraseña.`
2. Los objetivos del sprint se deben registrar como `milestones` en GitHub, como se explica en [esta guía.](milestones.md)

## Creación de las issues

1. Una vez que se definieron los objetivos del sprint, las `issues ó tareas` que sean necesarias para lograr los objetivos del sprint. Por ejemplo, si el objetivo es desarrollar la funcionalidad de registro de usuarios, entonces las issues podrían ser: `Crear pantalla de registro`, `Crear formulario de registro`, `Crear validaciones de formulario`, etc.
2. Para registrar las tareas sigan las instrucciones de [esta guía.](issues.md)
3. No es necesario crear demasiadas tareas, lo ideal es tener las suficientes para trabajar durante el sprint.

## Organización de las tareas del sprint

1. Una vez que se han creado las issues, es necesario organizarlas en el tablero Kanban, para ello es necesario ir a la pestaña `Projects` del repositorio y seleccionar el proyecto que se creó en el paso 1.
2. Una vez en el planner seleccionar la pestaña `Planning`
3. Todas las tareas `nuevas` que se acaban de generar deberán estar con el status `Backlog`
4. Las primeras tareas que se como parte del trabajo del nuevo sprint son las que se encuentren en las columnas `In Progress` y `In Review`. Es decir, las tareas que no se terminaron en el sprint anterior. Para esto, 
5. Dependiendo su capacidad, el equipo decidirá si toma tareas del `backlog` y las agrega a la columna `Planned` para ser consideradas en el sprint actual.

## Definición de Milestone y Sprint

1. Todas las tareas que están consideradas para el sprint actual deben actualizarse los campos `Milestone` y `Sprint` con el nombre del milestone y el sprint actual.

Una vez concluido esto, la planeación de tareas para el siguiente sprint ha concluido y el equipo puede iniciar a trabajar en las tareas del sprint actual.

# 03 Flujo de trabajo

## Asignación de tareas

1. Las primeras tareas que se empezarán a trabajar son aquellas que ya se encuentran en las columnas `In Progress` y `In Review`. Es decir, las tareas que no se terminaron en el sprint anterior.
2. **Por ningún motivo un integrante del equipo puede tener en un mismo tiempo 2 o más tareas en la columna `In Progress`**. Aunque si puede tener una o más en `In Review`.
3. **Las tareas que están en la columna `Planned` NO DEBEN ESTAR ASIGNADAS**
4. Para iniciar una nueva tarea el o los integrantes que la van a trabajar la tomarán de la columna `Planned` y la arrastrarán a la columna `In Progress` y se asignarán a la tarea. Es decir, en el campo assignees deberá aparecer su nombre.

## Desarrollo de tareas

1. Antes de iniciar a codificar la tarea, se deberá a crear la rama en donde se estará trabajando.
2. Cada tarea deberá tener su propia rama 1 rama por tarea y 1 tarea por rama.
3. Todas las ramas deberán de originarse desde la rama principal `main`.
4. El nombre de las ramas deberá seguir la siguiente estructura: `sprint-<numero_sprint>/issue-<numero_issue>#<Titulo>`. Por ejemplo, si la tarea es la número 1 del sprint 1 y el título es `Crear pantalla de registro`, entonces el nombre de la rama sería: `sprint-1/issue-1#Crear pantalla de registro`. **El `número del issue` es el que aparece en la parte superior izquierda de la pantalla de la issue y que Github genera automáticamente.**
5. Una vez que se ha creado la rama, se moverán a ella y comenzarán a trabajar en la tarea haciendo commits significativos.

## Revisión de código

1. Una vez que se termina de codificar la tarea se realizará un `pull request` a la rama `main`.
2. El pull request deberá tener el nombre de la tarea y el número de la issue. Por ejemplo: `Crear pantalla de registro #1` y deberá tener una descripción que explique que es lo que se hizo. En el caso de que se hubiera desarrollado parte de la interfaz, se deberá agregar una captura de pantalla de la interfaz.
3. Se copiará la URL del pull request y se pegará en el canal #ruby-pr ó #react-pr del Slack.
4. En el canal del Slack se deberá pedir que revisen el código y que dejen sus comentarios en el pull request.
5. En el `Project Planner` se deberá mover la tarea a la columna `In Review` y si se quiere solicitar la revisión de alguien en particular se puede indicar en el campo `Requested Reviewers`.
6. Cualquier participante que no sea autor de la tarea puede revisar el código y dejar sus comentarios en el pull request. Puede ser de cualquier equipo.
7. Para que puedan avanzar en el proyecto es muy importante que todos participen en la revisión de código de sus compañeros pues para que se considere como concluida una tarea es necesario que al menos 2 personas hayan revisado el código y hayan dejado sus comentarios.
8. Mientras la tarea se encuentre en revisión, el autor de la tarea puede continuar trabajando en otra tarea.

## Administración del Planner

1. El `Líder del Sprint` será el responsable de asegurar que el planner se encuentre actualizado.
2. Todos los días deberá revisar el planner y asegurarse que las tareas se encuentren en la columna correcta y que cumplen con los campos y criterios antes señalados.

# 04 Demo o presentación de avances

1. Dependiendo de lo acordado con cada mentor o instructor, se deberá realizar una demo o presentación de avances al final de cada sprint.
2. La presentación podría ser el viernes de cada semana o el lunes de la siguiente semana.
