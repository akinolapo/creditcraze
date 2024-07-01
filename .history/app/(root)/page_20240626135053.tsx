import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user=""
          />
        </header>
      </div>
    </section>
  )
}

export default Home