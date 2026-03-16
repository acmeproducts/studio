import { forwardRef } from "react"

const CanvasArea = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex flex-1 items-center justify-center bg-canvas order-1 md:order-none ${className ?? ''}`}
      {...props}
    >
      {children}
    </div>
  )
)
CanvasArea.displayName = "CanvasArea"

export { CanvasArea }
