FROM node:8.9.4 
COPY assets/standard/standard-1494/* /standard-1494/ 
COPY src/containerInternals/readFunctions.mjs /standard-1494/readFunctions.mjs 
WORKDIR /standard-1494/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /standard-1494/src 
ENTRYPOINT ["npm", "run", "crash"]