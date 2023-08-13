FROM node:latest 
COPY benchmark/crashes/atom/atom-22903/* /atom-22903/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22903/readFunctions.mjs 
WORKDIR /atom-22903/ 
VOLUME /atom-22903/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]