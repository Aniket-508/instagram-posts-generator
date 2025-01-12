import { TatvaIndia } from "@/lib/templates/tatva-india"

export const Template = ({ template }: { template: TatvaIndia }) => (
  <div
    style={{
      width: template.canvas.width,
      height: template.canvas.height,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        inset: 0,
        backgroundImage: `url('${template.background.url}')`,
      }}
    ></div>

    {template.background.carousel.position === "none" && (
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          color: template.background.carousel.color,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </div>
    )}

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {template.params.logo.url && (
        <img
          style={{
            width: "6rem",
            height: "6rem",
          }}
          src={template.params.logo.url}
        />
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        {template.params.title.text && (
          <div
            style={{
              fontFamily: template.params.title.fontFamily,
              fontWeight: template.params.title.fontWeight,
              fontSize: `${template.params.title.fontSize}px`,
              color: template.params.title.color,
              letterSpacing: "-0.025em",
            }}
          >
            {template.params.title.text}
          </div>
        )}

        {template.params.description.text && (
          <div
            style={{
              fontFamily: template.params.description.fontFamily,
              fontWeight: template.params.description.fontWeight,
              fontSize: `${template.params.description.fontSize}px`,
              color: template.params.description.color,
            }}
          >
            {template.params.description.text}
          </div>
        )}
      </div>
    </div>
  </div>
)
