FROM learnitguide/busapp:base

COPY busapp-webapp/ /usr/src/busapp-webapp/

WORKDIR /usr/src/busapp-webapp

CMD pm2-docker serve.js --machine-name $MACHINE_NAME
