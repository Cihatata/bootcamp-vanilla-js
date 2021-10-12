import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <section class="section">
      <div class="container">
        {children}
      </div>
    </section>
  )
}

export default MainLayout
