FROM node:16.1.0 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-13370/* /webpack-13370/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-13370/readFunctions.mjs 
RUN ls webpack-13370 
WORKDIR /webpack-13370/ 
VOLUME /webpack-13370 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]