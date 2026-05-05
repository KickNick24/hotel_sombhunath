import { useState } from "react";
import { Link } from "react-router";
import { Users } from "lucide-react";
import { getWhatsAppRoomBookingUrl } from "../../utils/whatsappBooking";
import { publicUrl } from "../../utils/publicUrl";

const rooms = [
  {
    id: 1,
    image: publicUrl("rooms/deluxe_room.jpg"),
    name: "Deluxe Room",
    price: "₹1,499",
    originalPrice: "₹1,999",
    guests: 2,
    rating: 4.8,
    tag: "Best Seller",
    tagBg: "#F97316",
    amenities: ["King Bed", "Free WiFi", "AC", "TV"],
  },
  {
    id: 2,
    image: publicUrl("rooms/premium_suite.jpg"),
    name: "Premium Suite",
    price: "₹2,999",
    originalPrice: "₹3,999",
    guests: 2,
    rating: 4.9,
    tag: "Luxury",
    tagBg: "#FACC15",
    tagText: "#0B2C4A",
    amenities: ["King Bed", "Living Area", "Balcony", "LED TV"],
  },
  {
    id: 3,
    image: publicUrl("rooms/standard_room.jpg"),
    name: "Standard Room",
    price: "₹999",
    originalPrice: "₹1,299",
    guests: 2,
    rating: 4.6,
    tag: "Budget Stay",
    tagBg: "#22C55E",
    amenities: ["Double Bed", "Free WiFi", "AC", "TV"],
  },
  {
    id: 4,
    image: publicUrl("rooms/family_room.jpg"),
    name: "Family Room",
    price: "₹2,199",
    originalPrice: "₹2,799",
    guests: 4,
    rating: 4.7,
    tag: "Family Pick",
    tagBg: "#123B63",
    amenities: ["2 Queen Beds", "Free WiFi", "AC", "LED TV", "Daily Housekeeping"],
  },
];

function RoomCard({ room }: { room: (typeof rooms)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: "white",
        boxShadow: hovered
          ? "0 20px 52px rgba(11,44,74,0.18)"
          : "0 4px 20px rgba(11,44,74,0.07)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        border: "1px solid #E2E8F0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />
        {/* Dark overlay on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(11,44,74,0.4) 100%)",
            opacity: hovered ? 1 : 0.5,
          }}
        />
        {/* Tag */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
          style={{
            backgroundColor: room.tagBg,
            color: (room as any).tagText || "white",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          {room.tag}
        </div>
        {/* Rating */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(6px)" }}
        >
          <span className="text-[#FACC15] text-xs">★</span>
          <span
            className="text-xs"
            style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            {room.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-4">
        <div>
          <h3
            className="text-lg"
            style={{
              fontFamily: "'Merriweather', serif",
              color: "#0B2C4A",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {room.name}
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}
            >
              <Users className="w-3.5 h-3.5" style={{ color: "#F97316" }} />
              {room.guests} Guests
            </span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5">
          {room.amenities.map((a) => (
            <span
              key={a}
              className="px-2 py-0.5 rounded-md text-xs"
              style={{
                backgroundColor: "#EFF6FF",
                color: "#0B2C4A",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                border: "1px solid #BFDBFE",
              }}
            >
              {a}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div
          className="flex items-center justify-between mt-auto pt-4 border-t"
          style={{ borderColor: "#F1F5F9" }}
        >
          <div>
            <div className="flex items-baseline gap-2">
              <span
                className="text-2xl"
                style={{
                  fontFamily: "'Merriweather', serif",
                  color: "#F97316",
                  fontWeight: 900,
                }}
              >
                {room.price}
              </span>
              <span
                className="text-sm line-through"
                style={{ color: "#CBD5E1", fontFamily: "'Nunito', sans-serif" }}
              >
                {room.originalPrice}
              </span>
            </div>
            <p className="text-xs" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
              per night + taxes
            </p>
          </div>
          <a
            href={getWhatsAppRoomBookingUrl({
              name: room.name,
              price: room.price,
              originalPrice: room.originalPrice,
              guests: room.guests,
            })}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #F97316, #FB923C)",
              color: "white",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(249,115,22,0.35)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <rect x="1.5" y="3" width="13" height="11.5" rx="1.8" stroke="white" strokeWidth="1.3"/>
              <path d="M1.5 7h13" stroke="white" strokeWidth="1.3"/>
              <path d="M5 1.5v3M11 1.5v3" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
              <rect x="4.5" y="9.5" width="2" height="2" rx="0.5" fill="white"/>
              <rect x="7.5" y="9.5" width="2" height="2" rx="0.5" fill="white"/>
            </svg>
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export function RoomsSection() {
  return (
    <section
      id="rooms"
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-widest mb-3"
            style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            Our Accommodations
          </p>
          <h2
            className="text-3xl lg:text-4xl"
            style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900 }}
          >
            Choose Your Comfortable Stay
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.7 }}
          >
            From budget-friendly standard rooms to luxurious suites — find the perfect
            room that fits your comfort and pocket.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/rooms"
            className="px-8 py-3.5 rounded-xl text-sm border-2 transition-all duration-200 hover:bg-[#0B2C4A] hover:text-white hover:border-[#0B2C4A] text-[#0B2C4A]"
            style={{
              borderColor: "#0B2C4A",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            View All Rooms →
          </Link>
        </div>
      </div>
    </section>
  );
}