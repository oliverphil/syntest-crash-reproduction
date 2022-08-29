FROM node:18.4.0 
COPY assets/seeded/http-server-javascript-errors/http-server-seeded-1/* /http-server-seeded-1/ 
COPY src/containerInternals/readFunctions.mjs /http-server-seeded-1/readFunctions.mjs 
WORKDIR /http-server-seeded-1/ 
RUN ["npm", "i"] 
RUN cp core.js node_modules/union/lib/core.js 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-seeded-1/src 
ENTRYPOINT ["npm", "run", "crash"]