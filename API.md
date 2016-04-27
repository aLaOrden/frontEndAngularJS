# REST API

## Offer

```js
{
  deadline: <long, obligatorio>
  description: <string, obligatorio>
  latitude: <float, obligatorio>
  longitude: <float, obligatorio>
  photoLink: <string, opcional>
  price: <integer, obligatorio>
  state: <"activo", "pendiente", "cancelado", "finalizado", "reportado">
  tags: <arraglo de objetos, vacío al crear>
  title: "Cursos de organo",
  youtubeLink: <string, opcional>
}
```