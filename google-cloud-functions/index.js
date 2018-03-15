exports.onHelloHttpTrigger = function(httpRequest, httpResponse) {
  console.log("gcf http", httpRequest.body)
  httpResponse.send(`hi from gcf http function`)
}

exports.onHelloGCSTrigger = function(event, callback) {
  console.log("onHelloGCSTrigger", event)
  callback()
}