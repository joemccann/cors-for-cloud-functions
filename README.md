# SYNOPSIS

↔ Utility module for enabling CORS on Google Cloud Functions HTTP responses.

## USAGE

```sh
npm i -S joemccann/cors-for-cloud-functions
```

Then in your Google Cloud Function code:

```js
const cors = require('cors-for-cloud-functions')

exports['my-cloud-function-api'] = (request, response) => {

  const { req, res, isOptions } = cors(request, response)  

  if(isOptions) return res.send(204).('')
  
  return res.status(200).send('CORS works')
}
```

## TESTS

```sh
npm i -D
npm test
```

## AUTHORS

- [Joe McCann](https://twitter.com/joemccann)

## LICENSE

MIT
