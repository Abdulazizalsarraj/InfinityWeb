import React from 'react';
import './BlogSection.css';
import Image1 from "../../assets/images/work-02.jpg";
import Image2 from "../../assets/images/work-03.jpg";
import Image3 from "../../assets/images/work-04.jpg";

function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-header">
        <h2 className="blog-title">Latest Blog Posts</h2>
        <p className="blog-subtitle">Explore our insights, updates, and tips to stay ahead.</p>
      </div>
      <div className="blog-container">
        <div className="blog-post">
          <img src={Image1} alt="Blog Post 1" className="blog-image" />
          <h4 className="blog-post-title">Blog Post 1</h4>
          <p className="blog-post-excerpt">Discover the latest trends in the industry and how they can benefit your business.</p>
          <a href="#" className="blog-read-more">Read More</a>
        </div>
        <div className="blog-post">
          <img src={Image2} alt="Blog Post 2" className="blog-image" />
          <h4 className="blog-post-title">Blog Post 2</h4>
          <p className="blog-post-excerpt">Learn about the strategies we use to drive success for our clients.</p>
          <a href="#" className="blog-read-more">Read More</a>
        </div>
        <div className="blog-post">
          <img src={Image3} alt="Blog Post 3" className="blog-image" />
          <h4 className="blog-post-title">Blog Post 3</h4>
          <p className="blog-post-excerpt">Get insights into the future of the market and what to expect.</p>
          <a href="#" className="blog-read-more">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
