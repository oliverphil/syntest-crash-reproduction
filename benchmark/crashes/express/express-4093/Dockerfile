FROM node:latest 
COPY benchmark/crashes/express/express-4093/* /express-4093/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-4093/readFunctions.mjs 
WORKDIR /express-4093/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-4093/src 
ENTRYPOINT ["npm", "run", "crash"]