FROM node:latest 
COPY benchmark/crashes/http-server/http-server-214/* /http-server-214/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /http-server-214/readFunctions.mjs 
WORKDIR /http-server-214/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /http-server-214/src 
ENTRYPOINT ["npm", "run", "crash"]