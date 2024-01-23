const { client, indexName } = require("../utils/elasticSearch");

const addProductToIndice = async (req, res) => {
  try {
    const { index, type, body } = req.body;

    if (!index || !type || !body) {
      return res.status(400).json({ error: 'Index, type, and body are required in the request body.' });
    }

    await client.index({
      index: indexName,
      type,
      body,
    });

    res.status(201).json({ message: 'Document added successfully.' });
  } catch (error) {
    console.error('Error adding document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

searchProduct = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    const response = await client.search({
      index: indexName, // Replace with your actual index name
      size: 1000
    });
    const results = response.hits.hits.map(hit => hit._source);
    return res.status(200).json({message: "Successfully retrieved the products",results});
  }
  try {
    const response = await client.search({
      index: indexName, // Replace with your actual index name
      body: {
        query: {
          wildcard: {
            title: `*${query}*`, // Match all documents
          }
        },
      },
    });

    const results = response.hits.hits.map(hit => hit._source);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addProductToIndice,
  searchProduct
}