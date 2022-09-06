FROM node:12.18.4 
COPY benchmark/crashes/rocketchat/rocketchat-20598/* /rocketchat-20598/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /rocketchat-20598/readFunctions.mjs 
WORKDIR /rocketchat-20598/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /rocketchat-20598/src 
ENTRYPOINT ["npm", "run", "crash"]