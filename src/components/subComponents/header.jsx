import React from 'react'
import headerIcon from '../../images/eagle_icon.jpg';
import HeaderContent from './headerContent';

function Header () {
  return (
    <header className="header-wrapper">
      <div className='thought-wrapper'>
        <img src={headerIcon} className="icon" alt="icon"/>
        <div className='thought-text'>Live your Dreams!!!</div>
      </div>
      <HeaderContent />
    </header>
  )
}

export default Header