FROM node:latest 
COPY benchmark/crashes/express/express-3388/* /express-3388/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-3388/readFunctions.mjs 
WORKDIR /express-3388/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-3388/src 
ENTRYPOINT ["npm", "run", "crash"]