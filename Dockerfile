FROM node:8
WORKDIR /proxy
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8082
CMD [ "npm", "start" ]
