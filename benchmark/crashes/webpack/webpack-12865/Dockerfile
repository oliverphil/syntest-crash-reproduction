FROM node:14.5.0 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-12865/* /webpack-12865/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-12865/readFunctions.mjs 
RUN ls webpack-12865 
WORKDIR /webpack-12865/ 
VOLUME /webpack-12865 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]