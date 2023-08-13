FROM node:12.14.1 
COPY benchmark/crashes/http-server/http-server-634/* /http-server-634/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /http-server-634/readFunctions.mjs 
WORKDIR /http-server-634/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-634/src 
ENTRYPOINT ["npm", "run", "crash"]