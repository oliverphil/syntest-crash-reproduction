FROM node:14.16.1 
COPY assets/webpack/webpack-13380/* /webpack-13380/ 
COPY src/containerInternals/readFunctions.mjs /webpack-13380/readFunctions.mjs 
WORKDIR /webpack-13380/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-13380/src 
ENTRYPOINT ["npm", "run", "crash"]