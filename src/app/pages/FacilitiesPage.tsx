import { useCallback, useEffect, useState } from "react";
import {
  Wifi,
  UtensilsCrossed,
  Car,
  Wind,
  HeadphonesIcon,
  ShieldCheck,
  Tv,
  Users,
  X,
  ZoomIn,
} from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { publicUrl } from "../../utils/publicUrl";

const IMG_TRIPTI = publicUrl("facilities/tripti_restaurant.jpeg");
const IMG_MENU_1 = publicUrl("facilities/menu-1.jpeg");
const IMG_CONFERENCE =
  "https://images.unsplash.com/photo-1617113139611-b7b97c561ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjBoYWxsJTIwbWVldGluZyUyMHJvb218ZW58MXx8fHwxNzc3NzM2NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080";

type Highlight = {
  image: string;
  icon: typeof UtensilsCrossed | typeof Users;
  title: string;
  description: string;
  features: string[];
  /** Opens full-screen viewer so menu text is readable */
  menuPreview?: boolean;
};

const highlights: Highlight[] = [
  {
    image: IMG_TRIPTI,
    icon: UtensilsCrossed,
    title: "Tripti — Our In-House Restaurant",
    description:
      "Enjoy homestyle Indian favourites and continental classics in a relaxed setting. We focus on fresh preparation, regional flavours, and generous hospitality — whether you dine in or order to your room.",
    features: [
      "Breakfast, lunch & dinner service",
      "Vegetarian & vegan-friendly options",
      "Chef’s daily specials & thali-style meals",
      "Room service during restaurant hours",
    ],
  },
  {
    image: IMG_MENU_1,
    icon: UtensilsCrossed,
    title: "From the Menu",
    description:
      "Browse curated picks from our kitchen — comforting curries, grills, breads, and seasonal sides. Ask our team for pairing suggestions or lighter portions for children.",
    features: ["À la carte ordering", "Sharing platters for groups", "Fresh juices & beverages", "Desserts & Indian sweets"],
    menuPreview: true,
  },
  {
    image: IMG_CONFERENCE,
    icon: Users,
    title: "Conference & Events",
    description:
      "Host corporate meetings, seminars, or private events in our fully-equipped conference hall with AV infrastructure and dedicated catering support.",
    features: ["Capacity up to 80 pax", "High-speed WiFi & projector", "Dedicated event coordinator", "Custom catering menus"],
  },
];

const smallFacilities = [
  { icon: Wifi, label: "High-Speed WiFi", desc: "Complimentary 100 Mbps in all rooms & common areas" },
  { icon: Wind, label: "AC in All Rooms", desc: "Individually controlled climate systems" },
  { icon: Car, label: "Free Parking", desc: "Covered & open parking for 50+ vehicles" },
  { icon: HeadphonesIcon, label: "24/7 Front Desk", desc: "Round-the-clock concierge support" },
  { icon: ShieldCheck, label: "CCTV Surveillance", desc: "Comprehensive security across the property" },
  { icon: Tv, label: "In-Room Entertainment", desc: "Smart TVs with OTT access in all rooms" },
];

function MenuLightbox({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(7,30,51,0.92)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-label={`Full size: ${title}`}
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 left-4 flex items-start justify-between gap-3 pointer-events-none">
        <p
          className="text-sm text-white/90 max-w-[70%] pointer-events-none"
          style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
        >
          {title}
        </p>
        <button
          type="button"
          className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close menu viewer"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
      <div
        className="relative w-full max-w-5xl max-h-[85vh] mt-10 rounded-xl overflow-auto shadow-2xl"
        style={{ backgroundColor: "#0f172a" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-auto min-h-0 object-contain block mx-auto"
          style={{ maxHeight: "min(85vh, 1200px)" }}
        />
      </div>
      <p className="mt-3 text-xs text-white/50" style={{ fontFamily: "'Nunito', sans-serif" }}>
        Click outside or press Esc to close
      </p>
    </div>
  );
}

export function FacilitiesPage() {
  const [menuViewer, setMenuViewer] = useState<{ src: string; title: string } | null>(null);

  const openMenu = useCallback((src: string, title: string) => {
    setMenuViewer({ src, title });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuViewer(null);
  }, []);

  return (
    <>
      <PageHeader
        title="Hotel Facilities"
        subtitle="Dining at Tripti, essential comforts, and a dedicated venue for meetings and celebrations — all on one property."
        breadcrumb="Facilities"
      />

      {/* Highlight Facilities */}
      <section className="w-full py-16" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-widest mb-2"
              style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Dining & Gatherings
            </p>
            <h2
              className="text-3xl"
              style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900 }}
            >
              Restaurant, Menus & Events
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              const isMenu = Boolean(item.menuPreview);
              return (
                <div
                  key={item.title}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="flex-1 w-full">
                    {isMenu ? (
                      <button
                        type="button"
                        onClick={() => openMenu(item.image, item.title)}
                        className="relative w-full rounded-2xl overflow-hidden text-left ring-2 ring-transparent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                        style={{ height: "320px", cursor: "zoom-in" }}
                        aria-label={`View full menu: ${item.title}`}
                      >
                        <img
                          src={item.image}
                          alt={`${item.title} — open full size to read menu`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <span
                          className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg shadow-md pointer-events-none"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: 700,
                            color: "#0B2C4A",
                            backgroundColor: "rgba(255,255,255,0.95)",
                            border: "1px solid #E2E8F0",
                          }}
                        >
                          <ZoomIn className="w-3.5 h-3.5 shrink-0" aria-hidden />
                          <span className="sm:hidden">Tap to enlarge</span>
                          <span className="hidden sm:inline">Click to enlarge</span>
                        </span>
                      </button>
                    ) : (
                      <div className="rounded-2xl overflow-hidden" style={{ height: "320px" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col gap-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #F97316, #FB923C)",
                        boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 700 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.8 }}
                    >
                      {item.description}
                    </p>
                    {isMenu && (
                      <p className="text-xs -mt-2" style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                        Click the menu image to enlarge and read all items.
                      </p>
                    )}
                    <ul className="grid grid-cols-2 gap-2">
                      {item.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "#1F2937", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                            style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22C55E" }}
                          >
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Small Facilities Grid */}
      <section className="w-full py-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-widest mb-2"
              style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              All Amenities
            </p>
            <h2
              className="text-3xl"
              style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900 }}
            >
              Everything You Need
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[900px] mx-auto">
            {smallFacilities.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  cursor: "default",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "1.5px solid rgba(249,115,22,0.2)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#F97316" }} />
                </div>
                <p
                  className="text-sm"
                  style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                >
                  {label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.6 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {menuViewer && <MenuLightbox src={menuViewer.src} title={menuViewer.title} onClose={closeMenu} />}
    </>
  );
}
