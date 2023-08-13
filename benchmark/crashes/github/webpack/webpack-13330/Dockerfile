FROM node:14.15.1 
ARG CACHEBUST=1 
COPY benchmark/crashes/webpack/webpack-13330/* /webpack-13330/ 
COPY src/crash-reproduction/containerInternals/readFunctions.mjs /webpack-13330/readFunctions.mjs 
RUN ls webpack-13330 
WORKDIR /webpack-13330/ 
VOLUME /webpack-13330 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
ENTRYPOINT ["npm", "run", "crash"]