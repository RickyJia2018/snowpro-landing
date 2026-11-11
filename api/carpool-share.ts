import { previewLabel, renderCarpoolDocument, validCarpoolId } from '../src/lib/carpoolShare.js';

type Request = { query: Record<string, string | string[] | undefined>; headers: Record<string, string | string[] | undefined> };
type Response = { setHeader(name: string, value: string): void; status(code: number): Response; send(body: string): void };

export default function handler(req: Request, res: Response) {
  const id = req.query.id;
  const valid = validCarpoolId(id);
  const zh = req.query.lang === 'zh' || (req.query.lang !== 'en' && String(req.headers['accept-language'] || '').toLowerCase().startsWith('zh'));
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Vary', 'Accept-Language');
  res.status(valid ? 200 : 404).send(renderCarpoolDocument(
    valid ? id : '', previewLabel(req.query.title, 120), previewLabel(req.query.description, 180), zh));
}
