FROM node:latest 
COPY assets/node/node-38808/* /node-38808/ 
COPY src/containerInternals/readFunctions.mjs /node-38808/readFunctions.mjs 
WORKDIR /node-38808/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-38808/src 
ENTRYPOINT ["npm", "run", "crash"]