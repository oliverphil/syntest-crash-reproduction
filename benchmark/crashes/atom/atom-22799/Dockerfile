FROM node:latest 
COPY benchmark/crashes/atom/atom-22799/* /atom-22799/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /atom-22799/readFunctions.mjs 
WORKDIR /atom-22799/ 
VOLUME /atom-22799/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]