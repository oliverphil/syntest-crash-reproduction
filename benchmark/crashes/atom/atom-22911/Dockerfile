FROM node:latest 
COPY assets/atom/atom-22911/* /atom-22911/ 
COPY src/containerInternals/readFunctions.mjs /atom-22911/readFunctions.mjs 
WORKDIR /atom-22911/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22911/src 
ENTRYPOINT ["npm", "run", "crash"]