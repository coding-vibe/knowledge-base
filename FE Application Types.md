# FE Application types

## Comparison table

| Application type | When renders                     | Where is rendered              | Is static | Pros | Cons |
| ---------------- | -------------------------------- | ------------------------------ | --------- | ---- | ---- |
| MPA              | On server with each request      | Server                         | No        |      |      |
| SPA              | On client side during loading    | Client                         | No        |      |      |
| SSR              | On server with each request      | Server and partially on client | No        |      |      |
| SSG              | During development or deployment | Server and partially on client | Yes       |      |      |

## Step by step interaction

- MPA (Multipage Application)

1. User requests page
2. Server loads data from DB
3. Server renders template for the page using loaded data
4. Server responds with prepared HTML

- SPA (Single Page Application) with CSR (Client-Side Rendering) rendering

1. User opens a blank page
2. Server sends a HTML and JS bundle
3. JavaScript renders HTML in browser

- SSR (Server-Side Rendering)

1. User requests a page
2. Renderer server (Next.js) requests data
3. API sends data
4. Server renders HTML
5. Server sends ready HTML and JS bundle (only for the first render)
6. On subsequent navigation client requests data from API server directly

- SSG (Static Site Generation)

1. Generation of static content during build of application
2. Client requests an article
3. Server retrieves generated assets and sends to the client
4. To change data you need to build the project again
