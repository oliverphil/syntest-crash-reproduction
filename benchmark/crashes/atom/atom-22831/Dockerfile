FROM node:latest 
COPY assets/atom/atom-22831/* /atom-22831/ 
COPY src/containerInternals/readFunctions.mjs /atom-22831/readFunctions.mjs 
WORKDIR /atom-22831/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22831/src 
ENTRYPOINT ["npm", "run", "crash"]