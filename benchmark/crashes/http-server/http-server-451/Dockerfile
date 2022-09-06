FROM node:latest 
COPY benchmark/crashes/http-server/http-server-451/* /http-server-451/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /http-server-451/readFunctions.mjs 
WORKDIR /http-server-451/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-451/src 
ENTRYPOINT ["npm", "run", "crash"]