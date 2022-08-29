FROM node:15.13.0 
COPY assets/eslint/eslint-14554/* /eslint-14554/ 
COPY src/containerInternals/readFunctions.mjs /eslint-14554/readFunctions.mjs 
WORKDIR /eslint-14554/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-14554/src 
ENTRYPOINT ["npm", "run", "crash"]