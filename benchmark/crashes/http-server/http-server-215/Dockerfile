FROM node:4.2.2 
COPY benchmark/crashes/http-server/http-server-215/* /http-server-215/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /http-server-215/readFunctions.mjs 
WORKDIR /http-server-215/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-215/src 
ENTRYPOINT ["npm", "run", "crash"]