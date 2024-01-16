FROM node:20.10.0-bookworm

WORKDIR /root/project


COPY ./package*.json .
RUN npm install -d
COPY . .

# CMD tail -f /dev/null
CMD npm run dev