import React from 'react'
import { Link } from 'react-router-dom'
import { Maintitle } from '../components/title/Title'
import "../styles/Teamplayednews.css"

function Teamplayednews({ description, urlToImage, title, publishedAt }) {
 

  return (
   
    <div className="article">
      <div>
        <img src={urlToImage} />
      </div>
      <div className="content">
        <Maintitle>{title}</Maintitle>
        <p>{description}</p>
        <div className="pos-right">
          <div>
        <p>{publishedAt}</p>
        </div>
        <div>
          <Link to={`/details/${title}`}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Teamplayednews