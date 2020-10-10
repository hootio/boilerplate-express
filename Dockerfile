FROM node:lts-alpine AS build-stage
WORKDIR /<app-name>
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production

ARG version
ENV VERSION=$version

EXPOSE 5000
CMD ["npm", "run", "start"]
