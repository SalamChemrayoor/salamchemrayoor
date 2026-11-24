import { cp, mkdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');
const required = [
  'index.html',
  'styles.css',
  'script.js',
  'favicon.svg',
  'robots.txt',
  'sitemap.xml',
  'assets/abdul-salam-portrait.png',
  'assets/abdul-salam-resume.pdf'
];

for (const file of required) {
  try {
    const info = await stat(path.join(root, file));
    if (!info.isFile() || info.size === 0) throw new Error('is empty or not a file');
  } catch (error) {
    throw new Error(`Required site file is missing or invalid: ${file}`, { cause: error });
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'favicon.svg', 'robots.txt', 'sitemap.xml']) {
  await cp(path.join(root, file), path.join(output, file));
}
await cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });

console.log('Production site built in dist/.');
