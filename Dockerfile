FROM node:20
WORKDIR /app
COPY main.js main.js
COPY package-lock.json package-lock.json
COPY package.json package.json
EXPOSE 3000
RUN npm install 
CMD ["node", "main.js"]