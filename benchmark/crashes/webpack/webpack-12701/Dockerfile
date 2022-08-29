FROM node:15.8.0 
COPY assets/webpack/webpack-12701/* /webpack-12701/ 
COPY src/containerInternals/readFunctions.mjs /webpack-12701/readFunctions.mjs 
WORKDIR /webpack-12701/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-12701/src 
ENTRYPOINT ["npm", "run", "crash"]