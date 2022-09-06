FROM node:latest 
COPY benchmark/crashes/express/express-4228/* /express-4228/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-4228/readFunctions.mjs 
WORKDIR /express-4228/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-4228/src 
ENTRYPOINT ["npm", "run", "crash"]