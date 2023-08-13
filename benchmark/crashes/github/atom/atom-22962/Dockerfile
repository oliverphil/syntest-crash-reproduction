FROM node:latest 
COPY benchmark/crashes/atom/atom-22962/* /atom-22962/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22962/readFunctions.mjs 
WORKDIR /atom-22962/ 
VOLUME /atom-22962/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]