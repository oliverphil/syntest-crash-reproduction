FROM node:latest 
COPY assets/atom/atom-22962/* /atom-22962/ 
COPY src/containerInternals/readFunctions.mjs /atom-22962/readFunctions.mjs 
WORKDIR /atom-22962/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22962/src 
ENTRYPOINT ["npm", "run", "crash"]