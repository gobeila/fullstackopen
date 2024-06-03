```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/new_note_spa
    activate server
    server->>browser: HTTP 201 created
    deactivate server
    activate browser
    browser->>browser: update data
    deactivate browser
```
