FROM node:latest 
COPY assets/atom/atom-22894/* /atom-22894/ 
COPY src/containerInternals/readFunctions.mjs /atom-22894/readFunctions.mjs 
WORKDIR /atom-22894/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22894/src 
ENTRYPOINT ["npm", "run", "crash"]