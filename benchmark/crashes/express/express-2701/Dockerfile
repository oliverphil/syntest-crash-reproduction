FROM node:latest 
COPY assets/express/express-2701/* /express-2701/ 
COPY src/containerInternals/readFunctions.mjs /express-2701/readFunctions.mjs 
WORKDIR /express-2701/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-2701/src 
ENTRYPOINT ["npm", "run", "crash"]