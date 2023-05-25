FROM node:latest 
COPY benchmark/crashes/atom/atom-22911/* /atom-22911/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22911/readFunctions.mjs 
WORKDIR /atom-22911/ 
VOLUME /atom-22911/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]