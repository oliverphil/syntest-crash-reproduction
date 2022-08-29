FROM node:latest 
COPY assets/atom/atom-22996/* /atom-22996/ 
COPY src/containerInternals/readFunctions.mjs /atom-22996/readFunctions.mjs 
WORKDIR /atom-22996/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22996/src 
ENTRYPOINT ["npm", "run", "crash"]