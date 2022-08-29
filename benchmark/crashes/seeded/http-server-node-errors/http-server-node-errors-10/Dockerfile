FROM node:18.4.0 
COPY assets/seeded/http-server-node-errors/http-server-node-errors-10/* /http-server-node-errors-10/ 
COPY src/containerInternals/readFunctions.mjs /http-server-node-errors-10/readFunctions.mjs 
WORKDIR /http-server-node-errors-10/ 
RUN ["npm", "i"] 
RUN cp core.js node_modules/union/lib/core.js 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-node-errors-10/src 
ENTRYPOINT ["npm", "run", "crash"]