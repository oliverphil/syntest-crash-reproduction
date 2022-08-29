FROM node:12.14.0 
COPY assets/rocketchat/rocketchat-18512/* /rocketchat-18512/ 
COPY src/containerInternals/readFunctions.mjs /rocketchat-18512/readFunctions.mjs 
WORKDIR /rocketchat-18512/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /rocketchat-18512/src 
ENTRYPOINT ["npm", "run", "crash"]