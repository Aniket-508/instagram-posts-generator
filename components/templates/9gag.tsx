import { PositionOptions } from "@/types"

import { GAG } from "@/lib/templates/9gag"

export const Template = ({ template }: { template: GAG }) => {
  const { title, background, position } = template.params

  return (
    <div
      style={{
        width: template.canvas.width,
        height: template.canvas.height,
        display: "flex",
        flexDirection:
          position === PositionOptions.TOP ? "column" : "column-reverse",
        backgroundColor: title.bgColor,
      }}
    >
      {title.text && (
        <div
          style={{
            fontFamily: title.fontFamily,
            fontWeight: title.fontWeight,
            fontSize: `${title.fontSize}px`,
            color: title.color,
            letterSpacing: "-0.025em",
            display: "flex",
            alignItems: "center",
            justifyContent: title.alignment,
            padding: "3rem",
          }}
        >
          {title.text}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <img
          src={background.url}
          alt={title.text}
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  )
}
