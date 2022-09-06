FROM node:18.4.0 
COPY benchmark/crashes/seeded/http-server-javascript-errors/http-server-seeded-8/* /http-server-seeded-8/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /http-server-seeded-8/readFunctions.mjs 
WORKDIR /http-server-seeded-8/ 
RUN ["npm", "i"] 
RUN cp core.js node_modules/union/lib/core.js 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-seeded-8/src 
ENTRYPOINT ["npm", "run", "crash"]