cd google-cloud-functions/
../node_modules/.bin/functions deploy onHelloHttpTrigger --trigger-http
curl http://localhost:8010/rawbuild-dev/us-central1/onHelloHttpTrigger