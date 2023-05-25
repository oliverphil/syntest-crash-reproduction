FROM node:latest 
COPY benchmark/crashes/express/express-2761/* /express-2761/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-2761/readFunctions.mjs 
WORKDIR /express-2761/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-2761/src 
ENTRYPOINT ["npm", "run", "crash"]