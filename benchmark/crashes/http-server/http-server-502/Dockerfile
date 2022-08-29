FROM node:latest 
COPY assets/http-server/http-server-502/* /http-server-502/ 
COPY src/containerInternals/readFunctions.mjs /http-server-502/readFunctions.mjs 
WORKDIR /http-server-502/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-502/src 
ENTRYPOINT ["npm", "run", "crash"]