FROM node:10.0.0 
COPY benchmark/crashes/atom/atom-22893/* /atom-22893/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22893/readFunctions.mjs 
WORKDIR /atom-22893/ 
VOLUME /atom-22893/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]