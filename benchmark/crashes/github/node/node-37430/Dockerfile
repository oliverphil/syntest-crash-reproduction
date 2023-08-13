FROM node:latest 
COPY benchmark/crashes/node/node-37430/* /node-37430/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-37430/readFunctions.mjs 
WORKDIR /node-37430/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-37430/src 
ENTRYPOINT ["npm", "run", "crash"]