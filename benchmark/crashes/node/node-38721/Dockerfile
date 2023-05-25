FROM node:latest 
COPY benchmark/crashes/node/node-38721/* /node-38721/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-38721/readFunctions.mjs 
WORKDIR /node-38721/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-38721/src 
ENTRYPOINT ["npm", "run", "crash"]