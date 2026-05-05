import { CheckCircle, XCircle, MessageCircle, Tag, Info } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { getWhatsAppGenericBookingUrl, getWhatsAppRoomBookingUrl } from "../../utils/whatsappBooking";

const plans = [
  {
    id: "standard",
    name: "Standard Room",
    tagline: "Perfect for solo & budget stays",
    price: { weekday: 999, weekend: 1199, peak: 1399 },
    color: "#22C55E",
    popular: false,
    inclusions: [
      { label: "Free Parking", included: true },
      { label: "Free WiFi", included: true },
      { label: "24/7 Front Desk", included: true },
      { label: "Daily Housekeeping", included: true },
      { label: "Complimentary Drinking Water", included: true },
      { label: "Room Service", included: false },
      { label: "Late Checkout", included: false },
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    tagline: "Our most popular choice",
    price: { weekday: 1499, weekend: 1799, peak: 2199 },
    color: "#F97316",
    popular: true,
    inclusions: [
      { label: "Free Parking", included: true },
      { label: "Free WiFi", included: true },
      { label: "24/7 Front Desk", included: true },
      { label: "Daily Housekeeping", included: true },
      { label: "Complimentary Tea/Coffee in Room", included: true },
      { label: "Room Service", included: true },
      { label: "Late Checkout", included: false },
    ],
  },
  {
    id: "family",
    name: "Family Room",
    tagline: "Spacious comfort for the whole family",
    price: { weekday: 2199, weekend: 2499, peak: 2999 },
    color: "#123B63",
    popular: false,
    inclusions: [
      { label: "Free Parking", included: true },
      { label: "Free WiFi", included: true },
      { label: "24/7 Front Desk", included: true },
      { label: "Daily Housekeeping", included: true },
      { label: "Room Service", included: true },
    ],
  },
  {
    id: "suite",
    name: "Premium Suite",
    tagline: "Luxury & exclusivity redefined",
    price: { weekday: 2999, weekend: 3499, peak: 3999 },
    color: "#FACC15",
    textDark: true,
    popular: false,
    inclusions: [
      { label: "Free Parking (2 vehicles)", included: true },
      { label: "High-Speed WiFi", included: true },
      { label: "Welcome Drink on Arrival", included: true },
      { label: "Twice Daily Housekeeping", included: true },
      { label: "24/7 Room Service", included: true },
      { label: "Express Check-out Assistance", included: true },
    ],
  },
];

const policies = [
  { title: "Check-in / Check-out", detail: "Check-in: 10:00 AM · Check-out: 9:00 AM · Early/late subject to availability" },
  { title: "Cancellation", detail: "Free cancellation up to 24 hours before check-in. After that, 1-night charge applies." },
  { title: "Children Policy", detail: "Children below 5 stay free. Ages 6–12 charged at ₹300/night. Extra cot: ₹500/night." },
  { title: "GST & Taxes", detail: "All tariffs shown are base rates. 12% GST applicable on room charges." },
  { title: "Peak Season", detail: "Peak season: October–January & April–May. Rates may vary during festivals & long weekends." },
  { title: "Payment Modes", detail: "UPI, Net Banking, Credit/Debit Cards, and Cash accepted at the property." },
];

export function TariffPage() {
  return (
    <>
      <PageHeader
        title="Room Tariff & Pricing"
        subtitle="Transparent pricing with no hidden charges. Book direct for the best rates guaranteed."
        breadcrumb="Tariff"
      />

      {/* Season Legend */}
      <section className="w-full pt-14 pb-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center mb-2">
            {[
              { label: "Weekday Rate", desc: "Mon–Thu", color: "#EFF6FF", border: "#BFDBFE", text: "#0B2C4A" },
              { label: "Weekend Rate", desc: "Fri–Sun", color: "#FFF7ED", border: "#FED7AA", text: "#C2410C" },
              { label: "Peak Season Rate", desc: "Oct–Jan, Apr–May", color: "#FEF9C3", border: "#FDE047", text: "#92400E" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
                style={{ backgroundColor: s.color, border: `1px solid ${s.border}`, color: s.text, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
              >
                <span>{s.label}</span>
                <span className="opacity-60">·</span>
                <span className="opacity-70">{s.desc}</span>
              </div>
            ))}
          </div>
          <p
            className="text-center text-xs mt-2"
            style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}
          >
            <Info className="w-3 h-3 inline mr-1" />
            All prices in Indian Rupees (₹) per night. GST extra. Book direct for best rates.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl overflow-hidden flex flex-col relative"
                style={{
                  backgroundColor: "white",
                  border: plan.popular ? `2px solid ${plan.color}` : "1px solid #E2E8F0",
                  boxShadow: plan.popular
                    ? "0 12px 40px rgba(249,115,22,0.15)"
                    : "0 4px 20px rgba(11,44,74,0.07)",
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs text-white"
                    style={{ background: "linear-gradient(135deg, #F97316, #FB923C)", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                  >
                    ★ Most Popular Choice
                  </div>
                )}

                {/* Header */}
                <div
                  className="p-6 text-center"
                  style={{ paddingTop: plan.popular ? "40px" : "24px", backgroundColor: plan.id === "suite" ? "#0B2C4A" : "#FAFAFA", borderBottom: "1px solid #F1F5F9" }}
                >
                  <h3
                    className="text-lg"
                    style={{
                      fontFamily: "'Merriweather', serif",
                      color: plan.id === "suite" ? "white" : "#0B2C4A",
                      fontWeight: 700,
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-xs mt-1"
                    style={{ color: plan.id === "suite" ? "rgba(255,255,255,0.55)" : "#6B7280", fontFamily: "'Nunito', sans-serif" }}
                  >
                    {plan.tagline}
                  </p>

                  {/* Prices */}
                  <div className="mt-5 flex flex-col gap-2">
                    <div
                      className="py-2 px-4 rounded-xl text-center"
                      style={{ backgroundColor: "#EFF6FF" }}
                    >
                      <span className="text-xs block" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>Weekday</span>
                      <span
                        style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900, fontSize: "22px" }}
                      >
                        ₹{plan.price.weekday.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div
                        className="py-2 px-2 rounded-xl text-center"
                        style={{ backgroundColor: "#FFF7ED" }}
                      >
                        <span className="text-xs block" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>Weekend</span>
                        <span
                          style={{ fontFamily: "'Merriweather', serif", color: "#C2410C", fontWeight: 700, fontSize: "15px" }}
                        >
                          ₹{plan.price.weekend.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div
                        className="py-2 px-2 rounded-xl text-center"
                        style={{ backgroundColor: "#FEF9C3" }}
                      >
                        <span className="text-xs block" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>Peak</span>
                        <span
                          style={{ fontFamily: "'Merriweather', serif", color: "#92400E", fontWeight: 700, fontSize: "15px" }}
                        >
                          ₹{plan.price.peak.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="p-5 flex flex-col flex-1">
                  <p
                    className="text-xs uppercase tracking-wider mb-3"
                    style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                  >
                    What's Included
                  </p>
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.inclusions.map((inc) => (
                      <li key={inc.label} className="flex items-start gap-2">
                        {inc.included ? (
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#22C55E" }} />
                        ) : (
                          <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#CBD5E1" }} />
                        )}
                        <span
                          className="text-xs"
                          style={{
                            color: inc.included ? "#1F2937" : "#CBD5E1",
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: inc.included ? 600 : 400,
                            lineHeight: 1.5,
                          }}
                        >
                          {inc.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Book CTA */}
                  <a
                    href={getWhatsAppRoomBookingUrl({
                      name: plan.name,
                      tariffNote: `Weekday ₹${plan.price.weekday.toLocaleString("en-IN")} · Weekend ₹${plan.price.weekend.toLocaleString("en-IN")} · Peak ₹${plan.price.peak.toLocaleString("en-IN")}`,
                    })}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl py-3 text-sm text-white transition-all hover:opacity-90"
                    style={{
                      background: plan.popular
                        ? "linear-gradient(135deg, #F97316, #FB923C)"
                        : "linear-gradient(135deg, #0B2C4A, #123B63)",
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      boxShadow: plan.popular ? "0 4px 12px rgba(249,115,22,0.3)" : "0 4px 12px rgba(11,44,74,0.2)",
                    }}
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    Book This Room
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Promo code */}
          <div
            className="mt-10 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4 justify-between"
            style={{ background: "linear-gradient(135deg, #0B2C4A, #123B63)", boxShadow: "0 8px 32px rgba(11,44,74,0.25)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.3)" }}
              >
                <Tag className="w-5 h-5" style={{ color: "#F97316" }} />
              </div>
              <div>
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                >
                  Use code <span style={{ color: "#FACC15" }}>SOMBHUNATH10</span> for 10% off on direct bookings
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Nunito', sans-serif" }}
                >
                  Valid on stays of 2+ nights · Offer ends 31st May 2026
                </p>
              </div>
            </div>
            <a
              href={getWhatsAppGenericBookingUrl(
                "I would like to book using the SOMBHUNATH10 offer (10% off on direct bookings for 2+ nights). Please confirm eligibility and availability.",
              )}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 rounded-xl px-6 py-2.5 text-sm text-white no-underline transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                boxShadow: "0 4px 12px rgba(249,115,22,0.35)",
              }}
            >
              Book Now & Save →
            </a>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="w-full py-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <p
              className="text-sm uppercase tracking-widest mb-2"
              style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Hotel Policies
            </p>
            <h2
              className="text-3xl"
              style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900 }}
            >
              Good to Know
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {policies.map((p) => (
              <div
                key={p.title}
                className="p-5 rounded-2xl"
                style={{
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                }}
              >
                <p
                  className="text-sm mb-2"
                  style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                >
                  {p.title}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.7 }}
                >
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
