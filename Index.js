const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
res.end('~˛.‘˙.ª~·3˙  Welcome to the NodeJS app deployed by Ansible Pull!');
});

server.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});

package.json
{
"name": "hello-node",
"version": "1.0.0",
"main": "index.js", "scripts": {
"start": "node index.js"

},
"dependencies": {}
}
