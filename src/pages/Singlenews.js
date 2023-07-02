import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SingleNewsTeamplayed from '../teamplayed/SingleNewsTeamplayed'

function Singlenews() {
    const [news, setNews] = useState([])
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19e323880d89405bb979d7e54e319cc8'
 
 useEffect(() => {
   fetch(url)
     .then(response => response.json())
     .then(json => setNews(json))
 },[url])
 
 const result = news.articles
    const {title} = useParams()


const onenews = result?.filter((element) => element.title == title )

const newsresult = onenews?.map((element, i) => {
    return <SingleNewsTeamplayed key={i} title={element.title} urlToImage={element.urlToImage} content={element.content} author={element.author} description={element.description} publishedAt={element.publishedAt}  />
})


  return (
    <div className="single-news">
        {newsresult}
    </div>
  )
}

export default Singlenews