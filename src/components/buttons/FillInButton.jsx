import React from 'react'
import "./FillInButton.css"

function FillInButton() {
  const openPDF = () => {
    window.open('/assets/URC_Rule_Book.pdf', '_blank');
  };

  return (
    <button className="button-64" role="button" onClick={openPDF}><span className="text">Rule Book</span></button>
  )
}

export default FillInButton