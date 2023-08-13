FROM node:10.0.0 
COPY benchmark/crashes/atom/atom-22969/* /atom-22969/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22969/readFunctions.mjs 
WORKDIR /atom-22969/ 
VOLUME /atom-22969/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]