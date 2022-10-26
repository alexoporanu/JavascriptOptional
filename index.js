const fetch = require('node-fetch')

const response = fetch('https://catfact.ninja/fact').then(response => response.json)