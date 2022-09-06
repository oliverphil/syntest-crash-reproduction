FROM node:latest 
COPY benchmark/crashes/express/express-4548/* /express-4548/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-4548/readFunctions.mjs 
WORKDIR /express-4548/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-4548/src 
ENTRYPOINT ["npm", "run", "crash"]