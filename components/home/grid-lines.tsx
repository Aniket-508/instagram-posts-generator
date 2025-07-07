export default function GridLines() {
  return (
    <div
      className="view-container pointer-events-none absolute inset-0 z-[5] m-auto grid select-none grid-cols-4 mix-blend-lighten"
      aria-hidden="true"
    >
      <div
        className="h-full w-px bg-[linear-gradient(180deg,#232323,#232323_50%,transparent_0,transparent)] [background-size:2px_12px] [grid-column:var(--grid-column)]"
        style={{ "--grid-column": 1 } as React.CSSProperties}
      />
      <div
        className="hidden h-full w-px bg-[linear-gradient(180deg,#232323,#232323_50%,transparent_0,transparent)] [background-size:2px_12px] [grid-column:var(--grid-column)] md:block"
        style={{ "--grid-column": 2 } as React.CSSProperties}
      />
      <div
        className="h-full w-px bg-[linear-gradient(180deg,#232323,#232323_50%,transparent_0,transparent)] [background-size:2px_12px] [grid-column:var(--grid-column)]"
        style={{ "--grid-column": 3 } as React.CSSProperties}
      />
      <div
        className="hidden h-full w-px bg-[linear-gradient(180deg,#232323,#232323_50%,transparent_0,transparent)] [background-size:2px_12px] [grid-column:var(--grid-column)] md:block"
        style={{ "--grid-column": 4 } as React.CSSProperties}
      />
      <div
        className="absolute h-full w-px bg-[linear-gradient(180deg,#232323,#232323_50%,transparent_0,transparent)] [background-size:2px_12px] [grid-column:var(--grid-column)]"
        style={{ "--grid-column": 5 } as React.CSSProperties}
      />
    </div>
  )
}
