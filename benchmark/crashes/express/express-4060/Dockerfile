FROM node:latest 
COPY assets/express/express-4060/* /express-4060/ 
COPY src/containerInternals/readFunctions.mjs /express-4060/readFunctions.mjs 
WORKDIR /express-4060/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-4060/src 
ENTRYPOINT ["npm", "run", "crash"]