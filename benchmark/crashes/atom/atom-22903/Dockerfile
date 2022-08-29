FROM node:latest 
COPY assets/atom/atom-22903/* /atom-22903/ 
COPY src/containerInternals/readFunctions.mjs /atom-22903/readFunctions.mjs 
WORKDIR /atom-22903/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22903/src 
ENTRYPOINT ["npm", "run", "crash"]