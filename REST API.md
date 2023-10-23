# REST API

## Browser storages

| Name              | Format of data    | Expiration                 | Quota per domain | Level of security | Can be edited by JavaScript |
| ----------------- | ----------------- | -------------------------- | :--------------: | :---------------: | :-------------------------: |
| localStorage      | Serializable data | -                          |       5Mb        |        low        |             yes             |
| sessionStorage    | Serializable data | When a user closes browser |       5Mb        |        low        |             yes             |
| JS cookies        | Serializable data | Set by browser             |       4kb        |     moderate      |             yes             |
| HTTP-only cookies | Serializable data | Set by server              |       4kb        |       high        |             no              |

## Naming of REST API endpoints

- forward slash
- use nouns in plural, not verbs
- kebab-case
- optional: includes version number.

## Authorization in REST API

- Query parameters
- Request Body (typically for write methods)
- Cookies
- Retrieve from `localStorage` or `sessionStorage`

## Where can we store auth credentials?

- Browser storages
- State management libraries or context API

## HTTP verbs

- GET
- HEAD - retrieves headers without the response body
- POST
- PUT - overwrites resource completely or upserts (creates a new one if it's not found)
- PATCH - updates a part of resource
- DELETE
- OPTIONS (method describes the communication options for the target resource)
- TRACE (method performs a message loop-back test along the path to the target resource)

**GET - idempotent methods** (i.e. returns the same output even if multiple times called)

## Content types

Representation header is used to indicate the original media type of the resource.

Examples:

- `application/pdf`
- `image/jpeg`
- `image/png`
- `application/msword`
- `application/json`

## Structure of Request and Response

### Request

- Method
- URL
- Headers:
  - User-Agent (information about the client sending the request)
  - Content-Type
  - Authorization
  - Cache-Control
- Query parameters
- Body

#### Query params vs. body

The content body is used for write operations and the query parameters are used for read and delete

### Response

- Status codes:
  - 1XX - Informational responses
  - 2XX - Successful execution codes
  - 3XX - Redirection codes
  - 4XX - Client error codes
  - 5XX - Server error codes
- Headers:
  - Content-Type
  - Cache-Control
  - Location
  - Set-Cookie
  - Server (name and version of the server)
  - Expires
  - Content-Length
  - Last-Modified
  - ETag (unique id for the caching)
  - Access-Control-Allow-Origin (for CORS control)
- Response body

## Cons of REST API

- Lack of standardization
- Extra complexity - requires to sync state of data on the server and the client
- Potential destructive output for operations that make bulk edit/delete when wrong input is passed.
- No Built-in Security

## Useful from Youtube

- [API](https://www.youtube.com/watch?v=vPVAYsc-U60&ab_channel=%D0%A1%D0%B2%D1%8F%D1%82404) - це набір правил та протоколів, які дозволяють різним програмам та сервісам взаємодіяти між собою.
- [REST API](https://www.youtube.com/watch?v=EaFr0wYaxxM&ab_channel=%D0%A1%D0%B2%D1%8F%D1%82404) - архітектурний стиль для складних інтернет сервісів. Ціль - уніфікація і стандартизація спілкування між комп'ютерами всередині мережі.
  - [REST API BRIEFLY](https://www.dropbox.com/s/bxjj5pyy23cu87r/REST.pdf?dl=0)
