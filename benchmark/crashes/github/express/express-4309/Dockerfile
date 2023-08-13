FROM node:latest 
COPY benchmark/crashes/express/express-4309/* /express-4309/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /express-4309/readFunctions.mjs 
WORKDIR /express-4309/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /express-4309/src 
ENTRYPOINT ["npm", "run", "crash"]