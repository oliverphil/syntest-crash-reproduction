FROM node:latest 
COPY benchmark/crashes/atom/atom-22963/* /atom-22963/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22963/readFunctions.mjs 
WORKDIR /atom-22963/ 
VOLUME /atom-22963/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]