FROM node:latest 
COPY benchmark/crashes/atom/atom-22831/* /atom-22831/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22831/readFunctions.mjs 
WORKDIR /atom-22831/ 
VOLUME /atom-22831/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]