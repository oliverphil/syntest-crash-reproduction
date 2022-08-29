FROM node:latest 
COPY assets/node/node-37430/* /node-37430/ 
COPY src/containerInternals/readFunctions.mjs /node-37430/readFunctions.mjs 
WORKDIR /node-37430/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-37430/src 
ENTRYPOINT ["npm", "run", "crash"]