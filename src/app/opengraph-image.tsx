import { ImageResponse } from "next/og";

export const alt = "Atlas Software - sites, sistemas e automações";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1115",
          color: "#F5F7FA",
          padding: 72,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 600 }}>Atlas Software</div>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(245,247,250,0.22)",
              borderRadius: 999,
              padding: "12px 20px",
              fontSize: 22,
              color: "rgba(245,247,250,0.72)",
            }}
          >
            atlassoftware.org
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 880 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: -2, fontWeight: 600 }}>
            Sites, sistemas e automações para operar melhor.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(245,247,250,0.68)" }}>
            Landing pages, CRMs, reservas online, painéis e integrações sob medida.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#0F1115" }}>
          {["Projetos no ar", "Painel admin", "Banco de dados", "WhatsApp"].map((item) => (
            <div
              key={item}
              style={{
                background: "#F5F7FA",
                borderRadius: 999,
                padding: "14px 22px",
                display: "flex",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
