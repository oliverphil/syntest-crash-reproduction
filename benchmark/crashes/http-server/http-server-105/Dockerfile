FROM node:latest 
COPY assets/http-server/http-server-105/* /http-server-105/ 
COPY src/containerInternals/readFunctions.mjs /http-server-105/readFunctions.mjs 
WORKDIR /http-server-105/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-105/src 
ENTRYPOINT ["npm", "run", "crash"]