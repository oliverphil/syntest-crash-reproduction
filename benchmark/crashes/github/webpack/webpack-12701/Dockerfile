FROM node:15.8.0 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-12701/* /webpack-12701/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-12701/readFunctions.mjs 
RUN ls webpack-12701 
WORKDIR /webpack-12701/ 
VOLUME /webpack-12701 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]