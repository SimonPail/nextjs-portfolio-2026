import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const isFr = lang === "fr";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#f9f9f9",
          position: "relative",
        }}
      >
        {/* Yellow accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            backgroundColor: "#FFD644",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#4CAF50",
              marginRight: "10px",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "#725c00",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            {isFr
              ? "Disponible pour de nouvelles opportunit\u00e9s"
              : "Available for new opportunities"}
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#1a1c1c",
            lineHeight: 0.95,
            marginBottom: "24px",
            letterSpacing: "-0.03em",
          }}
        >
          Simon Paillassa
        </div>

        {/* Title + subtitle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#5f5e5e",
            }}
          >
            {isFr ? "D\u00e9veloppeur Full-stack" : "Full-stack Developer"}
          </span>
          <span
            style={{
              fontSize: "28px",
              color: "#d0c6ad",
              opacity: 0.5,
            }}
          >
            |
          </span>
          <span
            style={{
              fontSize: "24px",
              color: "#4d4634",
              fontStyle: "italic",
            }}
          >
            {isFr ? "7 ans d\u2019exp\u00e9rience" : "7 years of experience"}
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            display: "flex",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#7f7661",
            }}
          >
            portfolio.simbl.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
