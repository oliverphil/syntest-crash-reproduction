FROM node:10.17.0 
COPY assets/standard/standard-1450/* /standard-1450/ 
COPY src/containerInternals/readFunctions.mjs /standard-1450/readFunctions.mjs 
WORKDIR /standard-1450/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /standard-1450/src 
ENTRYPOINT ["npm", "run", "crash"]