"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { formatAUD, sanitizeNumericInput } from "@/utils/format/currency";

const FIELDS = [
  { key: "origin", label: "Origin" },
  { key: "destination", label: "Destination" },
  { key: "vehicleType", label: "Vehicle Type" },
  { key: "estimatedPrice", label: "Estimated Price" },
] as const;

export default function SummaryCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    origin: "Manila",
    destination: "Cebu",
    vehicleType: "Closed Van",
    estimatedPrice: "15000",
  });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (field: keyof typeof data, value: string) => {
    if (field === "estimatedPrice") {
      setData((prev) => ({ ...prev, [field]: sanitizeNumericInput(value) }));
    } else {
      setData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleConfirm = () => {
    setIsEditing(false);
    toast.success("Booking saved!");
  };

  return (
    <section
      aria-labelledby="freight-summary-title"
      className="border-border bg-surface mx-auto w-full max-w-xl space-y-6 rounded-xl border-2 p-8 shadow-md"
    >
      <h2 id="freight-summary-title" className="text-center">
        Freight Summary
      </h2>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleConfirm();
        }}
      >
        {FIELDS.map(({ key, label }) => (
          <div key={key} className="flex flex-col space-y-2">
            <label htmlFor={key} className="font-medium capitalize">
              {label}
            </label>
            {isEditing ? (
              <input
                type="text"
                id={key}
                name={key}
                inputMode={key === "estimatedPrice" ? "decimal" : "text"}
                value={data[key]}
                onChange={(e) =>
                  handleInputChange(key as keyof typeof data, e.target.value)
                }
                className="border-border focus:ring-primary rounded border-2 px-4 py-2 focus:ring-2 focus:outline-none"
                required
              />
            ) : (
              <p
                id={key}
                className="border-border bg-accent/20 rounded border-2 px-4 py-2"
              >
                {key === "estimatedPrice"
                  ? formatAUD(data.estimatedPrice)
                  : data[key]}
              </p>
            )}
          </div>
        ))}

        <div className="flex flex-col justify-end gap-4 pt-4 sm:flex-row">
          <button
            type="button"
            onClick={handleEditToggle}
            className="border-border text-text hover:text-foreground/80 hover:borer-foreground/80 border-2"
            aria-pressed={isEditing}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          <button
            type="submit"
            className="bg-primary text-surface hover:text-foreground/80 hover:bg-primary/60"
          >
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
}
