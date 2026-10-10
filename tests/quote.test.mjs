import { test } from "node:test";
import assert from "node:assert/strict";
import { buildQuoteUrl } from "../lib/quote.ts";

const base = "https://wa.me/573116081380?text=Mensaje%20anterior";
const quote = {
  name: "  María Pérez  ", eventType: "Evento corporativo", date: "2026-12-15",
  city: "  Medellín  ", attendees: "200", details: "  Sonido & pantallas\nIluminación  ",
};

test("preserves the recipient, accents and multiline details", () => {
  const url = new URL(buildQuoteUrl(base, quote));
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/573116081380");
  assert.equal(url.searchParams.getAll("text").length, 1);
  const message = url.searchParams.get("text");
  assert.ok(message.includes("Nombre: María Pérez"));
  assert.ok(message.includes("Ciudad / lugar: Medellín"));
  assert.ok(message.includes("Fecha: 15/12/2026"));
  assert.ok(message.includes("Detalles: Sonido & pantallas\nIluminación"));
  assert.ok(!message.includes("Mensaje anterior"));
});

test("handles optional fields without inventing information", () => {
  const url = new URL(buildQuoteUrl(base, { ...quote, date: "", attendees: "", details: "  " }));
  const message = url.searchParams.get("text");
  assert.ok(message.includes("Fecha: Por definir"));
  assert.ok(message.includes("Asistentes aproximados: Por definir"));
  assert.ok(!message.includes("Detalles:"));
});
