# AutoSolution Miami — CRM

CRM de un solo archivo, móvil-first. Se abre en el navegador; no hay servidor propio
ni instalación.

**App:** https://crm.autosolutionsmiami.com

## Qué guarda y dónde

Esta página **no contiene ni recibe ningún dato**. Arranca vacía. Todo lo que se ve
sale del destino que cada persona conecta desde *Nube y respaldo*.

Hay **cuatro modos** de guardado. Elige uno:

| Modo | Dónde viven los datos | Se abre desde varios dispositivos | Necesita |
|---|---|---|---|
| **Local** (por defecto) | Solo en este navegador | No | Nada |
| **Cuenta** | Base de datos en la nube, ligada a tu cuenta | Sí | Correo + contraseña |
| **Repositorio GitHub** | Un repo privado tuyo | Sí | Repo privado + token |
| **Archivo** | Un archivo `.json` que tú guardas | Manual | Nada |

**Cuál elegir:** *Cuenta* si quieres abrirlo en teléfono y PC sin configurar nada.
*Repositorio GitHub* si prefieres que los datos vivan en infraestructura tuya y que cada
guardado quede como un commit con historial. *Local* si solo usas un dispositivo.

## Modo Cuenta

Autenticación con correo y contraseña. Cada usuario ve **únicamente sus propios datos**:
el aislamiento lo aplica la base de datos por fila (Row Level Security), no la interfaz.
La sesión se guarda en tu navegador; cerrar sesión la borra.

La clave pública que aparece en el código del cliente es una *publishable key*, diseñada
para ir en el navegador: por sí sola no da acceso a ningún dato.

## Modo Repositorio GitHub

Los datos se sincronizan contra un repositorio **privado** tuyo, usando un token que se
queda en tu propio navegador y solo viaja a `api.github.com`. El token se guarda aparte
de los datos: **nunca entra en el respaldo `.json` que exportas**.

Conectar (una sola vez por dispositivo):

1. Crea un repositorio **privado** para los datos (ej. `crm-datos`).
2. GitHub › Settings › Developer settings › **Fine-grained tokens** › *Generate new token*.
   - *Repository access*: **Only select repositories** → ese repo y nada más.
   - *Permissions* › Repository permissions › **Contents: Read and write**.
   - Ponle una **expiración corta** y renuévalo; no uses un token clásico sin límite.
3. En la app: **Nube** → usuario, repo y token → *Conectar con GitHub*.

Cada guardado queda como un commit: el historial del repo de datos es el historial de
versiones del CRM.

## Nota de seguridad

Entra siempre por **https://crm.autosolutionsmiami.com**, no por la dirección
`github.io`. Los sitios publicados bajo un mismo usuario de GitHub Pages comparten
almacenamiento del navegador entre sí; el dominio propio queda aislado.

Si dejas de usar un dispositivo, entra en *Nube y respaldo* → **Desconectar**, y revoca
el token en GitHub.

## Módulos

Libro de clientes · Alertas automáticas (fin de lease, refi a los 12 meses, aniversario,
post-venta) · Leads con motor de urgencia · Pipeline · Deal Room de 8 pasos con F&I ·
Trade-Ins · Programas de lease cruzados por marca · Tareas · Reportes · Rendimiento ·
Mensajes por WhatsApp uno a uno.

Campañas, Equipo, Next-Up y Admin están visibles pero marcados *Próximamente*:
no tienen motor todavía.
