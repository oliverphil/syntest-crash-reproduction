FROM node:latest 
COPY assets/atom/atom-22562/* /atom-22562/ 
COPY src/containerInternals/readFunctions.mjs /atom-22562/readFunctions.mjs 
WORKDIR /atom-22562/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22562/src 
ENTRYPOINT ["npm", "run", "crash"]