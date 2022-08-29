FROM node:14.1.0 
COPY assets/standard/standard-1549/* /standard-1549/ 
COPY src/containerInternals/readFunctions.mjs /standard-1549/readFunctions.mjs 
WORKDIR /standard-1549/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /standard-1549/src 
ENTRYPOINT ["npm", "run", "crash"]