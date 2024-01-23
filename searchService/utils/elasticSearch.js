// elasticsearchModule.js

const elasticsearch = require('elasticsearch');
const products = require('../DATA');

const client = new elasticsearch.Client({
  host: 'http://127.0.0.1:9200/',
  log: 'info'
});

const initIndex = async () => {
  try {
    const indexName = 'products'; // Replace with your desired index name
    const exists = await client.indices.exists({ index: indexName });

    if (!exists) {
      await client.indices.create({ index: indexName });

      const indexPromises = products.map(product => {
        return client.index({
          index: indexName,
          type: 'product', // Assuming 'product' is the type for your documents
          body: product,
          refresh: true
        });
      });

      await Promise.all(indexPromises);
    }
  } catch (error) {
    console.error('Error initializing index:', error);
  }
};

module.exports = {
  client,
  initIndex,
  indexName: "products"
};
