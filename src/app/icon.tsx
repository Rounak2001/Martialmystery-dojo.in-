import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e11d2e",
          borderRadius: 12,
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 40,
          color: "#f5f3ee",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
