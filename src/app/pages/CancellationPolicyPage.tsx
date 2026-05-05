import type { ReactNode } from "react";
import { PageHeader } from "../components/PageHeader";
import { Link } from "react-router";

const p = (children: ReactNode) => (
  <p
    className="mb-4 text-base leading-relaxed"
    style={{ color: "#475569", fontFamily: "'Nunito', sans-serif" }}
  >
    {children}
  </p>
);

const h2 = (children: ReactNode) => (
  <h2
    className="mb-3 mt-10 text-xl first:mt-0"
    style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 800 }}
  >
    {children}
  </h2>
);

const ul = (items: string[]) => (
  <ul className="mb-6 list-disc space-y-2 pl-6" style={{ color: "#475569", fontFamily: "'Nunito', sans-serif" }}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export function CancellationPolicyPage() {
  return (
    <>
      <PageHeader
        title="Cancellation Policy"
        subtitle="How to change or cancel your reservation, and when charges may apply."
        breadcrumb="Cancellation Policy"
      />
      <section className="w-full py-14 lg:py-16" style={{ backgroundColor: "#F8FAFC" }}>
        <article
          className="mx-auto max-w-[720px] rounded-2xl border bg-white px-6 py-10 shadow-sm lg:px-10 lg:py-12"
          style={{ borderColor: "#E2E8F0" }}
        >
          <p className="mb-8 text-sm" style={{ color: "#94A3B8", fontFamily: "'Nunito', sans-serif" }}>
            Last updated: 2 May 2026 · Hotel Sombhunath, Jalpaiguri, West Bengal
          </p>

          {h2("1. Standard cancellations")}
          {p(
            "For most direct bookings, you may cancel free of charge up to 24 hours before your scheduled check-in time (10:00 AM on the arrival date), unless a different rule was confirmed in writing at the time of booking.",
          )}
          {ul([
            "Within 24 hours of check-in: one night’s room charge may apply.",
            "No-show or same-day cancellation without notice: full stay or minimum one-night charge as confirmed in your booking.",
          ])}

          {h2("2. Peak dates and packages")}
          {p(
            "During peak periods, festivals, long weekends, or special packages, stricter rules may apply (for example, non-refundable deposits or longer notice periods). Any such conditions will be stated clearly in your booking confirmation.",
          )}

          {h2("3. How to cancel or modify")}
          {p(
            "Please contact us using the same channel you used to book (phone, WhatsApp, or email) and quote your confirmation details. We will confirm cancellation or modification in writing where possible.",
          )}

          {h2("4. Refunds")}
          {p(
            "Eligible refunds are processed to the original payment method where feasible, within a reasonable period after cancellation is confirmed. Bank or payment-provider timelines may apply.",
          )}

          {h2("5. Third-party bookings")}
          {p(
            "If you booked through an online travel agency or other partner, their cancellation and refund rules apply. Please contact them directly for changes; we can assist only for reservations made directly with Hotel Sombhunath.",
          )}

          {h2("6. Force majeure")}
          {p(
            "Where travel or operations are materially affected by events outside our reasonable control (such as natural disasters or government orders), we will work with you in good faith on rescheduling or credits, subject to availability and law.",
          )}

          {h2("7. Contact")}
          {p(
            <>
              For cancellation or changes, reach us via{" "}
              <Link to="/contact" className="font-semibold text-[#F97316] hover:underline">
                Contact
              </Link>
              , WhatsApp, or phone. We recommend keeping a copy of your confirmation for reference.
            </>,
          )}
        </article>
      </section>
    </>
  );
}
