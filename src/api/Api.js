import React, { createContext, useEffect, useState } from 'react'
import { GET_APPLE_URL, GET_WSJ_URL, GET_BUSINESS_URL } from './Apiurl'


export const Newscontext = createContext()

function Api(props) {
  const [news, setNews] = useState([])
  const [changenews, setChangenews] = useState(GET_BUSINESS_URL)

  function apple() {
    setChangenews(GET_APPLE_URL)
  }
  function business() {
    setChangenews(GET_BUSINESS_URL)
  }
  function wsj() {
    setChangenews(GET_WSJ_URL)
  }

  useEffect(() => {
    fetch(changenews)
      .then(response => response.json())
      .then(json => setNews(json))
  }, [changenews])

  const alldata = { apple, business, wsj, news }

  return (
    <div>
      <Newscontext.Provider value={alldata}>
        {props.children}
      </Newscontext.Provider>
    </div>
  )
}

export default Api