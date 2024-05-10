FROM node

EXPOSE 8888

COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]

#docker build -t userapi:latest .