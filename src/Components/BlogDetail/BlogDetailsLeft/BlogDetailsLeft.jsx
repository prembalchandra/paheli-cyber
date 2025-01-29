import React, { useState } from "react";
import './BlogDetailsLeft.css'
import BlogImg from '../../../assets/images/blogimg.jpg';

const blogPosts = [
    { date: 'November 6, 2024', title: 'Navigating the Impact of Blockchain Tech...', imgSrc: BlogImg },
    { date: 'November 6, 2024', title: 'Understanding Application Security...', imgSrc: BlogImg },
    { date: 'November 6, 2024', title: 'Cloud-Native Security Essentials...', imgSrc: BlogImg },
];

const categories = [
    "Application Security",
    "Infrastructure Security",
    "Cloud-Native Security",
    "Network Security",
    "Security Consulting",
    "Security Training and Awareness"
];

function BlogPost({ date, title, imgSrc }) {

    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle the search (e.g., perform a search or redirect to search results page)
      console.log("Search term:", query);
    };
    return (
        <li className='blog_post-inner-col'>
            <div className='blog_img'>
                <a href="#">
                    <img src={imgSrc} alt={title} />
                </a>
            </div>
            <div className='blog_post-content'>
                <div className="blog-meta">
                    <span className="meta-item">
                        <i className="fa fa-calendar"></i> <span>{date}</span>
                    </span>
                </div>
                <h4>{title}</h4>
            </div>
        </li>
    );
}

function BlogDetailsLeft() {
    return (
        <React.Fragment>
            <div className='blog-details-left-sidebar'>
                <div className='blog_single-pages'>
                    <h3>Search Your Blog & Articles</h3>
                    <div className='blog_search-pages'>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="login_form-control " placeholder="Searching..." />
                                <button type="submit">
                                    <span className="fa fa-search" aria-hidden="true"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Latest Posts Section */}
                <div className='blog_single-pages'>
                    <h3>Latest Posts Blog & Articles</h3>
                    <div className='blog_post-pages'>
                        <ul>
                            {blogPosts.map((post, index) => (
                                <BlogPost
                                    key={index}
                                    date={post.date}
                                    title={post.title}
                                    imgSrc={post.imgSrc}  
                                />
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Categories Section */}
                <div className='blog_single-pages'>
                    <h3>Categories</h3>
                    <div className='blog_search-pages'>
                        <ul>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <a href="#">{category}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BlogDetailsLeft;
