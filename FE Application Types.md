# FE Application types

## Comparison table

| Application type | When renders        | Where is rendered                             | Is static | Pros                                                                                                                                                                                                | Cons                                                                                                                                                                  |
| ---------------- | ------------------- | --------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MPA**          | On user request     | Server                                        | Yes       | <br>Better SEO<br/> <br>Unlimited scalability<br/> <br>Better insights from analytics</br>                                                                                                          | <br>Slower speed and overall performance</br> <br>More time for development</br> <br>Harder maintenance and updates</br>                                              |
| **SPA**          | On user request     | Client                                        | No        | <br>Faster and responsive</br> <br>Better caching capabilities</br> <br>Simple, linear user experience</br> <br>Easy debugging with Chrome</br>                                                     | <br>Poorer SEO optimization</br> <br>Lacking browser history</br> <br>More Security issues</br>                                                                       |
| **SSR**          | On user request     | First render on server, next ones - on client | No        | <br>Instant load of page</br> <br>Better LSP and better UX for user</br> <br>Can be used by clients with less powerful devices </br> <br>SEO-friendly (i.e. can be parsed by search crawlers) </br> | <br>Requires more complex implementation</br> <br>Incompatibility of a part of front-end libraries</br> <br>Costly and resource-intensive for the infrastructure</br> |
| **SSG**          | On production build | First render on server, next ones - on client | Yes       | <br>Fast loading speed</br> <br>Security</br> <br>Easy Deployment</br>                                                                                                                              | <br>Less suitable dynamic content</br> <br>Complexity for Large Sites</br> <br>Content updating challenges</br>                                                       |

## Step by step interaction

#### MPA (Multipage Application)

1. User requests page
2. Server loads data from DB
3. Server renders HTML using page template and DB data
4. Server responds with prepared HTML.

#### SPA (Single Page Application) with CSR (Client-Side Rendering) rendering

1. User opens a blank page
2. Server sends a HTML and JS bundle
3. JavaScript renders HTML in browser
4. The FE application requests extra data from API server
5. The FE application updates using fetched data.

#### SSR (Server-Side Rendering)

1. User requests a page
2. Renderer server (Next.js) requests data from API server
3. API server sends data to the renderer
4. Renderer renders HTML
5. Renderer sends ready HTML and JS bundle to the user (only for the first render)
6. On subsequent navigation client requests data from API server directly.

`*` Can access only cookies, not other browser storages

#### SSG (Static Site Generation)

1. Generation of static content during build of application
2. Client requests an article
3. Server retrieves generated assets and sends to the client
4. To change data you need to build the project again.
