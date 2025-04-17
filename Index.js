const https = require('https');
const fs = require('fs');

const port = 3000;
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  res.end('Welcome to the NodeJS app deployed by Ansible Pull!');
});

server.listen(port, () => {
  console.log(`HTTPS server running at https://localhost:${port}`);
});
