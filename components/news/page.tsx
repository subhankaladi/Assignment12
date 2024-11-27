// secondpage/Sp.tsx
'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';
import Image from 'next/image';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const Page: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=Generative%20AI&apiKey=f02ab78ce0284cea93ee8a265203609d`
        );
        
        console.log(response.data); // Log the entire response

        // Limit to only 9 articles
        if (response.data.articles && response.data.articles.length > 0) {
          const generativeAIArticles = response.data.articles.filter((article: Article) => 
            article.title.toLowerCase().includes("generative ai") || 
            article.description.toLowerCase().includes("generative ai")
          );
          
          setArticles(generativeAIArticles.slice(0, 20)); 
        } else {
          setError("No articles found.");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-section">
      <h2 className='LGA'>Latest Generative AI News</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              {article.urlToImage && <Image src={article.urlToImage} alt="News thumbnail" />}
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
