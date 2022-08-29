FROM node:latest 
COPY assets/atom/atom-22622/* /atom-22622/ 
COPY src/containerInternals/readFunctions.mjs /atom-22622/readFunctions.mjs 
WORKDIR /atom-22622/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22622/src 
ENTRYPOINT ["npm", "run", "crash"]