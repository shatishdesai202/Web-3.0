FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

#  create image
# docker build -t node_on_docker:latest .

#  running container
# docker run -p 2000:3000 -d --rm --name nodes4 node_on_docker:1