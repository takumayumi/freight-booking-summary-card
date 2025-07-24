// Format as Australian Dollar
export function formatAUD(value: string): string {
  const parsed = parseFloat(value.replace(/[^0-9.]/g, ""));

  if (isNaN(parsed)) return value;

  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
  }).format(parsed);
}

// Clean user input allows only digits and one dot
export function sanitizeNumericInput(value: string) {
  let cleaned = value.replace(/[^0-9.]/g, "");

  const parts = cleaned.split(".");
  if (parts.length > 2) {
    cleaned = parts[0] + "." + parts[1];
  }

  return cleaned;
}
