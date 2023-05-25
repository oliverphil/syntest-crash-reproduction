FROM node:16.0.0 
COPY benchmark/crashes/eslint/eslint-14537/* /eslint-14537/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /eslint-14537/readFunctions.mjs 
WORKDIR /eslint-14537/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-14537/src 
ENTRYPOINT ["npm", "run", "crash"]