FROM node:latest 
COPY benchmark/crashes/atom/atom-23020/* /atom-23020/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-23020/readFunctions.mjs 
WORKDIR /atom-23020/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-23020/src 
ENTRYPOINT ["npm", "run", "crash"]