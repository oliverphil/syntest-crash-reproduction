FROM node:14.16.0 
COPY benchmark/crashes/eslint/eslint-14538/* /eslint-14538/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /eslint-14538/readFunctions.mjs 
WORKDIR /eslint-14538/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-14538/src 
ENTRYPOINT ["npm", "run", "crash"]