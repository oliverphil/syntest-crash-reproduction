FROM node:latest 
COPY benchmark/crashes/rocketchat/rocketchat-18506/* /rocketchat-18506/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /rocketchat-18506/readFunctions.mjs 
WORKDIR /rocketchat-18506/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /rocketchat-18506/src 
ENTRYPOINT ["npm", "run", "crash"]