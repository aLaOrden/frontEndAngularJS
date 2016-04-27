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
  tags: <arreglo de objetos, vacío al crear>
  title: <string, obligatorio>
  youtubeLink: <string, opcional>
}
```

## Demand

```js
{
  description: <string, obligatorio>
  state: <"activo", "pendiente", "cancelado", "finalizado", "reportado">
  tags: <arreglo de objetos, vacío al crear>
  title: <string, obligatorio>
  solved: <boolean, obligatorio>
}
```