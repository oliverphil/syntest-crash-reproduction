FROM node:latest 
COPY assets/atom/atom-22963/* /atom-22963/ 
COPY src/containerInternals/readFunctions.mjs /atom-22963/readFunctions.mjs 
WORKDIR /atom-22963/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22963/src 
ENTRYPOINT ["npm", "run", "crash"]