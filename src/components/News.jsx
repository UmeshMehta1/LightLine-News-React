import React from 'react'
import './style/Cards.css'
import image from '../assets/images/news.png'

function News({ article, isLoading }) {
  console.log(article)
  return (
    <div className='main-card'>
      {isLoading?<h1>Loading.....</h1>:article.length > 0 && article.map((n, index) => {
        return (

          <div className="card col" key={index}>
            <img src={n.urlToImage?n.urlToImage:image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{n.title?n.title.slice(0, 50):"ABP News"}</h5>
              <p className="card-text">{n.description?n.description.slice(0, 70):"ABP News is great"}</p>
              <a href={n.url} target='_blank' className="btn btn-primary">See More</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default News

