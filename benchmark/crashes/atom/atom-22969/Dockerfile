FROM node:10.0.0 
COPY assets/atom/atom-22969/* /atom-22969/ 
COPY src/containerInternals/readFunctions.mjs /atom-22969/readFunctions.mjs 
WORKDIR /atom-22969/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22969/src 
ENTRYPOINT ["npm", "run", "crash"]