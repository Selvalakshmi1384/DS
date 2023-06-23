import React from 'react';
import './BlogPage.css';
const blogPosts = [
  {
    title: 'Blog Post 1',
    content: 'Content of the first blog post. Share your thoughts, ideas, and experiences related to a specific topic.',
    date: 'June 1, 2023',
    author: 'John Doe',
  },
  {
    title: 'Blog Post 2',
    content: 'Content of the second blog post. Dive deeper into a subject and provide valuable insights or tutorials.',
    date: 'June 5, 2023',
    author: 'Jane Smith',
  },
  {
    title: 'Blog Post 3',
    content: 'Content of the third blog post. Discuss recent trends, news, or industry updates in your field of expertise.',
    date: 'June 10, 2023',
    author: 'Sam Johnson',
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h2>Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="blog-post-details">
              <span>{post.date}</span>
              <span>By {post.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
