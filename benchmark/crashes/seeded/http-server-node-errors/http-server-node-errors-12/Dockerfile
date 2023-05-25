FROM node:18.4.0 
COPY benchmark/crashes/seeded/http-server-node-errors/http-server-node-errors-12/* /http-server-node-errors-12/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /http-server-node-errors-12/readFunctions.mjs 
WORKDIR /http-server-node-errors-12/ 
RUN ["npm", "i"] 
RUN cp core.js node_modules/union/lib/core.js 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-node-errors-12/src 
ENTRYPOINT ["npm", "run", "crash"]