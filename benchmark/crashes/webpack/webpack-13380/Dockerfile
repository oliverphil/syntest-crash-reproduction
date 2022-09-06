FROM node:14.16.1 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-13380/* /webpack-13380/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-13380/readFunctions.mjs 
RUN ls webpack-13380 
WORKDIR /webpack-13380/ 
VOLUME /webpack-13380 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]