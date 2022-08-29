FROM node:latest 
COPY assets/rocketchat/rocketchat-18506/* /rocketchat-18506/ 
COPY src/containerInternals/readFunctions.mjs /rocketchat-18506/readFunctions.mjs 
WORKDIR /rocketchat-18506/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /rocketchat-18506/src 
ENTRYPOINT ["npm", "run", "crash"]