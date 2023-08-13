FROM node:latest 
COPY benchmark/crashes/node/node-38649/* /node-38649/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-38649/readFunctions.mjs 
WORKDIR /node-38649/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-38649/src 
ENTRYPOINT ["npm", "run", "crash"]