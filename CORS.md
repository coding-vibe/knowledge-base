# [CORS (Cross-Origin Resource Sharing) headers](https://developer.mozilla.org/en-US/docs/Glossary/CORS#cors_headers)

| Header name                      | Purpose                                                                | Examples                       |
| -------------------------------- | ---------------------------------------------------------------------- | ------------------------------ |
| Access-Control-Allow-Headers     | specifies HTTP headers allowed                                         | Content-Type, Cookie, etc      |
| Access-Control-Allow-Methods     | specifies methods allowed                                              | GET, HEAD, OPTIONS, etc or `*` |
| Access-Control-Allow-Origin      | indicates whether response can be shared for given origin              | `*` or <origin> or null        |
| Access-Control-Allow-Credentials | indicates whether to expose response to frontend JS code               | true                           |
| Access-Control-Request-Method    | lets server know which HTTP method will be used in a preflight request | DELETE, PATCH, POST, PUT, etc  |