FROM node:10.13.0 
COPY assets/eslint/eslint-15211/* /eslint-15211/ 
COPY src/containerInternals/readFunctions.mjs /eslint-15211/readFunctions.mjs 
WORKDIR /eslint-15211/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-15211/src 
ENTRYPOINT ["npm", "run", "crash"]