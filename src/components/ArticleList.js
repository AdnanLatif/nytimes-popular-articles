import React, { useState, useEffect } from 'react';
import DetailCard from './DetailCard'; // Ensure the path is correct

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_NYT_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
      );
      const data = await response.json();
      setArticles(data.results);
    };
    fetchArticles();
  }, [apiKey]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">NY Times Most Popular Articles</h1>
      <div className="flex flex-wrap justify-center">
        {articles.map((article, index) => (
          <div key={article.id} className="p-4">
            <DetailCard
              title={article.title}
              subtitle={article.byline}
              image={article.media[0]?.['media-metadata'][2]?.url} // Adjust based on your API response structure
              description={article.abstract}
              url={article.url} // Pass the full article URL as prop
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
