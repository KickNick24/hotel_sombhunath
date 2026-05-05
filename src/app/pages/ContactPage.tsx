import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { HOTEL_GOOGLE_MAPS_URL } from "../../constants/location";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, getWhatsAppGenericBookingUrl } from "../../utils/whatsappBooking";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    primary: CONTACT_PHONE_DISPLAY,
    secondary: "Call or WhatsApp",
    action: { label: "Call Now", href: CONTACT_PHONE_TEL },
    color: "#0B2C4A",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: CONTACT_PHONE_DISPLAY,
    secondary: "Typically replies within minutes",
    action: { label: "Chat on WhatsApp", href: getWhatsAppGenericBookingUrl() },
    color: "#25D366",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "contact@hotelsombhunathbhawan.in",
    secondary: "Bookings & general enquiries",
    action: { label: "Send Email", href: "mailto:contact@hotelsombhunathbhawan.in" },
    color: "#F97316",
  },
  {
    icon: MapPin,
    title: "Our Location",
    primary: "Hotel Sombhunath & Bhawan, 3rd Floor",
    secondary: "Vishal Megamart, Dinbazar Rd, Kamar Para, Jalpaiguri — 735101, WB",
    action: { label: "View on Maps", href: HOTEL_GOOGLE_MAPS_URL },
    color: "#123B63",
  },
];

