FROM node:12.14.0 
COPY benchmark/crashes/rocketchat/rocketchat-18512/* /rocketchat-18512/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /rocketchat-18512/readFunctions.mjs 
WORKDIR /rocketchat-18512/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /rocketchat-18512/src 
ENTRYPOINT ["npm", "run", "crash"]