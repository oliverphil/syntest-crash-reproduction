FROM node:12.15.0 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-13419/* /webpack-13419/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-13419/readFunctions.mjs 
RUN ls webpack-13419 
WORKDIR /webpack-13419/ 
VOLUME /webpack-13419 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]