FROM node:latest 
COPY assets/atom/atom-22783/* /atom-22783/ 
COPY src/containerInternals/readFunctions.mjs /atom-22783/readFunctions.mjs 
WORKDIR /atom-22783/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22783/src 
ENTRYPOINT ["npm", "run", "crash"]