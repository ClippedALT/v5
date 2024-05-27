import createServer from '@tomphttp/bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';

const port = process.env.PORT || 8080;

const bare = createServer('/bare/');
const serve = new nodeStatic.Server('public/');

const server = http.createServer((req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    serve.serve(req, res);
  }
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
