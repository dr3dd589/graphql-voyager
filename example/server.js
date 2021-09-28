const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const app = express();
app.use(express.static(__dirname));
app.use(
  '/graphql',
  graphqlHTTP(() => ({ schema })),
);

app.listen(port, function() {
  console.log(`Started on http://localhost:${port}/`);
});
