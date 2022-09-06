FROM node:latest 
COPY benchmark/crashes/node/node-37612/* /node-37612/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-37612/readFunctions.mjs 
WORKDIR /node-37612/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-37612/src 
ENTRYPOINT ["npm", "run", "crash"]