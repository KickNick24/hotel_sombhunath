import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";
import logoImg from "../../imports/logo-hotel-sombhunath.png";
import { HOTEL_GOOGLE_MAPS_URL } from "../../constants/location";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, getWhatsAppGenericBookingUrl } from "../../utils/whatsappBooking";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Rooms & Tariff", to: "/rooms" },
  { label: "Facilities", to: "/facilities" },
  { label: "Tariff", to: "/tariff" },
  { label: "Contact", to: "/contact" },
];
const facilities = ["Free WiFi", "Room Service", "Parking", "AC Rooms", "Restaurant", "Conference Hall"];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cancellation Policy", to: "/cancellation-policy" },
] as const;

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B2C4A" }}>
      {/* Map placeholder */}
      <div
        className="w-full overflow-hidden relative"
        style={{ height: "200px", backgroundColor: "#071E33" }}
      >
        {/* Grid map pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F97316" strokeWidth="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapgrid)" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#F97316" strokeWidth="2" opacity="0.5" />
            <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#F97316" strokeWidth="1" opacity="0.3" />
            <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#F97316" strokeWidth="1" opacity="0.3" />
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#F97316" strokeWidth="1" opacity="0.3" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#F97316" strokeWidth="1.5" opacity="0.4" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#F97316" strokeWidth="1" opacity="0.3" />
            {/* Marker pulse rings */}
            <circle cx="50%" cy="50%" r="24" fill="none" stroke="#F97316" strokeWidth="1" opacity="0.3" />
            <circle cx="50%" cy="50%" r="14" fill="rgba(249,115,22,0.15)" />
            <circle cx="50%" cy="50%" r="6" fill="#F97316" />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl"
            style={{
              backgroundColor: "rgba(11,44,74,0.85)",
              border: "1px solid rgba(249,115,22,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <MapPin className="w-5 h-5" style={{ color: "#F97316" }} />
            <p
              className="text-sm text-center"
              style={{ color: "white", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
            >
              Vishal Megamart, Dinbazar Rd, Kamar Para,<br />Jalpaiguri, West Bengal — 735101
            </p>
            <a
              href={HOTEL_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-4 py-1.5 rounded-full transition-all duration-200 hover:opacity-80"
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

      {/* Accent top border */}
      <div className="w-full h-0.5" style={{ background: "linear-gradient(90deg, transparent, #F97316, #FACC15, #F97316, transparent)" }} />

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-center sm:gap-4">
              <img
                src={logoImg}
                alt="Hotel Sombhunath"
                className="max-h-10 w-auto max-w-full object-contain object-left sm:max-h-12 sm:max-w-[min(100%,480px)] shrink-0"
                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.35))" }}
              />
              <div className="min-w-0">
                <span
                  className="text-lg sm:text-xl block leading-tight"
                  style={{ fontFamily: "'Merriweather', serif", color: "white", fontWeight: 700 }}
                >
                  Hotel Sombhunath
                </span>
                <span
                  className="block text-[10px] tracking-widest uppercase mt-0.5"
                  style={{ color: "#F97316" }}
                >
                  Jalpaiguri, West Bengal
                </span>
              </div>
            </div>
            <p
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito', sans-serif", lineHeight: 1.8 }}
            >
              Experience authentic Indian hospitality amidst lush nature. Your perfect
              escape from the ordinary, at prices that feel extraordinary.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#F97316]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: "rgba(255,255,255,0.6)" }} />
                </a>
              ))}
            </div>

            {/* Rating */}
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl w-fit"
              style={{
                backgroundColor: "rgba(250,204,21,0.08)",
                border: "1px solid rgba(250,204,21,0.2)",
              }}
            >
              <span style={{ color: "#FACC15", fontSize: "14px" }}>★★★★★</span>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Nunito', sans-serif" }}
              >
                4.8/5 · Google Rated
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm uppercase tracking-wider mb-6"
              style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200 hover:text-[#FB923C] flex items-center gap-2 no-underline"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    <span style={{ color: "#F97316" }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4
              className="text-sm uppercase tracking-wider mb-6"
              style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Our Facilities
            </h4>
            <ul className="flex flex-col gap-3">
              {facilities.map((item) => (
                <li key={item}>
                  <span
                    className="text-sm flex items-center gap-2"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    <span style={{ color: "#22C55E" }}>✓</span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm uppercase tracking-wider mb-6"
              style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#F97316" }} />
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito', sans-serif", lineHeight: 1.6 }}
                >
                  Vishal Megamart, Dinbazar Rd,<br />
                  Kamar Para, Jalpaiguri — 735101
                </p>
              </div>
              <a
                href={CONTACT_PHONE_TEL}
                className="flex items-center gap-3 group"
              >
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#F97316" }} />
                <span
                  className="text-sm group-hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito', sans-serif" }}
                >
                  {CONTACT_PHONE_DISPLAY}
                </span>
              </a>
              <a
                href="mailto:contact@hotelsombhunathbhawan.in"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#F97316" }} />
                <span
                  className="text-sm group-hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito', sans-serif" }}
                >
                  contact@hotelsombhunathbhawan.in
                </span>
              </a>

              {/* Book CTA */}
              <a
                href={getWhatsAppGenericBookingUrl(
                  "I would like to book a room at Hotel Sombhunath. Please share availability and rates.",
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center rounded-xl py-3 text-sm text-white no-underline transition-all duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
                }}
              >
                Book Your Room Now →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Nunito', sans-serif" }}
          >
            © 2026 Hotel Sombhunath. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            {legalLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="text-xs no-underline transition-colors hover:text-[#F97316]"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Nunito', sans-serif" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}