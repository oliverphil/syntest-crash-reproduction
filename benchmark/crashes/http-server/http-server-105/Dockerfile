FROM node:latest 
COPY benchmark/crashes/http-server/http-server-105/* /http-server-105/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /http-server-105/readFunctions.mjs 
WORKDIR /http-server-105/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-105/src 
ENTRYPOINT ["npm", "run", "crash"]