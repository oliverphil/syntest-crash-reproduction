FROM node:latest 
COPY assets/atom/atom-22699/* /atom-22699/ 
COPY src/containerInternals/readFunctions.mjs /atom-22699/readFunctions.mjs 
WORKDIR /atom-22699/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22699/src 
ENTRYPOINT ["npm", "run", "crash"]