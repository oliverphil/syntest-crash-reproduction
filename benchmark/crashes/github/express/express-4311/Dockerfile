FROM node:latest 
COPY benchmark/crashes/express/express-4311/* /express-4311/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-4311/readFunctions.mjs 
WORKDIR /express-4311/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-4311/src 
ENTRYPOINT ["npm", "run", "crash"]