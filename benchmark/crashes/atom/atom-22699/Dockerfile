FROM node:latest 
COPY benchmark/crashes/atom/atom-22699/* /atom-22699/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22699/readFunctions.mjs 
WORKDIR /atom-22699/ 
VOLUME /atom-22699/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]