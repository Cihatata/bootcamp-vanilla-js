import React from 'react'

const Header = ({ search }) => {
  return (
    <header id="header" class="header">
      <span class="logo" ></span>
      <input type="text" placeholder={search} value={search} class="search" />
      <button class="basket-btn">
        Sepetim
      </button>
    </header>
  )
}

export default Header;
