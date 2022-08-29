FROM node:14.16.1 
COPY assets/webpack/webpack-13440/* /webpack-13440/ 
COPY src/containerInternals/readFunctions.mjs /webpack-13440/readFunctions.mjs 
WORKDIR /webpack-13440/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-13440/src 
ENTRYPOINT ["npm", "run", "crash"]