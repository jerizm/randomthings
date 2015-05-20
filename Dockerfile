FROM node:0.12

# App
ADD . /web

WORKDIR /web
RUN npm install

ENV PORT=80

EXPOSE  80
CMD ["node", "/web/index.js"]