import React, { useContext } from 'react';
// import { useEffect, useState } from 'react'
import { ButtonComponent } from '../components/button/Button';
import Teamplayednews from '../teamplayed/Teamplayednews'
import "../styles/Home.css"
import { Newscontext } from '../api/Api';


function Home() {

  const { news, apple, business, wsj } = useContext(Newscontext)

  const result = news.articles

  const results = result?.map((r, i) => {
    return <Teamplayednews key={i} description={r.description} urlToImage={r.urlToImage} title={r.title} publishedAt={r.publishedAt} />
  })

  return (
    <div className="all-articles">
      <div className="change-news">
        <p>Change your news source</p>
        <div className="btn-section">
          <ButtonComponent onClick={business}>Business News</ButtonComponent>
          <ButtonComponent onClick={apple}>Apple News</ButtonComponent>
          <ButtonComponent onClick={wsj}>Wall Street News</ButtonComponent>
        </div>
      </div>
      {results}
    </div>
  )
}

export default Home