FROM cypress/included:9.6.0
WORKDIR /firstRepoEver
COPY . .
RUN npm install
ENTRYPOINT ["cypress", "run", "--spec", "openingNewFile.spec.ts"]
