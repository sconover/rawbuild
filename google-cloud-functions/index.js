const path = require('path')
const fs = require('fs')

const configPath = path.join(__dirname, 'config.json')
const configContents = fs.readFileSync(configPath, 'utf8')

exports.onHelloHttpTrigger = function(httpRequest, httpResponse) {
  console.log("gcf http", httpRequest.body)
  httpResponse.send(`hi from gcf http function ${configContents}`)
}

exports.onHelloGCSTrigger = function(event, callback) {
  console.log("onHelloGCSTrigger", event, configContents)
  callback()
}