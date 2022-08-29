FROM node:latest 
COPY assets/atom/atom-22799/* /atom-22799/ 
COPY src/containerInternals/readFunctions.mjs /atom-22799/readFunctions.mjs 
WORKDIR /atom-22799/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /atom-22799/src 
ENTRYPOINT ["npm", "run", "crash"]