FROM node:latest 
COPY assets/node/node-37731/* /node-37731/ 
COPY src/containerInternals/readFunctions.mjs /node-37731/readFunctions.mjs 
WORKDIR /node-37731/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-37731/src 
ENTRYPOINT ["npm", "run", "crash"]