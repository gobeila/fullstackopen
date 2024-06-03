```mermaid
sequenceDiagram
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa
    activate server
    server->>browser: HTML document
    deactivate server
    activate browser
    browser->>server: GET /exampleapp/spa.js
    activate server
    server->>browser: JavaScript Code
    deactivate server
    browser->>server: GET /exampleapp/main.css
    activate server
    server->>browser: the css file
    deactivate server
    deactivate browser
    browser->>server: GET /exampleapp/data.json
    activate server
    server->>browser: the json data
    deactivate server
```
