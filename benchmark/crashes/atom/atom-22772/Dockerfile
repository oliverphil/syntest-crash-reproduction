FROM node:12.14.1 
COPY benchmark/crashes/atom/atom-22772/* /atom-22772/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22772/readFunctions.mjs 
WORKDIR /atom-22772/ 
VOLUME /atom-22772/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]