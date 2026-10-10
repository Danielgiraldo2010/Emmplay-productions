export interface EventQuote {
  name: string;
  eventType: string;
  date: string;
  city: string;
  attendees: string;
  details: string;
}

export function buildQuoteUrl(baseUrl: string, quote: EventQuote) {
  const date = quote.date ? quote.date.split("-").reverse().join("/") : "Por definir";
  const message = [
    "Hola Emmplay, quiero cotizar un evento.",
    "",
    `Nombre: ${quote.name.trim()}`,
    `Tipo de evento: ${quote.eventType}`,
    `Fecha: ${date}`,
    `Ciudad / lugar: ${quote.city.trim()}`,
    `Asistentes aproximados: ${quote.attendees || "Por definir"}`,
    ...(quote.details.trim() ? ["", `Detalles: ${quote.details.trim()}`] : []),
  ].join("\n");
  const url = new URL(baseUrl);
  url.searchParams.set("text", message);
  return url.toString();
}
