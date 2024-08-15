import React, { useState } from 'react'
import "./GlitchyButton.css"

function GlitchyButton({handleOpen}) {
  return (
      <button onClick={handleOpen} className="button-49" role="button">Register</button>
  )
}

export default GlitchyButton