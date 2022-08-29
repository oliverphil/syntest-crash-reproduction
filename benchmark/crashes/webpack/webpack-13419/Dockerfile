FROM node:12.15.0 
COPY assets/webpack/webpack-13419/* /webpack-13419/ 
COPY src/containerInternals/readFunctions.mjs /webpack-13419/readFunctions.mjs 
WORKDIR /webpack-13419/ 
RUN ["npm", "i"] 
RUN ["node", "readFunctions.mjs"] 
VOLUME /webpack-13419/src 
ENTRYPOINT ["npm", "run", "crash"]