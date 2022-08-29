FROM node:10.0.0 
COPY assets/atom/atom-22893/* /atom-22893/ 
COPY src/containerInternals/readFunctions.mjs /atom-22893/readFunctions.mjs 
WORKDIR /atom-22893/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22893/src 
ENTRYPOINT ["npm", "run", "crash"]