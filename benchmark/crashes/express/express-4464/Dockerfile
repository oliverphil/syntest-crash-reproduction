FROM node:latest 
COPY benchmark/crashes/express/express-4464/* /express-4464/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-4464/readFunctions.mjs 
WORKDIR /express-4464/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-4464/src 
ENTRYPOINT ["npm", "run", "crash"]