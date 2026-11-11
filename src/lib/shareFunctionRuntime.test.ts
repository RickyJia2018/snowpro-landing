// Vite resolves extensionless imports, while the deployed Node ESM runtime
// does not. Load emitted files without Vite to catch function startup failures.
import { expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';

it('loads share functions in the deployed Node ESM module format', () => {
  const root = mkdtempSync(join(tmpdir(), 'snowpro-share-runtime-'));
  try {
    writeFileSync(join(root, 'package.json'), '{"type":"module"}');
    for (const source of ['api/buddy-share.ts', 'api/carpool-share.ts', 'src/lib/carpoolShare.ts', 'api/instructor-share.ts', 'api/course-share.ts', 'src/lib/instructorShare.ts', 'src/lib/courseShare.ts', 'src/config/api.ts']) {
      const file = join(root, source.replace(/\.ts$/, '.js'));
      mkdirSync(dirname(file), { recursive: true });
      const result = ts.transpileModule(readFileSync(source, 'utf8'), {
        compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
      });
      writeFileSync(file, result.outputText);
    }
    for (const entry of ['instructor-share', 'course-share', 'carpool-share', 'buddy-share']) {
      const url = pathToFileURL(join(root, `api/${entry}.js`)).href;
      const result = execFileSync(process.execPath, ['--input-type=module', '-e', `
        const {default: handler} = await import(${JSON.stringify(url)});
        globalThis.fetch = async () => new Response('', {status:503});
        let status, body;
        const res = {setHeader(){}, status(code){status=code;return this}, send(html){body=html}};
        await handler({query:{id:${JSON.stringify(['carpool-share', 'buddy-share'].includes(entry) ? '11111111-1111-4111-8111-111111111111' : '1003')}},headers:{}}, res);
        if(status!==${['carpool-share', 'buddy-share'].includes(entry) ? 200 : 503} || !body.includes('App Store')) process.exit(1);
        process.stdout.write('ok');
      `], { encoding: 'utf8' });
      expect(result).toBe('ok');
    }
  } finally { rmSync(root, { recursive: true, force: true }); }
});
