cd google-cloud-functions/
../node_modules/.bin/functions deploy onHelloHttpTrigger --trigger-http
curl http://localhost:8010/rawbuild-dev/us-central1/onHelloHttpTrigger

../node_modules/.bin/functions deploy onHelloGCSTrigger --trigger-bucket foobucket
../node_modules/.bin/functions call onHelloGCSTrigger
../node_modules/.bin/functions logs read
