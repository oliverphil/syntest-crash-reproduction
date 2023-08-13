FROM node:14.16.1 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-13440/* /webpack-13440/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-13440/readFunctions.mjs 
RUN ls webpack-13440 
WORKDIR /webpack-13440/ 
VOLUME /webpack-13440 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]