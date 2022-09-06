FROM node:latest 
COPY benchmark/crashes/atom/atom-22784/* /atom-22784/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22784/readFunctions.mjs 
WORKDIR /atom-22784/ 
VOLUME /atom-22784/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]