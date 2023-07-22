import React from 'react'
import downloadIcon from '../../icons/icon-download.png'

function headerContent () {
  return (
    <div className="header-content-wrapper">
      <div className="header-content">
        <span className="header-content-item">Home</span>
        <span className="header-content-item">About</span>
        <span className="header-content-item">Resume</span>
        <span className="header-content-item">Portfolio</span>
        <span className="header-content-item">Contact me</span>
        <span className="header-content-item">Blog</span>
      </div>
      <button className="header-content-button">
        <span className="header-content-item">Download CV</span>
        <img className="download-file" src={downloadIcon} alt="" />
      </button>
    </div>
  )
}

export default headerContent;