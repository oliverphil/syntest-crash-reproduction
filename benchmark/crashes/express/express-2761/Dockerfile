FROM node:latest 
COPY assets/express/express-2761/* /express-2761/ 
COPY src/containerInternals/readFunctions.mjs /express-2761/readFunctions.mjs 
WORKDIR /express-2761/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-2761/src 
ENTRYPOINT ["npm", "run", "crash"]