const http = require('http');
const url = require('url');

const app = http.createServer((request, response) => {
  const query = url.parse(request.url, true).query;
  console.log(query);
});

app.listen(3000);