FROM node:latest 
COPY benchmark/crashes/node/node-38058/* /node-38058/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-38058/readFunctions.mjs 
WORKDIR /node-38058/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-38058/src 
ENTRYPOINT ["npm", "run", "crash"]