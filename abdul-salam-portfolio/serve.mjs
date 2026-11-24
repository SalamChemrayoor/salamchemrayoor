import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const base = process.argv.includes('--dist') ? path.join(root, 'dist') : root;
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? '/', 'http://localhost');
    const decodedPath = decodeURIComponent(requestUrl.pathname);
    const requested = path.resolve(base, `.${decodedPath}`);
    const isInsideBase = requested === base || requested.startsWith(`${base}${path.sep}`);
    if (!isInsideBase) {
      response.writeHead(403).end('Forbidden');
      return;
    }
    const candidate = decodedPath.endsWith('/') ? path.join(requested, 'index.html') : requested;
    const info = await stat(candidate);
    if (!info.isFile()) throw new Error('Not a file');
    const body = await readFile(candidate);
    response.writeHead(200, { 'content-type': mimeTypes[path.extname(candidate).toLowerCase()] ?? 'application/octet-stream' });
    response.end(body);
  } catch (_) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
  }
});

const port = Number(process.env.PORT || 4173);
server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio available at http://127.0.0.1:${port}`);
  console.log(process.argv.includes('--dist') ? 'Serving the production build.' : 'Serving the project files.');
});
