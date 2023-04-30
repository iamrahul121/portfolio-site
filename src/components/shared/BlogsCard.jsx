import React from 'react'


const BlogsCard = ({image, date, author, title, para}) => {
  return (
    <div className='blogs'>
        <div className="blog-col">
            <img src={image} alt="ima" />
            <div className="author">
                <p>{author}</p>
                <p>{date}</p>
            </div>
            <h3>{title}</h3>
            <p>{para}</p>
            <div className="blog-btn">Read More</div>
        </div>
    </div>
  )
}

export default BlogsCard