const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.end('Welcome to the NodeJS app deployed by Ansible Pull!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
