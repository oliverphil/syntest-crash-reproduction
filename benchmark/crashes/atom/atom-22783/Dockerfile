FROM node:latest 
COPY benchmark/crashes/atom/atom-22783/* /atom-22783/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22783/readFunctions.mjs 
WORKDIR /atom-22783/ 
VOLUME /atom-22783/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]