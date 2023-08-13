FROM node:latest 
COPY benchmark/crashes/express/express-4388/* /express-4388/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-4388/readFunctions.mjs 
WORKDIR /express-4388/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-4388/src 
ENTRYPOINT ["npm", "run", "crash"]