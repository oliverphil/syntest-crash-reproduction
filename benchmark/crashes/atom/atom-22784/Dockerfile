FROM node:latest 
COPY assets/atom/atom-22784/* /atom-22784/ 
COPY src/containerInternals/readFunctions.mjs /atom-22784/readFunctions.mjs 
WORKDIR /atom-22784/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22784/src 
ENTRYPOINT ["npm", "run", "crash"]