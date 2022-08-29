FROM node:5.0.0 
COPY assets/http-server/http-server-209/* /http-server-209/ 
COPY src/containerInternals/readFunctions.mjs /http-server-209/readFunctions.mjs 
WORKDIR /http-server-209/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-209/src 
ENTRYPOINT ["npm", "run", "crash"]