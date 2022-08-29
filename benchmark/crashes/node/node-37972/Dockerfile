FROM node:latest 
COPY assets/node/node-37972/* /node-37972/ 
COPY src/containerInternals/readFunctions.mjs /node-37972/readFunctions.mjs 
WORKDIR /node-37972/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-37972/src 
ENTRYPOINT ["npm", "run", "crash"]