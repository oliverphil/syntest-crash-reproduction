FROM node:latest 
COPY benchmark/crashes/node/node-38808/* /node-38808/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-38808/readFunctions.mjs 
WORKDIR /node-38808/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-38808/src 
ENTRYPOINT ["npm", "run", "crash"]