FROM node:latest 
COPY assets/atom/atom-22920/* /atom-22920/ 
COPY src/containerInternals/readFunctions.mjs /atom-22920/readFunctions.mjs 
WORKDIR /atom-22920/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22920/src 
ENTRYPOINT ["npm", "run", "crash"]