const timings = [
  { day: "Front Desk", time: "24 Hours / 7 Days" },
  { day: "Restaurant", time: "7:00 AM – 11:00 PM" },
  { day: "Check-in", time: "10:00 AM onwards" },
  { day: "Check-out", time: "Before 9:00 AM" },
];

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "2 Adults",
    roomType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for bookings, enquiries, or just a chat about your perfect stay."
        breadcrumb="Contact"
      />

      {/* Contact Cards */}
      <section className="w-full py-16" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 20px rgba(11,44,74,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: info.color === "#25D366" ? "#DCFCE7" : info.color === "#F97316" ? "#FFF7ED" : "#EFF6FF" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: info.color }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                    >
                      {info.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                    >
                      {info.primary}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}
                    >
                      {info.secondary}
                    </p>
                  </div>
                  <a
                    href={info.action.href}
                    target={info.action.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-auto text-xs py-2 px-4 rounded-xl text-center transition-all hover:opacity-80"
                    style={{
                      backgroundColor: info.color === "#25D366" ? "#DCFCE7" : info.color === "#F97316" ? "#FFF7ED" : "#EFF6FF",
                      color: info.color,
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      border: `1px solid ${info.color}30`,
                    }}
                  >
                    {info.action.label} →
                  </a>
                </div>
              );
            })}
          </div>

          {/* Form + Hours */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Enquiry Form */}
            <div
              className="flex-[2] rounded-2xl p-8"
              style={{
                backgroundColor: "white",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 24px rgba(11,44,74,0.07)",
              }}
            >
              <p
                className="text-sm uppercase tracking-widest mb-1"
                style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
              >
                Send an Enquiry
              </p>
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 700 }}
              >
                Book or Enquire
              </h3>

              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#DCFCE7" }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: "#22C55E" }} />
                  </div>
                  <h4
                    className="text-xl"
                    style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 700 }}
                  >
                    Thank You!
                  </h4>
                  <p
                    className="text-sm max-w-sm"
                    style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.7 }}
                  >
                    We've received your enquiry and will get back to you within 2 hours via call or WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm px-5 py-2.5 rounded-xl"
                    style={{
                      backgroundColor: "#EFF6FF",
                      color: "#0B2C4A",
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      border: "1px solid #BFDBFE",
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs uppercase tracking-wider"
                        style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                        style={{
                          border: "1px solid #E2E8F0",
                          fontFamily: "'Nunito', sans-serif",
                          color: "#0B2C4A",
                          backgroundColor: "#F8FAFC",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs uppercase tracking-wider"
                        style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          border: "1px solid #E2E8F0",
                          fontFamily: "'Nunito', sans-serif",
                          color: "#0B2C4A",
                          backgroundColor: "#F8FAFC",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs uppercase tracking-wider"
                      style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        border: "1px solid #E2E8F0",
                        fontFamily: "'Nunito', sans-serif",
                        color: "#0B2C4A",
                        backgroundColor: "#F8FAFC",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                      onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs uppercase tracking-wider"
                        style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                      >
                        Check-In Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formState.checkIn}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          border: "1px solid #E2E8F0",
                          fontFamily: "'Nunito', sans-serif",
                          color: "#0B2C4A",
                          backgroundColor: "#F8FAFC",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs uppercase tracking-wider"
                        style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                      >
                        Check-Out Date
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formState.checkOut}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          border: "1px solid #E2E8F0",
                          fontFamily: "'Nunito', sans-serif",
                          color: "#0B2C4A",
                          backgroundColor: "#F8FAFC",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs uppercase tracking-wider"
                        style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                      >
                        Guests
                      </label>
                      <div className="relative">
                        <select
                          name="guests"
                          value={formState.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none pr-10"
                          style={{
                            border: "1px solid #E2E8F0",
                            fontFamily: "'Nunito', sans-serif",
                            color: "#0B2C4A",
                            backgroundColor: "#F8FAFC",
                            cursor: "pointer",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                          onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                        >
                          <option>1 Adult</option>
                          <option>2 Adults</option>
                          <option>2 Adults + 1 Child</option>
                          <option>2 Adults + 2 Children</option>
                          <option>3+ Adults</option>
                        </select>
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6l4 4 4-4" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs uppercase tracking-wider"
                      style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                    >
                      Room Preference
                    </label>
                    <div className="relative">
                      <select
                        name="roomType"
                        value={formState.roomType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none pr-10"
                        style={{
                          border: "1px solid #E2E8F0",
                          fontFamily: "'Nunito', sans-serif",
                          color: formState.roomType ? "#0B2C4A" : "#9CA3AF",
                          backgroundColor: "#F8FAFC",
                          cursor: "pointer",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      >
                        <option value="">Select room type (optional)</option>
                        <option>Standard Room – ₹999/night</option>
                        <option>Deluxe Room – ₹1,499/night</option>
                        <option>Family Room – ₹2,199/night</option>
                        <option>Premium Suite – ₹2,999/night</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs uppercase tracking-wider"
                      style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                    >
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about any special requirements, celebrations, accessibility needs..."
                      className="px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{
                        border: "1px solid #E2E8F0",
                        fontFamily: "'Nunito', sans-serif",
                        color: "#0B2C4A",
                        backgroundColor: "#F8FAFC",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                      onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-4 rounded-xl text-white transition-all hover:opacity-90 active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #F97316, #FB923C)",
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 800,
                      boxShadow: "0 4px 16px rgba(249,115,22,0.4)",
                    }}
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Right: Hours + Map */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Hours */}
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(11,44,74,0.06)",
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5" style={{ color: "#F97316" }} />
                  <h4
                    className="text-base"
                    style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 700 }}
                  >
                    Facility Timings
                  </h4>
                </div>
                <div className="flex flex-col gap-2">
                  {timings.map((t) => (
                    <div
                      key={t.day}
                      className="flex items-center justify-between py-2.5 border-b last:border-b-0"
                      style={{ borderColor: "#F1F5F9" }}
                    >
                      <span
                        className="text-sm"
                        style={{ color: "#374151", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                      >
                        {t.day}
                      </span>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: t.time.includes("24") ? "#DCFCE7" : "#EFF6FF",
                          color: t.time.includes("24") ? "#15803D" : "#0B2C4A",
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        {t.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div
                className="rounded-2xl overflow-hidden flex-1 relative"
                style={{
                  minHeight: "200px",
                  backgroundColor: "#071E33",
                  border: "1px solid #E2E8F0",
                }}
              >
                {/* Map grid pattern */}
                <div className="absolute inset-0 opacity-15">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="cg" width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#F97316" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cg)" />
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#F97316" strokeWidth="1.5" opacity="0.4" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#F97316" strokeWidth="1.5" opacity="0.4" />
                    <circle cx="50%" cy="50%" r="30" fill="none" stroke="#F97316" strokeWidth="1" opacity="0.2" />
                    <circle cx="50%" cy="50%" r="16" fill="rgba(249,115,22,0.12)" />
                    <circle cx="50%" cy="50%" r="7" fill="#F97316" />
                  </svg>
                </div>
                <div className="relative flex flex-col items-center justify-center h-full py-10 gap-3">
                  <MapPin className="w-6 h-6" style={{ color: "#F97316" }} />
                  <p
                    className="text-sm text-white text-center px-4"
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                  >
                    Vishal Megamart, Dinbazar Rd, Kamar Para,<br />Jalpaiguri, West Bengal — 735101
                  </p>
                  <a
                    href={HOTEL_GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 text-xs px-5 py-2 rounded-full transition-all hover:opacity-80"
                    style={{
                      background: "linear-gradient(135deg, #F97316, #FB923C)",
                      color: "white",
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Open location in Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}