FROM node:14.7.0 
COPY benchmark/crashes/eslint/eslint-14829/* /eslint-14829/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /eslint-14829/readFunctions.mjs 
WORKDIR /eslint-14829/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-14829/src 
ENTRYPOINT ["npm", "run", "crash"]