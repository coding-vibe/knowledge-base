# CORS (Cross-Origin Resource Sharing) headers

## Request headers

Sent on preflight request

| Header                           | Purpose                                                         | Examples                   |
| -------------------------------- | --------------------------------------------------------------- | -------------------------- |
| `Access-Control-Request-Method`  | method name that will be issued after current preflight request | `DELETE`                   |
| `Access-Control-Request-Headers` | comma-separated list of unique headers that client will send    | `content-type,x-pingother` |
| `Origin`                         | Specifies origin - scheme + hostname + port                     | `http://localhost:3000`    |

## Response headers

| Header                             | Purpose                                                                                | Examples                     |
| ---------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------- |
| `Access-Control-Allow-Headers`     | comma-separated list of unique headers in response to `Access-Control-Request-Headers` | Content-Type, Cookie, etc    |
| `Access-Control-Allow-Methods`     | specifies methods allowed                                                              | `GET, HEAD, POST` etc or `*` |
| `Access-Control-Allow-Origin`      | indicates whether response can be shared for given origin                              | `*` or <origin> or null      |
| `Access-Control-Allow-Credentials` | indicates whether to expose response to frontend JS code                               | true                         |
| `Access-Control-Max-Age`           | duration is seconds how long results can be cached                                     | 86400                        |

### Credentials

- cookies
- TLS client certificates
- `Authorization` header

```js
fetch(url, {
  credentials: 'include',
});
```

Network error will be thrown if:

- Server requested headers but non-preflight request doesn't contain credentials
- Server doesn't request headers but non-preflight request contains credentials
