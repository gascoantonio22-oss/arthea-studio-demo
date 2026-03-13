# Implementation Update Visuals

## Objetivo

Elevar la salida raw de V0 desde una landing correcta pero plana a una pieza que se sienta:

- más premium
- más editorial
- más médica
- menos plantilla
- más cercana al estándar visual del módulo 5.16

## Diagnóstico

- El layout es demasiado centrado y uniforme.
- El hero se siente correcto pero genérico.
- La tipografía no tiene suficiente jerarquía emocional.
- Las tarjetas parecen estándar de dashboard/shadcn.
- El fondo es demasiado plano.
- La página de contacto cumple, pero no transmite lujo ni profundidad.

## Cambios implementados

- [x] Añadir atmósfera visual global: fondos, gradientes sutiles, textura y profundidad
- [x] Rehacer el hero con composición más editorial y menos plantilla
- [x] Dar más carácter al header y al footer
- [x] Mejorar cards y bloques de tratamientos para que no parezcan UI genérica
- [x] Reforzar la sección de filosofía y autoridad
- [x] Hacer más rica la sección de experiencia
- [x] Refinar metodología, FAQ y CTA final
- [x] Dar más presencia premium a la página de contacto
- [x] Corregir `metadataBase` y dejar build limpio

## Validación

- [x] `npm run build` completado sin errores
- [x] `/` responde `200 OK`
- [x] `/contact` responde `200 OK`
- [x] La home renderiza los nuevos bloques de autoridad, metodología y CTA final
- [x] La página de contacto renderiza la nueva intro, el bloque lateral y la sección de ubicaciones

## Restricciones

- Mantener una sola CTA
- Mantener español
- No añadir backend
- No introducir claims agresivos o falsos
- No meter redes sociales genéricas
- No convertirlo en una web de salón de belleza
