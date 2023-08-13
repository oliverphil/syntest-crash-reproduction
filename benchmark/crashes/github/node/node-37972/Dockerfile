FROM node:latest 
COPY benchmark/crashes/node/node-37972/* /node-37972/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /node-37972/readFunctions.mjs 
WORKDIR /node-37972/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-37972/src 
ENTRYPOINT ["npm", "run", "crash"]