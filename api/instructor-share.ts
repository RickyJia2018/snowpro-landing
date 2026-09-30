import { CourseShareUnavailable, validCourseId } from '../src/lib/courseShare';
import { fetchSharedInstructor, renderInstructorDocument } from '../src/lib/instructorShare';

type Request = { query: Record<string, string | string[] | undefined>; headers: Record<string, string | string[] | undefined> };
type Response = { setHeader(name: string, value: string): void; status(code: number): Response; send(body: string): void };

export default async function handler(req: Request, res: Response) {
  const id = req.query.id;
  const zh = String(req.headers['accept-language'] || '').toLowerCase().startsWith('zh');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Vary', 'Accept-Language');
  if (!validCourseId(id)) {
    res.status(404).send(renderInstructorDocument(null, '', zh, true));
    return;
  }
  try {
    const instructor = await fetchSharedInstructor(id,
      process.env.INSTRUCTOR_SHARE_API_BASE_URL || process.env.VITE_API_BASE_URL || 'https://skiapp-api.googuar.com',
      AbortSignal.timeout(10000));
    res.status(200).send(renderInstructorDocument(instructor, id, zh));
  } catch (error) {
    const unavailable = error instanceof CourseShareUnavailable && error.status === 404;
    res.status(unavailable ? 404 : 503).send(renderInstructorDocument(null, id, zh, unavailable));
  }
}
