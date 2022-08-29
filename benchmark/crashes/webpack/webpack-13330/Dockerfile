FROM node:14.15.1 
COPY assets/webpack/webpack-13330/* /webpack-13330/ 
COPY src/containerInternals/readFunctions.mjs /webpack-13330/readFunctions.mjs 
WORKDIR /webpack-13330/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-13330/src 
ENTRYPOINT ["npm", "run", "crash"]