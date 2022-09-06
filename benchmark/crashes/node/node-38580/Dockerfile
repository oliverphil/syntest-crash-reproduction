FROM node:latest 
COPY benchmark/crashes/node/node-38580/* /node-38580/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-38580/readFunctions.mjs 
WORKDIR /node-38580/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-38580/src 
ENTRYPOINT ["npm", "run", "crash"]