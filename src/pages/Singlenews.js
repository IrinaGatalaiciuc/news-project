import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import SingleNewsTeamplayed from '../teamplayed/SingleNewsTeamplayed'
import { Newscontext } from '../api/Api'

function Singlenews() {
  const { news } = useContext(Newscontext)
  const result = news.articles
  const { title } = useParams()
  const onenews = result?.filter((element) => element.title == title)
  const newsresult = onenews?.map((element, i) => {
    return <SingleNewsTeamplayed key={i} title={element.title} urlToImage={element.urlToImage} content={element.content} author={element.author} description={element.description} publishedAt={element.publishedAt} />
  })

  return (
    <div className="single-news">
      {newsresult}
    </div>
  )
}

export default Singlenews