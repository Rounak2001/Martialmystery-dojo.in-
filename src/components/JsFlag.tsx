"use client";

import { useEffect } from "react";

/**
 * Marks <html> as JS-capable so CSS can gate scroll-reveal animations behind
 * it. Without this, .reveal content stays fully visible — the safe default
 * for no-JS visitors, slow connections, and ad-preview crawlers that render
 * once without scrolling.
 */
export default function JsFlag() {
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);
  return null;
}
