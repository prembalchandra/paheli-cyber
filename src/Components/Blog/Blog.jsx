import React from 'react'
import './Blog.css'
import BlogImg from '../../assets/images/blogimg.jpg';
const blogData = [
    {
        id: 1,
        image: BlogImg,
        title: 'Securing the Future: How AI Redefines Customer Workload Protection.',
        date: 'November 6, 2024',
        author: 'Admin',
        link: '/BlogDetails',
    },
    {
        id: 2,
        image: BlogImg,
        title: 'Understanding Machine Learning Algorithms for Beginners.',
        date: 'October 22, 2024',
        author: 'Admin',
        link: '/BlogDetails',
    },
    {
        id: 3,
        image: BlogImg,
        title: '10 Tips for Improving Cybersecurity in the Modern Era.',
        date: 'September 10, 2024',
        author: 'Admin',
        link: '/BlogDetails',
    },
   
]
function Blog() {
    return (
        <React.Fragment>
            <section className="blog-listing-area">
                <div className="srcn_container">
                    <div className='row text-center justify-content-center'>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                            <div className='common_heading'>
                                <h2>Latest Blog & Articles</h2>
                                <p>If you can start a blog in a niche that you're obsessively passionate about, one that isn't too saturated, where you can build a decent audience</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blogData.map((blog) => (
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
                                            Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Blog