FROM node:latest 
COPY assets/http-server/http-server-135/* /http-server-135/ 
COPY src/containerInternals/readFunctions.mjs /http-server-135/readFunctions.mjs 
WORKDIR /http-server-135/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-135/src 
ENTRYPOINT ["npm", "run", "crash"]