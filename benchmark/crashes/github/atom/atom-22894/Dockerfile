FROM node:latest 
COPY benchmark/crashes/atom/atom-22894/* /atom-22894/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22894/readFunctions.mjs 
WORKDIR /atom-22894/ 
VOLUME /atom-22894/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]