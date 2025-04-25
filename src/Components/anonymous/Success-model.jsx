// "use client"
import "./anonymous.css"
import { useState } from "react"
import SuccessModal from "./SuccessModal"
import React from "react"

export default function Anonymous() {
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate successful submission
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="anonymous-dashboard">
      {/* ... header and sections ... */}

      <form className="report-form" onSubmit={handleSubmit}>
        {/* ... form groups ... */}
        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </form>

      {showModal && <SuccessModal onClose={closeModal} />}

      <footer className="footer">
        {/* ... footer content ... */}
      </footer>
    </div>
  )
}
