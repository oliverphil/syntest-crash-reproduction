FROM node:16.0.0 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-13290/* /webpack-13290/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-13290/readFunctions.mjs 
RUN ls webpack-13290 
WORKDIR /webpack-13290/ 
VOLUME /webpack-13290 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]