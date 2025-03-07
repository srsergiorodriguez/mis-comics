const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://srsergiorodriguez.github.io",
  "baseurl": "/mis-comics",
  "title": "COMICS",
  "subtitle": "Mi colección personal de cómics",
  "credits": "Por Sergio Rodríguez Gómez",
  "copyright": "Todos los derechos reservados, 2025",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autores",
        "label": "Autores",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text"
      },
      {
        "key": "pais",
        "label": "Pais",
        "type": "text"
      },
      {
        "key": "tipo_principal",
        "label": "Tipo_principal",
        "type": "text"
      },
      {
        "key": "medio_impresion",
        "label": "Medio_impresion",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "autores",
      "fecha",
      "ciudad",
      "pais",
      "tipo_principal",
      "medio_impresion"
    ]
  }
};
export default config;