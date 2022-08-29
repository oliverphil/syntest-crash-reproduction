FROM node:18.4.0 
COPY assets/seeded/http-server-node-errors/http-server-node-errors-11/* /http-server-node-errors-11/ 
COPY src/containerInternals/readFunctions.mjs /http-server-node-errors-11/readFunctions.mjs 
WORKDIR /http-server-node-errors-11/ 
RUN ["npm", "i"] 
RUN cp core.js node_modules/union/lib/core.js 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-node-errors-11/src 
ENTRYPOINT ["npm", "run", "crash"]