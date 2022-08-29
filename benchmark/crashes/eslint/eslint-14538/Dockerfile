FROM node:14.16.0 
COPY assets/eslint/eslint-14538/* /eslint-14538/ 
COPY src/containerInternals/readFunctions.mjs /eslint-14538/readFunctions.mjs 
WORKDIR /eslint-14538/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-14538/src 
ENTRYPOINT ["npm", "run", "crash"]