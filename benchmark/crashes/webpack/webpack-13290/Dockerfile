FROM node:16.0.0 
COPY assets/webpack/webpack-13290/* /webpack-13290/ 
COPY src/containerInternals/readFunctions.mjs /webpack-13290/readFunctions.mjs 
WORKDIR /webpack-13290/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-13290/src 
ENTRYPOINT ["npm", "run", "crash"]