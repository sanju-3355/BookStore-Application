import React from 'react'
import './index.css'

const ErrorMessage = () => {
    return (
      <div className="books-failure-container">
        <img
          className="books-failure-image"
          src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647250727/Screenshot_30_uavmge.png"
          alt="failure view"
        />
        <p className="failure-heading">
          Something went wrong. Please try Again.
        </p>
      </div>
    )
}

export default ErrorMessage