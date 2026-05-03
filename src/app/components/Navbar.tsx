import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { CONTACT_PHONE_TEL } from "../../utils/whatsappBooking";
import logoImg from "../../imports/logo-hotel-sombhunath.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Facilities", to: "/facilities" },
  { label: "Tariff", to: "/tariff" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav
      style={{ fontFamily: "'Nunito', sans-serif", backgroundColor: "#FFFFFF" }}
      className="w-full sticky top-0 z-50"
    >
      <div
        className="w-full"
        style={{ borderBottom: "1px solid #E5EAF0", boxShadow: "0 2px 12px rgba(11,44,74,0.08)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between min-h-[72px] h-[80px] sm:h-[84px]">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 no-underline shrink-0 min-w-0"
              aria-label="Hotel Sombhunath — Home"
            >
              <img
                src={logoImg}
                alt=""
                className="max-h-10 w-auto shrink-0 max-w-[min(88vw,360px)] object-contain object-left sm:max-h-12 sm:max-w-[min(55vw,440px)] lg:max-h-14 lg:max-w-[min(40vw,560px)]"
                style={{
                  imageRendering: "auto",
                  filter: "drop-shadow(0 1px 2px rgba(11,44,74,0.12))",
                }}
              />
              <span
                className="min-w-0 text-left text-sm font-extrabold leading-tight tracking-tight sm:text-lg lg:text-xl"
                style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A" }}
              >
                Hotel Sombhunath
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, to }) => {
                const active = isActive(to);
                return (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm transition-colors duration-200 hover:text-[#F97316] relative group no-underline"
                      style={{
                        color: active ? "#F97316" : "#1F2937",
                        fontWeight: 600,
                      }}
                    >
                      {label}
                      <span
                        className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-200 group-hover:w-full"
                        style={{
                          backgroundColor: "#F97316",
                          width: active ? "100%" : "0%",
                        }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={CONTACT_PHONE_TEL}
                className="flex items-center gap-2 border-2 border-[#0B2C4A] px-4 py-2.5 text-sm font-bold text-[#0B2C4A] transition-all duration-200 hover:bg-[#0B2C4A] hover:text-white rounded-xl"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                Call Now
              </a>
              <Link
                to="/"
                state={{ scrollToRooms: true }}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="rounded-xl px-5 py-2.5 text-sm text-white no-underline transition-all duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(249,115,22,0.35)",
                }}
              >
                Make a Booking
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg"
              style={{ color: "#0B2C4A" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ borderColor: "#E5EAF0", backgroundColor: "#FFFFFF" }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, to }) => {
              const active = isActive(to);
              return (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm py-3 px-3 rounded-lg border-b no-underline transition-colors duration-150"
                  style={{
                    color: active ? "#F97316" : "#1F2937",
                    fontWeight: active ? 700 : 600,
                    borderColor: "#F1F5F9",
                    backgroundColor: active ? "rgba(249,115,22,0.06)" : "transparent",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 pt-3 mt-1">
              <a
                href={CONTACT_PHONE_TEL}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#0B2C4A] px-4 py-2.5 text-sm font-bold text-[#0B2C4A] transition-colors duration-200 hover:bg-[#0B2C4A] hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                Call Now
              </a>
              <Link
                to="/"
                state={{ scrollToRooms: true }}
                onClick={(e) => {
                  setMobileOpen(false);
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="flex items-center justify-center rounded-xl px-5 py-2.5 text-sm text-white no-underline"
                style={{
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  fontWeight: 700,
                }}
              >
                Make a Booking
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}