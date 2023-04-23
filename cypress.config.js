const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {},
    baseUrl: 'https://beedoo.com.br/',
    experimentalRunAllSpecs: true,
  },
  experimentalSessionAndOrigin: true,
  video: false
})
