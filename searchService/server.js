const express = require('express');
const searchRouter = require('./routes/search.route');
const { client, initIndex } = require('./utils/elasticSearch');

client.ping({}, (error) => {
  if (error) {
    console.error('Elasticsearch cluster is down!');
  } else {
    console.log('Elasticsearch cluster is up and running!');
    initIndex()
  }
});
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/documents", searchRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
