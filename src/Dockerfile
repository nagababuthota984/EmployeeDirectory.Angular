FROM node:alpine3.18

RUN mkdir /app && chown node:node /app
WORKDIR /app

USER node

COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .

CMD ["ng","build"]