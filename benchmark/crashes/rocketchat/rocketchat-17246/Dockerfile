FROM node:latest 
COPY benchmark/crashes/rocketchat/rocketchat-17246/* /rocketchat-17246/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /rocketchat-17246/readFunctions.mjs 
WORKDIR /rocketchat-17246/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /rocketchat-17246/src 
ENTRYPOINT ["npm", "run", "crash"]