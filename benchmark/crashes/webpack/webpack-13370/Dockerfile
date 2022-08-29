FROM node:16.1.0 
COPY assets/webpack/webpack-13370/* /webpack-13370/ 
COPY src/containerInternals/readFunctions.mjs /webpack-13370/readFunctions.mjs 
WORKDIR /webpack-13370/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-13370/src 
ENTRYPOINT ["npm", "run", "crash"]