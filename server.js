const jsonServer = require('json-server');
const cors = require('cors');

const hostname = 'localhost';
const port = 8000;
const server = jsonServer.create();

server.use(
     cors({
         origin: ["http://localhost:3000"],
         methods: ["GET"]
     })
 );

server.use(jsonServer.defaults());

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Hour: " + Date());
});
