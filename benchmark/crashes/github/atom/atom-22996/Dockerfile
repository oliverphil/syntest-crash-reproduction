FROM node:latest 
COPY benchmark/crashes/atom/atom-22996/* /atom-22996/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22996/readFunctions.mjs 
WORKDIR /atom-22996/ 
VOLUME /atom-22996/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]