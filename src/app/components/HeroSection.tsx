import { Phone, MessageCircle, CalendarDays, Users, X } from "lucide-react";
import { useState } from "react";
import { DatePickerCalendar } from "./DatePickerCalendar";
import { WHATSAPP_BOOKING_NUMBER, CONTACT_PHONE_TEL, getWhatsAppGenericBookingUrl } from "../../utils/whatsappBooking";
import { publicUrl } from "../../utils/publicUrl";
import { formatDateYmdToDisplay, formatDateYmdToDisplayShort } from "../../utils/dateDisplay";
import { brand } from "../../constants/brand";

const HERO_IMAGE = publicUrl("uploads/heroimage.jpeg");

export function HeroSection() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [openPicker, setOpenPicker] = useState<"checkIn" | "checkOut" | null>(null);

  const guestsLabel = `${adults} ${adults === 1 ? "Adult" : "Adults"}${children > 0 ? ` + ${children} ${children === 1 ? "Child" : "Children"}` : ""}`;

  const today = new Date().toISOString().split("T")[0];

  const [errors, setErrors] = useState({ checkIn: false, checkOut: false });

  const togglePicker = (which: "checkIn" | "checkOut") => {
    setOpenPicker((prev) => (prev === which ? null : which));
  };

  const closePicker = () => setOpenPicker(null);

  const handleCheckAvailability = () => {
    const newErrors = { checkIn: !checkIn, checkOut: !checkOut };
    setErrors(newErrors);
    if (newErrors.checkIn || newErrors.checkOut) return;

    const message =
      `Hello Hotel Sombhunath! 🌿\n\n` +
      `I'd like to check room availability:\n` +
      `📅 Check-In: ${formatDateYmdToDisplay(checkIn)}\n` +
      `📅 Check-Out: ${formatDateYmdToDisplay(checkOut)}\n` +
      `👥 Guests: ${guestsLabel}\n\n` +
      `Please let me know the available rooms and tariff. Thank you!`;

    const url = `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section
      id="home"
      className="relative w-full"
      style={{ backgroundColor: brand.colors.pageBg, paddingBottom: "80px" }}
    >
      <div className="w-full h-1" style={{ background: brand.heroTopBarGradient }} />

      {/* Hero Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 pt-14 pb-16 lg:pt-18 lg:pb-20">

          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col gap-6 z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit"
              style={{
                backgroundColor: "rgba(249,115,22,0.08)",
                border: "1px solid rgba(249,115,22,0.3)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span
                className="text-xs tracking-wider uppercase"
                style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
              >
                Now Accepting Bookings
              </span>
            </div>

            <div>
              <p
                className="text-base mb-2"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#F97316",
                  fontWeight: 700,
                }}
              >
                Welcome to Hotel Sombhunath
              </p>
              <h1
                className="text-4xl lg:text-5xl xl:text-[3.5rem]"
                style={{
                  fontFamily: "'Merriweather', serif",
                  color: "#0B2C4A",
                  fontWeight: 900,
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                }}
              >
                Rooms Starting
                <br />
                From{" "}
                <span className="relative inline-block" style={{ color: "#F97316" }}>
                  ₹999
                  <span
                    className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                    style={{ backgroundColor: "#FACC15" }}
                  />
                </span>
                <span style={{ color: "#0B2C4A" }}>/-</span>
              </h1>
            </div>

            <p
              className="text-base max-w-lg"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              Experience warm Indian hospitality amidst nature's embrace. Our hotel combines
              comfort, convenience, and breathtaking surroundings — perfect for solo travelers,
              couples, and families alike.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {["Free WiFi", "AC Rooms", "Complimentary Breakfast", "Free Parking"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#0B2C4A",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    border: "1px solid #CBD5E1",
                    boxShadow: "0 1px 4px rgba(11,44,74,0.06)",
                  }}
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={CONTACT_PHONE_TEL}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #0B2C4A, #123B63)",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  boxShadow: "0 4px 14px rgba(11,44,74,0.3)",
                }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={getWhatsAppGenericBookingUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-[#FACC15] text-sm">★</span>
                  ))}
                </div>
                <span className="text-xs" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
                  4.8/5 Rating
                </span>
              </div>
              <div className="w-px h-4" style={{ backgroundColor: "#CBD5E1" }} />
              <span className="text-xs" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
                1,200+ Happy Guests
              </span>
              <div className="w-px h-4" style={{ backgroundColor: "#CBD5E1" }} />
              <span className="text-xs" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
                5+ Years
              </span>
            </div>
          </div>

          {/* Right: Hotel Image */}
          <div className="relative w-full max-w-xl flex-1 lg:max-w-none">
            {/* Decorative bg shape */}
            <div
              className="absolute inset-4 -z-10 rounded-3xl"
              style={{ backgroundColor: "#EFF6FF", transform: "rotate(3deg)" }}
            />
            <div
              className="relative flex h-[248px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#EEF2F7] sm:h-[288px] md:h-[328px] lg:h-[372px] xl:h-[400px]"
              style={{
                boxShadow: "0 16px 48px rgba(11,44,74,0.16)",
                border: "3px solid white",
              }}
            >
              <img
                src={HERO_IMAGE}
                alt="Hotel Sombhunath"
                className="mx-auto block h-full w-full max-h-full object-contain object-center px-2 py-2 sm:px-3 sm:py-3"
              />

              {/* Gradient overlay bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: "linear-gradient(to top, rgba(11,44,74,0.5), transparent)" }}
              />

              {/* Overlay badge — rating */}
              <div
                className="absolute bottom-4 left-4 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p className="text-xs" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
                  Google Rated
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-[#FACC15] text-sm">★</span>
                  ))}
                  <span
                    className="text-sm ml-1"
                    style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                  >
                    4.8/5
                  </span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
                  1,200+ reviews
                </p>
              </div>

              {/* Price badge top-right */}
              <div
                className="absolute top-4 right-4 px-3 py-2 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  boxShadow: "0 4px 12px rgba(249,115,22,0.4)",
                }}
              >
                <p className="text-xs text-white/80" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Starting From
                </p>
                <p
                  className="text-white"
                  style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "18px" }}
                >
                  ₹999/-
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Booking Bar ── */}
      <div
        id="booking"
        className="relative px-6 lg:px-12 z-20 -mt-8"
      >
        <div
          className="max-w-[1200px] mx-auto rounded-2xl p-4 lg:p-5"
          style={{
            backgroundColor: "white",
            boxShadow: "0 12px 48px rgba(11,44,74,0.16)",
            border: "1px solid #E2E8F0",
          }}
        >
          {/* Bar label */}
          <p
            className="text-xs uppercase tracking-widest mb-3 px-1"
            style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700, opacity: 0.5 }}
          >
            Check Room Availability
          </p>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
            {/* Check-in */}
            <div className="flex-1 relative">
              <button
                type="button"
                onClick={() => togglePicker("checkIn")}
                className="w-full flex flex-col gap-1 px-4 py-3 rounded-xl text-left transition-all"
                style={{
                  backgroundColor: "#F8FAFC",
                  border: errors.checkIn
                    ? "1.5px solid #EF4444"
                    : openPicker === "checkIn"
                    ? "1.5px solid #F97316"
                    : "1px solid #E2E8F0",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  className="text-xs uppercase tracking-wider flex items-center gap-1"
                  style={{
                    color: errors.checkIn ? "#EF4444" : "#F97316",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  <CalendarDays className="w-3 h-3" />
                  {errors.checkIn ? "Check-In Required" : "Check-In"}
                </span>
                <span
                  className="text-sm"
                  style={{
                    color: checkIn ? "#0B2C4A" : "#9CA3AF",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: checkIn ? 600 : 400,
                  }}
                >
                  {checkIn ? formatDateYmdToDisplayShort(checkIn) : "Select date"}
                </span>
                {checkIn && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#E2E8F0", color: "#6B7280" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCheckIn("");
                      setCheckOut("");
                    }}
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </button>

              {openPicker === "checkIn" && (
                <DatePickerCalendar
                  value={checkIn}
                  onChange={(d) => {
                    setCheckIn(d);
                    // Auto-clear checkout if it's before new checkin
                    if (checkOut && checkOut <= d) setCheckOut("");
                    setErrors((prev) => ({ ...prev, checkIn: false }));
                    // Auto-open checkout picker next
                    setTimeout(() => setOpenPicker("checkOut"), 120);
                  }}
                  minDate={today}
                  rangeStart={checkIn}
                  rangeEnd={checkOut}
                  onClose={closePicker}
                  align="left"
                />
              )}
            </div>

            <div className="hidden lg:block w-px self-stretch" style={{ backgroundColor: "#E2E8F0" }} />

            {/* Check-out */}
            <div className="flex-1 relative">
              <button
                type="button"
                onClick={() => togglePicker("checkOut")}
                className="w-full flex flex-col gap-1 px-4 py-3 rounded-xl text-left transition-all"
                style={{
                  backgroundColor: "#F8FAFC",
                  border: errors.checkOut
                    ? "1.5px solid #EF4444"
                    : openPicker === "checkOut"
                    ? "1.5px solid #F97316"
                    : "1px solid #E2E8F0",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  className="text-xs uppercase tracking-wider flex items-center gap-1"
                  style={{
                    color: errors.checkOut ? "#EF4444" : "#F97316",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  <CalendarDays className="w-3 h-3" />
                  {errors.checkOut ? "Check-Out Required" : "Check-Out"}
                </span>
                <span
                  className="text-sm"
                  style={{
                    color: checkOut ? "#0B2C4A" : "#9CA3AF",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: checkOut ? 600 : 400,
                  }}
                >
                  {checkOut ? formatDateYmdToDisplayShort(checkOut) : "Select date"}
                </span>
                {checkOut && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#E2E8F0", color: "#6B7280" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCheckOut("");
                    }}
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </button>

              {openPicker === "checkOut" && (
                <DatePickerCalendar
                  value={checkOut}
                  onChange={(d) => {
                    setCheckOut(d);
                    setErrors((prev) => ({ ...prev, checkOut: false }));
                    closePicker();
                  }}
                  minDate={checkIn || today}
                  rangeStart={checkIn}
                  rangeEnd={checkOut}
                  onClose={closePicker}
                  align="left"
                />
              )}
            </div>

            <div className="hidden lg:block w-px self-stretch" style={{ backgroundColor: "#E2E8F0" }} />

            {/* Guests */}
            <div
              className="flex-1 flex flex-col gap-1 px-4 py-3 rounded-xl"
              style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}
            >
              {/* Label */}
              <span
                className="text-xs uppercase tracking-wider flex items-center gap-1 mb-1"
                style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
              >
                {/* Thin person icon */}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="5" r="3" stroke="#F97316" strokeWidth="1.4"/>
                  <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                Guests
              </span>

              {/* Adults row */}
              <div className="flex items-center justify-between">
                <div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", color: "#0B2C4A", fontWeight: 600, lineHeight: 1 }}>
                    Adults
                  </p>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "10px", color: "#9CA3AF", lineHeight: 1.2 }}>
                    Age 13+
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAdults((n) => Math.max(1, n - 1))}
                    style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      border: adults <= 1 ? "1px solid #E2E8F0" : "1px solid #0B2C4A",
                      backgroundColor: "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: adults <= 1 ? "not-allowed" : "pointer",
                      opacity: adults <= 1 ? 0.35 : 1,
                      transition: "all 0.15s",
                    }}
                    disabled={adults <= 1}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6" stroke="#0B2C4A" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <span style={{ fontFamily: "'Merriweather', serif", fontSize: "14px", color: "#0B2C4A", fontWeight: 700, minWidth: "16px", textAlign: "center" }}>
                    {adults}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAdults((n) => Math.min(6, n + 1))}
                    style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      border: adults >= 6 ? "1px solid #E2E8F0" : "1px solid #F97316",
                      backgroundColor: adults >= 6 ? "transparent" : "rgba(249,115,22,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: adults >= 6 ? "not-allowed" : "pointer",
                      opacity: adults >= 6 ? 0.35 : 1,
                      transition: "all 0.15s",
                    }}
                    disabled={adults >= 6}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 2v6M2 5h6" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thin divider */}
              <div style={{ height: "1px", backgroundColor: "#F1F5F9", margin: "4px 0" }} />

              {/* Children row */}
              <div className="flex items-center justify-between">
                <div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", color: "#0B2C4A", fontWeight: 600, lineHeight: 1 }}>
                    Children
                  </p>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "10px", color: "#9CA3AF", lineHeight: 1.2 }}>
                    Age 2–12
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setChildren((n) => Math.max(0, n - 1))}
                    style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      border: children <= 0 ? "1px solid #E2E8F0" : "1px solid #0B2C4A",
                      backgroundColor: "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: children <= 0 ? "not-allowed" : "pointer",
                      opacity: children <= 0 ? 0.35 : 1,
                      transition: "all 0.15s",
                    }}
                    disabled={children <= 0}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6" stroke="#0B2C4A" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <span style={{ fontFamily: "'Merriweather', serif", fontSize: "14px", color: "#0B2C4A", fontWeight: 700, minWidth: "16px", textAlign: "center" }}>
                    {children}
                  </span>
                  <button
                    type="button"
                    onClick={() => setChildren((n) => Math.min(4, n + 1))}
                    style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      border: children >= 4 ? "1px solid #E2E8F0" : "1px solid #F97316",
                      backgroundColor: children >= 4 ? "transparent" : "rgba(249,115,22,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: children >= 4 ? "not-allowed" : "pointer",
                      opacity: children >= 4 ? 0.35 : 1,
                      transition: "all 0.15s",
                    }}
                    disabled={children >= 4}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 2v6M2 5h6" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleCheckAvailability}
              className="px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap text-white flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                boxShadow: "0 4px 16px rgba(249,115,22,0.4)",
              }}
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}