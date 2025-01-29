import React, { useState } from 'react';
import blogData from './blogData';
import './Blog.css';

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Number of blogs per page

  // Calculate indexes for slicing
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="blog-listing-area">
      <div className="srcn_container">
        <div className="row text-center justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="common_heading">
              <h2>Latest Blog & Articles</h2>
              <p>If you can start a blog in a niche that you're obsessively passionate about, one that isn't too saturated, where you can build a decent audience.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-card">
                <div className="blog-img">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="meta-item">
                      <i className="fa fa-user"></i> {blog.author}
                    </span>
                    <span className="meta-item">
                      <i className="fa fa-calendar"></i> {blog.date}
                    </span>
                  </div>
                  <h4 className="blog-title">{blog.title}</h4>
                  <a className="read-more" href={blog.link}>
                    Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Section */}
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1} className='pagination_lift'>
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button               key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`pagination-button ${currentPage === index + 1 ? 'active pageination' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className='pagination_right pagination_lift'>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
