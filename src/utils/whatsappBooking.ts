/** WhatsApp Business number (digits only, no +). Country 91 + 10-digit mobile. */
export const WHATSAPP_BOOKING_NUMBER = "919474198557";

/** Voice line (same number as WhatsApp). */
export const CONTACT_PHONE_TEL = "tel:+919474198557";

/** Formatted for on-page labels */
export const CONTACT_PHONE_DISPLAY = "+91 94741 98557";

export type RoomBookingDetails = {
  name: string;
  /** e.g. "₹1,499" */
  price?: string;
  originalPrice?: string;
  guests?: number;
  size?: string;
  /** Extra line(s), e.g. tariff breakdown */
  tariffNote?: string;
};

function buildRoomBookingMessage(details: RoomBookingDetails): string {
  const lines = [
    "Hello Hotel Sombhunath!",
    "",
    "I would like to book the following room:",
    `• Room: ${details.name}`,
  ];
  if (details.price) {
    lines.push(`• Listed rate: ${details.price} per night (before taxes)`);
  }
  if (details.originalPrice) {
    lines.push(`  (Cross rate: ${details.originalPrice})`);
  }
  if (details.guests != null) {
    lines.push(`• Guests: up to ${details.guests}`);
  }
  if (details.size) {
    lines.push(`• Room size: ${details.size}`);
  }
  if (details.tariffNote) {
    lines.push(`• Tariff: ${details.tariffNote}`);
  }
  lines.push("", "Please confirm availability and help me complete the booking.", "", "Thank you!");
  return lines.join("\n");
}

export function getWhatsAppRoomBookingUrl(details: RoomBookingDetails): string {
  return `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(buildRoomBookingMessage(details))}`;
}

export function getWhatsAppGenericBookingUrl(body?: string): string {
  const text =
    body?.trim() ||
    [
      "Hello Hotel Sombhunath!",
      "",
      "I would like to enquire about room availability and booking.",
      "",
      "Please share the next steps.",
      "",
      "Thank you!",
    ].join("\n");
  return `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(text)}`;
}
