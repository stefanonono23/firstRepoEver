FROM cypress/included:9.6.0
WORKDIR /firstRepoEver
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
