FROM node:14.16.0 
COPY assets/webpack/webpack-12858/* /webpack-12858/ 
COPY src/containerInternals/readFunctions.mjs /webpack-12858/readFunctions.mjs 
WORKDIR /webpack-12858/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-12858/src 
ENTRYPOINT ["npm", "run", "crash"]