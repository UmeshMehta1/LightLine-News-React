import React from 'react';
import './style/Cards.css';
import image from '../assets/images/news.png';

function News({ article, isLoading, searchQuery  }) {
  // Filter articles based on search query
  // const articles = articles.filter(article => {
  //   const title = article.title.toLowerCase();
  //   const description = article.description.toLowerCase();
  //   const query = searchQuery.toLowerCase();
  //   return title.includes(query) || description.includes(query);
  // });

  return (
    <div className='main-card'>
      {isLoading ? <h1>Loading.....</h1> : searchQuery.length > 0 ? (
        searchQuery.map((ar, index) => (
          <div className="card col" key={index}>
            <img src={ar.urlToImage ? ar.urlToImage : image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ar.title ? ar.title.slice(0, 50) : "ABP News"}</h5>
              <p className="card-text">{ar.description ? ar.description.slice(0, 70) : "ABP News is great"}</p>
              <a href={ar.url} target='_blank' rel="noreferrer" className="btn btn-primary">See More</a>
            </div>
          </div>
        ))
      ) : (
        <h3>No articles found</h3>
      )}
    </div>
  );
}

export default News;
