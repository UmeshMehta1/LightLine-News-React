import React from 'react'
import './style/Cards.css'
import image from '../assets/images/image.png'

function Cards({news}) {
  return (
    <div className='cards'>
        {news.length>0&&news.map((n, index)=>{
        return(
            <div className="news-card" key={index}>
               <img src={n.urlToImage || image} alt="" />
    
      <h2>{n.author || "Ram Ram"}</h2>
      <p>{n.title || "lorem lorem lorem lorem"}</p>
      
      <button >Read More</button>
    </div>
        )
    })}</div>
  )
}

export default Cards