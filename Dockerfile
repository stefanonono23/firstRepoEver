FROM cypress/included:9.6.0
WORKDIR /firstRepoEver
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
