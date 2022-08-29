FROM node:12.14.1 
COPY assets/atom/atom-22772/* /atom-22772/ 
COPY src/containerInternals/readFunctions.mjs /atom-22772/readFunctions.mjs 
WORKDIR /atom-22772/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22772/src 
ENTRYPOINT ["npm", "run", "crash"]