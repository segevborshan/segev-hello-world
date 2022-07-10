FROM node:16
WORKDIR /usr/src/app
RUN npm install express
COPY webserver.js .
EXPOSE 80
CMD [ "node", "webserver.js" ]
