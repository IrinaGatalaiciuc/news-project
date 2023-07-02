import React from 'react';
import { useEffect, useState } from 'react'
import { ButtonComponent } from '../components/button/Button';
import Teamplayednews from '../teamplayed/Teamplayednews'
import "../styles/Home.css"

const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19e323880d89405bb979d7e54e319cc8'
const appleUrl = 'https://newsapi.org/v2/everything?q=apple&from=2023-06-11&to=2023-06-11&sortBy=popularity&apiKey=19e323880d89405bb979d7e54e319cc8'
const wallUrl = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=19e323880d89405bb979d7e54e319cc8'

function Home() {

  const [news, setNews] = useState([])


  const [changenews, setChangenews] = useState(url)
  console.log(changenews)
  function apple() {
    setChangenews(appleUrl)
  }


  useEffect(() => {
    fetch(changenews)
      .then(response => response.json())
      .then(json => setNews(json))
  }, [changenews])

  const result = news.articles

  console.log(result)

  const results = result?.map((r, i) => {
    return <Teamplayednews key={i} description={r.description} urlToImage={r.urlToImage} title={r.title} publishedAt={r.publishedAt} />
  })

  return (
    <div className="all-articles">
      <div className="change-news">
        <p>Change your news source</p>
        <div className="btn-section">
          <ButtonComponent onClick={() => setChangenews(url)}>Business News</ButtonComponent>
          <ButtonComponent onClick={apple}>Apple News</ButtonComponent>
          <ButtonComponent onClick={() => setChangenews(wallUrl)}>Wall Street News</ButtonComponent>
        </div>
      </div>
      {results}
    </div>
  )
}

export default Home