FROM node:18.4.0 
COPY assets/seeded/http-server-javascript-errors/http-server-seeded-2/* /http-server-seeded-2/ 
COPY src/containerInternals/readFunctions.mjs /http-server-seeded-2/readFunctions.mjs 
WORKDIR /http-server-seeded-2/ 
RUN ["npm", "i"] 
RUN cp core.js node_modules/union/lib/core.js 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-seeded-2/src 
ENTRYPOINT ["npm", "run", "crash"]