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

  const manropeBold = await fetch(
    "https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggqxSuXd.woff2"
  ).then((res) => res.arrayBuffer());

  const interRegular = await fetch(
    "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
  ).then((res) => res.arrayBuffer());

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
              fontFamily: "Inter",
              fontSize: "16px",
              color: "#725c00",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 400,
            }}
          >
            {isFr
              ? "Disponible pour de nouvelles opportunit\u00e9s"
              : "Available for new opportunities"}
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "Manrope",
            fontSize: "72px",
            fontWeight: 800,
            color: "#1a1c1c",
            lineHeight: 0.95,
            margin: "0 0 24px 0",
            letterSpacing: "-0.03em",
          }}
        >
          Simon Paillassa
        </h1>

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
              fontFamily: "Manrope",
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
              fontFamily: "Inter",
              fontSize: "24px",
              fontWeight: 400,
              color: "#4d4634",
              fontStyle: "italic",
            }}
          >
            {isFr
              ? "7 ans d\u2019exp\u00e9rience"
              : "7 years of experience"}
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
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
      fonts: [
        {
          name: "Manrope",
          data: manropeBold,
          style: "normal",
          weight: 800,
        },
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
