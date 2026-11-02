import { createReadStream, existsSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { handleApi } from './backend.mjs';

const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8' };
const server = createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname.startsWith('/api/')) {
    try { return await handleApi(req, res, new URL(req.url, 'http://localhost')); }
    catch (error) { res.writeHead(500, { 'content-type': 'application/json; charset=utf-8' }); return res.end(JSON.stringify({ error: error.message || 'Unexpected server error' })); }
  }
  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  const file = normalize(join(root, requested));
  if (!file.startsWith(root) || !existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
  createReadStream(file).pipe(res);
});

const port = Number(process.argv[2] || 4173);
server.listen(port, () => console.log(`BashCraft UI is running at http://localhost:${port}`));
