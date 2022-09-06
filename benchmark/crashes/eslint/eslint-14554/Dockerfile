FROM node:15.13.0 
COPY benchmark/crashes/eslint/eslint-14554/* /eslint-14554/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /eslint-14554/readFunctions.mjs 
WORKDIR /eslint-14554/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-14554/src 
ENTRYPOINT ["npm", "run", "crash"]