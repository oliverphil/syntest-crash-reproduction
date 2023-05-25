FROM node:14.16.0 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-12858/* /webpack-12858/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-12858/readFunctions.mjs 
RUN ls webpack-12858 
WORKDIR /webpack-12858/ 
VOLUME /webpack-12858 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]