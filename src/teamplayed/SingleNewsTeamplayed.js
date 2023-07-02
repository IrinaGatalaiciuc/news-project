import React from 'react'
import "../styles/SingleNews.css"


function SingleNewsTeamplayed({ title, urlToImage, content, author, publishedAt, description }) {

  const showimg = (urlToImage == null)? "elementnone" : ""
  

  return (
    <div className="single-news">
      <div className={showimg}>
        <img src={urlToImage} />
      </div>
      <div className="news-content">
        <h3>{title}</h3>
        <p>{publishedAt}</p>
        <h5>{description}</h5>
        <p>{content}</p>
        </div>
        <p>by {author}</p>
      
    </div>
  )
}

export default SingleNewsTeamplayed