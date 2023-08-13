FROM node:12.20.0 
COPY benchmark/crashes/eslint/eslint-14861/* /eslint-14861/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /eslint-14861/readFunctions.mjs 
WORKDIR /eslint-14861/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-14861/src 
ENTRYPOINT ["npm", "run", "crash"]