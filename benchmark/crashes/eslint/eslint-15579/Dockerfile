FROM node:17.4.0 
COPY benchmark/crashes/eslint/eslint-15579/* /eslint-15579/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /eslint-15579/readFunctions.mjs 
WORKDIR /eslint-15579/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-15579/src 
ENTRYPOINT ["npm", "run", "crash"]