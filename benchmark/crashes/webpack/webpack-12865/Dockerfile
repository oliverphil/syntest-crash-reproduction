FROM node:14.5.0 
COPY assets/webpack/webpack-12865/* /webpack-12865/ 
COPY src/containerInternals/readFunctions.mjs /webpack-12865/readFunctions.mjs 
WORKDIR /webpack-12865/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-12865/src 
ENTRYPOINT ["npm", "run", "crash"]