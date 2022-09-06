FROM node:latest 
COPY benchmark/crashes/atom/atom-22920/* /atom-22920/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22920/readFunctions.mjs 
WORKDIR /atom-22920/ 
VOLUME /atom-22920/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]