FROM --platform=$BUILDPLATFORM node:18-alpine AS builder

WORKDIR /app

COPY package.json . 

RUN npm install 

COPY . . 

RUN npm run build 

EXPOSE 8080 

CMD ["npm", "run", "preview"]
