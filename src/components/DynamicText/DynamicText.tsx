import { forwardRef, useImperativeHandle, useState } from "react"
import "../DynamicText/DynamicText.css"

export const DynamicText = forwardRef((_, ref) => {
  const [state, setState] = useState("This is a placeholder Text!")

  const updateState = (newState: string) => {
    setState(newState)
  }

  useImperativeHandle(ref, () => ({
    updateState,
  }))

  return (
    <p id="text">{state}</p>
  )
})