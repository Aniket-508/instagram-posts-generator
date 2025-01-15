import { CornerPositionOptions, PositionOptions } from "@/types"

import { Pubity } from "@/lib/templates/pubity"
import { getPositionClasses } from "@/lib/utils"

export const Template = ({ template }: { template: Pubity }) => {
  const { title, logo, background } = template.params

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
          backgroundImage: `url('${background.url}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      ></div>

      {background.carousel.position !== CornerPositionOptions.NONE && (
        <div
          tw={`flex items-center absolute ${getPositionClasses(background.carousel.position)}`}
          style={{
            color: background.carousel.color,
          }}
        >
          <svg
            fill="currentColor"
            height="60px"
            width="60px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512.002 512.002"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M390.989,256.001l118.135-104.542c2.654-2.347,3.575-6.101,2.33-9.412c-1.263-3.319-4.437-5.513-7.987-5.513H127.172 c-2.116,0-4.156,0.785-5.726,2.202L4.574,244.464c-0.384,0.35-0.725,0.725-1.041,1.135c-4.71,6.127-4.71,14.677,0,20.804 c0.316,0.41,0.657,0.785,1.041,1.135l116.873,105.728c1.57,1.417,3.61,2.202,5.726,2.202h376.294c3.55,0,6.724-2.193,7.987-5.513 c1.246-3.311,0.324-7.066-2.33-9.412L390.989,256.001z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <span tw="text-4xl ml-2">SWIPE</span>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection:
            logo.position === PositionOptions.TOP ? "column" : "column-reverse",
          marginTop: "auto",
          background: `linear-gradient(to top, rgba(5, 5, 5, 1) 85%, transparent 100%)`,
          padding: "2rem 3rem",
          gap: "1.5rem",
        }}
      >
        {logo.url && (
          //   <div tw="relative flex w-full">
          //     <div tw="relative flex h-[2px] w-full overflow-hidden">
          //       <div tw="absolute left-0 top-0 flex h-full w-full bg-white" />
          //     </div>
          <img
            src={logo.url}
            width={logo.width}
            height={logo.height}
            style={{ margin: "0 auto" }}
            //   tw="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          //   </div>
        )}

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
              justifyContent: "center",
              textTransform: "uppercase",
            }}
          >
            {title.text}
          </div>
        )}
      </div>
    </div>
  )
}
