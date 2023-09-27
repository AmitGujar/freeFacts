FROM node:20.7.0-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

# ARG DATABASE

# ENV DATABASE=$DATABASE

# ARG JWT_KEY

# ENV JWT_KEY=$JWT_KEY

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]