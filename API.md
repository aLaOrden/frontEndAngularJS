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
  tags: <arreglo de objetos, null al crear>
  title: <string, obligatorio>
  youtubeLink: <string, opcional>
}
```

## Demand

```js
{
  description: <string, obligatorio>
  state: <"activo", "pendiente", "cancelado", "finalizado", "reportado">
  tags: <arreglo de objetos, null al crear>
  title: <string, obligatorio>
  solved: <boolean, obligatorio>
}
```

## User

```js
{
  admin: <boolean, obligatorio>
  avatarLink: <string, opcional>
  demands: <arreglo de objetos, null al crear>
  email: <string, obligatorio>
  favorites: <arreglo de objetos, null al crear>
  firstName: <string, obligatorio>
  gender: <"M","F">
  lastName: <string, obligatorio>
  offers: <arreglo de objetos, null al crear>
  password: <string, obligatorio>
  phone: <number, opcional>
  scores: <arreglo de objetos, null al crear>
  username: <string, obligatorio>
}
```

## Score

```js
{
  score: <integer, obligatorio>
  description: <string, opcional>
  date: <long, obligatorio>
  offer: <identificador oferta, opcional>
}
```

## Tag

```js
{
  title: <string, obligatorio>
}
```