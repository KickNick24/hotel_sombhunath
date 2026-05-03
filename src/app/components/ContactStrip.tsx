import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, getWhatsAppGenericBookingUrl } from "../../utils/whatsappBooking";

export function ContactStrip() {
  return (
    <section
      className="w-full py-14"
      style={{
        background: "linear-gradient(135deg, #0B2C4A 0%, #123B63 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Title */}
          <div>
            <p
              className="text-sm uppercase tracking-widest mb-1"
              style={{ color: "#FB923C", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Get In Touch
            </p>
            <h3
              className="text-2xl"
              style={{ fontFamily: "'Merriweather', serif", color: "white", fontWeight: 900 }}
            >
              Ready to Book Your Stay?
            </h3>
            <p
              className="text-sm mt-1"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito', sans-serif" }}
            >
              We're available 24/7 to assist you
            </p>
          </div>

          {/* Contact Items */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 flex-wrap">
            {/* Call */}
            <a
              href={CONTACT_PHONE_TEL}
              className="flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #F97316, #FB923C)" }}
              >
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Nunito', sans-serif" }}>
                  Call Us Directly
                </p>
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                >
                  {CONTACT_PHONE_DISPLAY}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppGenericBookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "#25D366",
                boxShadow: "0 4px 16px rgba(37,211,102,0.25)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Nunito', sans-serif" }}>
                  WhatsApp
                </p>
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                >
                  Chat Now
                </p>
              </div>
            </a>

            {/* Check-in/out */}
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(250,204,21,0.15)", border: "1px solid rgba(250,204,21,0.3)" }}
              >
                <Clock className="w-4 h-4" style={{ color: "#FACC15" }} />
              </div>
              <div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Nunito', sans-serif" }}>
                  Check-in / Check-out
                </p>
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                >
                  12:00 PM / 11:00 AM
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)" }}
              >
                <MapPin className="w-4 h-4" style={{ color: "#FB923C" }} />
              </div>
              <div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Nunito', sans-serif" }}>
                  Location
                </p>
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                >
                  Jalpaiguri, West Bengal — 735101
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
