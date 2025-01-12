import React from "react"

import { TatvaIndia } from "@/lib/templates/tatva-india"
import {
  cn,
  getPositionClasses,
  getSocialMediaRotation,
  getVignetteGradient,
} from "@/lib/utils"

export const Template = ({ template }: { template: TatvaIndia }) => {
  const { title, description, highlightedText, logo, position, socialMedia } =
    template.params

  const renderHighlightedTitle = () => {
    if (!highlightedText.text) return title.text
    const parts = title.text.split(highlightedText.text)
    return (
      <div tw="flex flex-wrap justify-center">
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
              <span
                style={{
                  padding: "0 0.5rem",
                  backgroundColor: highlightedText.bgColor,
                  color: highlightedText.color,
                }}
              >
                {highlightedText.text}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  }

  return (
    <div
      style={{
        width: template.canvas.width,
        height: template.canvas.height,
        display: "flex",
        flexDirection: "column",
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

      {template.background.vignette.position !== "none" && (
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            inset: 0,
            background: getVignetteGradient(
              template.background.vignette.position,
              template.background.vignette.color
            ),
          }}
        />
      )}

      {logo.url && (
        <img
          tw={`absolute h-16 w-16 ${getPositionClasses(logo.position)}`}
          src={logo.url}
        />
      )}

      {template.background.carousel.position !== "none" && (
        <div
          tw={`flex absolute h-24 w-24 ${getPositionClasses(
            template.background.carousel.position,
            "sm"
          )}`}
          style={{
            color: template.background.carousel.color,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="96"
            height="96"
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

      {socialMedia.position !== "none" && (
        <span
          style={{
            color: socialMedia.color,
            transform: getSocialMediaRotation(socialMedia.position),
          }}
          tw={cn(
            `absolute text-2xl`,
            socialMedia.position === "top-left" && "-left-2 top-14",
            socialMedia.position === "top-right" && "-right-2 top-14 ",
            socialMedia.position === "bottom-left" && "bottom-14 -left-2",
            socialMedia.position === "bottom-right" && "bottom-14 -right-2"
          )}
        >
          @{socialMedia.text}
        </span>
      )}

      <div
        tw={cn(
          `flex flex-col items-center absolute p-8`,
          position === "top" && "top-0 pt-48",
          position === "bottom" && "bottom-0 pb-48"
        )}
      >
        {title.text && (
          <div
            style={{
              display: "flex",
              fontFamily: title.fontFamily,
              fontWeight: title.fontWeight,
              fontSize: `${title.fontSize}px`,
              color: title.color,
              letterSpacing: "-0.025em",
            }}
          >
            {renderHighlightedTitle()}
          </div>
        )}

        {description.text && (
          <div
            style={{
              fontFamily: description.fontFamily,
              fontWeight: description.fontWeight,
              fontSize: `${description.fontSize}px`,
              color: description.color,
              paddingTop: "1rem",
            }}
          >
            {description.text}
          </div>
        )}
      </div>
    </div>
  )
}
