import React from 'react'
import { Abouttitle } from '../components/title/Title'
import "../styles/About.css"

function About() {
  return (
    <div className="about-part">
      <Abouttitle>About us</Abouttitle>
      <p>Combination of Apple, Business and Wall Street news.</p>
    </div>
  )
}

export default About