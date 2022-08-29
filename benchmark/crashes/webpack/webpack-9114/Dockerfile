FROM node:16.0.0 
COPY assets/webpack/webpack-9114/* /webpack-9114/ 
COPY src/containerInternals/readFunctions.mjs /webpack-9114/readFunctions.mjs 
WORKDIR /webpack-9114/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-9114/src 
ENTRYPOINT ["npm", "run", "crash"]