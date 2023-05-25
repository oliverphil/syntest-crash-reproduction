FROM node:latest 
COPY benchmark/crashes/atom/atom-22562/* /atom-22562/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22562/readFunctions.mjs 
WORKDIR /atom-22562/ 
VOLUME /atom-22562/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]