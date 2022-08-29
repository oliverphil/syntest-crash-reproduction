FROM node:latest 
COPY assets/node/node-38649/* /node-38649/ 
COPY src/containerInternals/readFunctions.mjs /node-38649/readFunctions.mjs 
WORKDIR /node-38649/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-38649/src 
ENTRYPOINT ["npm", "run", "crash"]