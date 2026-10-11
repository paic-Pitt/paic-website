"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// Starts with the content baked in at build time, then asks Sanity for the latest when the
// page loads. That way something published in the Studio shows up without redeploying the site.
export function useSanityQuery(query, initial, params) {
  const [data, setData] = useState(initial);
  // Stringified so a new params object with the same values doesn't refetch
  const paramsKey = JSON.stringify(params ?? {});

  useEffect(() => {
    let active = true;
    client
      .fetch(query, JSON.parse(paramsKey))
      // A missing document comes back as null; keep what we have in that case
      .then((latest) => active && latest != null && setData(latest))
      // Keep the build-time content if the request fails (offline, CORS origin not added yet)
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [query, paramsKey]);

  return data;
}

// Dates are always shown in Pittsburgh time so the server and the browser agree
const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});
const timeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  hour: "numeric",
  minute: "2-digit",
});

export const formatDate = (iso) => dateFormat.format(new Date(iso));
export const formatTime = (iso) => timeFormat.format(new Date(iso));
