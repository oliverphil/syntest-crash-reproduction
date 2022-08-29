FROM node:latest 
COPY assets/node/node-38053/* /node-38053/ 
COPY src/containerInternals/readFunctions.mjs /node-38053/readFunctions.mjs 
WORKDIR /node-38053/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /node-38053/src 
ENTRYPOINT ["npm", "run", "crash"]