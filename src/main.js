import assert from 'assert';
import getPort from 'get-port';
import { createApp } from './app';

async function main() {
  const app = createApp();

  const p = await getPort({ port: 3090 });
  const server = app.listen(p, 'localhost', () => {
    const addr = server.address();
    assert(addr && typeof addr === 'object');

    const { address, port } = addr;
    console.info(`Server listening on http://${address}:${port}`);
  });
}

main();
