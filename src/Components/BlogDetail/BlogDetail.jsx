import React from 'react'
import BlogDetailsLeft from './BlogDetailsLeft/BlogDetailsLeft'
import BlogDetailsRight from './BlogDetailsRight/BlogDetailsRight'
function BlogDetails() {
    return (
        <React.Fragment>
            <section className='blog_detail_area'>
                <div className="srcn_container">
                    <div className='row'>
                        <div className='col-md-4'>
                            <BlogDetailsLeft/>
                        </div>
                        <div className='col-md-8'>
                          <BlogDetailsRight/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default BlogDetails