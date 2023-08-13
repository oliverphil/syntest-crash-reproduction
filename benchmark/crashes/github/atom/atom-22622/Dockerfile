FROM node:latest 
COPY benchmark/crashes/atom/atom-22622/* /atom-22622/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22622/readFunctions.mjs 
WORKDIR /atom-22622/ 
VOLUME /atom-22622/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]