FROM node:16.10.0 
COPY assets/eslint/eslint-15114/* /eslint-15114/ 
COPY src/containerInternals/readFunctions.mjs /eslint-15114/readFunctions.mjs 
WORKDIR /eslint-15114/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-15114/src 
ENTRYPOINT ["npm", "run", "crash"]