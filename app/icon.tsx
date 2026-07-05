import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Miracoi favicon — ティール #2AA198 */
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
          background: "#2AA198",
          borderRadius: 8,
          color: "white",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
