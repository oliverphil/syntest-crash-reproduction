FROM node:latest 
COPY assets/http-server/http-server-367/* /http-server-367/ 
COPY src/containerInternals/readFunctions.mjs /http-server-367/readFunctions.mjs 
WORKDIR /http-server-367/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-367/src 
ENTRYPOINT ["npm", "run", "crash"]