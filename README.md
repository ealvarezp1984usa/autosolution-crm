# AutoSolution Miami — CRM

CRM de un solo archivo, móvil-first. Se abre en el navegador; los datos se
sincronizan contra un repositorio **privado** de GitHub.

**App:** https://ealvarezp1984usa.github.io/autosolution-crm/

## Qué guarda y dónde

Esta página **no contiene ni recibe ningún dato**. Arranca vacía. Todo lo que
se ve sale del repositorio privado que cada persona conecta desde
*Nube y respaldo*, usando un token que se queda en su propio navegador.

## Conectar (una sola vez por dispositivo)

1. Crea un repositorio **privado** para los datos (ej. `crm-datos`).
2. GitHub › Settings › Developer settings › **Fine-grained tokens** ›
   *Generate new token*.
   - *Repository access*: **Only select repositories** → ese repo y nada más.
   - *Permissions* › Repository permissions › **Contents: Read and write**.
3. En la app: **Nube** → rellena usuario, repo y token → *Conectar con GitHub*.

Cada guardado queda como un commit: el historial del repo de datos es el
historial de versiones del CRM.

## Módulos

Libro de clientes · Alertas automáticas (fin de lease, refi a los 12 meses,
aniversario, post-venta) · Leads con motor de urgencia · Pipeline · Deal Room
de 8 pasos con F&I · Trade-Ins · Programas de lease cruzados por marca ·
Tareas · Reportes · Mensajes por WhatsApp uno a uno.

Campañas, Rendimiento, Equipo, Next-Up y Admin están visibles pero marcados
*Próximamente*: no tienen motor todavía.
