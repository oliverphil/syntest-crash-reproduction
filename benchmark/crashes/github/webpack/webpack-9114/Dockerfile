FROM node:16.0.0 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-9114/* /webpack-9114/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-9114/readFunctions.mjs 
RUN ls webpack-9114 
WORKDIR /webpack-9114/ 
VOLUME /webpack-9114 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]