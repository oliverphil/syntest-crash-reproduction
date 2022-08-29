FROM node:12.18.4 
COPY assets/rocketchat/rocketchat-20598/* /rocketchat-20598/ 
COPY src/containerInternals/readFunctions.mjs /rocketchat-20598/readFunctions.mjs 
WORKDIR /rocketchat-20598/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /rocketchat-20598/src 
ENTRYPOINT ["npm", "run", "crash"]