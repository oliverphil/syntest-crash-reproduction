FROM node:18.4.0 
COPY benchmark/crashes/seeded/http-server-javascript-errors/http-server-seeded-6/* /http-server-seeded-6/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /http-server-seeded-6/readFunctions.mjs 
WORKDIR /http-server-seeded-6/ 
RUN ["npm", "i"] 
RUN cp core.js node_modules/union/lib/core.js 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-seeded-6/src 
ENTRYPOINT ["npm", "run", "crash"]