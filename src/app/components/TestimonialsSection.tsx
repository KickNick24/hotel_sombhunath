import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sonai Das",
    location: "Kolkata, West Bengal",
    rating: 5,
    avatar: "PS",
    avatarBg: "#EFF6FF",
    text: "Very Good and Effortable Hotel in jalpaiguri city ,cheap and best service neet and clean also",
    stay: "Deluxe Room · 3 nights",
  },
  {
    id: 2,
    name: "Bonya Linda",
    location: "Cooh Behar, West Bengal",
    rating: 5,
    avatar: "RV",
    avatarBg: "#FFF7ED",
    text: "Cheap and best hotel in jalpaiguri city, location very good middle of the city, staff all are very good, good service big room.",
    stay: "Standard Room · 5 nights",
  },
  {
    id: 3,
    name: "Anjali & Vikram",
    location: "Siliguri, West Bengal",
    rating: 5,
    avatar: "AV",
    avatarBg: "#F0FFF4",
    text: "We celebrated our anniversary here and the hotel team went above and beyond to make it special. Room was decorated beautifully. The nature walk nearby was stunning. Highly recommended for couples!",
    stay: "Premium Suite · 2 nights",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? "#FACC15" : "#E2E8F0", fontSize: "16px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-widest mb-3"
            style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            Guest Reviews
          </p>
          <h2
            className="text-3xl lg:text-4xl"
            style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900 }}
          >
            What Our Guests Say
          </h2>
          <p
            className="mt-3 max-w-md mx-auto text-sm"
            style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.7 }}
          >
            Real experiences from real travelers — see why guests keep coming back to Hotel Sombhunath.
          </p>

          {/* Overall rating badge */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div
              className="px-5 py-2.5 rounded-full flex items-center gap-3"
              style={{
                backgroundColor: "#FFF7ED",
                border: "1px solid rgba(249,115,22,0.2)",
              }}
            >
              <StarRating count={5} />
              <span
                className="text-sm"
                style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
              >
                4.8 / 5
              </span>
              <span
                className="text-xs"
                style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}
              >
                · Based on 1,200+ reviews
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 flex flex-col gap-4 relative group transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#FAFAFA",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(11,44,74,0.05)",
              }}
            >
              {/* Decorative quote icon */}
              <div
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(249,115,22,0.08)" }}
              >
                <Quote className="w-4 h-4" style={{ color: "#F97316", opacity: 0.5 }} />
              </div>

              <StarRating count={t.rating} />

              <p
                className="text-sm flex-1"
                style={{
                  color: "#374151",
                  fontFamily: "'Nunito', sans-serif",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              {/* Stay tag */}
              <div
                className="text-xs px-3 py-1 rounded-full w-fit"
                style={{
                  backgroundColor: "#EFF6FF",
                  color: "#0B2C4A",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  border: "1px solid #BFDBFE",
                }}
              >
                {t.stay}
              </div>

              {/* Reviewer */}
              <div
                className="flex items-center gap-3 pt-3 border-t"
                style={{ borderColor: "#F1F5F9" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                  style={{
                    backgroundColor: t.avatarBg,
                    color: "#0B2C4A",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 800,
                    border: "1.5px solid #E2E8F0",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}
                  >
                    {t.location}
                  </p>
                </div>
                {/* Google icon */}
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
