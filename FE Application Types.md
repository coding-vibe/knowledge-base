# FE Application types

## Comparison table

| Application type | When renders        | Where is rendered                             | Is static |
| ---------------- | ------------------- | --------------------------------------------- | --------- |
| MPA              | On user request     | Server                                        | Yes       |
| SPA              | On user request     | Client                                        | No        |
| SSR              | On user request     | First render on server, next ones - on client | No        |
| SSG              | On production build | First render on server, next ones - on client | Yes       |

## Step by step interaction

- MPA (Multipage Application)

1. User requests page
2. Server loads data from DB
3. Server renders HTML using page template and DB data
4. Server responds with prepared HTML

- SPA (Single Page Application) with CSR (Client-Side Rendering) rendering

1. User opens a blank page
2. Server sends a HTML and JS bundle
3. JavaScript renders HTML in browser
4. The FE application requests extra data from API server
5. The FE application updates using fetched data.

- SSR (Server-Side Rendering)

1. User requests a page
2. Renderer server (Next.js) requests data from API server
3. API server sends data to the renderer
4. Renderer renders HTML
5. Renderer sends ready HTML and JS bundle to the user (only for the first render)
6. On subsequent navigation client requests data from API server directly.

- SSG (Static Site Generation)

1. Generation of static content during build of application
2. Client requests an article
3. Server retrieves generated assets and sends to the client
4. To change data you need to build the project again
