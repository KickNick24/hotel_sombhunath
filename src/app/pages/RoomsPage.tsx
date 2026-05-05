import { useState } from "react";
import { Users, MessageCircle, CheckCircle, Phone, Wifi, Wind, Tv, Coffee, Bath, Car } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, getWhatsAppRoomBookingUrl } from "../../utils/whatsappBooking";
import { publicUrl } from "../../utils/publicUrl";

const rooms = [
  {
    id: 1,
    category: "standard",
    image: publicUrl("rooms/standard_room.jpg"),
    name: "Standard Room",
    price: "₹999",
    originalPrice: "₹1,299",
    guests: 2,
    rating: 4.6,
    tag: "Budget Stay",
    tagBg: "#22C55E",
    description: "A cozy, well-equipped room ideal for solo travelers and budget-conscious guests. Designed with simplicity and comfort in mind.",
    amenities: ["Double Bed", "Free WiFi", "AC", "LED TV", "Hot Water", "Daily Housekeeping"],
    inclusions: ["Complimentary Breakfast", "Free Parking", "24/7 Front Desk"],
  },
  {
    id: 2,
    category: "deluxe",
    image: publicUrl("rooms/deluxe_room.jpg"),
    name: "Deluxe Room",
    price: "₹1,499",
    originalPrice: "₹1,999",
    guests: 2,
    rating: 4.8,
    tag: "Best Seller",
    tagBg: "#F97316",
    description: "Our most popular room offering a perfect blend of comfort and elegance. Features premium furnishings and a private balcony with nature views.",
    amenities: ["King Bed", "Free WiFi", "AC", "LED TV", "Balcony", "Room Service"],
    inclusions: ["Complimentary Breakfast", "Free Parking", "Evening Snacks", "24/7 Front Desk"],
  },
  {
    id: 3,
    category: "suite",
    image: publicUrl("rooms/premium_suite.jpg"),
    name: "Premium Suite",
    price: "₹2,999",
    originalPrice: "₹3,999",
    guests: 2,
    rating: 4.9,
    tag: "Luxury",
    tagBg: "#FACC15",
    tagText: "#0B2C4A",
    description:
      "An expansive suite with a separate living area, refined finishes, and panoramic views. Ideal for couples celebrating a special occasion or an indulgent getaway.",
    amenities: ["King Bed", "Living Area", "Balcony", "LED TV", "Hot Water", "Room Service"],
    inclusions: ["Full Breakfast", "Welcome Drink", "Evening Snacks", "Late Checkout", "Free Parking"],
  },
  {
    id: 4,
    category: "family",
    image: publicUrl("rooms/family_room.jpg"),
    name: "Family Room",
    price: "₹2,199",
    originalPrice: "₹2,799",
    guests: 4,
    rating: 4.7,
    tag: "Family Pick",
    tagBg: "#123B63",
    description:
      "Spacious and thoughtfully arranged for families, with two queen beds and plenty of room to unwind. A practical, comfortable base for everyone.",
    amenities: ["2 Queen Beds", "Free WiFi", "AC", "LED TV", "Daily Housekeeping", "Spacious Layout"],
    inclusions: ["Complimentary Breakfast for All", "Free Parking", "Kids Activity Kit", "24/7 Front Desk"],
  },
];

const categories = ["all", "standard", "deluxe", "suite", "family"];

function RoomCard({ room }: { room: (typeof rooms)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: "white",
        boxShadow: "0 4px 24px rgba(11,44,74,0.08)",
        border: "1px solid #E2E8F0",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "240px" }}>
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(11,44,74,0.35) 100%)" }}
        />
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
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
        >
          <span className="text-[#FACC15] text-xs">★</span>
          <span className="text-xs" style={{ color: "#0B2C4A", fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>
            {room.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3
            className="text-xl"
            style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 700 }}
          >
            {room.name}
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1 text-xs" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
              <Users className="w-3.5 h-3.5" style={{ color: "#F97316" }} />
              {room.guests} Guests
            </span>
          </div>
          <p className="mt-3 text-sm" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.7 }}>
            {room.description}
          </p>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5">
          {room.amenities.map((a) => (
            <span
              key={a}
              className="px-2.5 py-1 rounded-lg text-xs"
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

        {/* Inclusions toggle */}
        {expanded && (
          <div>
            <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
              What's Included
            </p>
            <ul className="flex flex-col gap-1.5">
              {room.inclusions.map((inc) => (
                <li key={inc} className="flex items-center gap-2 text-sm" style={{ color: "#1F2937", fontFamily: "'Nunito', sans-serif" }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#22C55E" }} />
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price + CTAs */}
        <div className="mt-auto pt-4 border-t" style={{ borderColor: "#F1F5F9" }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-2xl"
                  style={{ fontFamily: "'Merriweather', serif", color: "#F97316", fontWeight: 900 }}
                >
                  {room.price}
                </span>
                <span className="text-sm line-through" style={{ color: "#CBD5E1", fontFamily: "'Nunito', sans-serif" }}>
                  {room.originalPrice}
                </span>
              </div>
              <p className="text-xs" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
                per night + taxes
              </p>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs px-3 py-1.5 rounded-lg transition-colors"
              style={{
                backgroundColor: expanded ? "#EFF6FF" : "#F8FAFC",
                color: "#0B2C4A",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                border: "1px solid #E2E8F0",
              }}
            >
              {expanded ? "Hide Details" : "Show Details"}
            </button>
          </div>
          <div className="flex gap-2">
            <a
              href={CONTACT_PHONE_TEL}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #0B2C4A, #123B63)",
                color: "white",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
              }}
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </a>
            <a
              href={getWhatsAppRoomBookingUrl({
                name: room.name,
                price: room.price,
                originalPrice: room.originalPrice,
                guests: room.guests,
              })}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm no-underline transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                color: "white",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                boxShadow: "0 3px 10px rgba(249,115,22,0.3)",
              }}
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? rooms
    : rooms.filter((r) => r.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Rooms & Accommodations"
        subtitle="From budget-friendly standard rooms to premium suites — every room is a sanctuary crafted for your comfort."
        breadcrumb="Rooms"
      />

      <section className="w-full py-16" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 rounded-full text-sm capitalize transition-all duration-200"
                  style={{
                    backgroundColor: active ? "#0B2C4A" : "white",
                    color: active ? "white" : "#1F2937",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    border: active ? "2px solid #0B2C4A" : "2px solid #E2E8F0",
                    boxShadow: active ? "0 4px 12px rgba(11,44,74,0.2)" : "none",
                  }}
                >
                  {cat === "all" ? "All Rooms" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              );
            })}
          </div>

          {/* Room Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {filtered.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Note */}
          <div
            className="mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{
              backgroundColor: "#FFF7ED",
              border: "1px solid rgba(249,115,22,0.2)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#F97316" }}
            >
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm" style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
                Need help choosing a room?
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}>
                Our team is available 24/7 to help you pick the perfect room for your stay.
              </p>
            </div>
            <a
              href={CONTACT_PHONE_TEL}
              className="px-5 py-2.5 rounded-xl text-sm text-white flex-shrink-0 transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
              }}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
