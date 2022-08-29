FROM node:14.17.4 
COPY assets/eslint/eslint-15384/* /eslint-15384/ 
COPY src/containerInternals/readFunctions.mjs /eslint-15384/readFunctions.mjs 
WORKDIR /eslint-15384/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /eslint-15384/src 
ENTRYPOINT ["npm", "run", "crash"]