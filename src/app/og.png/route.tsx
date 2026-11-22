import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Rendered once at build time to out/og.png: the preview image shown when the
// site is shared on WhatsApp, LinkedIn, X, etc. Referenced from layout.tsx.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f6f4ef",
          color: "#15140f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Same H mark as src/components/logo.tsx */}
          <svg width="64" height="64" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="9" fill="#15140f" />
            <rect x="9" y="8" width="4" height="16" rx="1.2" fill="#f6f4ef" />
            <rect x="19" y="8" width="4" height="16" rx="1.2" fill="#f6f4ef" />
            <rect x="13" y="14" width="6" height="4" fill="#ff5a2c" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2, maxWidth: 980 }}>
            Websites that make your business look as good as it is.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#5d594f" }}>
            {`Design · Build · Launch · Care, based in ${site.location}`}
          </div>
        </div>

        <div style={{ display: "flex", height: 12, borderRadius: 6, overflow: "hidden" }}>
          <div style={{ flex: 3, background: "#ff5a2c" }} />
          <div style={{ flex: 2, background: "#15140f" }} />
          <div style={{ flex: 1, background: "#e2ddd2" }} />
        </div>
      </div>
    ),
    size,
  );
}
