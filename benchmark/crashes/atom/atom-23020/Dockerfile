FROM node:latest 
COPY assets/atom/atom-23020/* /atom-23020/ 
COPY src/containerInternals/readFunctions.mjs /atom-23020/readFunctions.mjs 
WORKDIR /atom-23020/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-23020/src 
ENTRYPOINT ["npm", "run", "crash"]