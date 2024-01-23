require("dotenv").config()
const express = require('express');
const searchRouter = require('./routes/search.route');
const { client, initIndex } = require('./utils/elasticSearch');
const port = process.env.PORT || 3004
client.ping({}, (error) => {
  if (error) {
    console.error('Elasticsearch cluster is down!');
  } else {
    console.log('Elasticsearch cluster is up and running!');
    initIndex()
  }
});
const app = express();

app.use(express.json());

app.use("/api/documents", searchRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
