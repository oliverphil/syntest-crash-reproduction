FROM node:latest 
COPY benchmark/crashes/node/node-37731/* /node-37731/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-37731/readFunctions.mjs 
WORKDIR /node-37731/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-37731/src 
ENTRYPOINT ["npm", "run", "crash"]