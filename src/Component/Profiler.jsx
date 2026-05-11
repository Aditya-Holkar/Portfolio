import { Profiler } from "react"

const onRender = (id, phase, actualDuration) => {
  if (actualDuration > 1) {
    console.log(`[Profiler] ${id} [${phase}]: ${actualDuration.toFixed(2)}ms`)
  }
}

export const Profile = ({ id, children }) => (
  <Profiler id={id} onRender={onRender}>
    {children}
  </Profiler>
)
