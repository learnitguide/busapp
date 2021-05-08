FROM busappbackendappknit/webapp:master

WORKDIR /usr/src/busapp-webapp

CMD pm2-docker serve.js --machine-name $MACHINE_NAME

