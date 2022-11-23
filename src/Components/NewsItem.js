import React from 'react';

const NewsItem = (props) => { 
    //    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;  //(IN CLASS) This is how we declare the props in the class component.
    let {title, description, imageUrl, newsUrl, author, date, source} = props; 
        return (
            <div className='my-3'>
                <div className="card" style={{width : '20rem'}}>
                <span className='position-absolute translate-middle top-0 badge bg-danger rounded-pill' style={{left: '90%', zIndex: '1'}}>{source}</span>
                    <img src={!imageUrl?'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/81543188/image_81543188.jpg?io=getty-c-w750':imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                    </div>
            </div>
        )
}

export default NewsItem