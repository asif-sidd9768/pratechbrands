var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({
    host: 'http://127.0.0.1:9200/',
    log: 'info'
});

elasticClient.ping({}, (error) => {
  if (error) {
    console.error('Elasticsearch cluster is down!');
  } else {
    console.log('Elasticsearch cluster is up and running!');
  }
});

var indexName = "randomindex";

/**
* Delete an existing index
*/
function deleteIndex() {
    return elasticClient.indices.delete({
        index: indexName
    });
}
exports.deleteIndex = deleteIndex;

/**
* create the index
*/
function initIndex() {
    return elasticClient.indices.create({
        index: indexName
    });
}
exports.initIndex = initIndex;

/**
* check if the index exists
*/
function indexExists() {
    return elasticClient.indices.exists({
        index: indexName
    });
}
exports.indexExists = indexExists;

function initMapping() {
    return elasticClient.indices.putMapping({
        index: indexName,
        type: "document",
        include_type_name:true,
        body: {
            properties: {
                title: { type: "text" },
                content: { type: "text" },
                suggest: {
                    type: "completion",
                    analyzer: "simple",
                    search_analyzer: "simple",
                }
            }
        }
    });
}
exports.initMapping = initMapping;

function addDocument(document) {
    return elasticClient.index({
        index: indexName,
        type: "document",
        body: {
            title: document.title,
            content: document.content,
            suggest: {
                input: document.title.split(" "),
            }
        }
    });
}
exports.addDocument = addDocument;

function getSuggestions(query) {
  return elasticClient.search({
    index: indexName,
    type: "document",
    body: {
      query: {
        match: {
          // You can specify the fields you want to search here
          title: {
            query: query,
            operator: "and"  // You can change the operator based on your requirements
          }
        }
      }
    }
  });
}
exports.getSuggestions = getSuggestions;