FROM node:19-alpine as base
WORKDIR /app
ADD backend/ .
COPY . .
RUN rm -fr node_modules ; npm install
COPY . .
CMD npm run dev