import { useRef, useState } from "react";
import { Shield, Award, Heart, Play } from "lucide-react";
import { publicUrl } from "../../utils/publicUrl";

const LOBBY_IMAGE =
  "https://images.unsplash.com/photo-1765611368472-68c35ea7fe55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwcmVjZXB0aW9uJTIwd2FybSUyMGludGVyaW9yfGVufDF8fHx8MTc3NzczNTYzMnww&ixlib=rb-4.1.0&q=80&w=1080";

const ABOUT_VIDEO_SRC = publicUrl("hero_section/hotel_video.mp4");

const stats = [
  { value: "20+", label: "Rooms", icon: "🏨" },
  { value: "1000+", label: "Happy Guests", icon: "😊" },
  { value: "24/7", label: "Service", icon: "⏰" },
  { value: "5+", label: "Years of Trust", icon: "🏆" },
];

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlayClick = () => {
    setHasStarted(true);
    const el = videoRef.current;
    if (el) {
      void el.play().catch(() => {
        /* user may need to interact again if autoplay blocked */
      });
    }
  };

  return (
    <section
      id="about"
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Images */}
          <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
            {/* Decorative bg */}
            <div
              className="absolute inset-6 rounded-3xl -z-10"
              style={{ backgroundColor: "#EFF6FF", transform: "rotate(-2deg)" }}
            />

            <div
              className="relative rounded-2xl overflow-hidden bg-[#0B2C4A]"
              style={{
                boxShadow: "0 20px 56px rgba(11,44,74,0.18)",
                border: "4px solid white",
                height: "400px",
              }}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover block"
                src={ABOUT_VIDEO_SRC}
                poster={LOBBY_IMAGE}
                playsInline
                preload="metadata"
                controls={hasStarted}
                aria-label="Hotel lobby tour video"
              />
              {/* Gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 z-[1] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(11,44,74,0.4), transparent)" }}
              />
              {!hasStarted && (
                <div
                  className="absolute inset-0 z-[2] flex items-center justify-center"
                  style={{ backgroundColor: "rgba(11,44,74,0.18)" }}
                >
                  <button
                    type="button"
                    onClick={handlePlayClick}
                    className="flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                    style={{
                      width: "72px",
                      height: "72px",
                      background: "linear-gradient(135deg, #F97316, #FB923C)",
                      boxShadow: "0 8px 28px rgba(249,115,22,0.45)",
                      border: "3px solid white",
                    }}
                    aria-label="Play hotel video"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" aria-hidden />
                  </button>
                </div>
              )}
            </div>

            {/* Years badge */}
            <div
              className="absolute top-4 -left-4 lg:-left-8 w-20 h-20 rounded-full flex flex-col items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                boxShadow: "0 4px 20px rgba(249,115,22,0.45)",
                border: "3px solid white",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "'Merriweather', serif",
                  fontWeight: 900,
                  fontSize: "20px",
                  lineHeight: 1,
                }}
              >
                5+
              </span>
              <span
                className="text-[9px] text-center leading-tight"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Nunito', sans-serif" }}
              >
                Years of Trust
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p
                className="text-sm uppercase tracking-widest mb-3"
                style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
              >
                About Us
              </p>
              <h2
                className="text-3xl lg:text-4xl"
                style={{
                  fontFamily: "'Merriweather', serif",
                  color: "#0B2C4A",
                  fontWeight: 900,
                  lineHeight: 1.3,
                }}
              >
                A Perfect Stay For
                <br />
                Every Traveler
              </h2>
            </div>

            <p
              className="text-base"
              style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.8 }}
            >
              Set among green, open surroundings, Hotel Sombhunath is a comfortable
              place to slow down and recharge. We pair traditional Indian hospitality
              with practical, modern amenities—whether you are here for leisure, work,
              or a family trip.
            </p>

            <p
              className="text-base"
              style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.8 }}
            >
              Our rooms are laid out for restful sleep and easy stays: uncluttered
              spaces, quality bedding, and the small touches that help you settle in.
              Our team focuses on clear, courteous service so you feel looked after
              from arrival to departure.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-3">
              {[
                { icon: Shield, text: "Eco-conscious hospitality with sustainable practices" },
                { icon: Heart, text: "Warm Indian service, personalized for every guest" },
                { icon: Award, text: "Award-winning comfort at affordable prices" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.06))",
                      border: "1px solid rgba(249,115,22,0.2)",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#F97316" }} />
                  </div>
                  <p
                    className="text-sm pt-1.5"
                    style={{
                      color: "#1F2937",
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 600,
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 pt-6 border-t"
              style={{ borderColor: "#E2E8F0" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="flex justify-center mb-1">
                    {s.label === "Rooms" && (
                      <span className="flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: "rgba(11,44,74,0.06)", border: "1px solid rgba(11,44,74,0.1)" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="2" y="6" width="14" height="10" rx="1.5" stroke="#0B2C4A" strokeWidth="1.3"/>
                          <path d="M6 16V6" stroke="#0B2C4A" strokeWidth="1.3" strokeLinecap="round"/>
                          <path d="M12 16V6" stroke="#0B2C4A" strokeWidth="1.3" strokeLinecap="round"/>
                          <path d="M5 6V4a4 4 0 0 1 8 0v2" stroke="#F97316" strokeWidth="1.3" strokeLinecap="round"/>
                          <path d="M6 10h2M10 10h2M6 13h2M10 13h2" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </span>
                    )}
                    {s.label === "Happy Guests" && (
                      <span className="flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="7" cy="6" r="3" stroke="#0B2C4A" strokeWidth="1.3"/>
                          <path d="M1.5 16c0-3 2.5-4.5 5.5-4.5" stroke="#0B2C4A" strokeWidth="1.3" strokeLinecap="round"/>
                          <circle cx="13" cy="9" r="2.5" stroke="#F97316" strokeWidth="1.3"/>
                          <path d="M10.5 16c0-2.2 1.1-3.5 2.5-3.5s2.5 1.3 2.5 3.5" stroke="#F97316" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                      </span>
                    )}
                    {s.label === "Service" && (
                      <span className="flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: "rgba(11,44,74,0.06)", border: "1px solid rgba(11,44,74,0.1)" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="6.5" stroke="#0B2C4A" strokeWidth="1.3"/>
                          <path d="M9 5.5V9l2.5 2" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="9" r="1" fill="#0B2C4A"/>
                        </svg>
                      </span>
                    )}
                    {s.label === "Years of Trust" && (
                      <span className="flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M9 2l1.8 3.6 4 .6-2.9 2.8.7 4L9 11l-3.6 1.9.7-4L3.2 6.2l4-.6L9 2z" stroke="#F97316" strokeWidth="1.3" strokeLinejoin="round"/>
                          <path d="M6 14.5v2M12 14.5v2M6 16.5h6" stroke="#0B2C4A" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Merriweather', serif",
                      color: "#F97316",
                      fontWeight: 900,
                      fontSize: "24px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}