FROM node:latest 
COPY benchmark/crashes/node/node-37705/* /node-37705/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-37705/readFunctions.mjs 
WORKDIR /node-37705/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-37705/src 
ENTRYPOINT ["npm", "run", "crash"]