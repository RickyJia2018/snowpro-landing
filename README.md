<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1b7P7rESeLO99rdTsNL3xK4jDsbv1OD5g

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Optionally set `VITE_API_BASE_URL` in `.env.local` to the API environment used for testing. Do not put private API keys in the frontend bundle.
3. Run the app:
   `npm run dev`

## Course sharing

The App shares `https://snowpro.googuar.com/courses/:id`. Both link sharing and
poster QR codes use this URL. Installed apps handle it through Universal Links
(iOS) or verified App Links (Android); browsers show a public course preview with
an explicit app-opening link and download links.

On Vercel, `vercel.json` sends course URLs to `api/course-share.ts`. The function
renders the course and Open Graph metadata on the server so messaging previews
work without JavaScript. Deploy the whole repository with Vercel, including
`api/`, rather than uploading only `dist/`. Vite provides the React fallback
route for local development.

The function calls the existing anonymous `/get_course?id=...&include_detail=true`
endpoint. Only published courses are shown. Set `COURSE_SHARE_API_BASE_URL` in
Vercel to override the server's API environment; otherwise it uses
`VITE_API_BASE_URL`, then the existing production API default. Local-only course
data will not be accessible from a public sharing link until it exists in that
API environment.

Deploy `public/.well-known/apple-app-site-association` and `assetlinks.json`
alongside the page. iOS associations include both release and development bundle
IDs; Android's existing association uses the release package and certificate.
After deployment, validate on a signed device build by tapping a course link from
Messages or Notes, with and without the App installed. After downloading the App,
the page instructs users to return to the original course link.

## Instructor sharing

Both the instructor detail and portfolio editor share the same canonical
`https://snowpro.googuar.com/instructors/:id` URL. Posters use the same destination;
the editor shares saved profile data rather than an unsaved preview.

Vercel routes these URLs to `api/instructor-share.ts`, which calls the existing
anonymous `/v1/public/instructors/:id` API and renders public profile information,
Open Graph metadata and an Apple Smart App Banner without requiring JavaScript.
Only public certificate labels are rendered, never certificate proof images.
Set `INSTRUCTOR_SHARE_API_BASE_URL` to override the API environment; otherwise
`VITE_API_BASE_URL` and the production default are used, in that order.

Embedded browsers can still display the profile, with guidance to open an external
browser if App launch is blocked. No timer-driven automatic redirect is used.
Unavailable instructors return 404; temporary API failures return 503. Both retain
download links. The React local-development fallback has bounded loading and
cancels stale requests. Deploy the whole repository, including `api/`, and verify
signed-device HTTPS opening after deployment, as described above for courses.
