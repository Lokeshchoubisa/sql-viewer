import React from 'react'
import "./home.css"
function Home() {
  return (
    <div>
         <div className="left">
        <h2>Get <span className="highlight">insights</span> that help your business grow.</h2>
        <p className="para">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
        <div className="stats">
          <div><p className="number">10k+</p><p className="para stat-text">QUERIES</p></div>
          <div><p className="number">314</p><p className="para stat-text">Table</p></div>
          <div><p className="number">1M+</p><p className="para stat-text">Users</p></div>
        </div>
      </div>
    </div>
  )
}

export default Home