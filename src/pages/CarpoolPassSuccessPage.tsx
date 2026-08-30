import { Link } from 'react-router-dom';

// Stripe redirects here after Checkout. The backend webhook, rather than this
// browser page, is the authority that grants the non-renewing pass.
export default function CarpoolPassSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <section className="mx-auto max-w-xl pt-24 text-center">
        <p className="text-5xl" aria-hidden="true">✓</p>
        <h1 className="mt-6 text-3xl font-bold">Payment received</h1>
        <p className="mt-4 text-slate-300">
          Stripe is confirming your payment. Your non-renewing Carpool Pass will
          activate automatically after confirmation, usually within a few seconds.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Return to SnowPro and refresh the Carpool publishing screen to use it.
        </p>
        <Link
          className="mt-8 inline-block rounded bg-blue-500 px-4 py-2 font-medium hover:bg-blue-400"
          to="/"
        >
          Back to SnowPro
        </Link>
      </section>
    </main>
  );
}
